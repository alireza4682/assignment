import { Button } from "@mui/base";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between px-[30px] py-[12px] shadow-nav">
      <h1 className="text-big text-Logo font-bold5">Logo place</h1>
      <div className="flex flex-row gap-[10px] items-center tracking-low">
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
        <Button className="flex flex-r0w gap-2 justify-center items-center py-[6px] px-[8px]">
          <div className="text-FontBody text-normal font-bold5">En</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M7.49985 11.5625C7.25997 11.5625 7.01997 11.4709 6.83716 11.2878L2.14966 6.60034C1.78345 6.23413 1.78345 5.64087 2.14966 5.27466C2.51587 4.90845 3.10913 4.90845 3.47534 5.27466L7.49985 9.30078L11.5252 5.27539C11.8915 4.90918 12.4847 4.90918 12.8509 5.27539C13.2171 5.6416 13.2171 6.23486 12.8509 6.60107L8.16343 11.2886C7.98032 11.4717 7.74009 11.5625 7.49985 11.5625Z"
              fill="#96999C"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
