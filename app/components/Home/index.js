import React, { Component } from 'react'
import {View ,ImageBackground,Animated} from 'react-native'
import {Container,Header,Content,Right,Body,Text, Left, Button,Row,Col, Grid,Spinner} from 'native-base'
import Sound from 'react-native-sound'
import Iconn from 'react-native-fa-icons';
import axios from 'axios'
import DeviceInfo from 'react-native-device-info-2'
import * as Progress from 'react-native-progress';

import styles from './styles';

const sound = new Sound('baby_shark_dodo.mp3',Sound.MAIN_BUNDLE,(error) => {
    if(error){
        alert('Music Error')
    }
})

const ba = new Sound('ba.mp3',Sound.MAIN_BUNDLE,(error) => {
    if(error){
        alert('Music Error')
    }
})

const bi = new Sound('bi.mp3',Sound.MAIN_BUNDLE,(error) => {
    if(error){
        alert('Music Error')
    }
})

const shark = new Sound('shark.mp3',Sound.MAIN_BUNDLE,(error) => {
    if(error){
        alert('Music Error')
    }
})

const du = new Sound('du.mp3',Sound.MAIN_BUNDLE,(error) => {
    if(error){
        alert('Music Error')
    }
})

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            counter : 0,
            // partent : [1,2,3,4,4,4,4,4,4,1,2,3,4,4,4,4,4,4,1,2,3,4,4,4,4,4,4,1,2,3],
            partent:[],
            backgroundImage:null,
            combos: 0,
            username:'',
            rank:0,
            deviceId : DeviceInfo.getUniqueID(),
            isLoading: true
            
        }
    }

    async componentDidMount(){
        const dataUser = await axios.get(`http://192.168.43.129:3333/api/v1/checkdevice/${this.state.deviceId}`)
        const dataPartent = await axios.get(`http://192.168.43.129:3333/api/v1/rules`)
        const dataImage = await axios.get(`http://192.168.43.129:3333/api/v1/backgroundimage`)
        const urlImage = {uri:dataImage.name}
        this.setState({partent:dataPartent.data.partent.split(","),backgroundImage:urlImage})

        if(!dataUser.data){
            const nameGuest = 'guest'+Math.floor((Math.random() * 1000) + 1);
            this.setState({
                username:nameGuest,
            })
            const userGuest = {
                name: nameGuest,
                username: nameGuest,
                email: nameGuest+'@mail.com',
                device_id: this.state.deviceId,
                combos :0,
                cryptocurrency:0
            };
            const req = await axios.post('http://192.168.43.129:3333/api/v1/adduser/',userGuest,{
                headers:{ 'Content-Type': 'application/json' }
            })          
            this.setState({isLoading:false})
        }else{
            const dataRank = await axios.get(`http://192.168.43.129:3333/api/v1/rank/${this.state.deviceId}`)
            this.setState({
                combos:dataUser.data.combos,
                username:dataUser.data.username,
                rank:dataRank.data[0].rank,
                isLoading:false,
            })
        }

    }

     handleBtn1 = async () =>{

        if( this.state.partent[this.state.counter] == 1){

            this.setState({counter:this.state.counter+1})

            ba.play()

            if( this.state.partent.length == this.state.counter+1 ){

                this.setState({combos:this.state.combos+1,counter:0})

            }

        }else{
            
            ba.stop()
            alert('Miss')
            this.setState({counter:0})

            const dataCombos = { combos :this.state.combos,device_id:this.state.deviceId}
            const combos = await axios.put(`http://192.168.43.129:3333/api/v1/addcombos/${dataCombos.device_id}`,dataCombos,{
                headers:{ 'Content-Type': 'application/json' }
            })

        }

    }

    handleBtn2 = async () =>{

        if( this.state.partent[this.state.counter] == 2){

            this.setState({counter:this.state.counter+1})

            bi.play()

            if( this.state.partent.length == this.state.counter+1 ){

                this.setState({combos:this.state.combos+1,counter:0})

            }

        }else{
            
            ba.stop()
            alert('Miss')
            this.setState({counter:0})

            const dataCombos = { combos :this.state.combos,device_id:this.state.deviceId}
            const combos = await axios.put(`http://192.168.43.129:3333/api/v1/addcombos/${dataCombos.device_id}`,dataCombos,{
                headers:{ 'Content-Type': 'application/json' }
            })
        }

    }

    handleBtn3 = async () =>{

        if( this.state.partent[this.state.counter] == 3){

            this.setState({counter:this.state.counter+1})

            shark.play()

            if( this.state.partent.length == this.state.counter+1 ){

                this.setState({combos:this.state.combos+1,counter:0})

            }

        }else{
            
            shark.stop()
            alert('Miss')
            this.setState({counter:0})
            const dataCombos = { combos :this.state.combos,device_id:this.state.deviceId}
            const combos = await axios.put(`http://192.168.43.129:3333/api/v1/addcombos/${dataCombos.device_id}`,dataCombos,{
                headers:{ 'Content-Type': 'application/json' }
            })
        }

    }

    handleBtn4 = async () =>{

        if( this.state.partent[this.state.counter] == 4){

            this.setState({counter:this.state.counter+1})

            du.play()

            if( this.state.partent.length == this.state.counter+1 ){

                this.setState({combos:this.state.combos+1,counter:0})

            }

        }else{
            
            du.stop()
            alert('Miss')
            this.setState({counter:0})
            
            const dataCombos = { combos :this.state.combos,device_id:this.state.deviceId}
            const combos = await axios.put(`http://192.168.43.129:3333/api/v1/addcombos/${dataCombos.device_id}`,dataCombos,{
                headers:{ 'Content-Type': 'application/json' }
            })
        }

    }

    // handleBtn = (nomor) => {        

    //     if( this.state.partent[this.state.counter] == nomor){

    //         this.setState({counter:this.state.counter+1})

    //         sound.play()

    //         if( this.state.partent.length == this.state.counter+1 ){

    //             this.setState({combos:this.state.combos+1,counter:0})
    //         }

    //     }else{
            
    //         sound.stop()
    //         alert('salah')
    //     }
    
    // }


  render() {
    if(this.state.isLoading){
       return( <Spinner color='blue' style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}} /> ) 
    }else{
    return (
      <Container>
        <Header span style={[styles.colorHeader,{paddingTop:12}]}>
            <Left style={styles.sizeHeader}>
                <View>
                    <Text style={styles.textRank}>Rank {this.state.rank}</Text>
                    <Button style={styles.btnLearderBoard} onPress={()=>this.props.navigation.navigate('Leaderboard')}><Text style={styles.textLeaderBoard}>Leaderboard</Text></Button>                    
                </View>
            </Left>
            <Body>
                <View style={styles.viewTropy}>
                    <Iconn name='trophy' style={styles.iconTropy}></Iconn>
                </View>
            </Body>
            <Right style={styles.sizeHeader}>
                <View>
                    <Text style={styles.textUsername}>{this.state.username}</Text>
                    <Button style={styles.btnConnect}><Text style={styles.textConnect}> <Iconn name='facebook' style={styles.iconApple} /> Connect</Text></Button>                    
                </View>
                <View style={styles.viewUser}>
                    <Iconn name='user' style={styles.iconUser}></Iconn>
                </View>
            </Right>
        </Header>
        <ImageBackground source={{uri:'http://kidscreen.com/wp/wp-content/uploads/2018/09/pinkfongbabyshark.jpg'}} style={styles.imageBackground}>       
        <Content>
            <Grid>
                <Row>
                    <Col style={styles.colCombos}>
                        <View style={styles.viewCombos}>
                                <Text style={{fontSize:50,}}>{this.state.combos}</Text>
                                <Text style={{fontSize:20,color:'#CC726A',fontFamily:'BetmRoundedBold'}}>Combos!</Text>
                        </View>
                    </Col>
                </Row>
                <Row style={{marginTop:296}}>
                    <Button rounded large style={styles.btnBama} onPress={this.handleBtn1}>
                        <Text>{'BA/\nMA'}</Text>
                    </Button>
                    <Button rounded large style={styles.btnBymi} onPress={this.handleBtn2}>
                        <Text>{'BY/\nMI'}</Text>
                    </Button>
                    <Button rounded large style={styles.btnShark} onPress={this.handleBtn3}>
                        <Text>{'SHARK'}</Text>
                    </Button>
                    <Button rounded large style={styles.btnDu} onPress={this.handleBtn4}>
                        <Text>{'DU'}</Text>
                    </Button>
                </Row>
            </Grid>
            
        </Content>
        </ImageBackground>
      </Container>
    )}
  }
}
