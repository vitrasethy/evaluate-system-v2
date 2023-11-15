"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function action(
  fetchData: any,
  projectId: any,
  formData: FormData
) {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");
  const eventId = cookieStore.get("event");

  const resGetUserId = await fetch(
    "https://admin.rupp.support/api/v1/auth/protected",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token?.value,
      },
    }
  );

  if (!resGetUserId.ok) {
    throw new Error("Failed to fetch data");
  }

  const userDetail = await resGetUserId.json();

  const data = {
    project_id: projectId?.evaluate,
    committee_id: userDetail.user_id,
    comment: formData.get("comment"),
    result: [].concat(
      ...fetchData.map((e: any) => ({
        criteria_id: e.id,
        score: formData.get(e.name),
      }))
    ),
  };

  console.log(data.result);

  const res = await fetch(
    `https://admin.rupp.support/api/v1/events/${eventId?.value}/project-scores`,
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token?.value,
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  revalidatePath("/");
  redirect(`/home/events`);
}
