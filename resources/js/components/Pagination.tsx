import { Pagination as FlowbitePagination } from "flowbite-react";
import React, { useState } from "react";

const Pagination = ({ setOffset }: { setOffset: (offset: number) => void }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalProductsCount = Number(localStorage.getItem("totalProductsCount") || 0);
  const totalPages = Math.ceil(totalProductsCount / 8) - 1;

  const onPageChange = (page: number) => {
    setCurrentPage(page)
    setOffset((page) * 8);
};

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      {totalProductsCount > 8 && <FlowbitePagination currentPage={currentPage} onPageChange={onPageChange} showIcons totalPages={totalPages} />}
    </div>
  );
}

export default Pagination;

