"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../../i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex flex-col  bg-cardDark shadow-nav rounded-[3px]">
      <p className="text-FontPrimary text-[16px] bg-cardDark font-bold5 p-4">
        Website Language
      </p>
      <Link
        href={redirectedPathName(i18n.locales[0])}
        className=" text-normal text-FontPrimary bg-background p-4"
      >
        English
      </Link>
      <Link
        href={redirectedPathName(i18n.locales[1])}
        className=" text-normal text-FontBody p-4"
      >
        Farsi
      </Link>
    </div>
  );
}
