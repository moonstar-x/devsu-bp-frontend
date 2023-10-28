import { Client, QueryRequest, MutationRequest } from '$services/api/client/Client.ts';
import {
  RawProductModel,
  ProductModel,
  ProductCreateFormBody,
  rawProductToModel
} from '$services/api/models/product.ts';
import { RequestError } from '$services/api/errors/RequestError.ts';

type ErrorResponse = {
  name: string
  description: string
};

export class ProductService {
  private readonly client: Client;

  public constructor(client: Client) {
    this.client = client;
  }

  private async doSearchProducts(): Promise<ProductModel[]> {
    try {
      const response = await this.client.instance.get<RawProductModel[]>('/products');
      return response.data.map((rawProduct) => rawProductToModel(rawProduct));
    } catch (error) {
      throw RequestError.fromRequest(error);
    }
  }

  public searchProducts(): QueryRequest<ProductModel[]> {
    return {
      key: ['products'],
      fn: () => this.doSearchProducts()
    };
  }

  private async doCreateProduct(data: ProductCreateFormBody): Promise<ProductModel> {
    try {
      const response = await this.client.instance.post<RawProductModel | ErrorResponse>('/products', data);

      if (response.status === 206) {
        throw new Error(response.data.description);
      }

      return rawProductToModel(response.data as RawProductModel);
    } catch (error) {
      throw RequestError.fromRequest(error);
    }
  }

  public createProduct(): MutationRequest<ProductCreateFormBody, ProductModel> {
    return {
      key: ['products'],
      fn: (data: ProductCreateFormBody) => this.doCreateProduct(data),
      onSuccess: async (queryClient) => {
        await queryClient.invalidateQueries({ queryKey: ['products'] });
      }
    };
  }
}
