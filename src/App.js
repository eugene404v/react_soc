import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="appWrapper">
                    <Header/>
                    <Navbar/>
                    <div className="mainContent">
                        <Route component={Profile} path='/profile' />
                        <Route component={Messages} path='/messages' />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
