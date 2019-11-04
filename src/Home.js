import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Card} from "react-bootstrap";
import { FaBeer } from 'react-icons/fa';

function Home() {

    return (


        <div className="App">
            <header className="App-header">
                <p>
                    Welcome to the React SiteManager
                </p>
                <Card style={{backgroundColor: '#008087'}}>
                    <Card.Body>
                        <Card.Text>
                            This is some simple card text
                        </Card.Text>
                    </Card.Body>
                </Card>
            </header>

            <div className={'mx-auto'} style={{border: '5px solid orange', borderRadius: '5px', height: 600, width: 600}}>
                <p className={'font-special'}>Lorem Ipsum</p>
            </div>

        </div>

    );
}

export default Home;




