import React from "react";
import {Button, Grid, Header, Image, Segment} from "semantic-ui-react";

const View2 = () => (
  <div
    style={{
      background:
        "linear-gradient( to bottom, rgb(246,251,251),rgb(209,244,242)",
    }}
  >
    <Segment style={{padding: "8em 0em"}} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column floated="left" width={8}>
            <Image
              // size="huge"
              src="../../main2.png"
              width="500"
              height="500"
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h3" style={{fontSize: "2em"}}>
              We Help Companies and Companions
            </Header>
            <p style={{fontSize: "1.33em"}}>
              We can give your company superpowers to do things that they never
              thought possible. Let us delight your customers and empower your
              needs... through pure data analytics.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button
              primary
              size="huge"
              floated="right"
              style={{background: "white", color: "black"}}
            >
              Start Now
            </Button>

            <Button secondary floated="right" size="huge">
              Login
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default View2;
