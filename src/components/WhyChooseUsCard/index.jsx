

const WhyChooseUsCard = (props) => {
  const { img, title, details } = props.service;

  return (
    <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
      <div className="for_box">
        <i><img src={img} alt="icon"/></i>
        <h3>{title}</h3>
        <p>{details}</p>
      </div>
    </dir>
  );
};

export default WhyChooseUsCard;