import React, {Component} from "react";
import {Button, Grid, Header, Image, Segment} from "semantic-ui-react";

export default class View1 extends Component {
  render() {
    return (
      <div>
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
              </Grid.Column>
              
              <Grid.Column floated="right" width={10}>

                <Image
                  // size="huge"
                  src="../../main1.png"
                  width="800"
                  height="370"
                />

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
