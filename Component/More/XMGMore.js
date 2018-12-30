import React from 'react'
import { StyleSheet, View, Text, Image, Platform, TouchableOpacity, Alert, ScrollView } from 'react-native'

import XMGCommonCeil from './XMGCommonCeil'

export default class XMGMore extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                
                <ScrollView>
                    <View style={{marginTop:12}}>
                        <XMGCommonCeil title="扫一扫"/>
                    </View>

                    <View style={{marginTop:12}}>
                        <XMGCommonCeil title="省流量模式" isSwitch={true}/>
                    </View>
                    <View>
                        <XMGCommonCeil title="消息提醒"/>
                    </View>
                    <View>
                        <XMGCommonCeil title="邀请好友使用小马哥电商"/>
                    </View>
                    <View>
                        <XMGCommonCeil title="清空缓存" rightTitle="13M"/>
                    </View>

                    <View style={{marginTop:12}}>
                        <XMGCommonCeil title="意见反馈"/>
                    </View>
                    <View>
                        <XMGCommonCeil title="问卷调查"/>
                    </View>
                    <View>
                        <XMGCommonCeil title="支付帮助"/>
                    </View>
                    <View>
                        <XMGCommonCeil title="网络诊断"/>
                    </View>
                    <View>
                        <XMGCommonCeil title="关于码团"/>
                    </View>
                    <View>
                        <XMGCommonCeil title="我要应聘"/>
                    </View>
                </ScrollView>
            </View>
        )
    }

    renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                <Text></Text>
                <Text style={{color:"#fff",fontSize:16}}>更多</Text>
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={()=>Alert.alert('设置')}>
                        <Image source={{uri:'icon_mine_setting'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

let styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e8e8e8'
    },
    navBarStyle:{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(255, 96, 0, 1)'
    },
    rightNavViewStyle:{
        position:'absolute',
        right:10,
    },
    navRightImgStyle:{
        width:Platform.OS == 'ios' ? 28 : 24,
        height:Platform.OS == 'ios' ? 28 : 24,
    }
})