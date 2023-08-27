import { useState } from "react";
import products from "../data/products.json";

function modal() {
  window.my_modal_2.showModal();
}

function shortenString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  } else {
    return str;
  }
}

// Products Components
function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Step 1: Add search query state
  const productsPerPage = 6;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
    setCurrentPage(1);
  };

  const filteredProducts = selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory);

  // Search Functions
  const filteredBySearch = filteredProducts.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const totalProducts = filteredBySearch.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredBySearch.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => {
    if (currentProducts.length === productsPerPage && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value); // Step 2: Update search query state
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // You can perform additional search-related actions here if needed
  };

  // Extract unique categories from products data
  const uniqueCategories = [...new Set(products.map((product) => product.category))];

  // Function to Fix Case
  function toProperCase(inputString) {
    return inputString
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  // Dynamically render filtering buttons
  const categoryButtons = uniqueCategories.map((category, index) => (
    <button
      key={index}
      onClick={() => handleCategorySelect(category)}
      className={`text-xs min-w-[125px] py-2 px-4 outline outline-1 outline-blue-600 font-bold rounded-full ${selectedCategory === category ? "bg-blue-600 text-white outline-none" : "text-blue-700"}`}
    >
      {toProperCase(category)}
    </button>
  ));

  return (
    <div className="flex flex-col items-center px-5 lg:px-16 py-20 min-h-screen">
      <h2 className="text-4xl font-bold mb-3">Our Products</h2>
      <p className="mb-7 text-gray-400">These are our products:</p>

      {/* Category Section */}
      <div className="flex lg:justify-center w-full overflow-x-scroll lg:overflow-x-auto gap-x-5 mb-8 py-2 px-2">
        <button
          onClick={() => handleCategorySelect("all")}
          className={`text-xs min-w-[125px] py-2 px-5 outline outline-1 outline-blue-600 font-bold rounded-full ${selectedCategory === "all" ? "bg-blue-600 text-white outline-none" : "text-blue-700"}`}
        >
          All Categories
        </button>
        {categoryButtons}
      </div>

      {/* Filtering */}
      <div className="w-[85%] flex flex-col-reverse gap-y-5 md:flex-row justify-between items-center mb-10">
        {/* Pagination */}
        <div className="flex justify-center items-center gap-x-5">
          {currentPage > 1 ? (
            <button onClick={prevPage} className="bg-blue-600 p-2 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M8 12L14 6V18L8 12Z" fill="rgba(255,255,255,1)"></path>
              </svg>
            </button>
          ) : (
            <button className="opacity-40 cursor-not-allowed bg-gray-400 text-white p-2 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M8 12L14 6V18L8 12Z" fill="rgba(255,255,255,1)"></path>
              </svg>
            </button>
          )}
          <span className="text-blue-700 font-bold px-2">{currentPage}</span>
          {currentPage < totalPages ? (
            <button onClick={nextPage} className="bg-blue-600 text-white p-2 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M16 12L10 18V6L16 12Z" fill="rgba(255,255,255,1)"></path>
              </svg>
            </button>
          ) : (
            <button className="opacity-40 cursor-not-allowed bg-gray-400 text-white p-2 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M16 12L10 18V6L16 12Z" fill="rgba(255,255,255,1)"></path>
              </svg>
            </button>
          )}
        </div>
        {/* end of Pagination */}

        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} className="w-full flex justify-end items-center gap-x-1">
          <button type="submit" className="bg-blue-600 px-2 py-1 w-8 h-8  rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="white">
              <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
            </svg>
          </button>
          <input type="text" placeholder="Search Product ..." className="text-sm input input-bordered w-full max-w-xs max-h-8 focus:outline-none" value={searchQuery} onChange={handleSearchInputChange} />
        </form>
      </div>
      {/* End of Search Input */}

      {/* Product Cards */}
      <div className={`grid grid-cols-1 gap-5 mx-auto place-items-center mb-10 ${currentProducts.length > 0 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-1"}`}>
        {currentProducts.length > 0 ? (
          currentProducts.map((product, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedProduct(product);
                modal();
              }}
              className="hover:cursor-pointer max-w-[321px] min-h-[479px] aspect-auto hover:shadow-[0px_4px_56px_0px_rgba(0,_0,_0,_0.15)] p-4 rounded-2xl lg:hover:scale-105 transition ease-in-out duration-300"
            >
              <img src={product.image} alt="image" className="h-[250px] w-full  rounded-lg object-cover object-center mx-auto mb-2" />
              <div className="text-blue-700 h-[200px]">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="font-extralight text-xs">Minimum Order: {product.minimum_order}</p>
                <p className="font-extralight text-xs mb-2">{shortenString(product.description, 50)}</p>
                <div className="flex gap-2 min-w-[321px] h-fit flex-wrap mb-4">
                  {product.material.length > 0
                    ? product.material.map((material, materialIndex) => (
                        <p key={materialIndex} className="badge outline outline-1 outline-blue-700 text-blue-700">
                          {material}
                        </p>
                      ))
                    : ""}
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  href={`https://wa.me/628111927302?text=Hi%20I'm%20interested%20with%20your%20products:%20${product.title}`}
                  className="text-sm bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-xl"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="min-h-screen">
            <p>No Product Found</p>
          </div>
        )}
      </div>

      {/* Bottom Pagination */}
      <div className="w-[85%] flex justify-end items-center gap-x-5">
        {currentPage > 1 ? (
          <button onClick={prevPage} className="bg-blue-600 p-2 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
              <path d="M8 12L14 6V18L8 12Z" fill="rgba(255,255,255,1)"></path>
            </svg>
          </button>
        ) : (
          <button className="opacity-40 cursor-not-allowed bg-gray-400 text-white p-2 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
              <path d="M8 12L14 6V18L8 12Z" fill="rgba(255,255,255,1)"></path>
            </svg>
          </button>
        )}
        <span className="text-blue-700 font-bold px-2">{currentPage}</span>
        {currentPage < totalPages ? (
          <button onClick={nextPage} className="bg-blue-600 text-white p-2 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
              <path d="M16 12L10 18V6L16 12Z" fill="rgba(255,255,255,1)"></path>
            </svg>
          </button>
        ) : (
          <button className="opacity-40 cursor-not-allowed bg-gray-400 text-white p-2 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
              <path d="M16 12L10 18V6L16 12Z" fill="rgba(255,255,255,1)"></path>
            </svg>
          </button>
        )}
      </div>

      <div>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box lg:min-w-[1/2] min-h-[90%] relative">
            {selectedProduct && (
              <>
                <img src={selectedProduct.image} alt="image" className="w-[100%] max-h-[250px] rounded-lg object-contain object-center mb-2" />
                <div className="text-blue-700">
                  <h3 className="text-3xl font-bold mb-2">{selectedProduct.title}</h3>
                  <p className="text-sm mb-2">
                    Minimum Order: <br />
                    {selectedProduct.minimum_order}
                  </p>
                  <p className="text-sm mb-2">{selectedProduct.description}</p>
                  <p className="badge outline outline-1 outline-blue-700 text-blue-700 text-xs mb-2">Materials: {selectedProduct.material.join(", ")}</p>
                  {selectedProduct.warna.length > 0 ? (
                    <p className="text-sm">
                      Colors: <br /> {selectedProduct.warna.join(", ")}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </>
            )}
            <button onClick={() => setSelectedProduct(null)} className="group absolute bottom-5 left-1/2 -translate-x-1/2 hover:fill-red-700">
              <svg className="transition-all origin-bottom duration-300 lg:scale-0 group-hover:scale-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 11C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 11C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
              </svg>
            </button>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setSelectedProduct(null)}>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}

export default Products;
