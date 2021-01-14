import PageTitle from '../../components/PageTitle';
import data from '../../Data';
import Product from '../../components/Product';



const ProductPage = () => {
  return (
    <div>
      {/* TITLE PAGE */}
      <PageTitle title='Our Product'/>

      {/* OUR PRODUCT */}
      <div class="product">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title"> 
                <span>{data.products.headingText }</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product-bg">
        <Product
          slice={12}
        />
      </div>
      {/* END OUR PRODUCTS  */}
    </div>
  );
};

export default ProductPage;