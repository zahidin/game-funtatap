import Sound from 'react-native-sound'

export default sound = new Sound('ba.mp3',Sound.MAIN_BUNDLE,(error) => {
        if(error){
            alert('Music Error')
        }
})
