/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import dayjs from "dayjs"
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"

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
import { useEffect, useState } from "react";
import { myFetch } from "@/utils/myFetch";

export type OrderDataType = {
  id: string
  deadline: string
  amount: number
  status: "pending" | "complete"
}

// const data: OrderDataType[] = [
//   {
//     id: "1",
//     deadline: "2023-06-01",
//     amount: 100,
//     status: "pending",
//   },
// ]


export const columns: ColumnDef<OrderDataType>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-center">Order ID</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "deadline",
    header: () => <div className="text-center">Start Date</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">
        {dayjs(row.getValue("deadline")).format("YYYY-MM-DD")}
      </div>
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
      <Link href={`/orders/${row.getValue("id")}`} className="capitalize flex items-center justify-center">
        <PiEyeLight className="text-xl" />
      </Link>
    ),
  }
]

export function OrderHistory() {
  const [orderData, setOrderData] = useState<OrderDataType[]>([])

  const table = useReactTable({
    data: orderData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })


  const getBrandOrders = async() => { 
    const res = await myFetch(`/hire-creator/user`);
    console.log("Order List : ", res?.data)
    if (res.success) {
      const formatData = res.data.map((item: any) => {
        return {
          id: item._id,
          hireCreatorId: item.hireCreatorId,
          deadline: item.createdAt,
          amount: item.brandPrice || 0,
          status: item.status,
        }
      })
      setOrderData(formatData)
    }
  }

  useEffect(() => {
    getBrandOrders()
  }, [])


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
