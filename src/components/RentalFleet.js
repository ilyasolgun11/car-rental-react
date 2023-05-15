import AudiA1Sline from "../images/AudiA1Sline.png";
import VolvoXC60 from "../images/VolvoXC60.png";
import BMWM2 from "../images/BMWM2.png";
import Fiat500 from "../images/Fiat500.png";
import BMWX6 from "../images/BMWX6.png";
import AudiA6 from "../images/AudiA6.png";
import TeslaModel3 from "../images/TeslaModel3.png";

import { useState } from "react";

import "./RentalFleet.css";

const AudiA1 = {
  name: "Audi A1 S-Line",
  color: "Silver",
  year: 2018,
  price: 23,
};

const Volvo = {
  name: "Volvo CX60",
  color: "Black",
  year: 2022,
  price: 45,
};

const BmwM2 = {
  name: "BMW M2",
  color: "Blue",
  year: 2022,
  price: 78,
};

const Fiat = {
  name: "Fiat",
  color: "turquoise",
  year: 2018,
  price: 22,
};

const BmwX6 = {
  name: "BMW X6",
  color: "Blue",
  year: 2020,
  price: 65,
};

const AudiASix = {
  name: "Audi A6",
  color: "White",
  year: 2019,
  price: 43,
};

const Tesla = {
  name: "Tesla Model 3",
  color: "White",
  year: 2023,
  price: 68,
};

const RentalFleet = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [activeImage, setActiveImage] = useState(AudiA1Sline);

  const handleButtonClick = (buttonNumber, image) => {
    setActiveButton(buttonNumber);
    setActiveImage(image);
  };

  const renderCarData = () => {
    let carData;

    switch (activeButton) {
      case 1:
        carData = AudiA1;
        break;
      case 2:
        carData = Volvo;
        break;
      case 3:
        carData = BmwM2;
        break;
      case 4:
        carData = Fiat;
        break;
      case 5:
        carData = BmwX6;
        break;
      case 6:
        carData = AudiASix;
        break;
      case 7:
        carData = Tesla;
        break;
      default:
        carData = AudiA1;
    }

    return (
      <div className="outer-container" id="section2">
        <div className="title header-container" >
          <span className="price-style">£{carData.price}</span> / per day
        </div>

        <div className="row rental-data-container container">
          <div className="col-md-12">
            <div className="title">Model:</div>
            <div className="data-output-style">{carData.name}</div>
          </div>
          <div className="col-md-12">
            <div className="title">Mark:</div>
            <div className="data-output-style">
              {carData.name.split(" ")[0]}
            </div>
          </div>
          <div className="col-md-12">
            <div className="title">Year:</div>
            <div className="data-output-style">{carData.year}</div>
          </div>
          <div className="col-md-12">
            <div className="title">Doors:</div>
            <div className="data-output-style">
              {carData.name.includes("S-Line") ||
              carData.name.includes("Fiat") ||
              carData.name.includes("M2")
                ? "2/3"
                : "4/5"}
            </div>
          </div>

          <div className="col-md-12">
            <div className="title">Transmission:</div>
            <div className="data-output-style">
              {carData.name.includes("Audi") ||
              carData.name.includes("Fiat") ||
              carData.name.includes("A6")
                ? "Manual"
                : "Automatic"}
            </div>
          </div>
          <div className="col-md-12">
            <div className="title">Fuel:</div>
            <div className="data-output-style">
              {carData.name.includes("Tesla") ? "Electric" : "Gasoline"}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="row ">
      <div className="col-md-4">
        <button
          type="button"
          className={`btn rental-fleet-buttons ${
            activeButton === 1 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(1, AudiA1Sline)}
        >
          Audi A1 S-Line
        </button>
        <button
          type="button"
          className={`btn rental-fleet-buttons ${
            activeButton === 2 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(2, VolvoXC60)}
        >
          VolvoXC60
        </button>
        <button
          type="button"
          className={`btn rental-fleet-buttons ${
            activeButton === 3 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(3, BMWM2)}
        >
          BMW M2
        </button>
        <button
          type="button"
          className={`btn rental-fleet-buttons ${
            activeButton === 4 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(4, Fiat500)}
        >
          Fiat 500
        </button>
        <button
          type="button"
          className={`btn rental-fleet-buttons ${
            activeButton === 5 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(5, BMWX6)}
        >
          BMW X6
        </button>
        <button
          type="button"
          className={`btn rental-fleet-buttons ${
            activeButton === 6 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(6, AudiA6)}
        >
          Audi A6
        </button>
        <button
          type="button"
          className={`btn rental-fleet-buttons ${
            activeButton === 7 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(7, TeslaModel3)}
        >
          Tesla Model 3
        </button>
      </div>
      <div className="col-md-4">
        <img className="car-images" src={activeImage} alt="Car Image" />
      </div>
      <div className="col-md-4">{renderCarData()}</div>
    </div>
  );
};

export default RentalFleet;
