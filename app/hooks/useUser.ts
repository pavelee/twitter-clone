import useSWR from "swr";
import fetcher from "@/libs/fetcher";

type useUserType = {
  userId: string;
};

const useUser = (props: useUserType) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/users/${props.userId}?userId=${props.userId}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;
