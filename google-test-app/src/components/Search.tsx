import { CiSearch } from "react-icons/ci";
import google from "../images/Google_2015_logo.svg";
import BtnSearch from "./BtnSearch";

function Search() {
  return (
    <>
        <div className="flex-col mx-80">
      <label htmlFor="Search" className="block">
        <img src={google} alt="Logo-Google.svg" className="m-auto" />
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">
            <CiSearch />
          </span>
        </div>
        <input
          type="text"
          name="Search"
          id="Search"
          className="block w-full rounded-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder=""
        />
      </div>
      <div className="mt-6">
        <BtnSearch>Buscar</BtnSearch>
      </div>
    </div>
    
    </>
  );
}

export default Search;
