import React from 'react';
import './styles/main.css';

function DesertRygon() {

    return (


        <div style={{backgroundColor: 'slategray'}}>
            <div>
                <div className={'mx-auto'} style={{width: 50, height : 50}}>
                    <div className={'star'}></div>
                    <div className={'star'}></div>
                    <div className={'star'}></div>
                    <div className={'star'}></div>
                </div>
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
                </div>
            </div>
        </div>

    );
}

export default DesertRygon;




