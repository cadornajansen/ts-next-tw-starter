import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center py-10 justify-between">
      <div>
        <span className="inline-flex items-center gap-2">
          Give it a{" "}
          <Image
            className="inline h-5 w-5"
            width={200}
            height={200}
            src="https://img.icons8.com/ios-glyphs/ffffff/200/star--v1.png"
            alt="star--v1"
          />
          star on{" "}
          <Link
            className="font-medium hover:-translate-y-1 duration-150 ease-in-out"
            href="https://github.com/cadornajansen/ts-next-tw-starter"
          >
            Github
          </Link>
        </span>
      </div>
      <div>
        <Link
          className="inline-flex items-center gap-1"
          href="https://icons8.com"
        >
          Icons by{" "}
          <Image
            className="inline h-7 w-7"
            width={200}
            height={200}
            src="https://img.icons8.com/color/200/icons8-new-logo.png"
            alt="icons8-logo"
          />
          Icons8
        </Link>
      </div>
    </footer>
  );
}
