
const SectionHeader = props => {

  const { highlighted, strong, desc } = props;
  return (
    <div className="whyschose">
        <div className="container">
          <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="title">
                    <h2>{highlighted} <strong className="black">{ strong }</strong></h2>
                    <span>{ desc}</span>
                </div>
              </div>
          </div>
        </div>
    </div>
  );
};

export default SectionHeader;