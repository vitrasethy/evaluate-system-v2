import { cookies } from "next/headers";

export async function GetDepartId() {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");

  const res = await fetch("https://admin.rupp.support/departments", {
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
