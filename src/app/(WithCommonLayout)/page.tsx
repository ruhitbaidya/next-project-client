"use client";
import { UseUser } from "@/context/AuthContext";
import React from "react";

const HomePage = () => {
  const user = UseUser();
  console.log(user);
  return <div>This Is My Pages</div>;
};

export default HomePage;
