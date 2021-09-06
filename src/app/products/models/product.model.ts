export enum ProductCategories {
  Green = "green",
  Black = "black",
  White = "white"
}

export type ProductId = string;

export interface ProductModel {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly description?: string;
  readonly category: ProductCategories;
  readonly isAvailable: boolean;
}