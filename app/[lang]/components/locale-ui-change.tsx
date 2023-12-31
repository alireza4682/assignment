"use client";
import { ClickAwayListener, Button } from "@mui/base";
import LocaleSwitcher from "./locale-switcher";
import { useState } from "react";
import { usePathname } from "next/navigation";

const ChangeLange = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  function onClickLocal() {
    setOpen(!open);
  }
  return (
    <div>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Button
          className="flex flex-row gap-2 justify-center items-center py-[6px] px-[8px]"
          onClick={onClickLocal}
        >
          <div className="text-FontBody text-normal font-bold5">
            {pathName === "/en" ? "En" : "فا"}
          </div>
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
      </ClickAwayListener>
      {open && (
        <div className="absolute top-[37px] right-2 mt-6">
          <LocaleSwitcher />
        </div>
      )}
    </div>
  );
};
export default ChangeLange;
