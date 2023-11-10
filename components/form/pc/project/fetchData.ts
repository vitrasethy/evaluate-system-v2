async function getData() {
  const res = await fetch(
    "https://admin.rupp.support/events/1/departments/1/year/2/eve-project-shortlists",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function fetchData() {
  const data = await getData();

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

  return transData;
}
