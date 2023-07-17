import { Button } from "@mui/base";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between px-[30px] py-[12px] shadow-nav">
      <h1 className="text-big text-Logo font-bold5">Logo place</h1>
      <div className="flex flex-row gap-[10px] items-center">
        <div className="flex flex-row  gap-[10px]">
          <Button className="flex flex-col justify-center align-middle gap-2 text-FontBody text-normal font-bold5 py-[6px] px-[16px]">
            <Link href={"/"}>Blog</Link>
          </Button>
          <Button className="flex flex-col justify-center align-middle gap-2 text-FontBody text-normal font-bold5 py-[6px] px-[16px]">
            <Link href={"/"}>About us</Link>
          </Button>
          <Button className="flex flex-col justify-center align-middle gap-2 text-FontBody text-normal font-bold5 py-[6px] px-[16px]">
            <Link href={"/"}>Pricing</Link>
          </Button>
          <Button className="flex flex-col justify-center align-middle gap-2 text-FontBody text-normal font-bold5 py-[6px] px-[16px]">
            <Link href={"/"}>Products</Link>
          </Button>
        </div>
        <div className="">
          <svg
            width="2"
            height="27"
            viewBox="0 0 2 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Line 6"
              d="M1 1L0.999999 26"
              stroke="#E6E8EA"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <Button className="text-FontBody text-normal font-bold5">En</Button>
      </div>
    </div>
  );
}
