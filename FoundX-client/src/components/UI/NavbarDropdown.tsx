/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
'use client'
import { Avatar } from "@nextui-org/avatar"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown"
import { useRouter } from "next/navigation"


const NavbarDropdown = () => {
    const router = useRouter()
    const handleNavigation = (pathName:string) =>{
        router.push(pathName)

    }
  return (
    <Dropdown>
      <DropdownTrigger>
      <Avatar name="asif"/>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleNavigation("/profile")} >Profile</DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/profile/settings")} >Setting</DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/profile/create-posts")} >Create Post</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default NavbarDropdown