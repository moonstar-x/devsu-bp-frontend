import { AxiosError } from 'axios';

export class RequestError extends Error {
  private readonly _originalError: AxiosError;

  public constructor(originalError: AxiosError, message: string) {
    super(message);

    this._originalError = originalError;
  }

  public get response(): object | null {
    return this._originalError.response ?? null;
  }

  public static fromRequest(error: unknown): RequestError {
    const axiosError = error as AxiosError;
    const message = axiosError.response?.data as string ?? axiosError.message ?? 'Unknown Error';

    return new RequestError(axiosError, message);
  }
}
