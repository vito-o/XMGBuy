import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native' 
let {width} = Dimensions.get('window')

export default class XMGMineHeaderView extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                {this.renderTopView()}
                {this.renderBottomView()}
            </View>
        )
    }

    renderTopView(){
        return (
            <View style={styles.topViewStyle}>
                <Image source={{uri:'see'}} style={styles.leftIconStyle}/>
                <View style={styles.centerViewStyle}>
                    <Text style={{fontSize:18, color:'#fff', 'fontWeight':'bold'}}>小码哥电商</Text>
                    <Image source={{uri:'avatar_vip'}} style={{width:17, height:17}}/>
                </View>
                <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8, height:13}}/>
            </View>
        )
    }

    renderBottomView(){
        let bottomData = [
            {name:'码哥券', value:'100'},
            {name:'评价', value:'12'},
            {name:'收藏', value:'50'},
        ]

        return (
            <View style={styles.BottomViewStyle}>
                {
                    bottomData.map((item,index)=>(
                        <View key={index} style={[styles.bottomItemViewStyle,index<2?styles.rightBorderStyle:null]}>
                            <Text style={styles.bottomTextStyle}>{item.value}</Text>
                            <Text style={styles.bottomTextStyle}>{item.name}</Text>
                        </View>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:160,
        backgroundColor:'rgba(255, 96, 0, 1)'
    },
    topViewStyle:{
        flexDirection:'row',
        marginTop:30,
        paddingRight:10,
        paddingLeft:10,
        alignItems:'center',
        justifyContent:'space-around'
    },
    leftIconStyle:{
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)'
    },
    centerViewStyle:{
        width:width*0.75,
        flexDirection:'row',
        alignItems:'center',
    },
    BottomViewStyle:{
        flexDirection:'row',
        position:'absolute',
        bottom:0
    },
    bottomItemViewStyle:{
        flex:1,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.35)',
    },
    rightBorderStyle:{
        borderRightWidth:1,
        borderColor:'rgba(255,255,255,0.45)'
    },  
    bottomTextStyle:{
        color:'#fff'
    }
})