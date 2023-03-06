export class ResultBody<T> {
  code!: number
  message?: string
  item?: T
  items?: Array<T>
  totalCount?: string

  constructor(
    code: number
  ) {
    this.code = code;
  }
}
