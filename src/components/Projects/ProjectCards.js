import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { BiLinkExternal } from "react-icons/bi";
import { useTranslation } from "react-i18next";


function ProjectCards(props) {
  const { t } = useTranslation();
  return (
    <Card className="project-card-view">
      <p><small><blockquote>{t('PlayableGameInfo')}</blockquote></small></p>
      <iframe title={props.title} style={{width:`100%`, height:750, transform: `scale(0.95)`, transformOrigin: `top center`}}
              src={props.website} ></iframe>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <ButtonGroup className="project-buttons">
          <Button variant="primary" href={props.link} target="_blank">
            <BiLinkExternal /> &nbsp; {t('View')}
          </Button>
          <Button variant="primary" href={props.website} target="_blank">
            <BiLinkExternal /> &nbsp; {t('Play Game')}
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
