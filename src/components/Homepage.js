import React from "react";

function Homepage(props) {
  return (
    <section>
      <div className="home-background"></div>
      <div className="home-text">
        <h1>
          Welcome to my
          <br /> simple Blog
        </h1>

        <input type="button" value="Go to articles" />
      </div>
    </section>
  );
}

export default Homepage;
