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

const data: Payment[] = [
    {
        id: "m5gr84i9",
        year: 1,
        department: "Automation Engineering",
        generation: "8",
    },
    {
        id: "3u1reuv4",
        year: 2,
        department: "Bio Engineering",
        generation: "6",
    },
    {
        id: "derv1ws0",
        year: 3,
        department: "Environmental Engineering",
        generation: "7",
    },
    {
        id: "5kma53ae",
        year: 4,
        department: "Information Technology Engineering",
        generation: "5",
    },
    {
        id: "bhqecj4p",
        year: 5,
        department: "Telecommunication & Electric Engineering",
        generation: "8",
    },
];
export type Payment = {
    id: string;
    year: number;
    department:
        | "Automation Engineering"
        | "Bio Engineering"
        | "Environmental Engineering"
        | "Information Technology Engineering"
        | "Telecommunication & Electric Engineering";
    generation: string;
};

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "department",
        header: () => (
            <div className="text-center hidden md:block w-full">Department</div>
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
                    className="pr-20 hidden md:flex"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Generation
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="lowercase md:pl-14">{row.getValue("generation")}</div>
        ),
    },
    {
        accessorKey: "year",
        header: () => <div className="text-center hidden md:block">Year</div>,
        cell: ({ row }) => {
            const year = parseFloat(row.getValue("year"));
            return <div className="text-center font-medium">{year}</div>;
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-50 text-black">
                        <DropdownMenuLabel>Action</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
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
                <div className="w-[90%] lg:w-[60%] h-[47%] py-5 px-5 border-1 mt-10 bg-white rounded-xl shadow-2xl border-2 border-gray-300">
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
                            className="max-w-sm border-2 "
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
                            <TableHeader className="md:bg-gray-100 ">
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
                                            No results.
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