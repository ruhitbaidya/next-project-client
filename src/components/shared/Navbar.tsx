"use client";
import Logo from "./Logo";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { logOut } from "@/services/AuthServices";
import { UseUser } from "@/context/AuthContext";
const Navbar = () => {
  const { user, setLoading } = UseUser();
  const handelLout = () => {
    logOut();
    setLoading(true);
  };
  return (
    <div className="py-[10px] border-b-2 bg-gray-100">
      <div className="container  mx-auto px-[10px]">
        <div className="flex justify-between items-center gap-[30px]">
          <div className="w-[20%]">
            <Logo />
          </div>
          <div className="w-[40%]">
            <form>
              <div className="relative">
                <div className="absolute top-1 left-1">
                  <select
                    name=""
                    id=""
                    className="p-[8px] px-[10px] bg-gray-200 rounded-full"
                  >
                    <option>--select--</option>
                    <option value="fills">Filles</option>
                    <option value="sharts">Sharts</option>
                    <option value="founder">Founder</option>
                  </select>
                </div>
                <div>
                  <input
                    className="w-full p-[10px] pl-[120px] rounded-full focus:outline-none"
                    type="text"
                    placeholder="Search"
                  />
                </div>
                <div className="absolute top-2 right-2">
                  <button className="bg-black text-white p-[5px] rounded-full">
                    <FaSearch size={20} />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-[40%] flex justify-center items-center">
            <div className="flex items-center gap-[10px]">
              <button className="border p-[10px] rounded-full">
                <CiHeart size={25} />
              </button>
              <button className="border p-[10px] rounded-full">
                <MdOutlineShoppingCart size={25} />
              </button>
              {user ? (
                <>
                  <button className="border p-[10px] rounded-full px-[20px]">
                    Create Shop
                  </button>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Dashboard</DropdownMenuItem>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>My Shop</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handelLout}>
                        <LogOut />
                        <span>LogOut</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <button className="border p-[10px] rounded-full px-[20px]">
                      LogIn
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
