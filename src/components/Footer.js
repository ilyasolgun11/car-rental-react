const Footer = () => {
  return (
    <div className="container footer-bg" id="section3">
      <div className="footer-container ">
        <div className="row">
          <div className="col-md-6 ">
            <h2 className="car-rental">CAR RENTAL</h2>
            <p className="footer-logo__p">
              Find your perfect car from our wide selection, designed to meet
              all your driving needs.
            </p>
            <h3 className="footer-logo__phone">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              020 345 3453
            </h3>
            <h3 className="footer-logo__email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
              carrental@gmail.com
            </h3>

            <div className="company-container ">
              <h2 className="company">COMPANY</h2>
              <h3 className="company-h3">London</h3>
              <h3 className="company-h3">Careers</h3>
              <h3 className="company-h3">Mobile</h3>
              <h3 className="company-h3">Blog</h3>
              <h3 className="company-h3">How we work</h3>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="hours">HOURS</h2>
            <h3 className="hours-time">Mon - Fri: 9:00AM - 9:00PM</h3>
            <h3 className="hours-time">Sat: 9:00AM - 7PM</h3>
            <h3 className="hours-time">Sun: Closed</h3>

            <div className="subscribe">
              <h2 className="sub">SUBSCRIPTION</h2>
              <p>
                Get the latest news and updates delivered directly to your
                inbox. Subscribe with your email address now.
              </p>
              <div className="input-group input-group-lg">
                <input
                  placeholder="Enter Email Address"
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>
              <button type="button" class="btn footer-btn">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
