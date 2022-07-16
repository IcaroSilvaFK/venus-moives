export class HttpError {
  constructor(private status_code: number, private message: string | unknown) {}
}
