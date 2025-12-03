export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  imageUrl: string;
  imageHint: string;
  specs: Record<string, string>;
};
