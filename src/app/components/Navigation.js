import React, { useState } from "react";
import Home from "./Home";
import UserCard from "./UserCard";

const pages = [
  {
    id: "home",
    target: Home,
  },
  {
    id: "user-card",
    target: UserCard,
  },
];

const Navigation = () => {
  const [pageId, setPageId] = useState("home");
  const Page = pages.find((page) => page.id === pageId).target;

  return <Page setPageId={setPageId} />;
};

export default Navigation;
