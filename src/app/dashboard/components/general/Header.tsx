import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
import batman from "../../../../../public/batman.webp";
export default function Header() {
    return (
        <div className="flex justify-between px-6 pt-5">
            <h2 className="text-gray-400 cursor-default select-none">Dashboard - DragonFly</h2>
            <div className="flex items-center justify-center gap-x-2">
                {/* TODO: Debemos utilizar datos reales, luego usando el contexto de autenticación */}
                <Image
                    src={batman}
                    alt="Diego Cedrón"
                    width={30}
                    height={30}
                    className="rounded-full"
                />
                <div className="flex items-center justify-center gap-x-1 cursor-pointer">
                    <h2 className="text-gray-500">Diego Cedrón</h2>
                    <FaCaretDown className="text-gray-500" />
                </div>
            </div>
        </div>
    )
}
