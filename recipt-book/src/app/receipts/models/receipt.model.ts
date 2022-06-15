export class Receipt {
  constructor(
    public id: number | null = null,
    public name: string = '',
    public description: string = '',
    public rating: number = 0,
    public preparationTime: number = 0,
    public bakingTime: number = 0,
    public publishYear: number = 0,
    public imageUrl: string = ''
  ) {
  }
}
