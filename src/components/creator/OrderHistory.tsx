"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { PiEyeLight } from "react-icons/pi";

export type OrderDataType = {
  id: string
  deadline: string
  amount: number
  status: "pending" | "complete"
}

const data: OrderDataType[] = [
  {
    id: "1",
    deadline: "2023-06-01",
    amount: 100,
    status: "pending",
  },
  {
    id: "2",
    deadline: "2023-06-01",
    amount: 100,
    status: "complete",
  },
  {
    id: "3",
    deadline: "2023-06-01",
    amount: 100,
    status: "pending",
  },
  {
    id: "4",
    deadline: "2023-06-01",
    amount: 100,
    status: "pending",
  },
  {
    id: "5",
    deadline: "2023-06-01",
    amount: 100,
    status: "pending",
  },
  {
    id: "6",
    deadline: "2023-06-01",
    amount: 100,
    status: "pending",
  },
  {
    id: "7",
    deadline: "2023-06-01",
    amount: 100,
    status: "pending",
  },
  {
    id: "8",
    deadline: "2023-06-01",
    amount: 100,
    status: "pending",
  }
]


export const columns: ColumnDef<OrderDataType>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-center">ID</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">#00{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "deadline",
    header: () => <div className="text-center">Deadline</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("deadline")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-center">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="font-medium text-center">{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "action",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => (
      <Link href={`/creator/orders/${row.getValue("id")}`} className="capitalize flex items-center justify-center">
        <PiEyeLight className="text-xl" />
      </Link>
    ),
  }
]

export function OrderHistory() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

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
  })

  return (
    <div className="w-full pt-12">
      <div className="rounded-md">
        <Table>
          <TableHeader className="bg-[#DEE5EC]">
            {table.getHeaderGroups().map((headerGroup, groupIdx) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, idx) => {
                  // Only apply rounding on the first header row
                  const isFirstRow = groupIdx === 0;
                  const isFirst = idx === 0;
                  const isLast = idx === headerGroup.headers.length - 1;
                  return (
                    <TableHead
                      key={header.id}
                      className={
                        isFirstRow
                          ? [
                            isFirst && "rounded-l-lg",
                            isLast && "rounded-r-lg"
                          ]
                            .filter(Boolean)
                            .join(" ")
                          : ""
                      }
                      style={{
                        background: "#DEE5EC",
                      }}
                    >
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
      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div> */}
    </div>
  )
}
