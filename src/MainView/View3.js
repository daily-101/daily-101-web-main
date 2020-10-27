import React, {Component} from "react";
import {Button, Grid, Header, Image, Segment} from "semantic-ui-react";

export default class View3 extends Component {
  render() {
    return (
      <div
        style={{
          background:
            "linear-gradient( to bottom, rgb(235,235,235),rgb(255,255,255)",
        }}
      >
        <Segment style={{padding: "8em 0em"}} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={6}>
                <Header as="h3" style={{fontSize: "2em"}}>
                  We Help Companies and Companions
                </Header>
                <p style={{fontSize: "1.33em"}}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{fontSize: "2em"}}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{fontSize: "1.33em"}}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={9}>
                <Image width="900" height="370" src="../../main3.png" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Button
                  primary
                  size="huge"
                  style={{background: "white", color: "black"}}
                >
                  Start Now
                </Button>

                <Button secondary size="huge">
                  Login
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
