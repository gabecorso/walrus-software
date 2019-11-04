import React from 'react';
import './App.css';
import './eamonism.scss';
import {Card, Jumbotron} from "react-bootstrap";
import { FaBeer } from 'react-icons/fa';

var index;

var images = [

    "https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Vision-of-a-Dying-Crab----compressed-for-site-6-4-19.jpg",
    "https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/Vision-of-a-Dying-Crab-II----compressed-for-site-6-4-19.jpg",
    "https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/crab-drawing----IG-version----8.5x5-6-16-19.jpg",
    "https://eamonism.s3.amazonaws.com/Images+for+site+6-4-19/The-Botany-Cipher-compressed-for-site-6-4-19.jpg",

    "https://s3.amazonaws.com/eamonism/Capragraph2.jpg",

    "https://s3.amazonaws.com/eamonism/Hunters.jpg",
    "https://s3.amazonaws.com/eamonism/Capragraph.jpg",

    "https://s3.amazonaws.com/eamonism/Augury.jpg",
    "https://s3.amazonaws.com/eamonism/Castilla.jpg",


    "https://s3.amazonaws.com/eamonism/MindsEyedrops.jpg",

    "https://s3.amazonaws.com/eamonism/port11.jpg",


    "https://s3.amazonaws.com/eamonism/Rodentia.jpg",
    "https://s3.amazonaws.com/eamonism/DreamofQueenMeabh.jpg",
    "https://s3.amazonaws.com/eamonism/Psyght.jpg",


    "https://s3.amazonaws.com/eamonism/Ornithograph.jpg",


    "https://s3.amazonaws.com/eamonism/port12.jpg",
    "https://s3.amazonaws.com/eamonism/GildedFish.jpg",

    "https://s3.amazonaws.com/eamonism/port10.jpg",

    "https://s3.amazonaws.com/eamonism/Granadas.jpg",
    "https://s3.amazonaws.com/eamonism/Illuminette.jpg",
    "https://s3.amazonaws.com/eamonism/Prospero.jpg",


    "https://s3.amazonaws.com/eamonism/birdSticker.png",
    "https://s3.amazonaws.com/eamonism/fishSticker.png",

    "https://s3.amazonaws.com/eamonism/birdSticker.png",
    "https://s3.amazonaws.com/eamonism/fishSticker.png",


    "https://eamonism.s3.amazonaws.com/At-The-Gates-of-Paradise--10.5x13.5----Compressed-for-Site.jpg",
    "https://eamonism.s3.amazonaws.com/Minotaur-in-the-Labyrinth--compressed-for-site.jpg"
]

// holds the titles of all the images
var titles = ['Vision of a Dying Crab (1st Ed.) - 11.25x13.75 inches', 'Vision of a Dying Crab II (1st Ed.) - 11.25x13.75 inches', 'Crab (1st Ed.) - 11.5x8.5 inches',

    'The Botany Cipher (1st Ed.) - 8.5x11.5 inches', 'Capragraph II (1st. Ed.) - 10x13.5 inches', 'The Hunters (1st Ed.) - 11x15 inches',

    'Capragraph (1st Ed.) - 11x14.5', 'Augury (1st Ed.) - 12x16 inches', 'Castilla (1st Ed.) - 11x14 inches',

    "Mind's Eyedrops (1st Ed.) - 11x15 inches",

    'Savannah of the Waning Gibbous (1st Ed.) - 8.5x11.5 inches',

    'Rodentia (1st Ed.) - 18x12 inches', 'Dream of Queen Meabh (1st Ed.) - 8.5x11.5 inches', 'Psyght (1st Ed.) - 11x14 inches',

    'Ornithograph (2nd Ed.) - 12x16 inches',

    'The Font of Eschaton (2nd Ed.) - 10.5x14.5 inches', 'Ichthyograph (2nd Ed.) - 8x8 inches',

    'Ornithograph II (3rd Ed.) - 12x16 inches', 'Las Granadas (2nd Ed.) - 11x17 inches',

    'Illuminette (2nd Ed.) - 8.5x11.5 inches', 'Prince Prospero (2nd Ed.) - 10.25x14.5 inches',


    'Large Bird Sticker - 7x6.74 inches', 'Large Fish Sticker - 6.86x5.5 inches', 'Small Bird Sticker - 4x3.86 inches', 'Small Fish Sticker - 4x3.22 inches',

    'At the Gates of Paradise (1st Ed.) - 10.5x13.5in',
    'Minotaur in the Labyrinth - 10.5x13.5in'

];
class Eamonism extends React.Component {



    startLightBox(event) {
        index = parseInt(event.target.id);


        if (index == 0) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$110";
            document.getElementById('price_input').value = 110;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index == 1) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$120";
            document.getElementById('price_input').value = 120;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index == 2) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$50";
            document.getElementById('price_input').value = 50;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index == 3) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$45";
            document.getElementById('price_input').value = 45;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index == 5) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$60";
            document.getElementById('price_input').value = 60;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index < 6) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$60";
            document.getElementById('price_input').value = 60;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index == 8) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$45";
            document.getElementById('price_input').value = 45;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index == 10) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$45";
            document.getElementById('price_input').value = 45;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index == 11) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$45";
            document.getElementById('price_input').value = 45;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index == 13) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$45";
            document.getElementById('price_input').value = 45;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index < 15) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$50";
            document.getElementById('price_input').value = 50;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index == 15) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$90";
            document.getElementById('price_input').value = 90;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index == 17) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$60";
            document.getElementById('price_input').value = 60;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index < 20) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$50";
            document.getElementById('price_input').value = 50;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index == 20) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$90";
            document.getElementById('price_input').value = 90;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index < 23) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$6";
            document.getElementById('price_input').value = 6;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index == 25) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$120 - Inquire for custom sizing";
            document.getElementById('price_input').value = 120;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (index == 26) {	// Get the modal
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];

            var price = document.getElementById('price');
            price.innerHTML = "$95 - Inquire for custom sizing";
            document.getElementById('price_input').value = 95;

            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        } else {
            var modal = document.getElementById('myModal');


            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(index);
            var modalImg = document.getElementById("img");
            var captionText = titles[index];
            document.getElementById('item_name').value = titles[index];
            modal.style.display = "block";
            modalImg.src = images[index];
            var price = document.getElementById('price');
            price.innerHTML = "$4";
            var caption = document.getElementById("caption");
            caption.innerHTML = captionText;
            document.getElementById('price_input').value = 4;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        }
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

            <div id="myModal" class="modal">
                <span class="close">×</span>
                <div class="wrapModalImg">
                    <div id="caption"></div>
                    <form class="purchase" action="/welcome" method="post" accept-charset="utf-8">
                        <input type="hidden" name="item_name" id="item_name" value=""></input>
                        <button class="purchase-btn" type="submit" value=""></button>
                        <span id="price"></span>
                        <input type="hidden" name="price_input" id="price_input" value=""></input>
                        <input type="text" name="discount_code" id="discount_code" value=""
                               placeholder="Coupon Code"></input>
                    </form>


                    <img class="modal-content" id="img"/>
                </div>
            </div>

            <div id="myStickerModal" class="modal">
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
            </div>


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




