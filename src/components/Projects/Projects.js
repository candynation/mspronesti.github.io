import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              title="Stickman"
              description={t('Proj1')}
              link="https://github.com/candynation/hangman"
              website="http://stickman.candychansgames.com/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Tic Tac Toe"
              description={t('Proj2')}
              link="https://github.com/candynation/tictactoe"
              website="http://tic-tac-toe.candychansgames.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Riddles"
              description={t('Proj3')}
              link="https://github.com/candynation/riddles"
              website="http://riddles.candychansgames.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Jokes"
              description={t('Proj4')}
              link="https://github.com/candynation/jokes"
              website="http://jokes.candychansgames.com/"
            />
          </Col>      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
