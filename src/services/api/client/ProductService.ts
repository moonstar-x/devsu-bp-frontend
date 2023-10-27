import { Client, QueryRequest } from '$services/api/client/Client.ts';
import { RawProductModel, ProductModel } from '$services/api/models/product.ts';

export class ProductService {
  private readonly client: Client;

  public constructor(client: Client) {
    this.client = client;
  }

  private async doSearchProducts(): Promise<ProductModel[]> {
    try {
      const response = await this.client.instance.get<RawProductModel[]>('/products');

      return response.data.map((rawProduct) => {
        const { date_release, date_revision, ...restRawProduct } = rawProduct;

        return {
          ...restRawProduct,
          dateRelease: new Date(date_release),
          dateRevision: new Date(date_revision)
        };
      });
    } catch (error) {
      // TODO: Handle error.
      return [];
    }
  }

  public searchProducts(): QueryRequest<ProductModel[]> {
    return {
      key: ['products'],
      fn: () => this.doSearchProducts()
    };
  }
}
