import { useQuery } from "@tanstack/react-query";
import { HttpClient } from "../../core/HttpClient";
import { Pagination } from "../../core/domain/pagination";
import { Product } from "../../core/domain/product";
import { GetPriceProductByCepProp, GetPriceProductByCepResponse, ProductQueryProp } from "./types";

const client = new HttpClient({ auth: true }, { baseURL: "/product" });


export const GetProductsPaginedService = ({ search, size, page }: ProductQueryProp) => {
  return useQuery({
    queryKey: ["product/page", search, size, page],
    refetchInterval: 30 * 60 * 60,
    queryFn: async () => {
      const response = await client.get<Pagination<Product>>("/page", { params: { search, size, page } });

      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
      console.log("Error", response.status);
      return undefined;
    },
  });
};

export const GetProductsByIdService = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    refetchInterval: 30 * 60 * 60,
    queryFn: async () => {
      const response = await client.get<Product>(`/${id}`);

      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
      console.log("Error", response.status);
      return undefined;
    },
  });
};

export const GetPriceProductByCep = ({ productId, cep }: GetPriceProductByCepProp) => {
  return useQuery({
    queryKey: ["price-product-by-cep", productId, cep],
    queryFn: async () => {
      const response = await client.get<GetPriceProductByCepResponse>(`/${productId}/delivery/${cep}`);

      if (response.status >= 200 && response.status < 300) {
        return response.data.delivery;
      }
      console.log("Error", response.status);
      return undefined;
    },
  });
};
