import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function MenuDesktop() {
  return (
    <div className="">
      <ul className="flex gap-2 items-center">
        <li className="">
          <Link href="/">
            <span className="py-4 text-1xl font-bold ">Home</span>
          </Link>
        </li>
        <li className="">
          <Link href="/planos">
            <span className="py-4 text-1xl font-bold">Serviços</span>
          </Link>
        </li>
        <li className="">
          <Link href="/plans">
            <span className="py-4 text-1xl font-bold">Planos</span>
          </Link>
        </li>
        <li className="">
          <Link href="/servicos">
            <span className="py-4 text-1xl font-bold">Contato</span>
          </Link>
        </li>
        <li className="bg-orange-500 p-2 rounded text-center hover:bg-orange-400">
          <Link href="/login">
            <span className="py-4 text-1xl font-bold">Entrar no Sistema</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
