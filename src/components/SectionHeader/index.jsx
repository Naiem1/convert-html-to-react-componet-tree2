
const SectionHeader = props => {

  const { highlighted, strong, desc } = props;
  return (
    <div class="whyschose">
        <div class="container">
          <div class="row">
              <div class="col-md-8 offset-md-2">
                <div class="title">
                    <h2>{highlighted} <strong class="black">{ strong }</strong></h2>
                    <span>{ desc}</span>
                </div>
              </div>
          </div>
        </div>
    </div>
  );
};

export default SectionHeader;