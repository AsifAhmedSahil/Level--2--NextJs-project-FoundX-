/* eslint-disable import/order */
/* eslint-disable prettier/prettier */

import Container from "@/src/components/UI/Container"
import Sidebar from "@/src/components/UI/Sidebar"
import { ReactNode } from "react"


const layout = ({children}:{children:ReactNode}) => {
  return (
    <Container>
      <div className="w-full my-12 flex gap-12">
        <div className="w-2/5">
          {/* sidebar */}
          <Sidebar/>
        </div>
        <div className="3/5">
        {children}
        </div>

      </div>
    </Container>
  )
}

export default layout