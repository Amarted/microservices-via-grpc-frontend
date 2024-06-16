export interface HttpSuccessfulResponse<ResponseType> {
  status: 'successful';
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  response: ResponseType extends void ? never : ResponseType;
}

export interface HttpFailedResponse {
  status: 'failed';
  errorMessage: string;
}

export type HttpResponse<ResponseType> = HttpSuccessfulResponse<ResponseType> | HttpFailedResponse;
