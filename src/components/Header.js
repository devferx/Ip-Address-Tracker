import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateLocation } from "../actions/index";
import arrowIcon from "../assets/images/icon-arrow.svg";
import fetchGeoByIp from "../utils/fetchGeoByIp";
import "../assets/styles/components/Header.css";

function Header() {
  const title = useSelector((state) => state.title);
  const [ip, setIp] = useState("");
  const dispatch = useDispatch();

  const { ipAddres, location, timezone, isp } = useSelector(
    (state) => state.panel
  );

  const handleChange = (event) => setIp(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await fetchGeoByIp(ip);
    dispatch(updateLocation(resp));
  };

  return (
    <div className="header">
      <h2 className="header--title">{title}</h2>
      <form className="header__form" onSubmit={handleSubmit}>
        <input
          className="header__form--input"
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={handleChange}
        />
        <button type="submit" className="header__form--btn">
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
