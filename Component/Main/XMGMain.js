import React from 'react'
import { StyleSheet, View, Text, Image, Platform } from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import { tabItems } from '../../config/MainConfig'

export default class XMGMain extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedTab:'home'
        }
    }

    render(){
        return (
            <TabNavigator>
                {
                    tabItems.map((item, index)=>{
                        return (
                            <TabNavigator.Item
                                key={index}
                                title={item.title}
                                selected={this.state.selectedTab === item.selectedTab}
                                onPress={() => this.setState({ selectedTab: item.selectedTab })}
                                renderIcon={()=><Image source={{uri:item.iconName}} style={styles.iconStyle}/>}
                                renderSelectedIcon={()=><Image source={{uri:item.selectedIconName}} style={styles.iconStyle}/>}
                                selectedTitleStyle={styles.selectedTitleStyle}
                            >
                               {item.component(this.props.navigation)}
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator>
        )
    }
}

let styles = StyleSheet.create({
    iconStyle:{
        width:Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    },
    selectedTitleStyle:{
        color:'orange'
    }
})