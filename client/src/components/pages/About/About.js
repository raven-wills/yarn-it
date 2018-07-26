import React, { Component } from "react";
import ScrollingNav from "../../ScrollingNav";
import Card from "../../elements/Card";

export default class About extends Component {
  render() {
    return (
      <div>
        <ScrollingNav />
        <Card
          style={{
            margin: "50px auto",
            width: "50%",
            textAlign: "left",
            textIndent: "4ch"
          }}
        >
          <h1 style={{ textAlign: "center", textIndent: "0", marginTop: 0 }}>
            About Yarn It!
          </h1>
          <p>
            Yarn It! was created by a frustrated crocheter/web developer that
            decided to take matters into her own hands. This is my take on
            improving the user experience of Ravelry. I based my decisions on my
            own experience with using the service as well as minimilist design.
            I feel as if this iteration serves the need of the primary Ravelry
            user story.
          </p>
          <p>
            My formal training in anthropology has enabled me to study human
            behavior and interaction design. I get excited about defining user's
            stories and iterating solutions that help them overcome their
            biggest challenges. One of my favorite exercises in interface design
            is visualizing how different users' unique perspectives influence
            their interactions with an application.
          </p>
        </Card>
      </div>
    );
  }
}
