import React from "react";
import Image from "next/image";
import logo from "../../../../public/logo.jpg";
import { useRouter } from "next/router";

const Navbar = () => {
  const route = useRouter();
  const menu = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Lowongan",
      route: "/lowongan",
    },
  ];

  return (
    <div className="max-w-full sticky top-0 right-0 z-50 flex shadow-md bg-white px-[120px]">
      <div className="min-h-[80px] min-w-[1200px] flex justify-between">
        <div
          onClick={() => {
            route.push("/");
          }}
          className="max-h-full py-3 flex items-center cursor-pointer"
        >
          <Image src={logo} alt="logo" width={80} height={80}></Image>
        </div>
        <div className="flex gap-8 h-full items-center">
          {menu.map((item) => {
            return (
              <>
                <a href={item?.route}>
                  <h1 className="text-xl text-primary font-semibold leading-6 cursor-pointer">
                    {item?.label}
                  </h1>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
