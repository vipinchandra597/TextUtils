import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  FormGroup,
  Label,
  Input,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Navbars = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <NavbarBrand href="/">{props.title}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About </NavLink>
            </NavItem>
          </Nav>

          <FormGroup switch>
            <Input
              type="switch"
              role="switch"
              id="switch"
              onClick={() => props.toggleMode("dark")}
              style={{
                backgroundColor: props.mode !== "light" ? "light" : props.mode,
              }}
            />
            <Label
              className={`text-${props.mode === "light" ? "dark" : "light"}`}
              htmlFor="switch"
              check
            >
              Enable Darkmode
            </Label>
          </FormGroup>

          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbars;

Navbars.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbars.defaultProps = {
  title: "Set title here",
  aboutText: "About text here",
};
