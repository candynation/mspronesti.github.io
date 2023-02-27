import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FaHandPointRight, FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
function AboutCard() {
  const  { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
          <p style={{ textAlign: "justify" }}>
          {t('Greeting')} {t('Im')}<span className="green">Ka Yan Candy Chan</span>, {t('MLE')}.
            <br/>
            {t('IHoldDegree1')} <span className="green">Applied Computing Science</span> {t('School1')}. 
            I have over 12 years of experience in software quality assurance.
          </p>
          <br />
          <Container>
            <Row>
              <Col md={6}>Skills</Col>
              <Col md={6}>Tools</Col>
            </Row>
            <Row>
              <Col md={6}>
              <ul>
                <li className="about-activity"><FaPlus /> Agile Scrum</li>
                <li className="about-activity"><FaPlus /> Analysis</li>
                <li className="about-activity"><FaPlus /> Api Testing</li>
                <li className="about-activity"><FaPlus /> Appium/Selenium</li>
                <li className="about-activity"><FaPlus /> Confluent Kafka/Avro</li>
                <li className="about-activity"><FaPlus /> Cypress</li>
                <li className="about-activity"><FaPlus /> Google Cloud Platform</li>
                <li className="about-activity"><FaPlus /> Java</li>
                <li className="about-activity"><FaPlus /> JavaScript/TypeScript</li>
                <li className="about-activity"><FaPlus /> Managing QA Teams</li>
                <li className="about-activity"><FaPlus /> Manual Testing</li>
                <li className="about-activity"><FaPlus /> Mobile Testing</li>
                <li className="about-activity"><FaPlus /> MongoDB</li>
                <li className="about-activity"><FaPlus /> PostgreSQL</li>
                <li className="about-activity"><FaPlus /> Python</li>
                <li className="about-activity"><FaPlus /> React Native</li>
                <li className="about-activity"><FaPlus /> SDLC Requirements</li>
                <li className="about-activity"><FaPlus /> Test Automation</li>
                <li className="about-activity"><FaPlus /> Test Cases</li>
                <li className="about-activity"><FaPlus /> Test Planning</li>
                <li className="about-activity"><FaPlus /> Web Testing</li>
                <li className="about-activity"><FaPlus /> XML/JSON/YAML</li>
              </ul>
              </Col>
              <Col md={6}>
              <ul>
                <li className="about-activity"><FaPlus /> Android Phones and Tablets</li>
                <li className="about-activity"><FaPlus /> Bash/Shell</li>
                <li className="about-activity"><FaPlus /> Blackberry</li>
                <li className="about-activity"><FaPlus /> Charles Proxy/Postman</li>
                <li className="about-activity"><FaPlus /> Git</li>
                <li className="about-activity"><FaPlus /> GitLab/Jenkins</li>
                <li className="about-activity"><FaPlus /> IntelliJ</li>
                <li className="about-activity"><FaPlus /> iOS, iPhone, iPad</li>
                <li className="about-activity"><FaPlus /> Jira/Confluence</li>
                <li className="about-activity"><FaPlus /> Mac OSX/Linux</li>
                <li className="about-activity"><FaPlus /> MS Teams/Slack</li>
                <li className="about-activity"><FaPlus /> TestRail</li>
                <li className="about-activity"><FaPlus /> VS Code</li>
                <li className="about-activity"><FaPlus /> Windows</li>
                <li className="about-activity"><FaPlus /> XCode</li>
              </ul>
              </Col>
            </Row>
          </Container>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
