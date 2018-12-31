import React from 'react'
import {StyleSheet, View, Text, Image, Alert, TouchableOpacity} from 'react-native'

export default class XMGCommonMyCeil extends React.Component{
    static defaultProps = {
        leftIconName:'',
        leftTitle:'',
        rightIconName:'',
        rightTitle:''
    }
    render(){
        return (
            <TouchableOpacity onPress={()=>Alert.alert('touch')}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIconName}} style={styles.leftImgStyle}/>
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>

                    <View style={styles.rightViewStyle}>
                        {this.rightSubView()}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    rightSubView(){
        return (
            <View style={{flexDirection:'row', alignItems:'center'}}>
                {this.renderRightContent()}
                <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8, height:13, marginLeft:5}}/>
            </View>
        )
    }

    renderRightContent(){
        if(this.props.rightTitle)
            return (
                <Text>{this.props.rightTitle}</Text>
            )
        if(this.props.rightIconName)
            return (
                <Image source={{uri:'me_new'}} style={{width:24, height:13}}/>
            )
    }
}

const styles = StyleSheet.create({
    container:{
        height:44,
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#fff',
        borderBottomColor:'#ddd',
        borderBottomWidth:0.5,
    },
    leftViewStyle:{
        flexDirection:'row', 
        alignItems:'center'
    },
    leftImgStyle:{
        width:30,
        height:30,
        borderRadius:50,
        marginRight:5
    },
    leftTitleStyle:{
        color:'#333'
    }
})