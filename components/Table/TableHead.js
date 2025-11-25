"use client";
import { TableHeader, TableColumn } from "@nextui-org/react";

export default function TableHead({ columns }) {
  return (
    <TableHeader>
      {columns.map((column) => (
        <TableColumn 
          key={column.key}
          align={column.align || "start"}
          className={column.className || ""}
        >
          {column.label}
        </TableColumn>
      ))}
    </TableHeader>
  );
}
