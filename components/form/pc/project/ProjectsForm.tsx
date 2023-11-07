import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectDemo() {
  return (
    <div className="flex justify-center">
      {/* my evaluate */}
      <div className="mx-10">
        <Select>
          <SelectTrigger className="w-[200px] h-14 bg-[#014164] hover:bg-[#014190] text-white">
            <SelectValue placeholder="My Evaluation" />
          </SelectTrigger>
          <SelectContent className=" ">
           
              <SelectItem value="my evaluate">My Evaluate</SelectItem>
              <SelectItem value="all evaluate">All Evaluate</SelectItem>

          </SelectContent>
        </Select>
      </div>
      {/* presentation */}
      <div className="mx-10">
      <Select>
          <SelectTrigger className="w-[200px] h-14 bg-[#014164] hover:bg-[#014190] text-white">
            <SelectValue placeholder="Presentation" />
          </SelectTrigger>
          <SelectContent>
           
              <SelectItem value="presentain">Presentation</SelectItem>
              <SelectItem value="poster">Poster</SelectItem>

          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
