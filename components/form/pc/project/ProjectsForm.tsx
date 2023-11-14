"use client";

import Presentations from "@/components/form/pc/project/Presentations";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectDemo() {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    fetch("/api").then((res) => {
      res.json().then((d) => {
        setData(d.transData);
      });
    });
  }, [data]);

  return (
    <div>
      <div className="flex justify-center">
        {/* my evaluate */}
        <div className="mx-10">
          <Select>
            <SelectTrigger className="w-[140px] lg:w-[200px] h-14 bg-[#014164] hover:bg-[#014190] text-white">
              <SelectValue placeholder="My Evaluation" />
            </SelectTrigger>
            <SelectContent
              onChange={(event) =>
                setAmount((event.target as HTMLInputElement).value)
              }
            >
              <SelectItem value="my evaluate">My Evaluate</SelectItem>
              <SelectItem value="all evaluate">All Evaluate</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* presentation */}
        <div className="mx-10">
          <Select>
            <SelectTrigger className="w-[140px] lg:w-[200px] h-14 bg-[#014164] hover:bg-[#014190] text-white">
              <SelectValue placeholder="Presentation" />
            </SelectTrigger>
            <SelectContent
              onChange={(event) =>
                setType((event.target as HTMLInputElement).value)
              }
            >
              <SelectItem value="Prsentation">Presentation</SelectItem>
              <SelectItem value="2">Poster</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="">
        <Presentations
          data_data={data}
          projectType={type}
          projectAmount={amount}
        />
      </div>
    </div>
  );
}
