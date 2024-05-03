import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {
  const { error, data, isFetching, isLoading, refetch } = useQuery({
    queryKey: ["prodcuts"],
    queryFn: async () => {
      const result = await axios.get("/products.json");
      return result.data;
    },
  });

  return { isLoading, error, data, isFetching, refetch };
};

export default useProducts;
