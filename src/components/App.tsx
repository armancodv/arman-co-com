import React, {useEffect} from 'react';
import './App.scss';
import {useDispatch} from "react-redux";
import profileActions from "../redux/profile/profileActions";
import skillsActions from "../redux/skills/skillsActions";
import experienceActions from "../redux/experience/experienceActions";
import {Col, Container, Row} from "react-bootstrap";

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
                <Col lg={2}>Sider</Col>
                <Col lg={10}>1 of 1</Col>
            </Row>
        </Container>
    );
}

export default App;
