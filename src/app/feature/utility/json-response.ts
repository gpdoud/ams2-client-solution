export class JsonResponse {
  code: number;
  message: string;
  data: any;
  error: any;
  formattedMessage: string;

  constructor(code: number, message: string, data: any, error: any) {
    this.code = code;
    this.message = message;
    this.data = data;
    this.error = error;
  }
}