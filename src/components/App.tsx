import React, { useEffect } from 'react';
import './App.scss';
import Profile from './sections/profile/Profile';
import Highlights from './sections/highlights/Highlights';
import Experience from './sections/experience/Experience';
import Portfolios from './sections/portfolios/Portfolios';
import Education from './sections/education/Education';
import Publications from './sections/publications/Publications';
import Footer from './sections/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Skills from './sections/skills/Skills';
import { useAppDispatch } from '../redux/hooks';
import generalActions from '../redux/general/generalActions';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(generalActions.pageLoad());
  }, [dispatch]);

  return (
    <div className="app">
      <header className="app-header">
        <Container>
          <Row>
            <Col>
              <Profile />
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Row>
          <Col md={8}>
            <main className="app-main">
              <Highlights />
              <Experience />
            </main>
          </Col>
          <Col md={4}>
            <aside>
              <Skills />
            </aside>
          </Col>
        </Row>
        <Row>
          <Col>
            <Portfolios />
            <Education />
            <Publications />
          </Col>
        </Row>
      </Container>
      <footer className="app-footer">
        <Container>
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default App;
