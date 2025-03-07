import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@prisma/client";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import AppUserTableActions from "./app-user-table-actions";
import { Check, X } from "lucide-react";

interface AppUserProps {
  users: User[];
}

const AppUserTable = (props: AppUserProps) => {
  const { users } = props;
  return (
    <Table>
      <TableCaption>Users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Avatar</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>E-Mail</TableHead>
          <TableHead>Superadmin</TableHead>
          <TableHead className="flex justify-end">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <Avatar>
                <AvatarImage src={user.image} asChild>
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={32}
                    height={32}
                  />
                </AvatarImage>
              </Avatar>
            </TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.superadmin ? <Check /> : <X />}</TableCell>
            <TableHead className="flex justify-end gap-4 mt-2">
              <AppUserTableActions
                id={user.id}
                notDeletable={user.superadmin}
              />
            </TableHead>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AppUserTable;
