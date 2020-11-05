import { createMedia } from '@artsy/fresnel'
import { render } from '@testing-library/react'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'

export default class Footer extends Component{
render(){
    return(
        <div>
        <Segment inverted vertical style={{ padding: '5em 15em', background:
            "linear-gradient( to bottom,rgb(235,235,235), rgb(200,235,235))"}}>
        <Container >
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header style={{color:"grey"}} content='Footer' />
                <List link inverted >
                  <List.Item as='a' >Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      </div>
    );
    }
}