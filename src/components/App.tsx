import React, {useEffect} from 'react';
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import profileActions from "../redux/profile/profileActions";
import experienceActions from "../redux/experience/experienceActions";
import ReactGA from 'react-ga';
import {GOOGLE_ANALYTICS_ID} from "../config/config";
import routerSelectors from "../redux/router/routerSelectors";
import highlightsActions from "../redux/highlights/highlightsActions";
import portfoliosActions from "../redux/portfolio/portfolioActions";
import Profile from "./sections/profile/Profile";
import Highlights from "./sections/highlights/Highlights";
import Experience from "./sections/experience/Experience";
import Portfolios from "./sections/portfolios/Portfolios";
import Education from "./sections/education/Education";
import Publications from "./sections/publications/Publications";
import Footer from "./sections/footer/Footer";
import {Col, Container, Row} from "react-bootstrap";

const App: React.FC = () => {
    const dispatch = useDispatch();
    const pathname = useSelector(routerSelectors.getPathname)

    useEffect(() => {
        ReactGA.initialize(GOOGLE_ANALYTICS_ID);
        dispatch(profileActions.fetchProfile())
        dispatch(experienceActions.fetchExperience())
        dispatch(highlightsActions.fetchHighlights())
        dispatch(portfoliosActions.fetchPortfolios())
    }, [dispatch]);

    useEffect(() => {
        ReactGA.pageview(pathname);
    }, [pathname]);

    return (
        <div className="app">
            <header className="app-header">
                <Container>
                    <Row>
                        <Col>
                            <Profile/>
                        </Col>
                    </Row>
                </Container>
            </header>
            <main className="app-main">
                <Container>
                    <Row>
                        <Col>
                            <Highlights/>
                            <Experience/>
                            <Portfolios/>
                            <Education/>
                            <Publications/>
                        </Col>
                    </Row>
                </Container>
            </main>
            <footer className="app-footer">
                <Container>
                    <Row>
                        <Col>
                            <Footer/>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default App;
