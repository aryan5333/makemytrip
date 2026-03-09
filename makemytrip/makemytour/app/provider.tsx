"use client";

import { Provider } from "react-redux";
import store, { setUser } from "@/store";
import { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      store.dispatch(setUser(JSON.parse(storedUser)));
    }
  }, []);

  <head>Makemytrip</head>

  return <Provider store={store}>{children}</Provider>;

  
}
