import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

interface ForeheadProps {
  title?: string;
  children?: ReactNode;
}

export function Forehead({ title, children }: ForeheadProps) {
  return (
    <>
      <div className="h-std-forehead flex items-center px-std-content gap-x-std-sm">
        {title && <h1 className="font-vt323 text-xl">{title}</h1>}
        {children}
      </div>
      <Separator />
    </>
  );
}
