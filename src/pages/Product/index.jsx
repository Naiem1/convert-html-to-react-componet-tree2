import PageTitle from '../../components/PageTitle';
import data from '../../Data';
import Product from '../../components/Product';



const ProductPage = () => {
  return (
    <div>
      {/* TITLE PAGE */}
      <PageTitle title='Our Product'/>

      {/* OUR PRODUCT */}
      <div className="product">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title"> 
                <span>{data.products.headingText }</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-bg">
        <Product
          slice={12}
        />
      </div>
      {/* END OUR PRODUCTS  */}
    </div>
  );
};

export default ProductPage;