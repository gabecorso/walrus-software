import React from 'react';
import {Card, Jumbotron, Container, Button} from "react-bootstrap";
import { FaBeer, FaHandPeace  } from 'react-icons/fa';
import './styles/core/core.css'
import './styles/lj.css'

class Lizzy extends React.Component {


    componentDidMount() {

    }

    render() {

        let birdTitle = 's';

        return (
            <Container>
                <div style={{display: 'none'}}>
                <iframe className={'box-shadow'}  width="560" height="315" src="https://www.youtube.com/embed/Z0-VuyIz3Qg?autoplay=1" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>

                <div style={{display: 'inline'}}>
                    <div   className={'lizzy brutal-text'}>
                        <h1>Hello Lizzy</h1>
                    </div>
                    <div style={{marginLeft: '50%', marginTop: '-7%'}}>
                        <FaHandPeace size={50} style={{color: 'gold'}} className={'glitch spin-cycle'} />
                    </div>
                </div>

                <div className={'anim-bg-water'} style={{marginTop: 50, width: 500, height: 300, textAlign: 'center', padding: '5%', backgroundColor: 'tomato', borderRadius: 5}}>
                    <h4><strong style={{color: 'tomato'}}>tryna buy some hip ass t-shirts or socks or something lmao? we have retro too...</strong></h4>
                </div>

                <Button className={'button-out mt-5 ml-5'}>
                    Purchase!
                </Button>



            </Container>
        )
    }
}

export default Lizzy;




