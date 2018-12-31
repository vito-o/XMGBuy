import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native' 
import middleData from './MiddleData'
export default class XMGMineMiddleView extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                {
                    middleData.map((item,index)=><InnerView key={index} {...item}/>)
                }
            </View>
        )
    }
}

class InnerView extends React.Component{
    static defaultProps = {
        iconName:'',
        title:''
    }

    render(){
        return (
            <TouchableOpacity onPress={()=>Alert.alert('charge')} style={{flex:1}}>
                <View style={styles.innerContainer}>
                    <Image source={{uri:this.props.iconName}} style={{width:30, height:20, marginBottom:2}}/>
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop:15,
        paddingBottom:10,
        backgroundColor:'#fff'
    },
    innerContainer:{
        alignItems:'center',
    }
})