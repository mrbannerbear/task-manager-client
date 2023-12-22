import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";

const useTasks = () => {

  const {user} = useContext(AuthProvider)

  const {
    isLoading,
    error,
    data: Tasks = [],
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await axios.get(`https://project-pilot-server.vercel.app/tasks`);
      return response.data;
    },
  });

  const tasks = Tasks.filter(each => each?.email == user?.email)

  return {isLoading, error, tasks, refetch};
};

export default useTasks;
