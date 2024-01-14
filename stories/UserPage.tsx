import React from "react";
import { UserPageProps } from "./useUserPage";

interface Props {
  container: () => {
    userPage: UserPageProps | null;
    error: boolean;
    loading: boolean;
  };
}

/**
 * @description カスタムフックを引数として注入することでロジックを分離。
 * 例えば、カスタムフックでモックを返すことによってロジックまたは外部依存（APIのような）の実装を待たずにプロトタイピングを可能にする。
 */
export const UserPage = (props: Props) => {
  const { userPage, error, loading } = props.container();

  if (error) {
    return <div>Error!</div>;
  }

  if (userPage === null) {
    return <div>Loading...</div>;
  }

  if (userPage.user === null) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <h1>{userPage.user.name}</h1>
      </header>
    </div>
  );
};
