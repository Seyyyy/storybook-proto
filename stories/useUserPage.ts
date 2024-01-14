import React, { useEffect } from "react";
import { useUser, UserProps } from "./user/useUser";

export interface UserPageProps {
  user: UserProps | null;
}

/**
 * @description UserPageの操作を行うカスタムフック(Humble Object的にテスタブルでない箇所を分離)
 */
export const useUserPage = () => {
  const { user, error: userError, loading: userLoading } = useUser();
  const [error, setError] = React.useState<boolean>(false);

  useEffect(() => {
    if (userError) {
      setError(true);
    } else {
      setError(false);
    }
  }, [userError]);

  return {
    userPage: {
      user,
    },
    error,
    loading: userLoading,
  };
};
