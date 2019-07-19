import React, { Component } from 'react'
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export default class SignIn extends Component {
  state = {
    email: "",
    password: ""
  }

  render() {
    return (
      <View style={styles.login}>
        <View style={styles.top}>
          <Text style={styles.heading}>Login</Text>
          <View style={styles.form}>
            <TextInput placeholder="Email Address" autoCompleteType="email" autoCapitalize="none" keyboardType="email-address" textContentType="emailAddress" onChangeText={(text) => this.setState({email: text})} />
            <TextInput placeholder="Password" autoCompleteType="password" textContentType="password" secureTextEntry onChangeText={(text) => this.setState({password: text})} />
            <TouchableOpacity>
              <Text>Continue</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.alternatives}>
            <Text>Or login with</Text>
            <TouchableOpacity style={styles.alternativesButton}>
              <Text>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.alternativesButton}>
              <Text>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.alternativesButton}>
              <Text>Twitter</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text>Don't have an account</Text>
          <TouchableOpacity>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  top: {
    backgroundColor: 'white',
    width: '100%',
    padding: 40
  },
  heading: {
    fontSize: 40
  }
})
