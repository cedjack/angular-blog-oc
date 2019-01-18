export class Post {
  constructor(
    public index: number,
    public title: string,
    public content: string,
    public loveIts: number = 0,
    public created_at: Date = new Date
  ) {
  }

}
