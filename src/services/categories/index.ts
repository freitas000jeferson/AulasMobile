import { useQuery } from "@tanstack/react-query";
import { HttpClient } from "../../core/HttpClient";
import { Category } from "../../core/domain/category";

const client = new HttpClient({ auth: true }, { baseURL: "/category" });

export const GetCategoryService = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await client.get<Category[]>("", {});

      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
      console.log("Error", response.status);
      return undefined;
    },
  });
};
