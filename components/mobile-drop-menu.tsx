"use client";

import * as React from "react";

import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { pages } from "@/lib/pages";

export function MobileDropMenu() {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button">Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {pages.map((page) =>
          page.href ? (
            <DropdownMenuItem
              key={page.name}
              onClick={() => page.href && router.push(page.href)}
            >
              {page.name}
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              key={page.name}
              className="flex flex-col items-start"
            >
              {page.name}
              {page.children?.map((child) => (
                <DropdownMenuItem
                  key={child.name}
                  onClick={() => page.href && router.push(page.href)}
                  className="text-xs"
                >
                  {child.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuItem>
          ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
