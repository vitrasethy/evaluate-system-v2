export async function GET() {
  const res = await fetch('https://admin.rupp.support/events/1/departments/1/year/2/eve-project-shortlists', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()

  const transData = data.map((d: any, i = 1) => ({
    no: i++,
    id: d.eve_project[0].code,
    projectName: d.eve_project[0].topic,
    leader: d.eve_project[0].member1_name_latin,
    judge: "4",
    score: 60,
    complete: 1,
    judge1: "Olivia",
    judge2: "Emma",
    judge3: "Amelia",
    judge4: "Sophia",
  }));

  return Response.json({ transData })
}