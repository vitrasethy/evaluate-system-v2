"use client";
import * as React from "react";
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
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const data: Department[] = [
  {
    id: 1,
    year: 1,
    department: "Automation Engineering",
    generation: "8",
  },
  {
    id: 2,
    year: 2,
    department: "Bio Engineering",
    generation: "6",
  },
  {
    id: 3,
    year: 3,
    department: "Environmental Engineering",
    generation: "7",
  },
  {
    id: 4,
    year: 4,
    department: "Information Technology Engineering",
    generation: "5",
  },
  {
    id: 5,
    year: 5,
    department: "Telecommunication & Electric Engineering",
    generation: "8",
  },
];
export type Department = {
    id: number;
    year: number;
    department:
    | "Automation Engineering"
    | "Bio Engineering"
    | "Environmental Engineering"
    | "Information Technology Engineering"
    | "Telecommunication & Electric Engineering";
  generation: string;
};

export const columns: ColumnDef<Department>[] = [
  {
    accessorKey: "department",
    header: () => (
      <div className="text-center w-full">Department</div>
    ),
    cell: ({ row }) => (
      <Link href="/events/e-day/1">
        <div className="capitalize">{row.getValue("department")}</div>
      </Link>
    ),
  },
  {
    accessorKey: "generation",
    header: ({ column }) => {
      return (
        <Button
          className="pr-20 md:flex"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Generation
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("generation")}</div>
    ),
  },
  {
    accessorKey: "year",
    header: () => <div className="text-center">Year</div>,
    cell: ({ row }) => {
      const year = parseFloat(row.getValue("year"));
      return <div className="text-center font-medium">{year}</div>;
    },
  },
];

export default function DepartmentsForm() {
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
    <div className="deparment_form">
      <div className="flex justify-center">
        <div className="w-[60%] h-[47%] py-5 px-5 border-1 mt-10 bg-white rounded-xl shadow-2xl border-2 border-gray-300">
          <div className="flex items-center md:mb-5 ">
            <Input
              placeholder="Filter department..."
              value={
                (table.getColumn("department")?.getFilterValue() as string) ??
                ""
              }
              onChange={(event) =>
                table
                  .getColumn("department")
                  ?.setFilterValue(event.target.value)
              }
              className="max-w-sm border-2 border-gray-300 focus:outline-none focus:border-transparent"
            />
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
          <div>
            <Table>
              <TableHeader className="bg-gray-100 ">
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
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="hover:bg-gray-100"
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
                      No results
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
