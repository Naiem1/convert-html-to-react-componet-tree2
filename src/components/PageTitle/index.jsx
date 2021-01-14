
const PageTitle = ({title}) => {
  return (
    <div className="brand_color">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>{ title }</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;