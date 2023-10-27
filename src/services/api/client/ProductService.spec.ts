import { ProductService } from './ProductService.ts';
import { Client } from './Client.ts';

const mockedAxiosClient = {
  get: jest.fn()
};
const client = new Client('', '');
Object.defineProperty(client, 'instance', {
  value: mockedAxiosClient
});

describe('Services: Api: ProductService', () => {
  const service = new ProductService(client);

  describe('searchProducts()', () => {
    const exampleSearchResponse = [
      { a: 1, date_release: '1993-07-28T19:39:07.000Z', date_revision: '1993-07-28T19:39:07.000Z' },
      { a: 1, date_release: '1993-07-28T19:39:07.000Z', date_revision: '1993-07-28T19:39:07.000Z' }
    ];

    beforeAll(() => {
      mockedAxiosClient.get.mockResolvedValue({ data: exampleSearchResponse });
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
  });
});
