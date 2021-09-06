import { ProductModel } from "../../products/models/product.model";

export interface CartItemModel extends ProductModel {
  readonly count: number;
}