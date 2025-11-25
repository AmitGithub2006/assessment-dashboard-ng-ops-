"use client";
import { Pagination } from "@nextui-org/react";

export default function TableFooter({ 
  currentPage, 
  totalPages, 
  onPageChange,
  showPagination = true 
}) {
  if (!showPagination || totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex justify-center items-center py-4">
      <Pagination
        showControls
        total={totalPages}
        page={currentPage}
        onChange={onPageChange}
        classNames={{
          wrapper: "gap-2",
          item: "w-8 h-8 text-sm",
          cursor: "bg-blue-500 text-white font-semibold",
        }}
      />
    </div>
  );
}
