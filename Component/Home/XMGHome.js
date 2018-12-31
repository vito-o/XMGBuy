import React from 'react'
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Dimensions, Alert, Platform, ScrollView } from 'react-native'
let { width, height } = Dimensions.get('window')
import TopView from './XMGTopView'

export default class XMGHome extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                {/* 设置首页导航条 */}
                {this.renderNavBar()}

                <ScrollView>
                    <View>
                        <TopView/>
                    </View>
                </ScrollView>
                
            </View>
        )
    }

    //首页导航条
    renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                <TouchableOpacity onPress={()=>Alert.alert('广州')}>
                    <Text style={{color:'#fff'}}>广州</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder="输入商家、品类、商圈"
                    style={styles.topInputStyle}
                />
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={()=>Alert.alert('message')}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Alert.alert('scan')}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5fcff'
    },
    navBarStyle:{
        flexDirection:'row',
        alignItems:'center',
        height:64,
        backgroundColor:'rgba(255, 96, 0, 1)'
    },
    topInputStyle:{
        flex:1,
        height:35,
        marginLeft:5,
        marginRight:5,
        backgroundColor:"#fff",
        borderRadius:20
    },
    rightNavViewStyle:{
        flexDirection:'row'
    },
    navRightImgStyle:{
        width:Platform.OS == 'ios' ? 28 : 24,
        height:Platform.OS == 'ios' ? 28 : 24,
    }
})