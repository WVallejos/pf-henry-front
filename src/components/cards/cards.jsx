import React, { useState, useEffect } from "react";
import { Card } from "../card/card";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, getProductFiltered } from "../../redux/products/productsActions"; // Importa tus acciones
import { setCurrentPage, startLoading, stopLoading } from "../../redux/products/productSlice"; // Importa la acción setCurrentPage
import Loader from "../loader/loaer";
import NotFound from "../notFound/notFound";

export function Cards() {
  const { products, currentPage, totalPages, query, searchByName, isLoading } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  let elements = [];

  useEffect(() => {
    dispatch(startLoading());

    // Simula una carga asincrónica
    setTimeout(() => {
      dispatch(stopLoading());
    }, 3000);
  }, [products, currentPage]);

  {
    for (let i = 0; i < Number(totalPages); i++) {
      elements.push(
        <button
          key={i}
          onClick={() => dispatch(getProductFiltered(`${query}&${searchByName}&page=${i + 1}`))}
          className={i + 1 === currentPage ? "active" : ""}
        >
          {i + 1}
        </button>
      );
    }
  }

  return (
    <div className="mx-[auto]">
      {isLoading ? <Loader /> : (
        <div className="flex items-center flex-row flex-wrap w-[70vw]  gap-[100px]">
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product._id}
                id={product._id}
                image={product.image ?? null}
                title={product.title}
                category={product.category}
                price={product.price}
              />
            ))
          ) : (
            <NotFound/>
          )}
        </div>
      )}
      <div className="mt-[200px]">
        <input
          type="button"
          value="Prev"
          name="Prev"
          onClick={() => {
            dispatch(getProductFiltered(`${query}&${searchByName}&page=${currentPage - 1}`));
          }}
          disabled={currentPage === 1}
        />

        {elements}

        <input
          type="button"
          value="Next"
          name="Next"
          onClick={() => {
            dispatch(getProductFiltered(`${query}&${searchByName}&page=${currentPage + 1}`));
          }}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
}