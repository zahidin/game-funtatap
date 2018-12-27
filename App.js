import React,{Component} from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"; 

import Intro from './app/components/Intro'
import Home from './app/components/Home'
import Leaderboard from './app/components/Leaderboard'
const Appnavigator = createStackNavigator(
  {
    Intro:{
      screen:Intro,
      navigationOptions:{
        header:null
      }
    },

    Home:{
      screen:Home,
      navigationOptions:{
        header:null
      }

    },

    Leaderboard:Leaderboard

  },{
    initialRouteName:'Intro',
  }
)

export default createAppContainer(Appnavigator)