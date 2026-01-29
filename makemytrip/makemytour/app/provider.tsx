"use client";

import { Provider } from "react-redux";
import store, { setUser } from "@/store";
import { useEffect } from "react";

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

  return <Provider store={store}>{children}</Provider>;
}
