"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  data_data: any;
  projectType: string;
  projectAmount: string;
};

type DataProps = {
  eve_project_code: string;
  eve_project_topic: string;
  eve_project_type: string;
  eve_project_members: string;
  eve_project_committee: string;
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
  let i = 1;

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
                  {row.eve_project_members[0].name_latin}
                </td>
                <td className="px-5 py-4  ">{60}</td>
                <td className="px-5 py-4 ">Evaluate</td>
                <td className="px-5 py-4  ">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Detail</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="text-center py-5">
                          Detail Of Project : {row.eve_project_topic}
                        </DialogTitle>
                        <DialogDescription className="flex">
                          <p className="font-bold"> Name Of Project :</p>&nbsp;
                          {row.eve_project_topic}
                        </DialogDescription>
                        <DialogDescription className="flex">
                          <p className="font-bold">ID Of Project :</p>&nbsp;
                          {row.eve_project_code}
                        </DialogDescription>
                        <DialogDescription className="flex">
                          <p className="font-bold">Leader Of Project :</p>&nbsp;
                          {row.eve_project_members[0].name_latin}
                        </DialogDescription>
                        <DialogDescription className="flex">
                          <p className="font-bold">Judge Of Project :</p>&nbsp;
                          {row.eve_project_committee[0].name}
                        </DialogDescription>
                        <DialogDescription className="flex">
                          <p className="font-bold">Type Of Project :</p>&nbsp;
                          {row.eve_project_type}
                        </DialogDescription>
                        <DialogDescription>
                          {row.eve_project_members.map((member: any) => (
                            <p className="flex">
                              <p className="font-bold my-[3px]">
                                Member{i++} Of Project :
                              </p>
                              &nbsp;
                              <p className="my-[3px]">{member.name_latin}</p>
                            </p>
                          ))}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </td>
                <td className="opacity-0">2</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="lg:hidden">
          {data_data.map((data: any) => (
            <div
              className="w-screen sm:w-[500px] flex justify-center"
              key={data.id}>
              <div className="mt-8 rounded-lg border bg-card text-card-foreground shadow-sm w-full mx-5">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h1 className="text-2xl font-semibold leading-none tracking-tight">
                    {data.eve_project_topic}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    ID: {data.eve_project_code}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Leader: {data.eve_project_members[0].name_latin}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Judge: 4 Evaluators
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Score: 60 Points
                  </p>
                </div>
                <div className="items-center p-6 pt-0 flex justify-between">
                  <button className="px-4 py-2 text-center bg-[#014164] hover:bg-[#014190] text-white font-medium rounded-md text-sm">
                    Evaluate
                  </button>
                  <button className="px-4 py-2 text-center bg-[#014164] hover:bg-[#014190] text-white font-medium rounded-md text-sm">
                    Edit Evaluation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
