export type User = {
  id: number;
  fullName: string;
  emailAddress: string;
  address: string;
}

export type Post = {
  id: number;
  title: string;
  body: string;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
}