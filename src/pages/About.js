import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/IMG_8188.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Franceska Padilla Coo</div>
            <div className="brief_description">
              <div >
              <h3> (she/her) 2024 Computer Science (B.S.), Data Science Minor at the University of Virginia </h3>
              <hr />

              <p> Hello! My name is Franceska, but you can also call me Franky! I'm currently interning as a data scientist 
                at IT Concepts. I love listening to music, playing flag football, and dancing with my university's Filipino
                organization!
              </p>
              </div>

              <a href="https://www.linkedin.com/in/franceska-padilla-coo" target="_blank">
                <img src={'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'} style={{width:'10%'}}/>
              </a>
              <a className="m-3" href="https://open.spotify.com/user/frankydominique" target="_blank">
                <img src={'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg'} style={{width:'10%'}}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
