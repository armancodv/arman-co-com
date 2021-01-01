import React, {useEffect} from 'react';
import {Layout} from 'antd';

import "antd/dist/antd.css";
import './App.css';
import AppHeader from "./layout/AppHeader";
import AppContent from "./layout/AppContent";
import {useDispatch} from "react-redux";
import profileActions from "../redux/profile/profileActions";
import skillsActions from "../redux/skills/skillsActions";

const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(profileActions.fetchProfile())
        dispatch(skillsActions.fetchSkills())
    }, [dispatch])
    return (
        <Layout className="app">
            <AppHeader />
            <AppContent />
        </Layout>
    );
}

export default App;
