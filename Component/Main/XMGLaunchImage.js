import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default class XMGLaunchImage extends React.Component{
    componentDidMount(){
        setTimeout(()=>this.props.navigation.navigate('Main'), 2000)
    }

    render(){
        return (
            <Image source={{uri:'launchimage'}} style={styles.launchImageStyle}/>
        )
    }
}

const styles = StyleSheet.create({
    launchImageStyle:{
        flex:1,
    }
})