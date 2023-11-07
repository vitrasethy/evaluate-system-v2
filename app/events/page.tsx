import Selection from "@/app/events/Selection";
import { getDepartments, getEvents } from "@/app/events/fetchData";

export default async function page() {
  const eventsData = await getEvents();
  const departmentsData = await getDepartments();

  return (
    <div>
      <div className={"flex flex-col items-center justify-center my-10"}>
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Searching Projects
        </h1>
        <p className="text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Please select one of each options for searching.
        </p>
      </div>
      <Selection events={eventsData} departments={departmentsData} />
    </div>
  );
}
