"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// type Checked = DropdownMenuCheckboxItemProps["checked"];

export function Hamburger() {
  // const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  // const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  // const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mr-4" asChild>
        <Button variant="outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-black w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <ul
          className="py-2 text-base text-gray-700"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a href="/award" className="block px-4 py-2">
            Award
            </a>
          </li>
          <li>
            <a href="/e-day/1/1/evaluate" className="block px-4 py-2">
              My Evaluation
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2">
              Account
            </a>
          </li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
