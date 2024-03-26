import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import { IoMdArrowDropdown } from "react-icons/io";

export function DropdownMenuDemo() {
  const { isAuthenticated, authenticateUser, setLoggout } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default">
          <IoMdArrowDropdown size={28} color="black" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-slate-300 text-black">
        <DropdownMenuLabel className="hover:bg-zinc cursor-pointer hover:bg-orange-500">
          Minha Conta
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer hover:bg-orange-500">
            Meu Perfil
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer hover:bg-orange-500">
            Planos
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer hover:bg-orange-500">
            Configurações
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer hover:bg-orange-500">
          Suporte
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={setLoggout} className="hover:bg-red-600">
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
