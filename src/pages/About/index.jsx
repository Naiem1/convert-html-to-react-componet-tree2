// Import Assets
import PcLayout from '../../assets/images/pc_layout.png';
import PageTitle from '../../components/PageTitle';
import WhyChooseUs from '../../components/WhyChooseUs';
import SectionHeader from '../../components/SectionHeader';
import Service from '../../components/Service';


const AboutPage = () => {
  return (
    <div>
      {/* PAGE TITLE */}
      <PageTitle title='about'/>

      {/* ABOUT */}
      <div class="about">
        <div class="container">
          <div class="row">
            <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="about_box">
                <figure>
                  <img src={PcLayout} alt="pc layout" />
                </figure>
              </div>
            </dir>
            <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="about_box">
                <h3>Who is Lighten</h3>
                <p>
                  It has survived not only five centuries, but also the leap into electronic 
                  typesetting, remaining essentially unchanged. It was popularised
                  in the 1960s with the release of Letraset sheets containing Lorem Ipsum.   
                </p>
                <p>
                  Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the industry's standard dummy text ever since the 1500s, when
                  unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </dir> 
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US  */}
      <SectionHeader
        highlighted='Why'
        strong='Choose Us'
        desc='Fastest repair service with best price!'
      />

      <WhyChooseUs/>
      {/* END CHOOSE US  */}
      
      {/* SERVICE   */}
      <Service/>
    </div>
  );
};

export default AboutPage;