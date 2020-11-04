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
  mainFont2:{
    fontFamily: "NanumSquare",
    fontSize: "60px",
    paddingBottom: "10px",
    textAlign: "center"
  },
  subFont:{
    fontFamily: "NanumSquare",
    fontSize: "20px"
  },
  subFont2:{
    fontFamily: "NanumSquare",
    fontSize: "20px",
    textAlign: "center"
  },
  detailFont:{
    fontFamily: "NanumSquare",
    fontSize: "16px",
    paddingTop: "50px",
    textAlign: "ceter"
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
          "linear-gradient( to bottom, rgb(235,235,235),rgb(255,255,255)",
            height: '1080px'
        }}
      >
            <Segment style={{padding: "10em 20em 10em 20em"}}vertical="vertical">
              <Grid.Row>         
                <Grid.Column width={16}>
                <Header style={styles.mainFont2}>웹에서 더 자세하게</Header>
                  <p style={styles.subFont2}>하루동안 일어난 나의 생활 정보를<br />웹에서 더 자세하게 살펴보세요.</p>

                  <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                            <AntTab label="타임라인" style={styles.detailFont}/>
                            <AntTab label="활동량"  style={styles.detailFont}/>
                            
                          </AntTabs>  
                          {value===0? <p style={styles.detailFont2}> &nbsp;&nbsp; 지도에서 이동 거리를, 타임라인에서 시간대별 이동 장소를 확인합니다. </p>
                          :value===1? <p style={styles.detailFont2}> &nbsp;&nbsp; 걸음 수, 소비 열량과 같은 활동량 정보가 타임라인에 표시됩니다.</p>
                          :<Image position="relative" src="../../view3-1.png"/>} 


                  {value===0? <Image position="relative" src="../../view3-1.png" style={{size:"small"}} />
                  :value===1? <Image position="relative" src="../../view3-2.png" /> 
                  :<Image position="relative" src="../../view3-1.png"/>}  

                           

                </Grid.Column>

                <Grid.Column width={8}>
                        
                          </Grid.Column> 

              </Grid.Row>
            </Segment>
        </div>
    );
};

export default View2;
