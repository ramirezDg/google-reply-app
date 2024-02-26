import { CiSearch } from "react-icons/ci";
import google from "../images/Google_2015_logo.svg";
import BtnSearch from "./BtnSearch";
import { useState } from "react";

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    console.log(value)
    setIsActive(value.length > 0);
  };

  const handleButtonClick = () => {
    // Puedes acceder al valor actual del input utilizando el estado inputValue
    console.log('Valor del input:', inputValue);

    // Lógica adicional aquí si es necesario
  };


  return (
    
        <div className="flex flex-col items-center">
      <label htmlFor="Search" className="block">
        <img src={google} alt="Logo-Google.svg" className="m-auto" />
      </label>
      <div className="relative mt-2 shadow-sm ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">
            <CiSearch />
          </span>
        </div>
        <input
          type="text"
          name="Search"
          id="Search"
          className="block w-80 rounded-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-6">
        <BtnSearch
          isActive={isActive}
          onClick={handleButtonClick}
        >Buscar</BtnSearch>
      </div>
    </div>

  );
}

export default Search;
