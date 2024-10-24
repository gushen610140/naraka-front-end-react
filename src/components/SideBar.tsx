import { Button } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

export function SideBar() {
  const navigate = useNavigate();
  const buttonList = [
    {
      path: "/app",
      display: "开始",
    },
    {
      path: "/create",
      display: "创建房间",
    },
    {
      path: "/join",
      display: "加入房间",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] backdrop-blur-[12px] flex rounded-2xl flex-col gap-4 w-64 h-96 items-center m-2 p-2">
        <div className="flex mb-4 mt-4 justify-start w-10/12 gap-2 items-center">
          <img src="/logo.png" alt="logo" className="size-20" />
          <p className="text-2xl text-white">十四洲</p>
        </div>
        {buttonList.map((item, index) => (
          <Button
            className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-11/12 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
            key={index}
            onClick={() => {
              navigate(item.path);
            }}
          >
            {item.display}
          </Button>
        ))}
      </div>
    </>
  );
}
