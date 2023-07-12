import React from "react";
import Wrapper from "../sections/Wrapper";
import pokedexScreenshot from "../assets/pokedex_screenshot.jpg";
import jammmingScreenshot from "../assets/jammming_screenshot.jpg";
import compendiumScreenshot from "../assets/compendium_screenshot.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
  return (
    <div className="project-content">
      <Row className="g-4">
        <Col>
          <Card
            className="text-center bg-dark text-white p-1"
            style={{ width: "20rem" }}
          >
            <Card.Img variant="top" src={compendiumScreenshot} />
            <Card.Body>
              <Card.Title>Compendium - In Progress</Card.Title>
              <Card.Text>
                Curation of my favorite media, a chance for me to collect it all
                in one place! Built with Java Spring-backed API and
                React-frontend; incorporating MongoDB and a variety of
                media-related APIs.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="primary"
                href="https://github.com/adamnubbz/jammming"
                target="_blank"
              >
                Go to Compendium
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card
            className="text-center bg-dark text-white p-1"
            style={{ width: "20rem" }}
          >
            <Card.Img variant="top" src={jammmingScreenshot} />
            <Card.Body>
              <Card.Title>Jammming</Card.Title>
              <Card.Text>
                React-app integrated with Spotify API allowing curation of
                playlists for users based on user song input. Playlists can be
                saved to user's Spotify profiles (will need a Spotify profile to
                be able to connect).
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="primary"
                href="https://github.com/adamnubbz/jammming"
                target="_blank"
              >
                Go to Jammming
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card
            className="text-center bg-dark text-white p-1"
            style={{ width: "20rem" }}
          >
            <Card.Img variant="top" src={pokedexScreenshot} />
            <Card.Body>
              <Card.Title>Pokédex</Card.Title>
              <Card.Text>
                Web-based Pokédex to explore entire Pokemon database and
                statistics via React and PokeAPI. Users can also curate a
                personal favorites list via Google Firebase DB integration.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="primary"
                href="https://pokedex-adam.netlify.app"
                target="_blank"
              >
                Go to Pokédex
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Wrapper(Projects);

// This is the 3D carousel to try sometime
{
  /* <div className="scene">
        <div className="carousel">
          <div className="carousel__cell">1</div>
          <div className="carousel__cell">2</div>
          <div className="carousel__cell">3</div>
          <div className="carousel__cell">4</div>
          <div className="carousel__cell">5</div>
        </div>
      </div>
      <p>
        <button className="previous-button">Previous</button>
        <button className="next-button">Next</button>
      </p> */
}
