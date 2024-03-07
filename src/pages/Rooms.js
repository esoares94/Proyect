import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
const Rooms = () => {
  return (
    <>
      <Hero hero="food" style={{ color: "red" }}>
        <Banner title="Restaurantes">
          {/* <Link to="/" className="btn-primary">
            volver al inicio
          </Link> */}
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
