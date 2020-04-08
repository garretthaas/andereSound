import React, { Component } from "react";
import Img from "gatsby-image"
import { Link } from "gatsby"

export default class Hero extends React.Component {
  render() {
    const { data } = this.props;
    return (
        <section className="hero-section">
            <video className="gh-video" autoPlay muted loop width="100%">
                <source src={data.heroMedia.file.url} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
        <h2>{data.heroText}</h2>
      </section>
    );
  }
}