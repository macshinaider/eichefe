import Link from "next/link";
import { IoClose } from "react-icons/io5";

interface IMenu {
  ismenu: boolean;
  setIsmenu: Function;
}

export default function MenuMobile({ ismenu, setIsmenu }: IMenu) {
  return (
    <div className="fixed right-0 top-0 bottom-0 overflow-y-auto p-4 flex flex-col w-[80%] transition-all duration-200 ease-in-out md:w-80 md:left-auto md:fixed md:top-0 md:bottom-auto md:overflow-hidden md:z-50 bg-slate-700 gap-20">
      <div className="flex flex-row-reverse" onClick={() => setIsmenu(!ismenu)}>
        <IoClose size={32} className="flex self-end" />
      </div>
      <ul className="flex flex-col gap-6">
        <li className="border-b border-slate-600 hover:bg-slate-600 hover:text-slate-200 md:hover:bg-transparent md:hover:text-slate-900">
          <Link href="/">
            <span className="py-4 text-2xl font-bold md:text-xl">Home</span>
          </Link>
        </li>
        <li className="border-b border-slate-600 hover:bg-slate-600 hover:text-slate-200 md:hover:bg-transparent md:hover:text-slate-900">
          <Link href="/planos">
            <span className="py-4 text-2xl font-bold">Serviços</span>
          </Link>
        </li>
        <li className="border-b hover:bg-slate-600 hover:text-slate-200 md:hover:bg-transparent md:hover:text-slate-900">
          <Link href="/plans">
            <span className="py-4 text-2xl font-bold">Planos</span>
          </Link>
        </li>
        <li className="border-b hover:bg-slate-600 hover:text-slate-200 md:hover:bg-transparent md:hover:text-slate-900">
          <Link href="/servicos">
            <span className="py-4 text-2xl font-bold">Contato</span>
          </Link>
        </li>
        <li className="bg-orange-500 p-2 rounded text-center">
          <Link href="/login">
            <span className="py-4 text-2xl font-bold">Entrar no Sistema</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
