import React, {useEffect} from 'react';
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import profileActions from "../redux/profile/profileActions";
import experienceActions from "../redux/experience/experienceActions";
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "./layouts/SideBar/SideBar";
import Template from "./layouts/Template/Template";
import ReactGA from 'react-ga';
import {GOOGLE_ANALYTICS_ID} from "../config/config";
import routerSelectors from "../redux/router/routerSelectors";
import highlightsActions from "../redux/highlights/highlightsActions";
import portfoliosActions from "../redux/portfolio/portfolioActions";

const App: React.FC = () => {
    const dispatch = useDispatch();
    const pathname = useSelector(routerSelectors.getPathname)

    useEffect(()=>{
        ReactGA.initialize(GOOGLE_ANALYTICS_ID);
        dispatch(profileActions.fetchProfile())
        dispatch(experienceActions.fetchExperience())
        dispatch(highlightsActions.fetchHighlights())
        dispatch(portfoliosActions.fetchPortfolios())
    }, [dispatch]);

    useEffect(()=>{
        ReactGA.pageview(pathname);
    }, [pathname]);

    return (
        <Container fluid className="app">
            <Row className="app-row">
                <Col md={3} lg={2} className="app-side-bar">
                    <SideBar />
                </Col>
                <Col md={9} lg={10} className="app-content">
                    <Template />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
