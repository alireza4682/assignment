import { Button } from "@mui/base";
import Link from "next/link";
import Image from "next/image";
import QRImage from "../../../public/MM_QRcode1.png";
import GoogleImage from "../../../public/search1.png";

export const Main = () => {
  return (
    <div className="shadow-card py-[30px] px-[40px] rounded-[5px] mt-[97px] w-fit bg-cardLight">
      <h1 className="text-extraBig text-FontPrimary font-bold7">
        Login to Iran source
      </h1>
      <div className="flex flex-row gap-[40px] mt-[22px]">
        <div className="w-1/2 ">
          <form className="border-b-2 border-Stroke2">
            <div className="flex flex-row gap-[10px] items-center rounded-[3px] border px-4 py-2">
              <svg
                className="text-FontDisable"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="envelope 2">
                  <path
                    id="Vector"
                    d="M16.3125 2.75C17.2441 2.75 18 3.50551 18 4.4375C18 4.96836 17.7504 5.46758 17.325 5.7875L9.675 11.525C9.27422 11.8238 8.72578 11.8238 8.325 11.525L0.675 5.7875C0.250066 5.46758 0 4.96836 0 4.4375C0 3.50551 0.755508 2.75 1.6875 2.75H16.3125ZM7.65 12.425C8.45156 13.0262 9.54844 13.0262 10.35 12.425L18 6.6875V14C18 15.241 16.991 16.25 15.75 16.25H2.25C1.00723 16.25 0 15.241 0 14V6.6875L7.65 12.425Z"
                    fill="#96999C"
                  />
                </g>
              </svg>
              <input
                className="placeholder:text-FontTitle placeholder:font-normal4 placeholder:text-normal outline-none w-full bg-cardLight"
                placeholder="Email address or Username"
                type="password"
              />
            </div>
            <div className="flex flex-row justify-between items-center rounded-[3px] border px-4 py-2 mt-[20px]">
              <div className="flex flex-row gap-[10px] items-center ">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="lock-keyhole" clipPath="url(#clip0_67_43)">
                    <path
                      id="Vector"
                      d="M9.375 0.5C12.1699 0.5 14.4375 2.76652 14.4375 5.5625V7.25H15C16.241 7.25 17.25 8.25898 17.25 9.5V16.25C17.25 17.491 16.241 18.5 15 18.5H3.75C2.50723 18.5 1.5 17.491 1.5 16.25V9.5C1.5 8.25898 2.50723 7.25 3.75 7.25H4.3125V5.5625C4.3125 2.76652 6.58008 0.5 9.375 0.5ZM9.375 2.75C7.82109 2.75 6.5625 4.0093 6.5625 5.5625V7.25H12.1875V5.5625C12.1875 4.0093 10.9289 2.75 9.375 2.75ZM10.5 11.75C10.5 11.1277 9.99727 10.625 9.375 10.625C8.75273 10.625 8.25 11.1277 8.25 11.75V14C8.25 14.6223 8.75273 15.125 9.375 15.125C9.99727 15.125 10.5 14.6223 10.5 14V11.75Z"
                      fill="#96999C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_67_43">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <input
                  className="placeholder:text-FontTitle placeholder:font-normal4 placeholder:text-normal outline-none w-full bg-cardLight"
                  placeholder="Password"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M4.63523 5.06019C5.77734 4.20105 7.24171 3.54687 9 3.54687C11.0831 3.54687 12.7512 4.46427 13.9655 5.554C15.172 6.63476 15.979 7.90727 16.3605 8.8187C16.4456 9.01543 16.4456 9.23457 16.3605 9.43129C16.0151 10.2356 15.3216 11.3687 14.3006 12.3797L17.0128 14.4317C17.2809 14.6359 17.3299 15.0119 17.1185 15.2709C16.9071 15.5299 16.5178 15.5772 16.2497 15.373L0.98708 3.81806C0.71813 3.61436 0.670976 3.23883 0.881789 2.979C1.09263 2.71922 1.48141 2.67367 1.75057 2.8773L4.63523 5.06019ZM5.64328 5.82543L6.82921 6.72192C7.40929 6.23383 8.16984 5.9375 9 5.9375C10.8227 5.9375 12.3 7.3644 12.3 9.125C12.3 9.65293 12.1685 10.1485 11.9339 10.5868L13.3209 11.6376C14.1846 10.7885 14.824 9.79985 15.1514 9.125C14.7776 8.35551 14.115 7.31958 13.1224 6.42807C12.0628 5.47929 10.6809 4.71977 9 4.71977C7.69804 4.71977 6.55336 5.1837 5.64328 5.82543ZM10.931 9.82724C11.0161 9.6081 11.0625 9.37153 11.0625 9.10258C11.0625 8.02431 10.1395 7.1104 9 7.1104C8.98195 7.1104 8.96648 7.13281 8.92523 7.13281C8.98195 7.25981 9 7.39428 9 7.50883C9 7.78525 8.93812 8.02431 8.82984 8.23598L10.931 9.82724ZM11.1734 13.072L12.2536 13.8938C11.3177 14.3819 10.2323 14.7031 9 14.7031C6.91687 14.7031 5.24882 13.7867 4.03453 12.696C2.82848 11.5928 2.02204 10.3203 1.63842 9.43129C1.55385 9.23457 1.55385 9.01543 1.63842 8.8187C1.88437 8.24843 2.30435 7.51132 2.89216 6.77172L3.86437 7.51132C3.38226 8.09155 3.06412 8.66679 2.84988 9.10258C3.19973 9.87207 3.885 10.9304 4.87757 11.8219C5.93718 12.7707 7.31906 13.5078 9 13.5078C9.79148 13.5078 10.5159 13.3435 11.1734 13.072ZM5.7 9.10258C5.7 9.05278 5.70257 8.98305 5.70773 8.91333L7.15406 10.014C7.42476 10.5394 7.93007 10.9329 8.53593 11.045L9.98484 12.1681C9.67289 12.2403 9.34289 12.3125 8.97679 12.3125C7.17726 12.3125 5.67679 10.8856 5.67679 9.10258H5.7Z"
                  fill="#96999C"
                />
              </svg>
            </div>
            <div className="text-[11px] text-FontTitle">
              At least 8 characters
            </div>
            <Button
              type="submit"
              className="text-center text-Buttonfont text-normal bg-ButtonPrimary w-full font-bold7 tracking-high py-2 rounded-[3px] mt-[25px]"
            >
              Log in
            </Button>
            <div className="my-[15px]">
              <Link
                className=" text-small text-FontDark tracking-high"
                href={"/"}
              >
                Forgot your password?
              </Link>
            </div>
          </form>
          <Button
            type="submit"
            className="flex flex-row justify-center items-center gap-4  bg-Google w-full  py-2 rounded-[3px] my-[20px]"
          >
            <Image src={GoogleImage} width={18} height={18} alt="GoogleImage" />
            <div className=" tracking-high font-bold5 text-normal text-Logo">
              Login with google
            </div>
          </Button>
          <div className="text-FontBody text-small tracking-high font-normal4 flex flex-row gap-[5px] mb-[10px]">
            <div>Don't have account?</div>
            <div className="text-signUp">
              <Link href={"/"}>Sign up</Link>
            </div>
          </div>
        </div>
        <div className="shadow-QR px-[50px] py-[40px] flex flex-col items-center gap-[15px] w-1/2">
          <div>
            <Image src={QRImage} width={179} height={179} alt="QR" />
          </div>
          <h1 className="font-bold5 text-Logo text-normal tracking-low">
            Log in with QR code
          </h1>
          <p className="text-FontTitle text-center px-8">
            Scan this code with your mobile to log in.Lorem ipsum dolor sit
            amet,
          </p>
        </div>
      </div>
    </div>
  );
};
