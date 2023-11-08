import * as React from "react";
import { redirect } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

interface SelectionProps {
  events: any;
  departments: any;
}

export default function SelectionMobile({
  events,
  departments,
}: SelectionProps) {
  async function action(formData: FormData) {
    "use server";

    const selectDepartment = formData.get("department");
    const selectEvent = formData.get("event");
    const selectYear = formData.get("year");

    redirect(
      `/events/projects?event=${selectEvent}&department=${selectDepartment}&year=${selectYear}`,
    );
  }

  return (
    <Card className={"mx-5"}>
      <form className={"mt-5"} action={action}>
        <CardContent>
          <label
            htmlFor="event"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select an event
          </label>
          <select
            id="event"
            name={"event"}
            className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Choose an event</option>
            {events.map((event: any) => (
              <option key={event.id} value={event.id}>
                {event.name_latin}
              </option>
            ))}
          </select>
          <label
            htmlFor="department"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select a department
          </label>
          <select
            id="department"
            name={"department"}
            className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Choose a department</option>
            {departments.map((department: any) => (
              <option key={department.id} value={department.id}>
                {department.name_latin}
              </option>
            ))}
          </select>
          <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select an education year
          </label>
          <select
            id="year"
            name={"year"}
            className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Choose a department</option>
            <option value={"1"}>Year 1</option>
            <option value={"2"}>Year 2</option>
            <option value={"3"}>Year 3</option>
            <option value={"4"}>Year 4</option>
          </select>
          <div className={"flex justify-center"}>
            <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
              Search
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
