import React, { useState } from "react";
import "./Card.css";
import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Tooltip } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AirlineSeatIndividualSuiteIcon from "@material-ui/icons/AirlineSeatIndividualSuite";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import DeckIcon from "@material-ui/icons/Deck";
import Axios from "axios";
import ApartmentIcon from '@material-ui/icons/Apartment';

const Card = () => {
  const [clickedHeart, setClickedHeart] = useState(false);
  const [courser, setCourser] = useState(false);
  const [newWage, setNewWage] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  const NowCourser = () => {
    setCourser((course) => !course);
  };

  const NowClickedHeart = () => {
    setClickedHeart((heart) => !heart);
  };

  Axios.get("http://localhost:3000/employees").then((response) => {
    setEmployeeList(response.data);
  });

  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3000/update", { wage: newWage, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  name: val.name,
                  age: val.age,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3000/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <>
      {employeeList.map((val, key) => {
        return (
          <div className="ContainerCard">
            <figure>
              <span
                className="vipContent__class"
                id="vipContent__id"
                name="vipContent__name"
                aria-label="VIP"
                title="VIP"
              >
                VIP
              </span>
              <img
                src="https://www.monnaie.in/mobile-files/images/services/serv-title-img-mob.jpg"
                alt="Image House"
                title="Image House"
                className="imageHouse__class"
                id="imageHouse__id"
                name="imageHouse"
              />
            </figure>
            <div className="content__title">
              <h5
                className="contentTitle__class"
                id="contentTitle__id"
                name="contentTittle__name"
                aria-label="title"
              >
                {val.title}
              </h5>
              <div className="content__price">
                <b
                  className="price__class"
                  id="price__id"
                  name="price__id"
                  aria-label="Price"
                  title="Price"
                >
                  {val.price} $
                </b>
                <b
                  style={{ marginLeft: "10px", fontWeight: "700" }}
                  className="spanMeter__paragraph"
                  id="spanMeter__id"
                  name="spanMeter_name"
                >
                  {val.kvadrati} მ²
                </b>
              </div>
              <div className="content__titleDescription">
                <Tooltip
                  title="ოთახების რაოდენობა"
                  className="doorsCounter__class"
                  id="doorsCounter__class"
                  name="doorsCounter__name"
                  placement="top"
                >
                  <MeetingRoomIcon />
                </Tooltip>
                <span
                  className="doorsCount__class"
                  id="doorsCount__id"
                  name="doorsCount__name"
                >
                  {val.roomcount}
                </span>
                <Tooltip
                  title="საძინებელი"
                  className="bedCounter__class"
                  id="bedCounter__id"
                  name="bedCounter__name"
                  aria-label="საძინებელი"
                  placement="top"
                >
                  <AirlineSeatIndividualSuiteIcon className="bedRoomIcon__root" />
                </Tooltip>
                <span
                  className="bedRoom__class"
                  name="bedRoom__name"
                  id="bedRoom__id"
                >
                  {val.bedroom}
                </span>
                <ApartmentIcon className="apartmentIcon__card" />
                <span
                  className="bedRoom__class"
                  name="bedRoom__name"
                  id="bedRoom__id"
                >
                  {val.sartuli}
                </span>
                </div>
              <div className="contentLocation">
                <span
                  className="descriptionLocation__class"
                  id="descriptionLocation__Id"
                  name="descriptionLocation__name"
                >
                  {val.description}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
