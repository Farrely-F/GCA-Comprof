import React from "react";
import useFetch from "../utils/useFetch"; // Import the custom hook

function shortenString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  } else {
    return str;
  }
}

function Dashboard() {
  const { data: products } = useFetch("https://api.npoint.io/19925e28ad8177857c62");

  return (
    <div className="flex flex-col w-full p-4 md:p-16 min-h-screen">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Title</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{product.title}</td>
                <td>{shortenString(product.description, 20)}</td>
                <td>{product.category}</td>
                <td>{product.minimum_order}</td>
                <td>{product.material.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
