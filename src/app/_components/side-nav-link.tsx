"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SideNavLinkProps {
  children: ReactNode;
  href: string;
  disabled?: boolean;
}

export function SideNavLink({ children, href, disabled }: SideNavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: pathname === href ? "default" : "ghost" }),
        "disabled:pointer-events-none disabled:opacity-50"
      )}
      aria-disabled={disabled}
    >
      {children}
    </Link>
  );
}
