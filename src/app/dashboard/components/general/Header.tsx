import { useAuth } from "@/app/context/auth-context";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import Image from "next/image";
import { useEffect } from "react";
import batman from "../../../../../public/batman.webp";
export default function Header() {
  const { user, logout } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="flex justify-between px-6 pt-5">
      <h2 className="text-gray-400 cursor-default select-none">
        Dashboard - DragonFly
      </h2>
      <div className="flex items-center justify-center gap-x-2 hover:scale-105 transition-all">
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIPFwQgaGGCj37FXKA6qkmXL7z8N7aYPLkw&s",
              }}
              className="transition-transform"
              description={user.sub}
              name={user.fullName}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-bold">Sesión iniciada como:</p>
              <p className="font-medium">{user.sub}</p>
            </DropdownItem>
            <DropdownItem key="settings">Mi perfil</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={() => logout()}>
              Cerrar Sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
