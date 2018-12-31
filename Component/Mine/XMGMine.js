import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import XMGCommonMyCell from './XMGCommonMyCell'
import XMGMineMiddleView from './XMGMineMiddleView'
import XMGMineHeaderView from './XMGMineHeaderView'

export default class XMGMine extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <XMGMineHeaderView/>

                <ScrollView style={styles.ScrollViewStyle}>
                    <View>
                        <XMGCommonMyCell leftIconName="collect" leftTitle="我的订单" rightTitle="查看全部订单"/>
                        <XMGMineMiddleView />
                    </View>

                    <View style={{marginTop:12}}>
                        <XMGCommonMyCell leftIconName="pay" leftTitle="小马哥钱包" rightTitle="账户余额：￥100"/>
                    </View>
                    <View>
                        <XMGCommonMyCell leftIconName="like" leftTitle="抵用券" rightTitle="0"/>
                    </View>

                    <View style={{marginTop:12}}>
                        <XMGCommonMyCell leftIconName="card" leftTitle="积分商城"/>
                    </View>

                    <View style={{marginTop:12}}>
                        <XMGCommonMyCell leftIconName="draft" leftTitle="今日推荐" rightIconName={true}/>
                    </View>

                    <View style={{marginTop:12}}>
                        <XMGCommonMyCell leftIconName="new_friend" leftTitle="我要合作" rightTitle="轻松开店，招财进宝"/>
                    </View>
                </ScrollView>
            </View>
        )
    }

}

let styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e8e8e8'
    },
    ScrollViewStyle:{
        backgroundColor:'#e8e8e8'
    }
})