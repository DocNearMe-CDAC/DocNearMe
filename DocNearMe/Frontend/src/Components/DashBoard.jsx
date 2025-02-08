import React from "react";
import AppointmentBooking from "./AppointmentBooking";

const DashBoard = ({ role }) => {
  return (
    <>
      (role==='admin'&&
      <AppointmentBooking />)
    </>
  );
};

export default DashBoard;
