import { cookies } from "next/headers";

async function getData() {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");

  const res = await fetch("https://admin.rupp.support/auth/protected", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token?.value,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function isAdmin() {
  const data = await getData();

  return data["is_admin"];
}
