import React, { useEffect, useState } from "react";

import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useGetAllAdminJobs from "@/components/Hooks/useGetAllAdminJobs";
import { setSearchJobByText } from "@/components/Redux/jobSlice";

const AdminJobsTable = () => {
  useGetAllAdminJobs();
  const { companies, setSearchJobByText } = useSelector((store) => store.job);
  console.log("companies", companies);

  const [filterCompany, setFilterCompany] = useState(companies);

  const navigate = useNavigate();
  useEffect(() => {
    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!setSearchJobByText) {
          return true;
        }
        return company?.name
          ?.toLowerCase()
          .includes(setSearchJobByText.toLowerCase());
      });
    setFilterCompany(filteredCompany);
  }, [companies, setSearchJobByText]);
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Logo</TableHead>
            <TableHead className="text-right">Name</TableHead>
            <TableHead className="text-right">Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany?.map((company) => (
            <tr>
              <TableCell>
                <Avatar>
                  <AvatarImage src={company.logo} />
                </Avatar>
              </TableCell>
              <TableCell className="text-right">{company.name}</TableCell>
              <TableCell className="text-right">
                {company.createdAt.split("T")[0]}
              </TableCell>
              <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    <div
                      onClick={() =>
                        navigate(`/admin/companies/${company._id}`)
                      }
                      className="flex items-center gap-2 w-fit cursor-pointer"
                    >
                      <Edit2 className="w-4" />
                      <span>Edit</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
