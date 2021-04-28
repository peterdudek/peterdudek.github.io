import React, { Component } from 'react';
import TypedReactDemo from "./Typed";

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var resume = this.props.data.resumedownload;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url} target="_blank" rel="noreferrer"><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap" className="stickyNav">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Recommendations</a></li>
                  <li><a className="smoothscroll" href={resume} target="_blank" rel="noreferrer">Resume</a></li>
                  {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">{name}</h1>
                  <br></br>
                  <h2 style={{color: "white"}}>
                     <TypedReactDemo
                        strings={[
                           'Web Developer',
                           // 'Web ^1000 Developer',
                           // '<strong>
                           'Web Designer',
                           // </strong>',
                           'Tech Enthusiast',
                           'Project Manager'
                        ]}
                     />
                  </h2>
                  <br></br>
                  <h3>A {city} based {occupation} {description}.</h3>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
