import data from '../../Data';


const Button = () => {
  return (
    <div className="col-md-12">
      <a
        className="read-more"
        href="#read more">
        {data.button.value}
      </a>
    </div>
  );
};

export default Button;