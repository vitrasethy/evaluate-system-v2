"use server";

import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function login(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const res = await fetch("https://admin.rupp.support/api/v1/auth/login", {
    method: "POST",
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return {message: 'Incorrect Username or Password. Please try again.'}
  }

  const resJson = await res.json();

  revalidatePath("/");

  cookies().set("access_token", resJson['access_token'], {
    httpOnly: true,
  });

  redirect(`/home`);
}