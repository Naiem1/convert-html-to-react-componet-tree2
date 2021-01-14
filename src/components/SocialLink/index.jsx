import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../Data';



const SocialLink = () => {
  

  return (
    <>
      {
        data.socialIcon.map((icons) => {
          return (
            <li>
              <a href="#icons">
                <FontAwesomeIcon icon={icons}/>
              </a>
            </li>
          )
      })}
    </>
  );
};

export default SocialLink;