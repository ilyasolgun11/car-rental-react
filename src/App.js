import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

///Images
import MainBg from "./images/main-bg.png";
import MainCar from "./images/main-car.png";
import AudiA1Sline from "./images/AudiA1Sline.png";
import VolvoXC60 from "./images/VolvoXC60.png";
import BMWM2 from "./images/BMWM2.png";
import Fiat500 from "./images/Fiat500.png";
import ApprovedCar from "./images/approved.png";
import Support from "./images/support.png";
import CarDriving from "./images/cardriving.png";
import BMWX6 from "./images/BMWX6.png";
import AudiA6 from "./images/AudiA6.png";
import TeslaModel3 from "./images/TeslaModel3.png";
import Man from "./images/man-1.avif";
import Woman from "./images/women-1.jpg";
import Google from "./images/google.png";
import Apple from "./images/apple.png";
import PhoneImg from "./images/phone-img.png";
import Blob from "./images/blob.png";
import Logo from "../src/components/NavbarImages/logo.png";

//// Components
import Navbar from "./components/Navbar";
import RentalFleet from "./components/RentalFleet";
import HeroSection from "./components/HeroSection";
import BookCar from "./components/BookCar";
import PlanTrip from "./components/PlanTrip";
import Testimonial from "./components/Testimonial";
import Download from "./components/Download";
import Footer from "./components/Footer";

/// State
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setScrolled(scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [selectedCarType, setSelectedCarType] = useState("");
  const handleCarType = (e) => {
    setSelectedCarType(e.target.value);
  };

  const [selectedPickUp, setSelectedPickUp] = useState("");
  const handlePickUp = (e) => {
    setSelectedPickUp(e.target.value);
  };

  const [pickUpDate, setPickUpDate] = useState("");
  const handlePickUpDate = (e) => {
    setPickUpDate(e.target.value);
  };

  const [selectedDropOff, setSelectedDropOff] = useState("");
  const handleSelectedDropOff = (e) => {
    setSelectedDropOff(e.target.value);
  };

  const [dropOffDate, setDropOffDate] = useState("");
  const handleDropOffDate = (e) => {
    setDropOffDate(e.target.value);
  };

  const [displayCarType, setDisplayCarType] = useState("");
  const [displayPickUp, setDisplayPickUp] = useState("");
  const [displayDropOff, setDisplayDropOff] = useState("");
  const [displayBooked, setDisplayBooked] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const [numDays, setNumDays] = useState(0);

  const calculateDays = () => {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    const pickUpDateObj = new Date(pickUpDate);
    const dropOffDateObj = new Date(dropOffDate);

    const timeDiff = Math.abs(dropOffDateObj - pickUpDateObj);
    const numDays = Math.ceil(timeDiff / millisecondsPerDay);

    setNumDays(numDays);
  };

  useEffect(() => {
    calculateDays();
  }, [pickUpDate, dropOffDate]);

  const handleBookCarResult = () => {
    if (
      selectedCarType &&
      selectedPickUp &&
      pickUpDate &&
      dropOffDate &&
      selectedDropOff !== null
    ) {
      let carImage = "";
      let carName = "";
      let price = 0;

      if (selectedCarType === "1") {
        carImage = AudiA1Sline;
        carName = "Audi A1 S-Line";
        price = 23;
      } else if (selectedCarType === "2") {
        carImage = VolvoXC60;
        carName = "Volvo XC60";
        price = 45;
      } else if (selectedCarType === "3") {
        carImage = BMWM2;
        carName = "BMW M2";
        price = 78;
      } else if (selectedCarType === "4") {
        carImage = Fiat500;
        carName = "Fiat 500";
        price = 22;
      } else if (selectedCarType === "5") {
        carImage = BMWX6;
        carName = "BMW X6";
        price = 65;
      } else if (selectedCarType === "6") {
        carImage = AudiA6;
        carName = "Audi A6";
        price = 43;
      } else if (selectedCarType === "7") {
        carImage = TeslaModel3;
        carName = "Tesla Model 3";
        price = 68;
      }

      let pickUp = "";

      if (selectedPickUp === "1") {
        pickUp = "North London";
      } else if (selectedPickUp === "2") {
        pickUp = "East London";
      } else if (selectedPickUp === "3") {
        pickUp = "South London";
      } else if (selectedPickUp === "4") {
        pickUp = "West London";
      }

      let dropOff = "";

      if (selectedDropOff === "1") {
        dropOff = "North London";
      } else if (selectedDropOff === "2") {
        dropOff = "East London";
      } else if (selectedDropOff === "3") {
        dropOff = "South London";
      } else if (selectedDropOff === "4") {
        dropOff = "West London";
      }

      setDisplayCarType(carImage);
      setDisplayPickUp(pickUp);
      setDisplayDropOff(dropOff);
      setErrorMsg(
        <div className="alert alert-success" role="alert">
          {`You have Booked a ${carName}!`}
        </div>
      );

      setDisplayBooked(
        <div className="booked-container">
          <div className="book-car-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-clipboard-check-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
            </svg>
            <h2 className="booked-car-style">Booked Car</h2>
          </div>
          <div className="row">
            <div className="col-md-6 displayed-car-img">
              <h2 className="price">
                {`£${price}`}
                <span className="price-text">/per day</span>
              </h2>

              <img className="displayed-car" src={carImage} />
            </div>

            <div className="col-md-6">
              <div className="booked-location-data">
                <div class="table-container">
                  <div className="row car-name-style-container ">
                    <div className="col-md-12">
                      <div className="car-name-style-1">Car name:</div>
                      <div className="car-name-style-2">{carName}</div>
                    </div>
                  </div>

                  <div class="grid-container">
                    <div class="grid-header">Pick-up</div>
                    <div class="grid-header">Drop-off</div>

                    <div class="grid-item ">{pickUp}</div>
                    <div class="grid-item ">{dropOff}</div>

                    <div class="grid-item grid-item-3">{pickUpDate}</div>
                    <div class="grid-item grid-item-4">{dropOffDate}</div>
                  </div>
                  <div className="row car-name-style-container total-bill-container">
                    <div className="col-md-12">
                      <div className="car-name-style-1 amount-style">
                        Total Bill:
                      </div>
                      <div className="car-name-style-2 amount-data">
                        {`£${numDays * price}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 note-container">
              <h3 className="note-h2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-info-circle-fill bi-second"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
                Please note, you are only allowed to create 1 booking at a time.
              </h3>
            </div>
          </div>
        </div>
      );
    } else {
      setErrorMsg(
        <div className="alert alert-danger" role="alert">
          All fields are required!
        </div>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App ">
      <header
        style={{
          zIndex: 200,
          width: "100%",
          backgroundColor: scrolled
            ? "rgb(247, 247, 247)"
            : "rgb(255, 255, 255)",
          position: "fixed",
          top: "0px",
        }}
      >
        <div>
          <Navbar />
        </div>
      </header>
      <main className="container">
        <HeroSection mainCar={MainCar} mainBg={MainBg} />
        <BookCar
          errorMsg={errorMsg}
          handleSubmit={handleSubmit}
          selectedCarType={selectedCarType}
          handleCarType={handleCarType}
          selectedPickUp={selectedPickUp}
          handlePickUp={handlePickUp}
          handlePickUpDate={handlePickUpDate}
          selectedDropOff={selectedDropOff}
          handleSelectedDropOff={handleSelectedDropOff}
          handleDropOffDate={handleDropOffDate}
          handleBookCarResult={handleBookCarResult}
        />
        {displayBooked}
        <PlanTrip
          approvedCar={ApprovedCar}
          support={Support}
          carDriving={CarDriving}
        />
        <div className="row rental-fleet-container">
          <h3 className="rental-fleet-h3">Vehicle Models</h3>
          <h2 className="rental-fleet-h2">Our Rental Fleet</h2>
          <p className="rental-fleet-p">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
          <div className="col-md-12">
            <RentalFleet id="section2" />
          </div>
        </div>
        <Testimonial imgOne={Man} imgTwo={Woman} />
      </main>
      <footer>
        <Download apple={Apple} google={Google} phone={PhoneImg} blob={Blob} />
        <Footer footerLogo={Logo} id="section3" />
      </footer>
    </div>
  );
}

export default App;
