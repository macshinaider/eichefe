"use client";
import AvatarDemo from "@/components/Extras/Avatar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { DropdownMenuDemo } from "./profile";


const HeaderDashboard = () => {
 

  return (
    <div className="flex bg-white h-16 w-[100%] items-center justify-end">
      <AvatarDemo />
      <DropdownMenuDemo />
    </div>
  );
};

export default HeaderDashboard;
