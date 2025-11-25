"use client";
import { TableBody, TableRow, TableCell, Chip } from "@nextui-org/react";

export default function TableBodyComponent({ data, columns, renderCell }) {
  return (
    <TableBody>
      {data.map((item) => (
        <TableRow key={item.id}>
          {columns.map((column) => (
            <TableCell key={column.key}>
              {renderCell ? renderCell(item, column.key) : item[column.key]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
