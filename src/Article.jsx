import React from "react";

export default function Article(props) {
  const { title, par } = props
  return (
    <div className="about-container">
      <h3 className="about-title">{title}</h3>
      <p className="about-description">{par}</p>
    </div>
  );
}
