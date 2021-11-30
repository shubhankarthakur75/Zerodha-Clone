import React from "react";
import "./About.css";
import { PeopleCard } from "./PeopleCard";

function About() {
  return (
    <div className="about">
      <header>
        <h1>We pioneered the discount broking model in India.
          Now, we are breaking ground with our technology.</h1>
      </header>
      <div className="about-history">
        <div>
          <div>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</div>
          <div>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</div>
          <div>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</div>
        </div>
        <div>
          <div>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</div>
          <div><a href="#">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</div>
          <div>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="#">blog</a> or see what the media is <a href="#">saying about us.</a></div>
        </div>
      </div>
      <div className="about-people">
        <h1>People</h1>
        <div className="people-wrapper">
          <PeopleCard
            source="https://zerodha.com/static/images/nithin-kamath.jpg"
            title="Nithin Kamath"
            height="295px"
            label="Founder, CEO"
          />
          <div>
            <div>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</div>
            <div>He was named one of the “Top 10 Businessmen to Watch Out for in 2016 in India” by The Economic Times for pioneering and scaling discount broking in India.</div>
            <div>Playing basketball is his zen.</div>
            <div>Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a></div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <PeopleCard
          source="https://zerodha.com/static/images/nithin-kamath.jpg"
          title="Nithin Kamath"
          height="auto"
          label="Founder, CEO"
          width="70%"
          bio="Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day."
        />
        <PeopleCard
          source="https://zerodha.com/static/images/nithin-kamath.jpg"
          title="Nithin Kamath"
          height="auto"
          label="Founder, CEO"
          width="70%"
        />
        <PeopleCard
          source="https://zerodha.com/static/images/nithin-kamath.jpg"
          title="Nithin Kamath"
          height="auto"
          label="Founder, CEO"
          width="70%"
        />
        <PeopleCard
          source="https://zerodha.com/static/images/nithin-kamath.jpg"
          title="Nithin Kamath"
          height="auto"
          label="Founder, CEO"
          width="70%"
        />
        <PeopleCard
          source="https://zerodha.com/static/images/nithin-kamath.jpg"
          title="Nithin Kamath"
          height="auto"
          label="Founder, CEO"
          width="70%"
        />
      </div>
    </div>
  );
}

export default About;
