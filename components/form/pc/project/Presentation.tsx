"use client";
import Link from "next/link";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Present[] = [
  {
    id: "IG8-4",
    year: 1,
    department: "Smart Attendance Tracker",
    leader: "MeySorng",
    judge: "4",
    generation: "8",
    no: 1,
    score: 60,
    complete: 1,
    judge1: "Olivia",
    judge2: "Emma",
    judge3: "Amelia",
    judge4: "Sophia",
  },
  {
    id: "IG8-3",
    year: 2,
    department: "Efficient Inventory Management System",
    leader: "BongVitra",
    judge: "4",
    generation: "6",
    no: 2,
    score: 100,
    complete: 2,
    judge1: "Ava",
    judge2: "Isabella",
    judge3: "Mia",
    judge4: "Luna",
  },
  {
    id: "IG8-2",
    year: 3,
    department: "AR-powered Tourist Guide",
    leader: "Rithy",
    judge: "4",
    generation: "7",
    no: 3,
    score: 50,
    complete: 3,
    judge1: "Evelyn",
    judge2: "Charlotte",
    judge3: "Sophia",
    judge4: "Isabella",
  },
  {
    id: "IG8-1",
    year: 4,
    department: "Interactive Language Learning Platform",
    leader: "Bong Chhay",
    judge: "4",
    generation: "5",
    no: 4,
    score: 98,
    complete: 2,
    judge1: "Mia",
    judge2: "Luna",
    judge3: "Evelyn",
    judge4: "Noah",  },
  {
    id: "IG8-3",
    year: 5,
    department: "Predictive Healthcare Analytics",
    leader: "Veha",
    judge: "4",
    generation: "8",
    no: 5,
    score: 74,
    complete: 1,
    judge1: "Liam",
    judge2: "Oliver",
    judge3: "Mateo",
    judge4: "Elijah",
  },
];
export type Present = {
  id: string;
  year: number;
  department:
    | "Smart Attendance Tracker"
    | "Efficient Inventory Management System"
    | "AR-powered Tourist Guide"
    | "Interactive Language Learning Platform"
    | "Predictive Healthcare Analytics";
  leader: string;
  judge: string;
  generation: string;
  no: number;
  score: number;
  complete: number;
  
  judge1: string;
  judge2: string;
  judge3: string;
  judge4: string;
};
export const columns: ColumnDef<Present>[] = [
  {
    accessorKey: "no",
    header: () => (
      <div className="text-center hidden md:block w-full font-bold text-black text-lg">
        No
      </div>
    ),
    cell: ({ row }) => {
      const no = parseFloat(row.getValue("no"));
      return <div className="text-center font-medium text-base">{no}</div>;
    },
  },

  {
    accessorKey: "id",
    header: () => (
      <div className="text-start hidden md:block w-full font-bold text-black text-lg">
        ID
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="capitalize text-start text-base">
          {row.getValue("id")}
        </div>
      );
    },
  },

  {
    accessorKey: "department",
    header: () => (
      <div className="text-start hidden md:block w-full font-bold text-black text-lg">
        Project Name
      </div>
    ),
    cell: ({ row }) => (
      <div className="capitalize text-start text-base font-medium">
        {row.getValue("department")}
      </div>
    ),
  },
  {
    accessorKey: "leader",
    header: () => (
      <div className="text-start hidden md:block w-full font-bold text-black text-lg">
        Leader
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="capitalize text-start text-base">
          {row.getValue("leader")}
        </div>
      );
    },
  },
  {
    accessorKey: "judge",

    header: () => (
      <div className="text-start hidden md:block w-full font-bold text-black text-lg">
        Judge
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="capitalize text-start flex justify-start text-base">
          <div className="text-start font-medium">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="h-8 w-8 p-0 text-base cursor-pointer">
                  {row.getValue("judge")}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="bg-gray-50 text-black"
              >
                <DropdownMenuLabel>Member</DropdownMenuLabel>
                <DropdownMenuItem>{row.getValue("judge1")}</DropdownMenuItem>
                <DropdownMenuItem>{row.getValue("judge2")}</DropdownMenuItem>
                <DropdownMenuItem>{row.getValue("judge3")}</DropdownMenuItem>
                <DropdownMenuItem>{row.getValue("judge4")}</DropdownMenuItem>

                
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "score",
    header: ({ column }) => {
      return (
        <Button
          className=" text-start hidden md:flex w-full font-bold text-black text-lg"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Score
          <ArrowUpDown className="ml-2 h-3 w-2" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-start ml-4 text-base">
        {row.getValue("score")}
      </div>
    ),
  },
  {
    accessorKey: "complete",
    header: () => {},
    cell: () => (
      <div className=" text-center text-base ">
        <Link href="/events/e-day/1/evaluate">Evaluate</Link>
      </div>
    ),
  },
  {
    accessorKey: "judge1",
    header: () => {},
    cell: () => {}
  },
  {
    accessorKey: "judge2",
    header: () => {},
    cell: () => {}
  },
  
  {
    accessorKey: "year",
    header: () => <div className="text-start hidden md:block"></div>,
    cell: () => {
      return (
        <div className="text-start font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="h-8 w-8 p-0 cursor-pointer">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-50 text-black">
              <DropdownMenuLabel>Action</DropdownMenuLabel>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
  {
    accessorKey: "judge3",
    header: () => {},
    cell: () => {}
  },
  {
    accessorKey: "judge4",
    header: () => {},
    cell: () => {}
  },
];

export default function ProjectsForm() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="flex justify-center w-full items-center">
      <div className="present ">
        <Card className=" w-full rounded-t-none border-none">
          <CardContent className="mt-5">
            <div className="flex justify-center">
              <div className="w-full">
                <div className="flex items-center md:mb-5">
                  <DropdownMenu>
                    <DropdownMenuContent align="end">
                      {table
                        .getAllColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => {
                          return (
                            <DropdownMenuCheckboxItem
                              key={column.id}
                              className="capitalize"
                              checked={column.getIsVisible()}
                              onCheckedChange={(value) =>
                                column.toggleVisibility(value)
                              }
                            >
                              {column.id}
                            </DropdownMenuCheckboxItem>
                          );
                        })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="md:mt-[-20px] mt-[-35px]">
                  <Table className="border-2 ">
                    <TableHeader className="md:bg-gray-300">
                      {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow className="" key={headerGroup.id}>
                          {headerGroup.headers.map((header) => {
                            return (
                              <TableHead key={header.id}>
                                {header.isPlaceholder
                                  ? null
                                  : flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                    )}
                              </TableHead>
                            );
                          })}
                        </TableRow>
                      ))}
                    </TableHeader>
                    <TableBody className="test hover:">
                      {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                          <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                            className={`overflow-hidden ${
                              row.getValue("complete") === 1
                                ? "bg-green-200"
                                : ""
                            } ${
                              row.getValue("complete") == 2
                                ? "bg-yellow-200"
                                : ""
                            }`}
                          >
                            {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell
                            colSpan={columns.length}
                            className="h-24 text-center"
                          >
                            No results.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
