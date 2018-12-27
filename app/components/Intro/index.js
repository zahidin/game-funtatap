import React, { Component } from 'react'
import {View,Image} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import { Icon ,Text} from "native-base";
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles'

const slides = [
    {
        key: 'slider1',
        title: 'Fun Tap Tap',
        titleSmall: 'Have Fun Tap Tap ! Not Fap Fap !\n',
        text: 'Tap Tap to gain more combos! Follow the light melody or use your own instinc!',
        url: 'https://images-eu.ssl-images-amazon.com/images/I/71P11b1-JpL.png',
        colors: ['#FAB324', '#F3402B'],
    },
    {
        key: 'slider1',
        title: 'Fun Tap Tap',
        titleSmall: 'Get Free Cryptocurrency !!',
        text: 'Be the top 10 to get Freee Cryptocurrency \n Rank will be reseled weekly !',
        url: 'https://i1.wp.com/kabarcoin.com/wp-content/uploads/2018/07/cara-cepat-kaya-dari-Cryptocurrency.png?ssl=1',
        colors: ['#6F9F20', '#3C4C49'],
    },
]

export default class Intro extends Component{

    toHome = () =>{
        this.props.navigation.navigate('Home')
    }
    _renderItem = props => (
        <LinearGradient
          style={[styles.mainContent, {
            paddingTop: props.topSpacer,
            paddingBottom: props.bottomSpacer,
            width: props.width,
            height: props.height,
          }]}
          colors={props.colors}
          start={{x: 0, y: .1}} end={{x: .1, y: 1}}
        >
          <Text style={styles.title}>{props.title}</Text>

          <Image source={{uri:props.url}} style={{height:200,width:200}} />
          <View>
            <Text style={styles.titleSmall}>{props.titleSmall}</Text>
            <Text style={styles.text}>{props.text}</Text>
          </View>
        </LinearGradient>
    );

    render(){
        return(
            <AppIntroSlider 
                nextLabel = 'Be the best !'
                doneLabel='Lets Do it !'
                slides={slides}
                onDone={this.toHome}
                renderItem={this._renderItem}
                bottomButton
            />
        )
    }
}