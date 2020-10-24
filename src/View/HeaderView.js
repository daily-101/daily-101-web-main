import React from "react";
import {Container, Icon, Image, Menu} from "semantic-ui-react";

const HeaderView = () => {
  return (
    <div>
      <Menu fixed="top" style={{background: "white"}}>
        <Container style={{color: "#20B2AA"}}>
          <Menu.Item as="a" header>
            <Image
              size="mini"
              src="../../logo192.png"
              style={{marginRight: "1.5em"}}
            />
            daily101
          </Menu.Item>

          <Menu.Item as="a" position="right">
            <Icon.Group size="huge">
              {/* <Icon loading size="big" name="circle notch" /> */}
              <Icon size="small" name="user circle" />
            </Icon.Group>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default HeaderView;
