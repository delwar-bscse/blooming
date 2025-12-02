// import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
// import { PiEyeBold } from "react-icons/pi";
import { Checkbox } from "@/components/ui/checkbox"
import { TCreator } from "@/types/creatorDataTypes";
import Link from "next/link";
import { PiEyeLight } from "react-icons/pi";

export const creatorListColumns: ColumnDef<TCreator>[] = [
  {
    accessorKey: "_id",
    header: () => <div className="text-center">Creator ID</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("_id")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: () => <div className="text-center">Name</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "jobProfession",
    header: () => <div className="text-center">Profession</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("jobProfession")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center text-semibold text-white bg-green-600 hover:bg-green-700 hover:text-gray-100 transition-colors duration-300 py-1 rounded-md cursor-pointer">{row.getValue("status")}</div>
    ),
  },
  {
    id: "select",
    header: () => (
      <div className="flex justify-center">
        Select
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex justify-center items-center gap-3">
        <Link href={`/creators/${row.getValue("_id")}`} className="capitalize flex items-center justify-center">
          <PiEyeLight className="size-6 text-gray-600 hover:text-gray-800" />
        </Link>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={value => row.toggleSelected(!!value)}
          aria-label="Select row"
          onClick={e => e.stopPropagation()}
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
]