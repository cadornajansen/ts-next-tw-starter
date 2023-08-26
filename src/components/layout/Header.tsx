import Link from "next/link";
import Image from "next/image";
import NextJSIcon from "../icons/next";

export default function Header() {
  const navLinks = [
    {
      label: "Docs",
      href: "https://nextjs.org/docs",
    },
    {
      label: "Github",
      href: "",
    },
    {
      label: "Learn",
      href: "https://nextjs.org/learn",
    },
  ];

  return (
    <header className="grid  grid-cols-2 sm:grid-cols-3 py-10 justify-between items-center">
      <div className="flex items-center gap-3">
        <NextJSIcon />
      </div>
      <nav className="hidden sm:flex items-center mx-auto">
        <ul className="flex items-center gap-5">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="font-medium hover:text-white/60 duration-200 ease-in-out"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-end">
        <Link
          className="flex items-center gap-3 border border-white/40 py-2.5 px-4 rounded text-sm font-medium"
          href="https://vercel.com/new"
        >
          <svg
            className="w-auto overflow-visivle inline"
            aria-label="Vercel logomark"
            height="13"
            role="img"
            viewBox="0 0 74 64"
          >
            <path
              d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
              fill="currentColor"
            ></path>
          </svg>
          Deploy
        </Link>
      </div>
    </header>
  );
}
