import React, {Component} from "react";
import {Grid, Header, Segment} from "semantic-ui-react";
import Button from '@material-ui/core/Button';

import './mainView.css';


const styles = {
  
  bgImage: {
      height: '1080px',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${"./main1.PNG"})`
  },
  mainFont:{
    fontFamily: "NanumSquare",
    fontSize: "60px",
    paddingBottom: "30px"
  },
  subFont:{
    fontFamily: "NanumSquare",
    fontSize: "19px",
    fontWeight: "bolder"
  },
  buttonFont:{
    fontFamily: "NanumSquare",
    fontSize: "19px",
    fontWeight: "bolder",
    Color: "blue"
  },
};

export default class View1 extends Component {
  
  render() {
    return (
      <div style={styles.bgImage}>
        <Segment style={{padding: "10em 12em 10em 12em"}}vertical="vertical">
        <Grid container="container" stackable="stackable" verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8} style={{paddingTop: "100px"}}>
                <Header style={styles.mainFont}>
                  기억은 사라지지만<br />
                  기록은 남아있다.
                </Header>
                <p style={styles.subFont}>
                내 하루를 온전히 기억하고 싶다면, 나만의 데이터셋을 만들고 싶다면<br />daily 101으로 기록하세요.

                </p>
              </Grid.Column>
              
              <Grid.Column floated="right" width={10}>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
              <Button variant="text" style={styles.buttonFont}>자세히 알아보기 ></Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
