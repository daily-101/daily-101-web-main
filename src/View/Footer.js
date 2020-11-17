
import React, { Component } from 'react'
import {Container, Grid, Header, List, Segment,} from 'semantic-ui-react'
import '../MainView/mainView.css';

const styles = {
  mainFont: {
    fontFamily: "NanumSquare",
    fontSize: "15px",
    color:"#343434",
    fontWeight: "bolder",    
    paddingTop:"30px"
  },
  subFont:{
    fontFamily: "NanumSquare",
    fontSize: "13px",
    color:"grey"

  }
}

export default class Footer extends Component{
render(){
    return(
        <div>
        <Segment inverted vertical style={{ padding: '5em 15em', height: "450px",
        background:"linear-gradient( to bottom, rgb(235,235,235), rgb(225,225,225))"}}>
        <Container>
          <Grid >
            <Grid.Row>              
              <Grid.Column width={4} style={{}}>
                <Header content='서비스' style={styles.mainFont} />
                <List link inverted >
                  <List.Item as='a' style={styles.subFont}>공지사항</List.Item>
                  <List.Item as='a' style={styles.subFont}>자주 묻는 질문</List.Item>
                  <List.Item as='a' style={styles.subFont}>고객보호센터</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4} style={{}}>
                <Header content='회사' style={styles.mainFont} />
                <List link inverted >
                  <List.Item as='a' style={styles.subFont}>회사 소개</List.Item>
                  <List.Item as='a' style={styles.subFont}>d101 devlopers</List.Item>
                  <List.Item as='a' style={styles.subFont}>d101 designers</List.Item>
                  <List.Item as='a' style={styles.subFont}>d101 work</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4} style={{}}>
                <Header content='문의' style={styles.mainFont} />
                <List link inverted >
                  <List.Item as='a' style={styles.subFont}>사업제휴</List.Item>
                  <List.Item as='a' style={styles.subFont}>마이데이터 사업 문의</List.Item>
                  <List.Item as='a' style={styles.subFont}>마케팅·PR</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4} style={{}}>
                <Header content='고객센터' style={styles.mainFont} />
                <List link inverted >
                  <List.Item as='a' style={styles.subFont}>전화: 1599-0011(09:00 - 17:00</List.Item>
                  <List.Item as='a' style={styles.subFont}>이메일(고객전용): support@d101.com</List.Item>
                  <List.Item as='a' style={styles.subFont}>카카오톡: @d101</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7} style={{paddingTop:"50px"}}>
                <Header as='h4' inverted style={styles.mainFont} >
                  (팀)뚝딱
                </Header>
                <p style={styles.subFont}>김수빈 박미지 이은별 임근우 <br/>
                서울특별시 강남구 역삼동 테헤란로 212</p>
              </Grid.Column>              
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      </div>
    );
    }
}