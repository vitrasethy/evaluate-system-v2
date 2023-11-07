import { cookies } from "next/headers";

const cookieStore = cookies();
const token = cookieStore.get("access_token");

export async function getEvents() {
  const res = await fetch("https://admin.rupp.support/events", {
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

export async function getDepartments() {
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
