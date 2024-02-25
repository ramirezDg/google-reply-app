import { CgMenuGridR } from "react-icons/cg";
import { FaRegCircleUser } from "react-icons/fa6";

function Menu() {
    return (
        <div className="menuBar">
          <p><span className="menuBar--text__fb">Agile Content</span> Frontend test</p>
          <div className="menuBar--Items">
            <CgMenuGridR />
            <FaRegCircleUser />
          </div>
        </div>
    )
} 

export default Menu