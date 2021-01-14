import data from "../../Data";
const { default: ProductCard } = require("../ProductCard")



const Product = ({slice}) => {

  const dataInfo = data.product.slice(0, slice)

  return (
    <div className="product-bg-white">
      <div className="container">
          <div className="row">
            {
              dataInfo.map((product, i) => (
                <ProductCard
                  key={i}
                  product={product}
                />
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default Product;