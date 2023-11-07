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
    <div className="flex justify-around">
      {/* my evaluate */}
      <div className="mx-2">
        <Select>
          <SelectTrigger className="w-[200px] h-14 text-md bg-[#014164] hover:bg-[#014190] text-white">
            <SelectValue placeholder="My Evaluate" />
          </SelectTrigger>
          <SelectContent className=" bg-none shadow-none border-none">
            
              <div className="flex justify-center w-full">
                <div className="mx-2">

              <Select>
                <SelectTrigger className="w-full h-14 bg-[#014164] hover:bg-[#014190] text-white">
                  <SelectValue placeholder="My Evaluate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup></SelectGroup>
                </SelectContent>
              </Select>
                </div>
                <div className="mx2">

              <Select>
                <SelectTrigger className="w-full h-14 bg-[#014164] hover:bg-[#014190] text-white">
                  <SelectValue placeholder="All Evaluate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup></SelectGroup>
                </SelectContent>
              </Select>
                </div>
              </div>
            
          </SelectContent>
        </Select>
      </div>
      {/* presentation */}
      <div className="mx-2">
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
