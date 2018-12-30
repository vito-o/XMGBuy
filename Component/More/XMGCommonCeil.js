import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, Switch } from 'react-native'

export default class XMGCommonCeil extends React.Component{
    static defaultProps = {
        title:'',
        isSwitch: false,
        rightTitle:''
    }

    constructor(props){
        super(props)
        this.state = {
            isSaveNetWorkFlow:false
        }
    }
    
    render(){
        return (
            <TouchableOpacity onPress={()=>Alert.alert('点击')}>
                <View style={styles.container}>
                    <Text style={{color:'#333'}}>{this.props.title}</Text>
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        )
    }

    renderRightView(){
        if(this.props.isSwitch){
            return (
                <Switch value={this.state.isSaveNetWorkFlow} onValueChange={()=>this.setState({isSaveNetWorkFlow:!this.state.isSaveNetWorkFlow})}/>
            )
        }

        return (
            <View style={styles.rightViewStyle}>
                {this.rightTitle()}
                <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8, height:13}}/>
            </View>
        )
    }

    rightTitle(){
        if(this.props.rightTitle){
            return (
                <Text style={{marginRight:5}}>{this.props.rightTitle}</Text>
            )
        }
        return null
    }

}

const styles = StyleSheet.create({
    container:{
        height:44,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#fff',
        borderBottomColor:'#ddd',
        borderBottomWidth:0.5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center'

    }
})