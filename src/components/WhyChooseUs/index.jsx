import data from '../../Data';
import Button from '../Button';
import WhyChooseUsCard from '../WhyChooseUsCard';


const WhyChooseUs = () => {
  return (
    <div className="choose_bg">
      <div className="container">
        <div className="white_bg">
          <div className="row">
            {
              data.whyChooseUs.map(
                (service, i) => (
                  <WhyChooseUsCard
                  key={i}
                  service={service}
                />))
            }
            <Button/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;