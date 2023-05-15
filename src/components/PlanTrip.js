const PlanTrip = (props) => {
  return (
    <div className="plan-trip-container">
      <h4>Plan your trip now</h4>
      <h3>Quick & Easy car rental</h3>
      <div className="row">
        <div className="col-md-4 equal-height">
          <img className="plan-images" src={props.approvedCar} />
          <h2 className="plan-header">Select Car</h2>
          <p className="plan-paragraph">
            We offer a wide range of vehicles to meet your diverse driving
            needs.
          </p>
        </div>
        <div className="col-md-4 equal-height">
          <img className="plan-images" src={props.support} />
          <h2 className="plan-header">Contact Support</h2>
          <p className="plan-paragraph">
            Our experienced team is always available to provide exceptional
            customer service.
          </p>
        </div>
        <div className="col-md-4 equal-height">
          <img className="plan-images" src={props.carDriving} />
          <h2 className="plan-header">Let's Go!</h2>
          <p className="plan-paragraph">
            From road trips to new adventures, our diverse car fleet ensures
            you're ready for the journey ahead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;
