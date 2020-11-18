
import React, {Component} from "react";
import {Grid, Image, Header, Segment, Icon, Button} from "semantic-ui-react";

import '../mainView.css';

const styles = {
  headerFont:{
    fontFamily: "NanumSquare",
    fontSize:"12px",
    color: "black",
    paddingBottom: "8px", 
    paddingLeft:"1100px", 
    
},
};

export default class HeaderView extends Component {
  constructor() {
    super();
    this.state = {token: ""};
  }

  componentDidMount() {
    this.googleSDK();
  }

  // prepareLoginButton = () => {
  //   this.auth2.attachClickHandler(
  //     this.googleLoginBtn,
  //     {},
  //     (googleUser) => {
  //       let profile = googleUser.getBasicProfile();
  //       const data = {
  //         id: profile.getId(),
  //         name: profile.getName(),
  //         email: profile.getEmail(),
  //         imageUrl: profile.getImageUrl(),
  //         token: googleUser.getAuthResponse().id_token,
  //       };
  //       const url = "http://localhost:8090/api/v1/user";
  //       fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       })
  //         .then((response) => response.json())
  //         .then((responseData) => {
  //           console.log(responseData);
  //         });
  //     },
  //     (error) => {
  //       alert(JSON.stringify(error, undefined, 2));
  //     }
  //   );
  // };

  login = () => {
    this.auth2.signIn().then(
      (googleUser) => {
        // let profile = googleUser.getBasicProfile();
        // console.log("Token ||" + googleUser.getAuthResponse().id_token);
        // console.log("ID: " + profile.getId());
        // console.log("Name: " + profile.getName());
        // console.log("ImageURL: " + profile.getImageUrl());
        // console.log("Email: " + profile.getEmail());

        // this.setState({token: googleUser.getAuthResponse().id_token});
        let profile = googleUser.getBasicProfile();
        const data = {
          id: profile.getId(),
          name: profile.getName(),
          email: profile.getEmail(),
          imageUrl: profile.getImageUrl(),
          token: googleUser.getAuthResponse().id_token,
        };
        console.log("Token ||" + googleUser.getAuthResponse().id_token);
        console.log("ID: " + profile.getId());
        console.log("Name: " + profile.getName());
        console.log("ImageURL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        this.setState({token: googleUser.getAuthResponse().id_token});
        const url = "http://210.107.78.156:9008/api/v1/user";
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData);
          });
      },
      (error) => {
        alert(JSON.stringify(error, undefined, 2));
      }
    );
  };

  logout = () => {
    this.setState({token: ""});
    this.auth2.disconnect();
    console.log("HAS BEEN LOGOUT~!!!");
  };

  googleSDK = () => {
    window["googleSDKLoaded"] = () => {
      window["gapi"].load("auth2", () => {
        this.auth2 = window["gapi"].auth2.init({
          client_id:
            "259066259921-52n0sjp02au52cugu356hee1gi4m02eb.apps.googleusercontent.com",
          cookiepolicy: "single_host_origin",
          scopte: "profile email",
        });
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "google-jssdk");
  };

  render() {
    return (
      <div style={{paddingTop: "4px",  backgroundColor: "white", zIndex: "100", width:"100%" }}>  
    <Segment vertical="vertical">
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between", height:"80px", padding:"0 1rem"}}>
              <Image
                  src="../../daily101_logo_text_grey_tiny.png"             
                  size="tiny"
                  style={{marginLeft:"5%"}}
                />

                      
                    <span style={styles.headerFont}>
                    <a href="#" style={{}}>타임라인</a>
                    <a href="#" style={{paddingLeft: "30px"}}>출력서비스</a>
                  </span>                  

                  {this.state.token ? (
                    <Button
                      onClick={this.logout}
                      style={{background: "none"}}
                      icon="user"
                    />
                  ) : (
                    <Button
                      className="googleLoginBtn"
                      onClick={this.login}
                      style={{background: "none", paddingTop:"1px", marginRight:"70px"}}
                      icon="user outline"
                    />
                  )}

                  {/* <Button style={{background: "none"}} icon="user" /> */}
                </div>
                {/* <Button circular color='facebook' icon='facebook'/> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
