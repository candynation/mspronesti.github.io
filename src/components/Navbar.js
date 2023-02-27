import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import BtnToggleTheme from "./BtnTottleTheme";
import { Col, Dropdown, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillGithub,
  AiFillMail
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

import { MdLanguage } from 'react-icons/md';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng)
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className="sticky"
    >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span/>
          <span/>
          <span/>
        </Navbar.Toggle>
      
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" defaultActiveKey="#projects">
          <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "3px" }}
                />{" "}
                {t('Projects')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "3px" }} /> {t('About')}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

        { !expand &&  
        <Row className="col-sm-4">
          <Col>
            <ul>
              <li className="social-icons">
                <a className="footer-social-icons"
                  href="https://github.com/candynation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a className="footer-social-icons"
                  href="https://www.linkedin.com/in/kayancandychan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a className="footer-social-icons"
                  href="mailto:candy.cky@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
          <Col className="col-sm-4">
            <BtnToggleTheme/> 
          </Col>
        </Row>       
        }  
        
    </Navbar>
  );
}

export default NavBar;
