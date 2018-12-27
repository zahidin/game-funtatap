import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    viewOverlay:{
        flex:1,
        backgroundColor:'rgba(56, 129, 21,.8)',
    },
    textMyCombos:{
        textAlign:'center',
        color:'#FCFCFF',
        fontSize:25,
        fontFamily:'BetmRoundedBold',
        marginTop:10
    },
    imageBackground:{
        marginTop:20,
        flex:1,
        width:'90%',
        height:'100%',
        borderColor:'rgb(34, 134, 44)',
        borderBottomWidth:5,
        borderTopWidth:5,
        borderLeftWidth:5,
        borderRightWidth:5,
        position: 'relative',
    },
    btnConnect:{
        backgroundColor:'#2C6ACA',
        borderBottomWidth:5,
        borderRightWidth:5,
        borderTopWidth:2,
        borderLeftWidth:2,
        marginTop:20,
        padding:15,
        borderColor:'black',
        alignItems:'center',
        marginLeft:47
    },
    textConnect:{
        fontSize:14,
        fontFamily:'betmRoundedRegular',
        color:'white',
        paddingLeft:2,
        paddingRight:2
    },
    colImageBackground:{
        justifyContent:'center',
        alignItems:'center'
    },
    textNoRank:{
        fontFamily:'BetmRoundedBold',
        marginTop:5,
        color:'white',
        fontSize:30
    },
    listItem:{
        backgroundColor:'#085394',
        width:'90%',
        padding:5,
        marginBottom:12
    },
    text:{
        color:'white',
        fontFamily:'betmRoundedRegular',
        fontSize:22,
    }
})