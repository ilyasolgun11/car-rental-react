const Download = (props) => {
  return (
    <div className="download-container ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="download-header-h2">
              Supercharge your experience with our app
            </h2>
            <p className="download-header-p">
              Rent a car effortlessly with our user-friendly app. Book, manage,
              and enjoy your journey with ease. Download now for a seamless
              rental experience.
            </p>
            <div className="get-it-on-container">
              <img className="download" src={props.google} />
              <img className="download" src={props.apple} />
            </div>
          </div>
          <div className="col-md-6 phone-container">
            <img className="phone-style" src={props.phone} />
            <img className="blob" src={props.blob} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
