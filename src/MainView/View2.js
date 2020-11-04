import React from "react";
import {Button, Grid, Header, Image, Segment} from "semantic-ui-react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import './mainView.css';


const styles = {
  
  mainFont:{
    fontFamily: "NanumSquare",
    fontSize: "60px",
    paddingBottom: "10px"
  },
  subFont:{
    fontFamily: "NanumSquare",
    fontSize: "20px"
  },
  detailFont:{
    fontFamily: "NanumSquare",
    fontSize: "16px",
    paddingTop: "50px"
  },
  detailFont2:{
    fontFamily: "NanumSquare",
    fontSize: "16px",
    paddingTop: "20px",
    fontWeight: "bolder"
  }
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

const View2 = () => {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        // console.log(newValue)
        setValue(newValue);
    };

    return (
        <div
        style={{
          background:
            "linear-gradient( to bottom,rgb(255,255,255), rgb(235,235,235))",
            height: '768px'
        }}
      >
            <Segment style={{padding: "10em 12em 10em 12em"}}vertical="vertical">
                <Grid container="container" stackable="stackable" verticalAlign="middle"> 
                    <Grid.Row>         
                    <Grid.Column width={8}>
                        <Header style={styles.mainFont}>Life Style 관리</Header>
                            <p style={styles.subFont}>위치정보 기반으로 자동으로 기록된 활동량, 식단, 소비 등의<br/> 생활 밀착형 정보를 통합 관리할 수 있습니다.</p>
                        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                            <AntTab label="활동량 기록" style={styles.detailFont}/>
                            <AntTab label="식단 기록"  style={styles.detailFont}/>
                            <AntTab label="소비내역 기록" style={styles.detailFont}/>
                            
                          </AntTabs>  
                          {value===0? <p style={styles.detailFont2}> &nbsp;&nbsp; 신체 활동을 기록으로 남기고 시간대, 날짜별로 확인합니다.</p>
                          :value===1? <p style={styles.detailFont2}> &nbsp;&nbsp; 사진인식기능을 통해 하루 식단을 기록하고, 칼로리를 자동 계산합니다.</p>
                          :value===2? <p style={styles.detailFont2}> &nbsp;&nbsp; 소비기록을 통해 하루동안 지출내역과 분야별 소비정도를 파악합니다.</p>
                          :<Image position="relative" src="../../view2_1_gym.png" width="250" height="500"/>}  
                          </Grid.Column>   
                          <Grid.Column floated="right" width={5} style={{paddingTop:"70px"}}>     
                          {value===0? <Image position="relative" src="../../view2_1_gym.png" width="250" height="500" />
                          :value===1? <Image position="relative" src="../../view2_2_kcal.png" width="250" height="500" /> 
                          :value===2? <Image position="relative" src="../../view2_3_bank.png" width="250" height="500" />
                          :<Image position="relative" src="../../view2_1_gym.png" width="250" height="500"/>}                       
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column>
                              {/* <Button
                                primary="primary"
                                size="medium"
                                floated="right"
                                style={{
                                    background: "white",
                                    color: "black"
                                }}>
                                Start Now
                                </Button>
                                <Button secondary="secondary" floated="right" size="medium">Login</Button> */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
};

export default View2;
