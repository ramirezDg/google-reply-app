import { CgMenuGridR } from "react-icons/cg";
import { FaRegCircleUser } from "react-icons/fa6";

function Menu() {
    return (
        <div className="border-b-2 flex items-center justify-between py-3 px-4 text-center">
          <p className="font-light"><span className="font-medium">Agile Content</span> Frontend test</p>
          <div className="flex items-center justify-center">
            <CgMenuGridR className="text-gray-500 text-xl"/>
            <FaRegCircleUser  className="ml-2 text-2xl"/>
          </div>
        </div>
    )
} 

export default Menu