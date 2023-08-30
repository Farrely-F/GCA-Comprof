import PropTypes from "prop-types"; // Import PropTypes

const ProductCarousel = ({ selectedProduct }) => {
  return (
    <div className="carousel w-full">
      {selectedProduct.image.map((imageUrl, index) => (
        <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
          <img src={imageUrl} className="w-full max-h-64 obje object-contain" alt={`Slide ${index + 1}`} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {selectedProduct.image.length > 1 ? (
              <>
                <a href={`#slide${index === 0 ? selectedProduct.image.length : index}`} className="btn btn-circle">
                  ❮
                </a>
                <a href={`#slide${index === selectedProduct.image.length - 1 ? 1 : index + 2}`} className="btn btn-circle">
                  ❯
                </a>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

ProductCarousel.propTypes = {
  selectedProduct: PropTypes.string, // Example of a required string prop
};

export default ProductCarousel;
