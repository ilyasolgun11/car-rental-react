const Testimonial = (props) => {
  return (
    <div className="testimonial-container">
      <h3 className="header-h3">Reviewed by People</h3>
      <h2 className="header-h2">Client's Testimonials</h2>
      <div className="p-container">
        <p className="header-p">
          Experience the transformative power of our service and witness the
          resounding impact we have had on our clients through their heartfelt
          testimonials, as they eagerly share their positive experiences and
          remarkable results with you.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="person-one-container">
            <p className="person-testimonial">
              "Our experience with this website's car rental service was nothing
              short of amazing! From the seamless booking process to the
              incredibly affordable rental rates, every aspect exceeded our
              expectations."
            </p>
            <div>
              <div className="person-info-outer-container">
                <div className="person-info-container">
                  <img className="img-one" src={props.imgOne} />
                  <div>
                    <h3>Taylor Martin</h3>
                    <h3>North London</h3>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="person-one-container">
            <p className="person-testimonial">
              "The impeccable condition of the car elevated our trip to
              extraordinary heights, leaving us with unforgettable memories.
              Without hesitation, we wholeheartedly endorse this car rental
              website for an exceptional experience!"
            </p>
            <div>
              <div className="person-info-outer-container">
                <div className="person-info-container">
                  <img className="img-one" src={props.imgTwo} />
                  <div>
                    <h3>Sophia Anderson</h3>
                    <h3>East London</h3>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
