"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SetStateAction, useState } from "react";
import Link from "next/link";

const data = {
  events: [
    {
      id: 1,
      name: "Engineering's Day",
      shortname: "eDay",
    },
    {
      id: 2,
      name: "Event 2",
      shortname: "EV2",
    },
    {
      id: 3,
      name: "Event 3",
      shortname: "EV3",
    },
  ],
  departments: [
    {
      id: 1,
      name: "Information Technology Engineering",
      shortname: "ite",
    },
    {
      id: 2,
      name: "Bio Engineering",
      shortname: "be",
    },
    {
      id: 3,
      name: "Telecommunication & Electric Engineering",
      shortname: "tee",
    },
    {
      id: 4,
      name: "Environmental Engineering",
      shortname: "ee",
    },
  ],
  year: [
    {
      id: 1,
      name: "Year 1",
    },
    {
      id: 2,
      name: "Year 2",
    },
    {
      id: 3,
      name: "Year 3",
    },
    {
      id: 4,
      name: "Year 4",
    },
  ],
};

export default function Selection() {
  const [hookEvent, setHookEvent] = useState("");
  const [hookDepartment, setHookDepartment] = useState("");
  const [hookYear, setHookYear] = useState("");

  const onEventChange = (e: { target: { value: SetStateAction<string> } }) => {
    setHookEvent(e.target.value);
  };
  const onDepartmentChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setHookDepartment(e.target.value);
  };
  const onYearChange = (e: { target: { value: SetStateAction<string> } }) => {
    setHookYear(e.target.value);
  };

  return (
    <div>
      <div className={"flex justify-center mb-6"}>
        <Link
          href={{
            pathname: "/events/projects",
            query: {
              event: hookEvent,
              department: hookDepartment,
              year: hookYear,
            },
          }}
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        >
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
        </Link>
      </div>
      <div className={"flex justify-center gap-4"}>
        <Card className={"w-[30%]"}>
          <CardHeader>
            <CardTitle>Select Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="">
              {data.events.map((event) => (
                <li key={event.id} className={"mb-2"}>
                  <input
                    type="radio"
                    id={event.name}
                    name="event"
                    value={event.name}
                    onChange={onEventChange}
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor={event.name}
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        {event.name}
                      </div>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className={"w-[30%]"}>
          <CardHeader>
            <CardTitle>Select Departments</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="">
              {data.departments.map((department) => (
                <li key={department.id} className={"mb-2"}>
                  <input
                    type="radio"
                    id={department.name}
                    name="department"
                    value={department.name}
                    onChange={onDepartmentChange}
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor={department.name}
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        {department.name}
                      </div>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className={"w-[30%]"}>
          <CardHeader>
            <CardTitle>Select Year</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="">
              {data.year.map((years) => (
                <li key={years.id} className={"mb-2"}>
                  <input
                    type="radio"
                    id={years.name}
                    name="year"
                    value={years.name}
                    onChange={onYearChange}
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor={years.name}
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        {years.name}
                      </div>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
