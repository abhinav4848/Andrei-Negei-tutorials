import React from 'react';
import Particles from 'react-particles-js';
import { particlesOptions } from './components/ParticleOptions/ParticleOptions';
import Navigation from "./components/Navigation/Navigation";
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import './App.css';

function App() {
    return (
        <div className="App">
            <Particles className="particles"
                params={particlesOptions} />
            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm />
            {/* 
            <FaceRecognition /> */}
        </div>
    );
}

export default App;
