import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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
            <SelectValue placeholder="Presentation" />
          </SelectTrigger>
          <SelectContent className=" ">
           
              <SelectItem className="h-14 bg-[#014164] hover:bg-[#014190] text-white my-2" value="my evaluate">My Evaluate</SelectItem>
              <SelectItem className="h-14 bg-[#014164] hover:bg-[#014190] text-white" value="all evaluate">All Evaluate</SelectItem>

          
          </SelectContent>
        </Select>
      </div>
      {/* presentation */}
      <div className="mx-10">
        <Select>
          <SelectTrigger className="w-[200px] h-14 bg-[#014164] hover:bg-[#014190] text-white">
            <SelectValue placeholder="Presentation" />
          </SelectTrigger>
          <SelectContent className=" bg-none shadow-none border-none">
           
              <Select>
                <SelectTrigger className="w-[200px] h-14 bg-[#014164] hover:bg-[#014190] text-white">
                  <SelectValue placeholder="Presentation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup></SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[200px] h-14 bg-[#014164] hover:bg-[#014190] text-white">
                  <SelectValue placeholder="Poster" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup></SelectGroup>
                </SelectContent>
              </Select>
          
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
