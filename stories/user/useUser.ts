import React, { useEffect } from "react";

export interface UserProps {
  id: number;
  name: string;
  iconUrl: string;
}

const fetcher = () => {
  return new Promise<UserProps>((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "John Doe",
        iconUrl: "",
      });
    }, 1000);
  });
};

/**
 * @description Userモデルの操作を行うカスタムフック
 */
export const useUser = () => {
  const [user, setUser] = React.useState<UserProps | null>(null);
  const [error, setError] = React.useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const user = await fetcher();
        setUser(user);
      } catch (e) {
        setError(true);
      }
    })();
  }, []);

  return {
    user,
    error,
    loading: user === null,
  };
};
