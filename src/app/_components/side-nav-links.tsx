import { SideNavLink } from "./side-nav-link";

const LINKS = [
  {
    label: "~/",
    path: "/",
  },
  {
    label: "~/projects",
    path: "/projects",
  },
  {
    label: "~/contact-me",
    path: "/contact-me",
  },
];

export function SideNavLinks() {
  return (
    <ul className="text-left px-7 gap-y-1 flex flex-col">
      {LINKS.map((link, index) => (
        <li key={index}>
          <SideNavLink href={link.path}>{link.label}</SideNavLink>
        </li>
      ))}
    </ul>
  );
}
