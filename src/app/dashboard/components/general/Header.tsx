import { useAuth } from "@/app/context/auth-context";
import Image from "next/image";
import { BiExit } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import batman from "../../../../../public/batman.webp";
export default function Header() {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between px-6 pt-5">
      <h2 className="text-gray-400 cursor-default select-none">
        Dashboard - DragonFly
      </h2>
      <div className="flex items-center justify-center gap-x-2">
        <Image
          src={batman}
          alt="Diego Cedrón"
          width={30}
          height={30}
          className="rounded-full"
        />
        <div className="flex items-center justify-center gap-x-1 cursor-pointer">
          <h2 className="text-gray-500">{user.fullName}</h2>
          <FaCaretDown className="text-gray-500" />
          <BiExit className="text-gray-500" onClick={logout} />
        </div>
      </div>
    </div>
  );
}
