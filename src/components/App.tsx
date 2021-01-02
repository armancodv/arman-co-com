import React, {useEffect} from 'react';
import './App.scss';
import {useDispatch} from "react-redux";
import profileActions from "../redux/profile/profileActions";
import skillsActions from "../redux/skills/skillsActions";
import experienceActions from "../redux/experience/experienceActions";
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "./layout/SideBar/SideBar";
import Content from "./layout/Content/Content";

const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(profileActions.fetchProfile())
        dispatch(skillsActions.fetchSkills())
        dispatch(experienceActions.fetchExperience())
    }, [dispatch])
    return (
        <Container fluid className="app">
            <Row>
                <Col md={3} lg={2} className="app-side-bar">
                    <SideBar />
                </Col>
                <Col md={9} lg={10} className="app-content">
                    <Content />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
