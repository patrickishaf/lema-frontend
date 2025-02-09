export type User = {
  id: number;
  fullName: string;
  emailAddress: string;
  address: string;
}

export type Post = {
  id: number;
  title: string;
  subtitle: string;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
}