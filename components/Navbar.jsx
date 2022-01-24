import React from "react";
import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit";

const Navbar = () => {
  return (
    <div className="navbar container">
      <Link href={"/"}>
        <p className="navbar-brand">SuperHero's</p>
      </Link>
      <Link href={"/new"}>
        <MDBBtn>New Identity</MDBBtn>
      </Link>
    </div>
  );
};
export default Navbar;
