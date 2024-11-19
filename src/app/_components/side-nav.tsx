import { SideNavLinks } from "./side-nav-links";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import avatarImage from "../../../public/avatar.jpg";

export function SideNav() {
  return (
    <div className="w-full h-full max-h-screen sticky top-0 flex flex-col border-r">
      <div className="font-vt323 text-center px-std-content text-2xl h-std-forehead flex justify-between items-center gap-x-std-md">
        <div
          className="rounded-full overflow-hidden aspect-square
       size-8 "
        >
          <Image
            src={avatarImage.src}
            width={50}
            height={50}
            alt="Avatar Picture of Jason Procka"
            priority
            className="h-full"
          />
        </div>
        <span>Jason Procka</span>
      </div>
      <Separator />
      <div className="py-std-content">
        <SideNavLinks />
      </div>
    </div>
  );
}
