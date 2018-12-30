import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from "react-native";

export default class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const {params} = navigation.state;
        console.log(params)
        console.log(navigationOptions)
        return {
            title: params ? params.otherParam : 'A Nested Details Screen',
            headerStyle:{
                backgroundColor:navigationOptions.headerTintColor,
            },
            headerTintColor:navigationOptions.headerStyle.backgroundColor
        }
    }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                title="Go to Details... again"
                onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                title="Go back"
                onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Update the title"
                    onPress={()=>this.props.navigation.setParams({otherParam:'Updated!'})}
                />
            </View>
        );
    }
}