"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import Modal from "./modal";

export type Present = {
  id: string;
  projectName: string;
  leader: string;
  judge: string;
  no: number;
  score: number;
  complete: number;
  judge1: string;
  judge2: string;
  judge3: string;
  judge4: string;
};

type Props = {
  data_data: any;
  projectType: string;
  projectAmount: string;
};

type DataProps = {
  eve_project_code: string;
  eve_project_topic: string;
  eve_project_leader_name_latin: string;
  eve_project_type: string;
};

export default function ProjectsForm({
  data_data,
  projectType,
  projectAmount,
}: Props) {
  const [sortOrder, setSortOrder] = useState("asc");

  // Define sort function
  const handleSort = () => {
    // Sort your data here based on sortOrder
    // After sorting, toggle sortOrder
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  return (
    <div className="">
      <div className="flex justify-center ">
        <table className="hidden lg:block table-auto rounded-lg border-2 bg-white mt-10 border-gray-400 shadow-2xl">
          <thead className="">
            <tr>
              <th className="p-5 text-start" key="No">
                No
              </th>
              <th className="p-5 text-start" key="Id">
                Id
              </th>
              <th className="p-5 text-start" key="projectName">
                Project Name
              </th>
              <th className="p-5 text-start" key="leader">
                Leader
              </th>
              <th
                className="p-5 text-start cursor-pointer flex justify-center"
                key="score"
                onClick={handleSort}>
                Score
                <Image src="/sort.svg" alt="sort" width={20} height={20} />
              </th>
            </tr>
          </thead>
          <tbody>
            {data_data.map((row: any) => (
              <tr
                key={row.id}
                className={`table-row rounded-xl  ${
                  1 === 1
                    ? "bg-green-300 rounded-md"
                    : row.complete === 2
                    ? "bg-yellow-200"
                    : ""
                }`}>
                <td className="px-5 py-4  ">{1}</td>
                <td className="px-5 py-4  ">{row.eve_project_code}</td>
                <td className="px-5 py-4  ">{row.eve_project_topic}</td>
                <td className="px-5 py-4  ">
                  {row.eve_project_leader_name_latin}
                </td>
                <td className="px-5 py-4  ">{60}</td>
                <td className="px-5 py-4 ">Evaluate</td>
                <td className="px-5 py-4  ">
                  <Modal />
                </td>
                <td className="opacity-0">2</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="lg:hidden">
          {data_data.map((data: any) => (
            <div className="w-[400px] flex justify-center" key={data.id}>
              <div className="mt-8 rounded-lg border bg-card text-card-foreground shadow-sm w-11/12">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h1 className="text-2xl font-semibold leading-none tracking-tight">{data.eve_project_topic}</h1>
                  <p className="text-sm text-muted-foreground">ID: {data.eve_project_code}</p>
                  <p className="text-sm text-muted-foreground">Leader: {data.eve_project_leader_name_latin}</p>
                  <p className="text-sm text-muted-foreground">Judge: 4 Evaluators</p>
                  <p className="text-sm text-muted-foreground">Score: 60 Points</p>
                </div>
                <div className="items-center p-6 pt-0 flex justify-between">
                  <button className="px-4 py-2 text-center bg-[#014164] hover:bg-[#014190] text-white font-medium rounded-md text-sm">Evaluate</button>
                  <button className="px-4 py-2 text-center bg-[#014164] hover:bg-[#014190] text-white font-medium rounded-md text-sm">Edit Evaluation</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
