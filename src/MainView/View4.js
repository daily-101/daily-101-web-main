import React from "react";
import {Button, Grid, Header, Image, Segment} from "semantic-ui-react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import './mainView.css';


const styles = {
  
  backImage:{
      backgroundImage: `url(${"./main2.PNG"})`,
      height: '100%',
      width: '100%',
      backgroundRepeat: 'no-repeat',    
      padding: "10em 12em 10em 12em"
  },
  mainFont:{
    fontFamily: "NanumSquare",
    fontSize: "50px",
    paddingBottom: "30px",
  },
  subFont:{
    fontFamily: "NanumSquare",
    fontSize: "19px",
    fontWeight: "bolder"
  },
};


const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  }
}));

const AntTabs = withStyles({

    indicator: {
        backgroundColor: 'black'
    }
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 10,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(5),
        '&:hover': {
            color: 'black',
            opacity: 1,
            fontWeight: 'bolder'
        },
        '&$selected': {
            color: 'black',
            fontWeight: 'bolder'
        },
        '&:focus': {
            color: 'black',
            fontWeight: 'bolder'
        },
        container: {
          display: 'flex',
        },
        paper: {
          margin: theme.spacing(1),
        },
    },
    selected: {}
}))((props) => <Tab disableRipple="disableRipple" {...props}/>);

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7'
        }
    }
})((props) => <Tabs {...props} TabIndicatorProps={{
        children: <span/>
    }}/>);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme
            .typography
            .pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1
        }
    }
    
}))((props) => <Tab disableRipple="disableRipple" {...props}/>);

const View4 = () => {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        // console.log(newValue)
        setValue(newValue);
    };

    return (
      <Segment vertical="vertical" style={styles.backImage}>
        <Grid container="container" stackable="stackable" verticalAlign="middle" >
            <Grid.Row>              
              <Grid.Column width={8} 
              style={{paddingTop: "100px"} }>
                
                <Header style={styles.mainFont}>
                  출력서비스로<br />
                  추억을 간직하세요
                </Header>                
                <p style={styles.subFont}>
                daily101 타임라인의 모습 그대로 책에 담았습니다.<br /> 2단 배열의 레이아웃으로 한 눈에 보기 쉽게 구성하였습니다.
                </p>                
                <Button variant="text" style={styles.buttonFont}>자세히 알아보기 ></Button>
              </Grid.Column>

              <Grid.Column width={8} 
              style={{paddingTop: "100px"}}>                
               
              </Grid.Column>


            </Grid.Row>
          </Grid>
        </Segment>
    );
};

export default View4;
