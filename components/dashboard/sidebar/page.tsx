"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { PiNotepad } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";

const SideBarDashboard = () => {
  const [menuisopen, setMenuisopen] = useState<boolean>(true);

  function MenuOpen() {
    setMenuisopen(!menuisopen);
  }

  const menuw = menuisopen ? "w-72" : "w-14";

  return (
    <div className="transition-all delay-150 duration-300">
      <div
        className={`transition-all  delay-350 flex h-screen justify-between inset-y-0 left-0 flex-col bg-gray-200 text-gray-800 ${menuw} px-4 py-4`}
      >
        {menuisopen ? (
          <>
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold mb-2">Menu</h2>
              <FaArrowLeft
                size={28}
                onClick={MenuOpen}
                className="cursor-pointer"
              />
            </div>

            <nav className="flex flex-col gap-6">
              <Link href="/cadastro">
                <span className="py-4 text-2xl font-bold md:text-xl">
                  Gerenciar Produtos
                </span>
              </Link>
              <Link href="/plans">
                <span className="py-4 text-2xl font-bold md:text-xl">
                  Gerenciar Mesas
                </span>
              </Link>
              <Link href="/plans">
                <span className="py-4 text-2xl font-bold md:text-xl">
                  Gerenciar Cozinha
                </span>
              </Link>
              <Link href="/plans">
                <span className="py-4 text-2xl font-bold md:text-xl">
                  Gerenciar Garcons
                </span>
              </Link>
              <Link href="/plans">
                <span className="py-4 text-2xl font-bold md:text-xl">
                  Gerenciar WhatsApp
                </span>
              </Link>
            </nav>

            <button className="text-white">teste</button>
          </>
        ) : (
          <>
            <div className="">
              <FaArrowRight
                size={28}
                onClick={MenuOpen}
                className="cursor-pointer"
              />
            </div>

            <nav className="flex flex-col gap-4">
              <Link href="/teste">
                <FaProductHunt size={28} />
              </Link>
              <Link href="/teste">
                <MdOutlineTableRestaurant size={28} />
              </Link>
              <Link href="/teste">
                <TbToolsKitchen2 size={28} />
              </Link>
              <Link href="/teste">
                <PiNotepad size={28} />
              </Link>
              <Link href="/teste">
                <BsWhatsapp  size={28} />
              </Link>
            </nav>
            <h1>teste</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default SideBarDashboard;
