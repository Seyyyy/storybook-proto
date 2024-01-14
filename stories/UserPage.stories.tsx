import React from "react";
import { UserPage } from "./UserPage";
import { useUserPage } from "./useUserPage";

const Template = () => {
  return <UserPage container={useUserPage} />;
};

export default {
  title: "Page/UserPage",
  component: UserPage,
  parameters: {
    layout: "fullscreen",
  },
};

export const Prototype = () => <Template />;
