import Carousel from "react-multi-carousel";
import StaffCarouselCard from 'components/cards/staff-carousel-card';
import {Container} from 'theme-ui';

// USE SHELL SCRIPT TO CREATE ALL THESE FROM FILE... uhh kinda forgot how getStaticProps works,
// didn't bother finding out (bc not that hard to add to list anyway) so I didn't use that.

// Improvement idea #1: Make this process automatic, such that if we add a new volunteer, 
// it'll automatically import the volunteer picture here

// Improvement idea #2: Don't store all the data in an array (LOL), and instead store it in a CSV
// or MD file, have people edit that, and then we export data from there into the array,
// then display it to the screen

import adrianImg from "assets/staff_pics/adrian.webp";
import agnesImg from "assets/staff_pics/agnes.webp"
import amoghImg from "assets/staff_pics/amogh.webp"
import anonymousImg from "assets/staff_pics/anonymous.webp"
import avaniImg from "assets/staff_pics/avani.webp"
import brandonImg from "assets/staff_pics/brandon.webp"
import darrenImg from "assets/staff_pics/darren.webp"
import ethanLuImg from "assets/staff_pics/ethan1.webp"
import ethanLamImg from "assets/staff_pics/ethan2.webp"
import insiahImg from "assets/staff_pics/insiah.webp"
import jannahImg from "assets/staff_pics/jannah.webp"
import jasmineImg from "assets/staff_pics/jasmine.webp"
import karenaImg from "assets/staff_pics/karena.webp"
import katherineImg from "assets/staff_pics/katherine.webp"
import robinImg from "assets/staff_pics/robin.webp"
import seanImg from "assets/staff_pics/sean.webp"
import sylvanaImg from "assets/staff_pics/sylvana.webp"


const VOLUNTEER_DATA = [
  {
    image: karenaImg,
    person: "Karena Lai",
    events: ["Cross Country"],
  },
  {
    image: darrenImg,
    person: "Darren Lin",
    events: ["Cross Country", "Jumps", "Sprints"],
  },
  {
    image: jasmineImg,
    person: "Jasmine Varma",
    events: ["Cross Country", "100m", "200m", "400m"],
  },
  {
    image: amoghImg,
    person: "Amogh Rajagopal",
    events: ["Cross Country", "800m", "1600m", "3200m"],
  },
  {
    image: brandonImg,
    person: "Brandon Xu",
    events: ["Cross Country"],
  },
  {
    image: ethanLuImg,
    person: "Ethan Lu",
    events: ["Cross Country", "Hurdles"],
  },
    {
    image: sylvanaImg,
    person: "Sylvana Northrop",
    events: ["Cross Country", "800m", "1600m", "3200m"],
  },
  {
    image: katherineImg,
    person: "Katherine Shen",
    events: ["100m", "200m", "400m"],
  },
  {
    image: adrianImg,
    person: "Adrian Du",
    events: ["100m", "200m", "400m"],
  },
  {
    image: agnesImg,
    person: "Agnes Wang",
    events: ["Cross Country", "100m", "200m", "400m"],
  },
  {
    image: jannahImg,
    person: "Jannah Sheriff",
    events: ["Cross Country", "800m", "1600m", "3200m"],
  },
  {
    image: robinImg,
    person: "Robin Ready",
    events: ["Cross Country", "High Jump", "200m", "400m"],
  },
  {
    image: ethanLamImg,
    person: "Ethan Lam",
    events: ["Cross Country", "800m", "1600m", "3200m"],
  },
  {
    image: insiahImg,
    person: "Insiah Kizilbash",
    events: ["Cross Country", "800m", "1600m", "3200m"],
  },
  {
    image: seanImg,
    person: "Sean Basu",
    events: ["Cross Country", "400m", "800m", "1600m"],
  },
  {
    image: avaniImg,
    person: "Avani Kalari",
    events: ["Cross Country", "800m", "1600m", "3200m"],
  },
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function StaffCarousel() {

    return (

      // Pretty sloppy – kinda couldn't figure out how to change the bkg color
      //  of the React Carousel component so I improvised and added a div wrapper and change the div bkg color
      <div style={{background: '#F9FBFD'}}>
        <Carousel responsive={responsive}>
              {VOLUNTEER_DATA.map(({image, person, events}) => (
                  <StaffCarouselCard 
                    image={image}
                    name={person}
                    events={events}
                  />
              ))
              }
          </Carousel>
      </div>

    )
}
