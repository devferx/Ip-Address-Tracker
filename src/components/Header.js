import React from "react";
import { useSelector } from "react-redux";
import arrowIcon from "../assets/images/icon-arrow.svg";
import "../assets/styles/components/Header.css";

function Header() {
  const title = useSelector((store) => store.title);
  const ipAddres = useSelector((store) => store.ipAddres);
  const location = useSelector((store) => store.location);
  const timezone = useSelector((store) => store.timezone);
  const isp = useSelector((store) => store.isp);

  return (
    <div className="header">
      <h2 className="header--title">{title}</h2>
      <form className="header__form">
        <input
          className="header__form--input"
          type="text"
          placeholder="Search for any IP address or domain"
        />
        <button className="header__form--btn">
          <img src={arrowIcon} alt="arrow right" />
        </button>
      </form>

      <div className="header__panel">
        <div className="header__panel__item">
          <p className="header__panel__item--title">IP Address</p>
          <p className="header__panel__item--info">{ipAddres}</p>
        </div>
        <div className="header__panel__item">
          <p className="header__panel__item--title">Location</p>
          <p className="header__panel__item--info">{location}</p>
        </div>
        <div className="header__panel__item">
          <p className="header__panel__item--title">Timezone</p>
          <p className="header__panel__item--info">UTC {timezone}</p>
        </div>
        <div className="header__panel__item">
          <p className="header__panel__item--title">ISP</p>
          <p className="header__panel__item--info">{isp}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
