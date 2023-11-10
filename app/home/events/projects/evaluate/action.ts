"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const cookieStore = cookies();
const token = cookieStore.get("access_token");

export async function action(
  fetchData: any,
  project_id: any,
  formData: FormData,
) {
  const resGetUserId = await fetch(
    "https://admin.rupp.support/auth/protected",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token?.value,
      },
    },
  );

  if (!resGetUserId.ok) {
    throw new Error("Failed to fetch data");
  }

  const userDetail = await resGetUserId.json();

  const data = {
    project_id: project_id,
    committee_id: userDetail.user_id,
    comment: formData.get("comment"),
    result: [
      fetchData.category.map((cat: { criteria: { id: any; name: string }[] }) =>
        cat.criteria.map((cri: { id: any; name: string }) => ({
          criteria_id: cri.id,
          score: formData.get(cri.name),
        })),
      ),
    ],
  };

  const res = await fetch("https://admin.rupp.support/auth/login", {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token?.value,
    },
    body: JSON.stringify(data),
  });

  revalidatePath("/");
  redirect(`/events`);
}
