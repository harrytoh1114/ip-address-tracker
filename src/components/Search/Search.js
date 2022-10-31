import axios from "axios";
import React, { useState, useEffect } from "react";
import { ReactComponent as Arrow } from "../../images/icon-arrow.svg";
import { useDispatch } from "react-redux";
import { resultAction } from "../../store/result-slice";

import "./Search.scss";

const Search = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      axios
        .get(
          "https://geo.ipify.org/api/v2/country,city?apiKey=at_MnNyJjw9rCwed5BUfI5OAWBa33tmB&domain=" +
            input
        )
        .then((response) => {
          dispatch(
            resultAction.setResult({
              ip: response.data.ip,
              city: response.data.location.city,
              region: response.data.location.region,
              postalCode: response.data.location.postalCode,
              timezone: response.data.location.timezone,
              isp: response.data.isp,
              coor: [
                parseFloat(response.data.location.lat),
                parseFloat(response.data.location.lng),
              ],
            })
          );
        });
    } catch (err) {
      console.log("err");
    }
  }, [dispatch]);

  const getLocationDetail = (e) => {
    e.preventDefault();
    try {
      axios
        .get(
          "https://geo.ipify.org/api/v2/country,city?apiKey=at_MnNyJjw9rCwed5BUfI5OAWBa33tmB&domain=" +
            input
        )
        .then((response) => {
          dispatch(
            resultAction.setResult({
              ip: response.data.ip,
              city: response.data.location.city,
              region: response.data.location.region,
              postalCode: response.data.location.postalCode,
              timezone: response.data.location.timezone,
              isp: response.data.isp,
              coor: [
                parseFloat(response.data.location.lat),
                parseFloat(response.data.location.lng),
              ],
            })
          );
        });
    } catch (err) {
      console.log("err");
    }
  };

  const detectInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <form className="search" onSubmit={getLocationDetail}>
        <h1 className="search__title">IP Address Tracker</h1>
        <div className="search__wrapper">
          <input
            className="search__bar"
            type="text"
            value={input}
            onChange={detectInputChange}
            placeholder="Search for any IP address or domain"
          />
          <button className="search__btn" type="submit">
            <Arrow />
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
