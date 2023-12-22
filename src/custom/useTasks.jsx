import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTasks = () => {

  const {
    isLoading,
    error,
    data: tasks = [],
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3150/tasks`);
      return response.data;
    },
  });

  return {isLoading, error, tasks, refetch};
};

export default useTasks;
