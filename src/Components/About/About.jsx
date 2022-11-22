import React, { Component } from "react";
import programming from '../../Assets/undraw_laravel_and_vue_-59-tp.svg';

export class About extends Component {
  render() {
    return (
      <div className="min-h-screen">
        <h1 className="text-6xl font-bold flex justify-center mt-5">
          About me
        </h1>
        <div className="flex flex-wrap flex-row justify-center">
            <div>
                <img src={programming} style={{width:650, height:650}} alt="" />
            </div>
          <div className="w-96">
            <p className="mt-6">
              I am a person who love to learn new skills and I am curious about
              lot of stuff, that I don't know and once I set my mind to
              something I make sure to do it. I love coding and watching
              animation
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
