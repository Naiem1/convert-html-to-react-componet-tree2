import data from "../../Data";
const { default: ProductCard } = require("../ProductCard")



const Product = ({slice}) => {

  const dataInfo = data.product.slice(0, slice)
  console.log(dataInfo)

  return (
    <div class="product-bg-white">
      <div class="container">
          <div class="row">
            {
              dataInfo.map(product => (
                <ProductCard
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