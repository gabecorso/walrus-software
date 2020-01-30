import React, {useState} from 'react';
import './App.css';
import './eamonism.scss';
import {Card, Jumbotron, Modal} from "react-bootstrap";
import { FaBeer } from 'react-icons/fa';

var index;

let stock = [
            {display_price: '$0', price: 0, title: 'Vision of a Dying Crab (1st Ed.)', full_path: 'https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Vision-of-a-Dying-Crab----compressed-for-site-6-4-19.jpg', thumb_path: '', size: '11.25x13.75 inches'},
            {display_price: '$0', price: 0, title: 'Vision of a Dying Crab II (1st Ed.)', full_path: 'https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Vision-of-a-Dying-Crab-II----compressed-for-site-6-4-19.jpg', thumb_path: '', size: '11.25x13.75 inches'},
            {display_price: '$0', price: 0, title: 'Crab (1st Ed.)', full_path: 'https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/crab-drawing----IG-version----8.5x5-6-16-19.jpg', thumb_path: '', size: '11.5x8.5 inches'},

            {display_price: '$0', price: 0, title: 'The Botany Cipher', full_path: 'https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/The-Botany-Cipher-compressed-for-site-6-4-19.jpg', thumb_path: '', size: '8.5x11.5 inches'},
            {display_price: '$0', price: 0, title: 'Capragraph II', full_path: 'https://s3.amazonaws.com/eamonism/Capragraph2.jpg', thumb_path: '', size: '10x13.5 inches'},
            {display_price: '$0', price: 0, title: 'The Hunters (1st Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/Hunters.jpg', thumb_path: '', size: '11x15 inches'},

            {display_price: '$0', price: 0, title: 'Capragraph (1st Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/Capragraph.jpg', thumb_path: '', size: '11x14.5 inches'},
            {display_price: '$0', price: 0, title: 'Augury (1st Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/Augury.jpg', thumb_path: '', size: '12x16 inches'},
            {display_price: '$0', price: 0, title: 'Castilla (1st Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/Castilla.jpg', thumb_path: '', size: '11x14 inches'},


            {display_price: '$0', price: 0, title: 'Mind\'s Eyedrops (1st Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/MindsEyedrops.jpg', thumb_path: '', size: '11x15 inches'},
            {display_price: '$0', price: 0, title: 'Savannah of the Waning Gibbous (1st Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/port11.jpg', thumb_path: '', size: '8.5x11.5 inches'},
            {display_price: '$0', price: 0, title: 'Rodentia (1st Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/Rodentia.jpg', thumb_path: '', size: '18x12 inches'},


            {display_price: '$0', price: 0, title: 'Dream of Queen Meabh (1st Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/DreamofQueenMeabh.jpg', thumb_path: '', size: '8.5x11.5 inches'},
            {display_price: '$0', price: 0, title: 'Psyght (1st Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/Psyght.jpg', thumb_path: '', size: '11x14 inches'},
            {display_price: '$0', price: 0, title: 'Ornithograph (2nd Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/Ornithograph.jpg', thumb_path: '', size: '12x16 inches'},
    
            {display_price: '$0', price: 0, title: 'The Font of Eschaton (2nd Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/port12.jpg', thumb_path: '', size: '10.5x14.5 inches'},
            {display_price: '$0', price: 0, title: 'Ichthyograph (2nd Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/GildedFish.jpg', thumb_path: '', size: '8x8 inches'},
            {display_price: '$0', price: 0, title: 'Ornithograph II (3rd Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/port10.jpg', thumb_path: '', size: '12x16 inches'},
            {display_price: '$0', price: 0, title: 'Las Granadas (2nd Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/Granadas.jpg', thumb_path: '', size: '11x17 inches'},
            {display_price: '$0', price: 0, title: 'Illuminette (2nd Ed.) - 8.5x11.5 inches', full_path: 'https://s3.amazonaws.com/eamonism/Illuminette.jpg', thumb_path: '', size: '8.5x11.5 inches'},
            {display_price: '$0', price: 0, title: 'Prince Prospero (2nd Ed.)', full_path: 'https://s3.amazonaws.com/eamonism/Prospero.jpg', thumb_path: '', size: '10.25x14.5 inches'},
            {display_price: '$0', price: 0, title: 'Large Bird Sticker', full_path: 'https://s3.amazonaws.com/eamonism/birdSticker.png', thumb_path: '', size: '7x6.74 inches'},
            {display_price: '$0', price: 0, title: 'Large Fish Sticker', full_path: 'https://s3.amazonaws.com/eamonism/fishSticker.png', thumb_path: '', size: '6.86x5.5 inches'},
            {display_price: '$0', price: 0, title: 'Small Bird Sticker', full_path: 'https://s3.amazonaws.com/eamonism/birdSticker.png', thumb_path: '', size: '4x3.86 inches'},
            {display_price: '$0', price: 0, title: 'Small Fish Sticker', full_path: 'https://s3.amazonaws.com/eamonism/fishSticker.png', thumb_path: '', size: '4x3.22 inches'},
            {display_price: '$0', price: 0, title: 'At the Gates of Paradise (1st Ed.)', full_path: 'https://eamonism.s3.amazonaws.com/At-The-Gates-of-Paradise--10.5x13.5----Compressed-for-Site.jpg', thumb_path: '', size: '10.5x13.5in'},
            {display_price: '$0', price: 0, title: 'Minotaur in the Labyrinth', full_path: 'https://eamonism.s3.amazonaws.com/Minotaur-in-the-Labyrinth--compressed-for-site.jpg', thumb_path: '', size: '10.5x13.5in'},
            {display_price: '$0', price: 0, title: 'POMEGRANTE PLACEHOLDER', full_path: '', thumb_path: '', size: ''}

            ];
class Eamonism extends React.Component {

    constructor(props) {
        super(props);
       this.state = {
           show: false,
               show_sticker: false
        }
    }


    check() {

        {/*<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">*/}
        {/*    <input type="hidden" name="cmd" value="_s-xclick"></input>*/}
        {/*        <input type="hidden" name="hosted_button_id" value="XNWVWULUU62QQ"></input>*/}
        {/*            <table>*/}
        {/*                <tr><td><input type="hidden" name="on0" value="Colors">Colors</td></tr><tr><td><select name="os0">*/}
        {/*                <option value="color 1">color 1 $110.00 USD</option>*/}
        {/*                <option value="Option 2">Option 2 $100.00 USD</option>*/}
        {/*                <option value="Option 3">Option 3 $100.00 USD</option>*/}
        {/*            </select> </td></tr>*/}
        {/*            </table>*/}
        {/*            <input type="hidden" name="currency_code" value="USD"></input>*/}
        {/*            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>*/}
        {/*    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>*/}
        {/*</form>*/}


    }
    generateModal(index) {
        this.setState({
            show: true,
            name: stock[index].title,
            price: stock[index].price,
            caption_text: stock[index].title,
            display_price: stock[index].display_price,
            image: stock[index].full_path,
            id: index
        });
    }
    startLightBox(event) {
        index = parseInt(event.target.id);
        this.generateModal(index);
    }
    componentDidMount() {
        document.getElementById('bird').src = 'https://s3.amazonaws.com/eamonism/colorbird.png';
    }

    render() {

    let birdTitle = 's';

    return (
        <div className={'eamonism'}>
            <div class="home-left">
                <div class="title">EAMONISM</div>
                <div class="dot"><img src="https://s3.amazonaws.com/eamonism/circle.png"/><img
                    src="https://s3.amazonaws.com/eamonism/circle.png"/><img
                    src="https://s3.amazonaws.com/eamonism/circle.png"/></div>
            </div>
            <div id="cf3">
                <img class="bottom" src="https://s3.amazonaws.com/eamonism/colorbird.png"/>
                <img class="top" id="bird" src="https://s3.amazonaws.com/eamonism/bwbird.png"/>
            </div>


            <div class="section-header">PORTFOLIO</div>


            <div class="wrap" id="wrap">
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="26"
                             src="https://eamonism.s3.amazonaws.com/Minotaur-in-the-Labyrinth--compressed-for-site.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="25"
                             src="https://eamonism.s3.amazonaws.com/At-The-Gates-of-Paradise--10.5x13.5----Compressed-for-Site.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="0"
                             src="https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Vision-of-a-Dying-Crab----compressed-for-site-6-4-19.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="1"
                             src="https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Vision-of-a-Dying-Crab-II----compressed-for-site-6-4-19.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="2"
                             src="https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/crab-drawing----IG-version----8.5x5-6-16-19.jpg"/>
                    </div>
                </div>

                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="3"
                             src="https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/The-Botany-Cipher-compressed-for-site-6-4-19.jpg"/>
                    </div>
                </div>

                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="4"
                             src="https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Capragraph-ii---compressed-for-site-6-4-19.jpg"/>
                    </div>
                </div>

                <div class="box">
                    <div class="boxInner">
                        <img id="5" onClick={(e)=> {this.startLightBox(e)}}
                             src="https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/The-Hunters-redux----filled-in-side-margins----sized-10.5x13----compressed.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="6" src="https://s3.amazonaws.com/eamonism/CapragraphThumb.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="7" src="https://s3.amazonaws.com/eamonism/Augury.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="8" src="https://s3.amazonaws.com/eamonism/Castilla.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="9"
                             src="https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Mind's-Eyedrops-2nd-edition----8.5x11----compressed.jpg"/>
                    </div>
                </div>


                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="10" src="https://s3.amazonaws.com/eamonism/port11.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="11" src="https://s3.amazonaws.com/eamonism/RodentiaThumb.png"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="12" src="https://s3.amazonaws.com/eamonism/DoQMThumb.png"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="13" src="https://s3.amazonaws.com/eamonism/Psyght.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="14" src="
            https://s3.amazonaws.com/eamonism/Ornithograph.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="15"
                             src="https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Font-of-Eschaton-compressed-for-site-6-4-19.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="16" src="
            https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Ichthyograph-compressed-for-site-6-4-19.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="17" src="https://s3.amazonaws.com/eamonism/port10.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="18" src="https://s3.amazonaws.com/eamonism/GranadasThumb.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="19"
                             src="https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Illuminette-compressed-for-site-6-4-19.jpg"/>
                    </div>
                </div>
                <div class="box" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="20" src="https://s3.amazonaws.com/eamonism/Prospero.jpg"/>
                    </div>
                </div>


            </div>

            <Modal show={this.state.show} onHide={() => {this.setState({show: false})}} id="myModal" className="modal">
                <span >×</span>
                <div >
                    <div id="caption"></div>
                    <form class="purchase" action="/welcome" method="post" accept-charset="utf-8">
                        <input type="hidden" name="item_name" id="item_name" value={this.state.name}></input>
                        <button class="purchase-btn" type="submit" value=""></button>
                        <span id="price">{this.state.display_price}</span>
                        <input type="hidden" name="price_input" id="price_input" value={this.state.price}></input>
                        <input type="text" name="discount_code" id="discount_code" value=""
                               placeholder="Coupon Code"></input>
                    </form>


                    <img class="modal-content" src={this.state.image} id="img"/>
                </div>
            </Modal>

            <Modal show={this.state.show_sticker} onHide={() => {this.setState({show_sticker: false})}} id="myStickerModal" className="modal">
                <span class="close">×</span>
                <div class="wrapModalImg">
                    <div id="caption"></div>
                    <form class="purchase" action="/welcome" method="post" accept-charset="utf-8">
                        <input type="hidden" name="item_name" id="item_name" value=""></input>
                        <button class="purchase-btn" type="submit" value=""></button>
                        <span id="price">$15</span>
                        <input type="text" name="discount_code" id="discount_code" value=""
                               placeholder="Coupon Code"></input>
                    </form>


                    <img class="modal-content" id="img"/>
                </div>
            </Modal>


            <div class="section-header">STICKERS</div>

            <h1 class="sizes">Large</h1>

            <div class="wrap" id="wrap" className={'m-auto'}>


                <div class="boxS" onClick={(e)=> {this.startLightBox(e)}}>

                    <div class="boxInner">
                        <img id="21" src={birdTitle}/>
                    </div>

                </div>


                <div class="boxS" onClick={(e)=> {this.startLightBox(e)}}>
                    <div class="boxInner">
                        <img id="22" src="https://s3.amazonaws.com/eamonism/fishThumb.jpg"/>
                    </div>
                </div>
                <h1 class="sizes">Small</h1>


                <div class="boxS" onClick={(e)=> {this.startLightBox(e)}} style={{paddingBottom: '25%'}}>

                    <div class="boxInner">
                        <img id="23" style={{width: '50%', height: '50%'}} src={birdTitle}/>
                    </div>

                </div>


                <div class="boxS" onClick={(e)=> {this.startLightBox(e)}} style={{paddingBottom: '21%', paddingTop: '4%'}}>
                    <div class="boxInner">
                        <img id="24" src="https://s3.amazonaws.com/eamonism/fishThumb.jpg"
                             style={{width: '50%', height: '50%'}}/>
                    </div>
                </div>


                <div class="section-header">ARTIST BIO</div>


                <div class="eamon"><img src="https://s3.amazonaws.com/eamonism/eamonpic.jpg"/></div>
                <div class="fname">EAMON</div>
                <div class="lname">MURPHY</div>
                <div class="bio"> Eamon Murphy is an artist currently living and working in Fairfield county CT.
                    Eamon’s creations —posters, prints, stickers, and more— utilize a combination of
                    pen-and-pencil draftsmanship and a tasteful dash of digital media. These original works draw
                    upon history, philosophy, and deep-dives into the imagination. Classical, Surrealist, or
                    something else completely, these works present windows into other worlds, and invite viewers
                    to draw their own interpretations.
                    Beyond this, Eamon uses his graphic design and Photoshop skills to fulfill custom print
                    requests as well as to enhance and alter photos on commission, transforming real-world
                    images and memories into custom-made works of art.

                    We invite you to join us as we continue this journey. Please, have a look around.

                    For inquiries about commissions, custom projects, or our selection of original prints and
                    stickers, please email
                    <a href="mailto:eamonmurphy928@gmail.com" style={{color: 'blue'}}>eamonmurphy928@gmail.com</a>
                </div>
            </div>

            <div class="section-header">CONTACT</div>

            <div class="contact-details">If you'd like to purchase any of the prints listed please click on the
                "Purchase" button after opening the full sized image
            </div>
            <img src="https://s3.amazonaws.com/eamonism/email.png" id="logo"/>
            <div class="email"><a href="mailto:eamonmurphy928@gmail.com">eamonmurphy928@gmail.com</a></div>
            <img src="https://s3.amazonaws.com/eamonism/phone.png" id="logo"/>
            <div class="phone">203.249.7684</div>

            <a href="https://www.instagram.com/shmeamon/"><img src="https://s3.amazonaws.com/eamonism/insta.png"
                                                               id="logo" height="50" width="50"/></a>
            <div class="insta"><a href="https://www.instagram.com/shmeamon/"
                                  style={{textDecoration: 'none', textColor: 'black'}}>@shmeamon</a></div>
            <div class="footer"><a href="http://www.jubil.co/">Jubil Co.</a></div>
        </div>
        )
    }
}

export default Eamonism;




