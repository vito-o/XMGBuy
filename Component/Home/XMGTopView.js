import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

export default class XMGTopView extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.renderScrollItem()}
                </ScrollView>

                <View></View>
            </View>
        )
    }

    renderScrollItem(){
        
    }

}

let styles = StyleSheet.create({
    container:{

    }
})