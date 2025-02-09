import "../styles/UsersTable.css";
import { useEffect, useState } from "react";
import { getUsers } from "../data/users";
import PaginationBtns from "./PaginationBtns";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useNavigate } from "react-router-dom";
import routeNames from "@/navigation/routenames";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const openRoute = useNavigate();

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  function changePage(page) {
    const pageIndex = page - 1;
    setCurrentPage(pageIndex);
  }

  return (
    <section className="users-table w-full flex flex-col items-end">
      <main className="table-main w-full rounded-lg border border-solid mb-6">
        <div className="w-full flex items-center">
          <div className="header-cell one text-xs">Full Name</div>
          <div className="header-cell two text-xs">Email Address</div>
          <div className="header-cell three text-xs">Address</div>
        </div>
        {
          users.map(({ fullName, emailAddress, address }) => (
            <div className="detail-row flex items-center border-b" onClick={() => {
              openRoute(routeNames.posts);
            }}>
              <p className="detail-cell user-name one font-medium text-sm">{fullName}</p>
              <p className="detail-cell user-email two text-sm">{emailAddress}</p>
              <p className="detail-cell user-address three text-sm">{address}</p>
            </div>
          ))
        }
      </main>
      <div className="pagination-container">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  )
}