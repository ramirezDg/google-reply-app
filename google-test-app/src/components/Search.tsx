import { CiSearch } from "react-icons/ci"

function Search() {
    return (
        <label htmlFor="#" className="Search">
            <input type="text" placeholder='' className="Search--Input"/>
            <span className="Search--input--search-icon"><CiSearch className="search-icon"/></span>
        </label>
    )
}

export default Search