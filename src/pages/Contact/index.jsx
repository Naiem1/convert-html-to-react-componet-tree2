import PageTitle from '../../components/PageTitle';


const ContactPage = () => {
  return (
    <div>
      {/* PAGE TITLE*/}
      <PageTitle title='Contact Us'/>

      {/* CONTACT */}
      <div class="contact">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <form class="main_form">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      class="form-control"
                      placeholder="Your name"
                      type="text"
                      name="Your Name"
                    />
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      class="form-control"
                      placeholder="Email"
                      type="text"
                      name="Email"
                    />
                  </div>
                  <div class=" col-md-12">
                    <input
                      class="form-control"
                      placeholder="Phone"
                      type="text"
                      name="Phone"
                    />
                  </div>
                  <div class="col-md-12">
                    <textarea
                      class="textarea"
                      placeholder="Message">
                    </textarea>
                  </div>
                  <div class=" col-md-12">
                    <button class="send">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT END */}

    </div>
  );
};

export default ContactPage;