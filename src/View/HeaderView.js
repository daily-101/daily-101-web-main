import React from "react";
import {Grid, Image, Header, Segment, Icon, Button} from "semantic-ui-react";

const HeaderView = () => (
  <div>
    <Segment style={{padding: "2em 0em"}} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={16}>
                <div style={{display:"flex" , justifyContent:"space-between"}}>
                <Header>
                  <Image 
                  src='../../daily101_logo_app2.png'
                  style={{width:"30px", height:"30px"}}
                  />
                  <Image 
                  src='../../daily101_logo_app4.png'
                  style={{width:"80px" ,marginLeft:"15px",marginTop:"4px"}}
                  />
                  
                </Header>
                <Button style={{background:"none"}} icon='user'/>
                </div>
                {/* <Button circular color='facebook' icon='facebook'/> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
    </Segment>
  </div>
)

export default HeaderView;
