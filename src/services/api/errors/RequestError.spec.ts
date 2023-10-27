import { AxiosError } from 'axios';
import { RequestError } from './RequestError.ts';

describe('Services: Api: RequestError', () => {
  describe('fromRequest()', () => {
    it('should create RequestError from response message if exists.', () => {
      const axiosError = { response: { data: 'Some Error' } } as AxiosError;
      const requestError = RequestError.fromRequest(axiosError);

      expect(requestError.message).toBe('Some Error');
    });

    it('should create RequestError from error message if no response message exists.', () => {
      const axiosError = { message: 'Another Error' } as AxiosError;
      const requestError = RequestError.fromRequest(axiosError);

      expect(requestError.message).toBe('Another Error');
    });

    it('should create RequestError with default message if no message exists.', () => {
      const axiosError = { } as AxiosError;
      const requestError = RequestError.fromRequest(axiosError);

      expect(requestError.message).toBe('Unknown Error');
    });
  });
});
