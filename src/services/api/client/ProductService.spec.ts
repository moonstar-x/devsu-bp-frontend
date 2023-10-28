import { ProductService } from './ProductService.ts';
import { Client } from './Client.ts';
import { ProductCreateFormBody, ProductEditFormBody } from '$services/api/models/product.ts';

const mockedAxiosClient = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn()
};
const client = new Client('', '');
Object.defineProperty(client, 'instance', {
  value: mockedAxiosClient
});

describe('Services: Api: ProductService', () => {
  const service = new ProductService(client);

  describe('searchProducts()', () => {
    const exampleResponse = [
      { a: 1, date_release: '1993-07-28T19:39:07.000Z', date_revision: '1993-07-28T19:39:07.000Z' },
      { a: 1, date_release: '1993-07-28T19:39:07.000Z', date_revision: '1993-07-28T19:39:07.000Z' }
    ];

    beforeAll(() => {
      mockedAxiosClient.get.mockResolvedValue({ data: exampleResponse });
    });

    beforeEach(() => {
      mockedAxiosClient.get.mockClear();
    });

    afterAll(() => {
      mockedAxiosClient.get.mockRestore();
    });

    it('should return a query request with the correct key.', () => {
      const { key } = service.searchProducts();
      const expected = ['products'];

      expect(key).toStrictEqual(expected);
    });

    it('should return a query request with the data function.', async () => {
      const { fn } = service.searchProducts();
      const expected = [
        { a: 1, dateRelease: new Date('1993-07-28T19:39:07.000Z'), dateRevision: new Date('1993-07-28T19:39:07.000Z') },
        { a: 1, dateRelease: new Date('1993-07-28T19:39:07.000Z'), dateRevision: new Date('1993-07-28T19:39:07.000Z') }
      ];

      await expect(fn()).resolves.toStrictEqual(expected);
    });

    it('should return a query request with the data function that throws a RequestError.', async () => {
      mockedAxiosClient.get.mockRejectedValueOnce({ response: { data: 'Oops!' } });
      const { fn } = service.searchProducts();

      await expect(fn()).rejects.toMatchObject({ message: 'Oops!' });
    });
  });

  describe('createProduct()', () => {
    const exampleResponse = { a: 1, date_release: '1993-07-28T19:39:07.000Z', date_revision: '1993-07-28T19:39:07.000Z' };
    const postBody = {} as ProductCreateFormBody;

    beforeAll(() => {
      mockedAxiosClient.post.mockResolvedValue({ data: exampleResponse, status: 200 });
    });

    beforeEach(() => {
      mockedAxiosClient.post.mockClear();
    });

    afterAll(() => {
      mockedAxiosClient.post.mockRestore();
    });

    it('should return a mutation request with the correct key.', () => {
      const { key } = service.createProduct();
      const expected = ['products'];

      expect(key).toStrictEqual(expected);
    });

    it('should return a mutation request with the data function.', async () => {
      const { fn } = service.createProduct();
      const expected = { a: 1, dateRelease: new Date('1993-07-28T19:39:07.000Z'), dateRevision: new Date('1993-07-28T19:39:07.000Z') };

      await expect(fn(postBody)).resolves.toStrictEqual(expected);
    });

    it('should return a mutation request with the data function that throws a RequestError.', async () => {
      mockedAxiosClient.post.mockRejectedValueOnce({ response: { data: 'Oops!' } });
      const { fn } = service.createProduct();

      await expect(fn(postBody)).rejects.toMatchObject({ message: 'Oops!' });
    });

    it('should return a mutation request with the data function that throws a RequestError on error response.', async () => {
      mockedAxiosClient.post.mockResolvedValueOnce({ data: { description: 'Oops!' }, status: 206 });
      const { fn } = service.createProduct();

      await expect(fn(postBody)).rejects.toMatchObject({ message: 'Oops!' });
    });
  });

  describe('updateProduct()', () => {
    const exampleResponse = { a: 1, date_release: '1993-07-28T19:39:07.000Z', date_revision: '1993-07-28T19:39:07.000Z' };
    const putBody = {} as ProductEditFormBody;

    beforeAll(() => {
      mockedAxiosClient.put.mockResolvedValue({ data: exampleResponse, status: 200 });
    });

    beforeEach(() => {
      mockedAxiosClient.put.mockClear();
    });

    afterAll(() => {
      mockedAxiosClient.put.mockRestore();
    });

    it('should return a mutation request with the correct key.', () => {
      const { key } = service.updateProduct();
      const expected = ['products'];

      expect(key).toStrictEqual(expected);
    });

    it('should return a mutation request with the data function.', async () => {
      const { fn } = service.updateProduct();
      const expected = { a: 1, dateRelease: new Date('1993-07-28T19:39:07.000Z'), dateRevision: new Date('1993-07-28T19:39:07.000Z') };

      await expect(fn(putBody)).resolves.toStrictEqual(expected);
    });

    it('should return a mutation request with the data function that throws a RequestError.', async () => {
      mockedAxiosClient.put.mockRejectedValueOnce({ response: { data: 'Oops!' } });
      const { fn } = service.updateProduct();

      await expect(fn(putBody)).rejects.toMatchObject({ message: 'Oops!' });
    });

    it('should return a mutation request with the data function that throws a RequestError on error response.', async () => {
      mockedAxiosClient.put.mockResolvedValueOnce({ data: { description: 'Oops!' }, status: 206 });
      const { fn } = service.updateProduct();

      await expect(fn(putBody)).rejects.toMatchObject({ message: 'Oops!' });
    });
  });
});
