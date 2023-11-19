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

interface Project {
  eve_project_type: string;
}

export default function SelectDemo() {

  const [data, setData] = useState<Project[]>([]);
  const [filteredData, setFilteredData] = useState<Project[]>([]);
  const [type, setType] = useState<string>("Presentation");

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result: Project[] = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:");
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  useEffect(() => {
    // Filter the data whenever 'type' changes
    const newFilteredData = data.filter(
      (item) => item.eve_project_type === type
    );
    setFilteredData(newFilteredData);
  }, [type, data]); // Include 'data' in the dependency array
  
  return (
    <div>
      <div className="flex justify-between sm:justify-center mx-5">
        {/* my evaluate */}
        <div className="sm:mx-10">
          <label className="text-gray-500 p-1 text-lg">Project Filter :</label>
          <Select>
            <SelectTrigger className="w-[140px] lg:w-[200px] h-14 bg-[#014164] mt-2 hover:bg-[#014190] text-white">
              <SelectValue placeholder="My Evaluation" />
            </SelectTrigger>
            <SelectContent
            // onChange={(event) =>
            //   setAmount((event.target as HTMLInputElement).value)
            // }
            >
              <SelectItem value="my evaluate">My Evaluate</SelectItem>
              <SelectItem value="all evaluate">All Evaluate</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* presentation */}
        <div className="sm:mx-10">
        <label className="text-gray-500 font-normal text-lg p-1">Project Type :</label>
          <Select onValueChange={(e) => setType(e)}>
            <SelectTrigger
              value={type}
              className="w-[140px] lg:w-[200px] h-14 bg-[#014164] hover:bg-[#014190] mt-2 text-white">
              <SelectValue placeholder="Presentation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Presentation">Presentation</SelectItem>
              <SelectItem value="Poster">Poster</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="">
        <Presentations
          data_data={filteredData}
          projectType={type}
          projectAmount={"amount"}
        />
      </div>
    </div>
  );
}
