/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
'use client'
import { Avatar } from "@nextui-org/avatar"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown"
import { usePathname, useRouter } from "next/navigation"
import { toast } from "sonner"

import { logout } from "@/src/services/AuthService"
import { useUser } from "@/src/context/user.provider"
import { protectedRoute } from "@/src/constants"


const NavbarDropdown = () => {
    const router = useRouter()
    const pathName = usePathname()
    const {setIsLoading,user} = useUser()

    const handleLogout = () =>{
      logout()
      setIsLoading(true)

      if(protectedRoute.some((route)=> pathName.match(route))){
        router.push("/")
      }

      toast.success("User Logged Out Successfully")

    }
    const handleNavigation = (pathName:string) =>{
        router.push(pathName)

    }
  return (
    <Dropdown>
      <DropdownTrigger>
      <Avatar  src={user?.profilePhoto}/>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleNavigation("/profile")} >Profile</DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/profile/settings")} >Setting</DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/profile/create-post")} >Create Post</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger" onClick={() => handleLogout()}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default NavbarDropdown