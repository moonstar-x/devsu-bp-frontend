import { Client, QueryRequest, MutationRequest } from '$services/api/client/Client.ts';
import {
  RawProductModel,
  ProductModel,
  ProductCreateFormBody,
  ProductEditFormBody,
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

  private async doUpdateProduct(data: ProductEditFormBody): Promise<ProductModel> {
    try {
      const response = await this.client.instance.put<RawProductModel | ErrorResponse>('/products', data);

      if (response.status === 206) {
        throw new Error(response.data.description);
      }

      return rawProductToModel(response.data as RawProductModel);
    } catch (error) {
      throw RequestError.fromRequest(error);
    }
  }

  public updateProduct(): MutationRequest<ProductEditFormBody, ProductModel> {
    return {
      key: ['products'],
      fn: (data: ProductEditFormBody) => this.doUpdateProduct(data),
      onSuccess: async (queryClient) => {
        await queryClient.invalidateQueries({ queryKey: ['products'] });
      }
    };
  }

  private async doDeleteProduct(id: string): Promise<void> {
    try {
      await this.client.instance.delete<string>('/products', {
        params: {
          id
        }
      });
    } catch (error) {
      throw RequestError.fromRequest(error);
    }
  }

  public deleteProduct(id: string): MutationRequest<void, void> {
    return {
      key: ['products'],
      fn: () => this.doDeleteProduct(id),
      onSuccess: async (queryClient) => {
        await queryClient.invalidateQueries({ queryKey: ['products'] });
      }
    };
  }
}
