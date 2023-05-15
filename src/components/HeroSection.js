const HeroSection = (props) => {
  return (
    <div className="row hero-row ">
      <div className="col-md-6 hero-left">
        <h2>Plan your trip now! </h2>
        <h1>
          Save <span className="big">big</span> with the{" "}
          <span className="big">#1</span> Car Rental site in{" "}
          <span className="big">London!</span>
        </h1>
        <p>
          Rent the car of your dreams. <strong>Unbeatable prices</strong>,{" "}
          <strong>unlimited miles</strong>,
          <strong> flexible pick-up options</strong> and much more.
        </p>
        <div className="hero-button-container">
          <button type="button" className="btn  hero-btn-1">
            Book Ride{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </button>
          <button type="button" className="btn  hero-btn-2">
            Learn More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-info-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="col-md-6 hero-right">
        <img className="hero-car" src={props.mainCar} />
        <img className="hero-car-bg" src={props.mainBg} />
      </div>
    </div>
  );
};

export default HeroSection;
