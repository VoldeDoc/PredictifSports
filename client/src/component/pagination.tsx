import { Pagination } from "flowbite-react";
export function Pages({currentPage, setCurrentPage, totalPages}: {currentPage: number, setCurrentPage: (page: number) => void, totalPages: number}) {
  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center my-6">
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}
