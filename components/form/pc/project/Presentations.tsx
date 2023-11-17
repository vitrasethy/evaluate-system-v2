"use client";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  data_data: any;
  projectType: string;
  projectAmount: string;
};

// type DataProps = {
//   eve_project_code: string;
//   eve_project_topic: string;
//   eve_project_type: string;
//   eve_project_members: string;
//   eve_project_committee: string;
// };

export default function ProjectsForm({
  data_data,
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
              <th className="p-5 text-start">
                No
              </th>
              <th className="p-5 text-start" key="Id">
                Id
              </th>
              <th className="p-5 text-start">
                Project Name
              </th>
              <th className="p-5 text-start">
                Leader
              </th>
              <th
                className="p-5 text-start cursor-pointer flex justify-center"
                key="score"
                onClick={handleSort}>
                Score
                <Image src="/sort.svg" alt="sort" width={20} height={20} />
              </th>
              <th className="p-5 text-start" key="action">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data_data.map((row: any) => (
              <tr
                key={row.id}
                className={`table-row rounded-xl`}>
                <td className="px-5 py-4  ">{1}</td>
                <td className="px-5 py-4  ">{row.eve_project_code}</td>
                <td className="px-5 py-4  ">{row.eve_project_topic}</td>
                <td className="px-5 py-4  ">
                  {row.eve_project_members[0].name_latin}
                </td>
                <td className="px-5 py-4  ">{60}</td>
                <td className="px-5 py-4 text-green-500"><p className="p-1 border-2 border-green-200 bg-green-100 rounded-lg">complate</p></td>
                <td className="px-5 py-4  "><Link href={"./evaluate"}>Evaluate</Link></td>
                <td className="px-5 py-4  ">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-amber-500">Detail</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px] columns-2">
                      <DialogHeader>
                        <DialogTitle className="text-center mb-5 font-extrabold ">
                          Project Details
                        </DialogTitle>
                        <DialogDescription className="flex ">
                          <p className=" w-1/2"> Name</p>&nbsp;
                          {row.eve_project_topic}
                        </DialogDescription>
                        <DialogDescription className="flex">
                          <p className=" w-1/2">ID</p>&nbsp;
                          {row.eve_project_code}
                        </DialogDescription>
                        <DialogDescription className="flex">
                          <p className=" w-1/2">Leader</p>&nbsp;
                          {row.eve_project_members[0].name_latin}
                        </DialogDescription>
                        <DialogDescription className="flex">
                          <p className=" w-1/2">Judge</p>&nbsp;
                          {row.eve_project_committee[0].name}
                        </DialogDescription>
                        <DialogDescription className="flex">
                          <p className=" w-1/2">Type</p>&nbsp;
                          {row.eve_project_type}
                        </DialogDescription>
                        <DialogDescription>
                          {row.eve_project_members.map((member: any) => (
                            <p key={member.id} className="flex">
                              <p className=" my-[3px] w-1/2">
                                Member {i++}
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
