import React, { Component } from 'react'
import { View,ImageBackground } from 'react-native'
import {Container,Thumbnail,Content,Right,Body,Text, Left, Button,Icon,List,ListItem,Row,Col, Grid} from 'native-base'
import Iconn from 'react-native-fa-icons';
import Sound from '../Music/'
import axios from 'axios'
import DeviceInfo from 'react-native-device-info-2'


import styles from './styles'

export default class Leaderboard extends Component {

    constructor(props){
        super()
        this.state = {
            myRank:0,
            myCombos:0,
            users:[],
            deviceId : DeviceInfo.getUniqueID(),
        }   
    }

    componentDidMount = async () =>{
        const dataUsers = await axios.get('http://192.168.43.129:3333/api/v1/leaderboard')
        const dataRank = await axios.get(`http://192.168.43.129:3333/api/v1/rank/${this.state.deviceId}`)
        this.setState({
            users:dataUsers.data,
            myRank:dataRank.data[0].rank,
            myCombos:dataRank.data[0].combos
        })
    }

    listUserLeaderboard = (val,key) =>{
        return(
            <List key={key}>
                <ListItem thumbnail noBorder style={styles.listItem}>
                    <Left>
                        <Thumbnail source={{uri:'https://cdn.head-fi.org/g/2283245_l.jpg'}} />
                    </Left>
                    <Body>
                        <Text style={styles.text}>{val.name}</Text>
                    </Body>
                    <Right>
                        <Text style={styles.text}><Iconn name='trophy'/> # {val.Rank}</Text>
                    </Right>
                </ListItem>
            </List>
        )
    }

    static navigationOptions = {
        title: 'Leaderboard',
        headerStyle: {
          backgroundColor: '##FFFFFF',
        },
        headerTintColor: '#5775AB',
        headerTitleStyle: {
          fontFamily:'betmRoundedRegular',
        },
      };

  render() {
    let usersLeaderboard = this.state.users
    return (
        <Container>
            <Content onPress={Sound.stop()}>
                <Grid>
                    <Row>
                        <Col style={styles.colImageBackground}>
                            <ImageBackground source={{uri:'https://i.ibb.co/zZj1MSk/coin-watch-cover-2.jpg'}} resizeMode='cover' style={styles.imageBackground}>       
                                <View style={[styles.viewOverlay,{alignItems:'center',justifyContent:'center'}]}>
                                    <Text style={styles.textMyCombos}>My Combos: {this.state.myCombos}</Text>
                                    <Thumbnail large style={{marginTop:15}} source={{uri:'https://cdn.head-fi.org/g/2283245_l.jpg'}} />
                                    <Button style={styles.btnConnect}><Text style={styles.textConnect}><Iconn name='facebook' style={styles.iconApple}/> Connect to Claim Reward !</Text></Button>                    
                                    <Text style={styles.textNoRank}>#{this.state.myRank}</Text>
                                </View>
                            </ImageBackground>
                        </Col>
                    </Row>
                    <Row style={{marginTop:20}}>
                        <Col>
                            {usersLeaderboard.map((val,key) => this.listUserLeaderboard(val,key))}
                        </Col>
                    </Row>
                </Grid>
            </Content>
        </Container>
    )
  }
}
