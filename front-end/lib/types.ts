export type TLink = {
  id: number;
  title: string;
  path: string;
  hasChildren: boolean;
  children: TChild[];
};
export type TChild = {
  id: number;
  title: string;
  path: string;
};
