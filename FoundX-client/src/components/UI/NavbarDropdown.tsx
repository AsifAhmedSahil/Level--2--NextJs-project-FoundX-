/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
'use client'
import { useUser } from "@/src/context/user.provider"
import { logout } from "@/src/services/AuthService"
import { Avatar } from "@nextui-org/avatar"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown"
import { useRouter } from "next/navigation"
import { toast } from "sonner"


const NavbarDropdown = () => {
    const router = useRouter()
    const {setIsLoading,user} = useUser()

    const handleLogout = () =>{
      logout()
      setIsLoading(true)
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
        <DropdownItem onClick={() => handleNavigation("/profile/create-posts")} >Create Post</DropdownItem>
        <DropdownItem onClick={() => handleLogout()} key="delete" className="text-danger" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default NavbarDropdown