import { DeliveryByCep } from "../../core/domain/delivery-by-cep";

export type GetPriceProductByCepProp = {
  cep: string;
  productId: number;
};
export type GetPriceProductByCepResponse = {
  delivery: DeliveryByCep[];
};

export type ProductQueryProp = {
  search?: string;
  size?: number;
  page?: number;
};
