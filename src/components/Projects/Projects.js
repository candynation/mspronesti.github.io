import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import hangman from "../../assets/Projects/hangman.png";
import riddles from "../../assets/Projects/riddles.png";
import tictactoe from "../../assets/Projects/tictactoe.png"

import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('ProjHeader')} <strong className="green">{t('Works')} </strong>
        </h1>
        <p className="text">{t('ProjSubtitle')}</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hangman}
              title="Stickman"
              description={t('Proj1')}
              link="https://github.com/candynation/hangman"
              website="http://stickman.candychansgames.com/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description={t('Proj2')}
              link="https://github.com/candynation/tictactoe"
              website="http://tic-tac-toe.candychansgames.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={riddles}
              isBlog={false}
              title="Riddles"
              description={t('Proj3')}
              link="https://github.com/candynation/riddles"
              website="http://riddles.candychansgames.com/"
            />
          </Col>      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
