import {cookies} from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");
  const eventId = cookieStore.get("event");
  const departmentId = cookieStore.get("department");
  const yearId = cookieStore.get("year");
  

  const res = await fetch(`https://admin.rupp.support/api/v1/events/${eventId?.value}/departments/${departmentId?.value}/years/${yearId?.value}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer " + token?.value,
    },
  })

  // const transData = await res.json()

  // const transData = data.map((d: any, i = 2) => ({
  //   no: i++,
  //   id: d.eve_project[0].code,
  //   projectName: d.eve_project[0].topic,
  //   leader: d.eve_project[0].member1_name_latin,
  //   judge: "4",
  //   score: 60,
  //   complete: 1,
  //   judge1: "Olivia",
  //   judge2: "Emma",
  //   judge3: "Amelia",
  //   judge4: "Sophia",
  // }));

  return Response.json(await res.json())
}