"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import Modal from "./modal"


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
  const datas: Present[] = data_data.map((e: DataProps) => ({
    no: 1,
    id: e.eve_project_code,
    projectName: e.eve_project_topic,
    leader: e.eve_project_leader_name_latin,
    judge: "4",
    score: e.eve_project_topic,
    complete: 1,
    judge1: "Olivia",
    judge2: "Emma",
    judge3: "Amelia",
    judge4: "Sophia",
  }));

 
  const [sortOrder, setSortOrder] = useState('asc');

  // Define sort function
  const handleSort = () => {
    // Sort your data here based on sortOrder
    // After sorting, toggle sortOrder
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };


 
  

  return (
    <div className="">
      
      <div className="flex justify-center ">
        <table className="table-auto  border-1 rounded-lg border-2 bg-white mt-10 border-gray-400 shadow-2xl">
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
                onClick={handleSort}
              >
                Score
                <Image src="/sort.svg" alt="sort" width={20} height={20} />
              </th>


            </tr>
          </thead>
          <tbody>
            {datas.map((row, index) => (
              <tr
                key={row.id}
                className={`table-row rounded-xl  ${
                  row.complete === 1
                    ? "bg-green-300 rounded-md"
                    : row.complete === 2
                    ? "bg-yellow-200"
                    : ""
                }`}
              >
                <td className="px-5 py-4 border-y-2 ">{row.no}</td>
                <td className="px-5 py-4 border-y-2 ">{row.id}</td>
                <td className="px-5 py-4 border-y-2 ">{row.projectName}</td>
                <td className="px-5 py-4 border-y-2 ">{row.leader}</td>
                <td className="px-5 py-4 border-y-2 ">{row.score}</td>
                <td className="px-5 py-4 border-y-2">Evaluate</td>
                <td className="px-5 py-4 border-y-2 "><Modal/></td>
                <td className="opacity-0">{row.complete}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
