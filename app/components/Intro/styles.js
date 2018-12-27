import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      image: {
        width: 320,
        height: 320,
      },
      text: {
        color: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontFamily:'betmRoundedRegular',
        paddingHorizontal: 16,
      },
      title: {
        fontSize: 35,
        color: 'white',
        fontFamily:'BetmRoundedBold',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
      },
      titleSmall: {
        fontSize: 25,
        color: 'white',
        fontFamily:'BetmRoundedBold',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
      }
})