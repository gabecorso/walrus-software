import React from 'react';

import {Card, Jumbotron, Container, Button, Row, Col} from "react-bootstrap";
import './styles/main.css';
import './styles/parabola.css'
import XerxesMoon from "./XerxesMoon/XerxesMoon";

function DesertRygon() {



    return (

        <Container style={{backgroundColor: 'slategray', maxHeight: '90vh', overflow: 'hidden'}}>

            <div>
                <p style={{fontSize: 200, color: 'white', padding: 50}} className={' font-special'}>Desert Rygon</p>
            </div>
            <div className={'mx-auto'} style={{width: 800, height: 800, position: 'relative'}}>
                <div className="cerros">
                    <div className="cerro12">
                        <div className="cerro21"></div>
                    </div>
                    <div className="cerro">
                        <div className="cerro3"></div>
                    </div>
                    <div className="cerro7">
                        <div className="cerro9"></div>
                    </div>
                    <div className={'moon'} id={'rogeria-moon'}></div>
                    <XerxesMoon/>
                </div>

            </div>

        </Container>

    );
}

export default DesertRygon;




