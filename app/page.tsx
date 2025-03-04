import React from "react";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const Base = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  console.log("session", session);
  return <div>User: {session?.user.name}</div>;
};

export default Base;
