export class JsonResponse {
  Code: number;
  Message: string;
  Data: any;
  Error: any;

  constructor(code: number, message: string, data: any, error: any) {
    this.Code = code;
    this.Message = message;
    this.Data = data;
    this.Error = error;
  }
}