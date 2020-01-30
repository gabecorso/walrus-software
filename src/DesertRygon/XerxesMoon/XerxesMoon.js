import React from 'react';
import {Card, Jumbotron, Container, Button, Row, Col} from "react-bootstrap";
import { FaBeer, FaHandPeace  } from 'react-icons/fa';

class XerxesMoon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            xerxesTopPos: 0,
            xerxesLeftPos: 0,
            hold: null,
        }

    }
    logKey = (e) => {


        switch(e.code) {
            case 'ArrowDown':
                this.setState({xerxesTopPos: this.state.xerxesTopPos + 10});
                break;
            case 'ArrowUp':
                this.setState({xerxesTopPos: this.state.xerxesTopPos - 10});
                break;
            case 'ArrowRight':
                this.setState({xerxesLeftPos: this.state.xerxesLeftPos + 10});
                break;
            case 'ArrowLeft':
                this.setState({xerxesLeftPos: this.state.xerxesLeftPos - 10});
                break;
        }
    };



    componentDidMount() {
        setTimeout(() => {this.setState({xerxesTopPos: 10})}, 1000)
        document.addEventListener('keydown', this.logKey);


    }



    render() {

        let birdTitle = 's';


        return (
            <div style={{position: 'relative', display: 'inline', height: 1000, width: 1000}}><div className={'moon'} id={'xerxes-moon'} style={{top: this.state.xerxesTopPos, left: this.state.xerxesLeftPos, transition: 'top .3s, left .3s'}}></div></div>
        )
    }
}

export default XerxesMoon;




