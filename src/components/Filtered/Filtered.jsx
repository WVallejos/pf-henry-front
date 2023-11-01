/* import React, { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../../context/filter";
import { useDispatch, useSelector } from "react-redux";
import { getProperty } from "../../redux/products/productsActions";

export default function Filtered() {
  const { filters, setFilters } = useContext(FiltersContext);
  const { category, diet, flavor, weightType } = useSelector((state) => state.products);
  const [transitionApplied, setTransitionApplied] = useState(false);
  const dispatch = useDispatch()
  const [appear, setAppear] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const currentSelect = {
      ...filters,
      page: 1,
      [name]: value,
    };

    setFilters(currentSelect);
    setAppear(!appear);
  };

  const handleReset = () => {
    setFilters({
      orderBy: "",
      category: "",
      diet: "",
      flavor: "",
      weightType: "",
      weightMin: "",
      weightMax: "",
      page: 1,
      name: "",
    });
  };

  useEffect(() => {
    dispatch(getProperty('category'))
    dispatch(getProperty('diet'))
    dispatch(getProperty('flavor'))
    dispatch(getProperty('weight.type'))
    setTransitionApplied(true);
  }, []);

  const handleTransition = () => {
    setAppear(!appear);
  };

  return (
    <>
      <button
        onClick={handleTransition}
        className="sm:flex md:flex  lg:hidden xl:hidden sm:mb-100 rounded-sm bg-redFred-100 text-whiteFred-100 "
      >
        Filters
      </button>
      {appear ? (
        <div
          className={` md relative shadow-md px-5 text-blackFred-100 py-1 ml-4 mt-[80px] bg-graym font-bayon-bold w-[100%] h-[650px] ${
            transitionApplied
              ? "transform translate-x-0 transition-transform duration-500 ease-in-out"
              : "transform -translate-x-full"
          }`}
        >
          <span>
            <h2 className=" mb-[2px] mt-[0px] text-left">Sort by:</h2>
            <div className=" grid justify-between	">
              <h3 className=" my-[1px]  text-left">Name</h3>
              <select
                name="orderBy"
                onChange={handleChange}
                value={filters.orderBy}
                className=" w-[280px] h-[35px]"
              >
                <option value="">-----</option>
                <option value="title">A - Z</option>
                <option value="-title">Z - A</option>
              </select>
            </div>
            <div className=" grid justify-between	">
              <h3 className=" my-[1px]  text-left">Price</h3>
              <select
                name="orderBy"
                onChange={handleChange}
                value={filters.orderBy}
                className=" w-[280px] h-[35px]"
              >
                <option value="">-----</option>
                <option value="-price">Max - Min</option>
                <option value="price">Min - Max</option>
              </select>
            </div>
          </span>
          <span>
            <h2 className="mb-[2px] mt-[3px] text-left">Filter:</h2>
            <div className=" grid justify-between	">
              <h3 className=" my-[3px] text-left">Category</h3>
              <select
                name="category"
                onChange={handleChange}
                value={filters.category}
                className=" w-[280px] h-[35px]"
              >
                <option value="">All</option>
                <option value="food">Food</option>
                <option value="suplements">Suplements</option>
                <option value="beverages">Beverages</option>
                <option value="vitamins and minerals">Nutrients</option>
              </select>
            </div>

            <div className=" grid justify-between	">
              <h3 className=" my-[3px] text-left">Diet</h3>
              <select
                name="diet"
                onChange={handleChange}
                value={filters.diet}
                className="  w-[280px] h-[35px]"
              >
                <option value="">All</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="unespecified">unespecified</option>
              </select>
            </div>

            <div className=" grid justify-between	">
              <h3 className=" my-[3px] text-left">Weight Unit</h3>
              <select
                name="weightType"
                onChange={handleChange}
                value={filters.weightType}
                className=" w-[280px] h-[35px]"
              >
                <option value="">All</option>
                <option value="l">l</option>
                <option value="ml">ml</option>
                <option value="g">g</option>
                <option value="kg">kg</option>
              </select>
            </div>

            <div className=" grid justify-between	">
              <h3 className=" my-[3px] text-left">Weight</h3>
              <span className="flex space-x-[10px]">
                <input
                  name="weightMin"
                  onChange={handleChange}
                  id="weightMix"
                  type="number"
                  placeholder="Min"
                  className=" w-[128px] h-[35px] "
                />
                <input
                  name="weightMax"
                  onChange={handleChange}
                  id="weightMax"
                  type="number"
                  placeholder="Max"
                  className=" w-[128px] h-[35px] "
                />
              </span>
            </div>
            <div className=" grid justify-between	">
              <h3 className=" my-[3px] text-left">Price</h3>
              <span className="flex space-x-[10px]">
                <input
                  name="priceMin"
                  onChange={handleChange}
                  id="priceMin"
                  type="number"
                  placeholder="Min"
                  className=" w-[128px] h-[35px] "
                />
                <input
                  name="priceMax"
                  onChange={handleChange}
                  id="priceMax"
                  type="number"
                  placeholder="Max"
                  className=" w-[128px] h-[35px]"
                />
              </span>
            </div>
          </span>
          <button
            onClick={handleReset}
            className="	my-[25px] bg-redFred-100 text-[#121212] py-[8px] px-[24px] outline-none rounded-sm hover:border-transparent	"
          >
            Reset
          </button>
        </div>
      ) : null}

      <div
        className={`sm:hidden md:hidden relative shadow-md px-5 text-blackFred-100 py-1 ml-4 mt-[80px] bg-graym font-bayon-bold w-[280px] h-[650px] ${
          transitionApplied
            ? "transform translate-x-0 transition-transform duration-500 ease-in-out"
            : "transform -translate-x-full"
        }`}
      >
        <span>
          <h2 className=" mb-[2px] mt-[0px] text-left">Sort by:</h2>
          <div className=" grid justify-between	">
            <h3 className=" my-[1px]  text-left">Name</h3>
            <select
              name="orderBy"
              onChange={handleChange}
              value={filters.orderBy}
              className=" w-[280px] h-[35px]"
            >
              <option value="">-----</option>
              <option value="title">A - Z</option>
              <option value="-title">Z - A</option>
            </select>
          </div>
          <div className=" grid justify-between	">
            <h3 className=" my-[1px]  text-left">Price</h3>
            <select
              name="orderBy"
              onChange={handleChange}
              value={filters.orderBy}
              className=" w-[280px] h-[35px]"
            >
              <option value="">-----</option>
              <option value="-price">Max - Min</option>
              <option value="price">Min - Max</option>
            </select>
          </div>
        </span>
        <span>
          <h2 className="mb-[2px] mt-[3px] text-left">Filter:</h2>
          <div className=" grid justify-between	">
            <h3 className=" my-[3px] text-left">Category</h3>
            <select
              name="category"
              onChange={handleChange}
              value={filters.category}
              className=" w-[280px] h-[35px]"
            >
              <option value="">All</option>
              <option value="food">Food</option>
              <option value="suplements">Suplements</option>
              <option value="beverages">Beverages</option>
              <option value="vitamins and minerals">Nutrients</option>
            </select>
          </div>

          <div className=" grid justify-between	">
            <h3 className=" my-[3px] text-left">Diet</h3>
            <select
              name="diet"
              onChange={handleChange}
              value={filters.diet}
              className="  w-[280px] h-[35px]"
            >
              <option value="">All</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="unespecified">unespecified</option>
            </select>
          </div>

          <div className=" grid justify-between	">
            <h3 className=" my-[3px] text-left">Weight Unit</h3>
            <select
              name="weightType"
              onChange={handleChange}
              value={filters.weightType}
              className=" w-[280px] h-[35px]"
            >
              <option value="">All</option>
              <option value="l">l</option>
              <option value="ml">ml</option>
              <option value="g">g</option>
              <option value="kg">kg</option>
            </select>
          </div>

          <div className=" grid justify-between	">
            <h3 className=" my-[3px] text-left">Weight</h3>
            <span className="flex space-x-[10px]">
              <input
                name="weightMin"
                onChange={handleChange}
                id="weightMix"
                type="number"
                placeholder="Min"
                className=" w-[128px] h-[35px] "
              />
              <input
                name="weightMax"
                onChange={handleChange}
                id="weightMax"
                type="number"
                placeholder="Max"
                className=" w-[128px] h-[35px] "
              />
            </span>
          </div>
          <div className=" grid justify-between	">
            <h3 className=" my-[3px] text-left">Price</h3>
            <span className="flex space-x-[10px]">
              <input
                name="priceMin"
                onChange={handleChange}
                id="priceMin"
                type="number"
                placeholder="Min"
                className=" w-[128px] h-[35px] "
              />
              <input
                name="priceMax"
                onChange={handleChange}
                id="priceMax"
                type="number"
                placeholder="Max"
                className=" w-[128px] h-[35px]"
              />
            </span>
          </div>
        </span>
        <button
          onClick={handleReset}
          className="	my-[25px] bg-redFred-100 text-[#121212] py-[8px] px-[24px] outline-none rounded-sm hover:border-transparent	"
        >
          Reset
        </button>
      </div>
    </>
  );
}
 */

import React, { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../../context/filter";
import { useDispatch, useSelector } from "react-redux";
import { getProperty } from "../../redux/products/productsActions";

export default function Filtered() {
  const { filters, setFilters } = useContext(FiltersContext);
  const { category, diet, flavor, weightType } = useSelector((state) => state.products);
  const [transitionApplied, setTransitionApplied] = useState(false);
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const { name, value } = event.target;
    const currentSelect = {
      ...filters,
      page: 1,
      [name]: value,
    };

    setFilters(currentSelect);
  };

  const handleReset = () => {
    setFilters({
      orderBy: "",
      category: "",
      diet: "",
      flavor: "",
      weightType: "",
      weightMin: "",
      weightMax: "",
      page: 1,
      name: "",
    });
  };

  useEffect(() => {
    dispatch(getProperty('category'))
    dispatch(getProperty('diet'))
    dispatch(getProperty('flavor'))
    dispatch(getProperty('weight.type'))
    setTransitionApplied(true);
  }, []);

  return (
    <div className={`relative shadow-md px-5 text-blackFred-100 py-1 ml-4 mt-[80px] bg-graym font-bayon-bold w-[280px] h-[650px] ${transitionApplied ? 'transform translate-x-0 transition-transform duration-500 ease-in-out' : 'transform -translate-x-full'}`}>
      <span>
        <h2 className=" mb-[2px] mt-[0px] text-left" >Sort by:</h2>
        <div className=" grid justify-between	">
          <h3 className=" my-[1px]  text-left">Name</h3>
          <select name="orderBy" onChange={handleChange} value={filters.orderBy} className=" w-[280px] h-[35px]">
            <option value="">-----</option>
            <option value="title">A - Z</option>
            <option value="-title">Z - A</option>
          </select>
        </div>
        <div className=" grid justify-between	">
          <h3 className=" my-[1px]  text-left">Price</h3>
          <select name="orderBy" onChange={handleChange} value={filters.orderBy} className=" w-[280px] h-[35px]">
            <option value="">-----</option>
            <option value="-price">Max - Min</option>
            <option value="price">Min - Max</option>
          </select>
        </div>
      </span>
      <span> 
        <h2 className="mb-[2px] mt-[3px] text-left">Filter:</h2>            
        <div className=" grid justify-between	">
          <h3 className=" my-[3px] text-left">Category</h3>
          <select
            name="category"
            onChange={handleChange}
            value={filters.category}
            className=" w-[280px] h-[35px]"
          >
            <option value="">All</option>
            {category.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
          </select>
        </div>

        <div className=" grid justify-between	">
          <h3 className=" my-[3px] text-left">Diet</h3>
          <select name="diet" onChange={handleChange} value={filters.diet} className="  w-[280px] h-[35px]">
            <option value="">All</option>
            {diet.map((diet, index) => (
                            <option key={index} value={diet}>
                                {diet}
                            </option>
                        ))}
          </select>
        </div>
        
        <div className=" grid justify-between	">
          <h3 className=" my-[3px] text-left">Flavor</h3>
          <select name="flavor" onChange={handleChange} value={filters.flavor} className="  w-[280px] h-[35px]">
            <option value="">All</option>
            {flavor.map((flavor, index) => (
                            <option key={index} value={flavor}>
                                {flavor}
                            </option>
                        ))}
          </select>
        </div>

        <div className=" grid justify-between	">
          <h3 className=" my-[3px] text-left">Weight Unit</h3>
          <select
            name="weightType"
            onChange={handleChange}
            value={filters.weightType}
            className=" w-[280px] h-[35px]"
          >
            <option value="">All</option>
            {weightType.map((weight, index) => (
                            <option key={index} value={weight}>
                                {weight}
                            </option>
                        ))}
          </select>
        </div>

        <div className=" grid justify-between	">
          <h3 className=" my-[3px] text-left">Weight</h3>
          <span className="flex space-x-[10px]">            
            <input
              name="weightMin"
              onChange={handleChange}
              id="weightMix"
              type="number"
              placeholder="Min"
              className=" w-[128px] h-[35px] "
              />
            <input
              name="weightMax"
              onChange={handleChange}
              id="weightMax"
              type="number"
              placeholder="Max"
              className=" w-[128px] h-[35px] "
              />
            </span>
        </div>
        <div className=" grid justify-between	">
          <h3 className=" my-[3px] text-left">Price</h3>
          <span className="flex space-x-[10px]">            
            <input
              name="priceMin"
              onChange={handleChange}
              id="priceMin"
              type="number"
              placeholder="Min"
              className=" w-[128px] h-[35px] "
              />
            <input
              name="priceMax"
              onChange={handleChange}
              id="priceMax"
              type="number"
              placeholder="Max"
              className=" w-[128px] h-[35px]"
              />
            </span>
        </div>
      </span>
      <button onClick={handleReset} className="	my-[25px] bg-redFred-100 text-[#121212] py-[8px] px-[24px] outline-none rounded-sm hover:border-transparent	">Reset</button>
    </div>
  );
}


