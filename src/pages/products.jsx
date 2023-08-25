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

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("janitorial"); // Default to "all"

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="flex flex-col items-center px-5 lg:px-16 py-20">
      <h2 className="text-4xl font-bold mb-3">Our Products</h2>
      <p className="mb-7 text-gray-400">There are our products:</p>

      {/* Categories */}
      <div className="flex lg:justify-center w-full overflow-x-scroll lg:overflow-x-auto gap-x-5 mb-8 py-2">
        <button
          onClick={() => handleCategorySelect("janitorial")}
          className={`min-w-[150px] py-2 px-5 outline outline-1 outline-blue-600 font-bold rounded-full ${selectedCategory === "janitorial" ? "bg-blue-600 text-white" : "text-blue-700"}`}
        >
          Janitorial Supports
        </button>
        <button
          onClick={() => handleCategorySelect("plastic wares")}
          className={`min-w-[150px] py-2 px-5 outline outline-1 outline-blue-600  font-bold rounded-full ${selectedCategory === "plastic wares" ? "bg-blue-600 text-white" : "text-blue-700"}`}
        >
          Plastic Wares
        </button>
        <button
          onClick={() => handleCategorySelect("packaging")}
          className={`min-w-[150px] py-2 px-5 outline outline-1 outline-blue-600  font-bold rounded-full ${selectedCategory === "packaging" ? "bg-blue-600 text-white" : "text-blue-700"}`}
        >
          Packaging
        </button>
        <button
          onClick={() => handleCategorySelect("hygiene product")}
          className={`min-w-[150px] py-2 px-5 outline outline-1 outline-blue-600 font-bold rounded-full ${selectedCategory === "hygiene product" ? "bg-blue-600 text-white" : "text-blue-700"}`}
        >
          Hygiene Product
        </button>
      </div>
      {/* Categories */}

      {/* Start of products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto place-items-center">
        {filteredProducts.map((product, index) => (
          <>
            <div key={index} onClick={modal} className="hover:cursor-pointer scale-75 lg:min-h-[479px] min-w-[321px] aspect-auto shadow-[0px_4px_56px_0px_rgba(0,_0,_0,_0.15)] p-4 rounded-2xl">
              <img src={product.image} alt="image" className="w-[100%] h-[312px]  rounded-lg object-cover mb-2" />
              <div className="text-blue-700">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="font-extralight text-xs">Minimum Order: {product.minimum_order}</p>
                <p className="font-extralight text-xs mb-2">{shortenString(product.description, 50)}</p>
                <div className="flex gap-2 min-w-[321px] h-fit flex-wrap mb-4">
                  {product.material.map((material, materialIndex) => (
                    <p key={materialIndex} className="badge outline outline-1 outline-blue-700 text-blue-700">
                      {material}
                    </p>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a
                    onClick={(event) => {
                      event.stopPropagation(); // Prevent event propagation
                    }}
                    href="#"
                    className="text-sm bg-blue-700 text-white px-5 py-2 rounded-xl"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* end of products */}

      {/* Modal */}
      <div>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box lg:min-w-[1/2] min-h-[90%] relative">
            <img
              src="https://s3-alpha-sig.figma.com/img/87cf/992c/f88262f4a96bb165ac311e87f1041723?Expires=1693785600&Signature=C6KeZnYF8Zv12g6V3wdwVT8EgrMAw-t783Wncilk5Z9vXttsPCJS-aMwIAGD3ezDld23C6~Ac9Bu3OIkDlZ3rG80Uy-87bWoRGLqZoDON55mGawcSFNiG5bCSbarh7ryg59p31KfuZ0XWpY16mUqFUyZsEwMK~0GFw3ZLelumAqY3039BGyXitD4BMb0EnGJYgTMPydwAnWD1A~bsMZ-RDurmRgKnyelZJj2~qKf4EL4aaL0iNG5Pbop7X3aN-TrLoSq6kAtzxrDwCY4ynlIitQRLFQKGRucb4WUTv7Egb~iyJqWBBSzL2kgcn6LDWtsM42GEc-D4OkWyNdQjMwrFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="image"
              className="w-[100%] max-h-[250px] rounded-lg object-contain mb-2"
            />
            <div className="text-blue-700">
              <h3 className="text-3xl font-bold mb-4">Product Title</h3>
              <p className="text-sm mb-4">Min Order:</p>
              <p className="text-sm">Deskripsi</p>
              <p className="badge outline outline-1 outline-blue-700 text-blue-700 text-xs">Material</p>
              <p className="text-sm">Warna: </p>
            </div>
            {/* button for closing modal */}
            <button className="group absolute bottom-5 left-1/2 -translate-x-1/2 hover:fill-red-700">
              <svg className="transition-all origin-bottom duration-300 lg:scale-0 group-hover:scale-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
              </svg>
            </button>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      {/* end of Modal */}
    </div>
  );
}

export default Products;
