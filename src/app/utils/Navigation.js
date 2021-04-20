import React, { useState } from "react";
import { Dimensions } from "react-native";
import Home from "../view/Home";
import UserDetails from "../view/UserDetails";

const pages = [
  {
    id: "home",
    target: Home,
  },
  {
    id: "user-details",
    target: UserDetails,
  },
];

const Navigation = () => {
  const [pageId, setPageId] = useState("user-details");
  const [userData,setUserData] = useState()
  const Page = pages.find((page) => page.id === pageId).target;

  return (
    <Page
      setPageId={setPageId}
      heightScreen={Dimensions.get("window").height}
      widthScreen={Dimensions.get("window").width}
    />
  );
};

export default Navigation;
