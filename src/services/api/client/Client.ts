import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { QueryClient } from '@tanstack/react-query';
import { ProductService } from '$services/api/client/ProductService.ts';

export type QueryRequest<T = any> = {
  key: (string | number)[]
  fn: () => Promise<T>
};

export type MutationRequest<T = any, U = any> = {
  key: (string | number)[]
  fn: (data: T) => Promise<U>
  onSuccess?: (queryClient: QueryClient) => Promise<void> | void
};

export class Client {
  private readonly _instance: AxiosInstance;

  private readonly headers: Record<string, string>;
  private readonly baseUrl: string;

  // Sub-services
  private readonly _products: ProductService;

  public constructor(baseUrl: string, accountId: string, config: AxiosRequestConfig = {}) {
    this.headers = {
      authorID: accountId
    };
    this.baseUrl = baseUrl;

    this._instance = axios.create({
      ...config,
      headers: this.headers,
      baseURL: this.baseUrl
    });

    // Sub-services init
    this._products = new ProductService(this);
  }

  get instance(): AxiosInstance {
    return this._instance;
  }

  // Sub-services get
  get products(): ProductService {
    return this._products;
  }
}
