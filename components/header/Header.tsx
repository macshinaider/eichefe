"use client";
import { useState } from "react";
import MenuMobile from "./menumobile";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuDesktop from "./menudesktop";
import Link from "next/link";

export default function Header() {
  const [ismenu, setIsmenu] = useState<boolean>(false);
  return (
    <header className="flex relative justify-between items-center p-2 shadow h-20">
      <h1>eiChefe</h1>

      {ismenu ? (
        ""
      ) : (
        <div className="flex gap-4 md:hidden">
          <div className="bg-orange-500 p-2 rounded text-center hover:bg-orange-400">
            <Link href="/login">
              <span className="py-4 text-1xl font-bold">Entrar no Sistema</span>
            </Link>
          </div>
          <GiHamburgerMenu
            size={45}
            onClick={() => setIsmenu(!ismenu)}
            className="md:hidden"
          />
        </div>
      )}
      <div className="md:flex hidden">
        <MenuDesktop />
      </div>

      {ismenu ? <MenuMobile ismenu={ismenu} setIsmenu={setIsmenu} /> : ""}
    </header>
  );
}
