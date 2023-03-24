import React from "react";
import Info from "./Info.jsx";
import Footer from "./Footer.jsx";
import Article from "./Article.jsx";

export default function App() {
  return (
    <div className="business-card">
      <Info />
      <Article
        title="About"
        par="I am a frontend developer with a particular interest in 
          making things simple and automating daily tasks. I try to keep up 
          with security and best practices, and am always looking for new things 
          to learn."
      />
      <Article 
        title="Interests" 
        par="Food expert. Music scholar. Reader.
          Internet fanatic. Bacon buff. Entrepreneur. Travel geek. 
          Pop culture ninja. Coffee fanatic." />
      <Footer />
    </div>
  );
}
