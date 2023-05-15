const BookCar = (props) => {
  return (
    <div className="book-car-container" id="section1">
      <div className="book-car-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-clipboard"
          viewBox="0 0 16 16"
        >
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
        </svg>
        <h2 className="booked-car-style">Book a car</h2>
      </div>
      <div>{props.errorMsg}</div>
      <form onSubmit={props.handleSubmit} className="row">
        <div className="col-md-6">
          <div className="label-select-container first-label-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-car-front-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
            </svg>
            <label className="car-type-label">Select Your Car Type</label>
            <select
              value={props.selectedCarType}
              onChange={props.handleCarType}
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              required
            >
              <option className="first-option" selected>
                Select you car type
              </option>
              <option value="1">Audi A1 S-Line</option>
              <option value="2">Volvo XC60</option>
              <option value="3">BMW M2</option>
              <option value="4">Fiat 500</option>
              <option value="5">BMW X6</option>
              <option value="6">Audi A6</option>
              <option value="7">Tesla Model 3</option>
            </select>
          </div>
          <div className="label-select-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <label className="car-type-label">Pick-up</label>
            <select
              value={props.selectedPickUp}
              onChange={props.handlePickUp}
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option className="first-option" selected>
                Select pick up location
              </option>
              <option value="1">North London</option>
              <option value="2">East London</option>
              <option value="3">South London</option>
              <option value="4">West London</option>
            </select>
          </div>
          <div className="label-select-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar3"
              viewBox="0 0 16 16"
            >
              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <label className="car-type-label">Pick-up</label>
            <div className="input-group input-group-lg">
              <input
                onChange={props.handlePickUpDate}
                placeholder="Enter Date"
                type="date"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
          </div>
          {/* <p>Selected Option: {selectedOption}</p> */}
        </div>
        <div className="col-md-6 book-right-container">
          <div className="label-select-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <label className="car-type-label drop-off-label">Drop-off</label>
            <select
              value={props.selectedDropOff}
              onChange={props.handleSelectedDropOff}
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option className="first-option" selected>
                Select drop off location
              </option>
              <option value="1">North London</option>
              <option value="2">East London</option>
              <option value="3">South London</option>
              <option value="4">West London</option>
            </select>
          </div>
          <div className="label-select-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar3"
              viewBox="0 0 16 16"
            >
              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <label className="car-type-label">Drop-off</label>
            <div className="input-group input-group-lg">
              <input
                onChange={props.handleDropOffDate}
                placeholder="Enter Date"
                type="date"
                className="form-control drop-off-input"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
          </div>
          <div className="label-select-container email-input">
            <label className="car-type-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              Email
            </label>
            <div className="input-group input-group-lg">
              <input
                value={"demo@gmail.com"}
                type="email"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
          </div>
        </div>
        <div className="button-container">
          <div className="label-select-container reserve-container">
            <button
              onClick={props.handleBookCarResult}
              type="submit"
              className="reserve-btn"
            >
              Reserve
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookCar;
