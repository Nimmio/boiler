"use client";

import React from "react";
import { Button } from "./ui/button";
import { BookOpen, Trash } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { redirect } from "next/navigation";
import Link from "next/link";

interface AppUserTableActionsProps {
  id: string;
  notDeletable?: boolean;
}

const AppUserTableActions = (props: AppUserTableActionsProps) => {
  const { id, notDeletable } = props;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={`users/view/${id}`}>
            <Button>
              <BookOpen />
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>View User</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={"destructive"} disabled={notDeletable}>
            <Trash />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Delete User</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AppUserTableActions;
