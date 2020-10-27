import {render} from "@testing-library/react";
import React, {Component} from "react";
import {Button, Divider, Form, Grid, Segment} from "semantic-ui-react";

class LoginView extends Component {
  constructor() {
    super();
    this.state = {tocken: ""};
  }

  componentDidMount() {
    this.googleSDK();
  }

  login = () => {
    this.auth2.signIn().then((googleUser) => {
      let profile = googleUser.getBasicProfile();
      console.log("Token ||" + googleUser.getAuthResponse().id_token);
      console.log("ID: " + profile.getId());
      console.log("Name: " + profile.getName());
      console.log("ImageURL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail());

      this.setState({token: googleUser.getAuthResponse().id_token});
    });
  };

  logout = () => {
    this.setState({token: ""});
    this.auth2.disconnect();
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
      <div></div>
      // <div className="row mt-5">
      //   <div className="col-md-12">
      //     <h2 className="text-left">Google Login Demo</h2>
      //     <div className="card mt-3">
      //       <div className="card-body">
      //         <div className="row mt-5 mb-5">
      //           <div className="col-md-4 mt-2 m-auto ">
      //             {this.state.token ? (
      //               <button
      //                 className="logoutBtn loginBtn--google"
      //                 onClick={this.logout}
      //               >
      //                 Logout
      //               </button>
      //             ) : (
      //               <button
      //                 className="loginBtn loginBtn--google"
      //                 onClick={this.login}
      //                 ref=""
      //               >
      //                 Login with Google
      //               </button>
      //             )}
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default LoginView;
