import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class SignUp extends Component {
  render() {
    return (
      <View>
        <Text> SignUp Screen </Text>
        <Button title="Click to go to App" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
