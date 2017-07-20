import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TextInput, TouchableOpacity } from 'react-native'
import RoundedButton from '../Components/RoundedButton.js'
import ClientActions from '../Redux/AddClientRedux'
import { connect } from 'react-redux'

import { Images } from '../Themes'

// Styles
import styles from './Styles/HelloWorldScreenStyles'

class HelloWorldScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputName: '',
            inputPhone: ''
        }

    }

    onNameChange(inputName) {
        this.setState({inputName})
    }

    onPhoneChange(inputPhone) {
        this.setState({inputPhone})
    }

  render () {
    return (
        <View style={styles.mainContainer}>
          <ScrollView style={styles.container}>
              <Text style={styles.sectionText}>
                Current Clients
              </Text>
              <TextInput
                  style={{height: 40}}
                  placeholder="Client Name"
                  onChangeText={inputName => this.onNameChange(inputName)}
                  autoCorrect={false}
                  autoFocus={true}
                  value={this.state.inputName}
              />
              <TextInput
                  style={{height: 40}}
                  placeholder="(352) 226-1656"
                  onChangeText={inputPhone => this.onPhoneChange(inputPhone)}
                  value={this.state.inputPhone}
              />
              <RoundedButton
                text="Add Client"
                onPress={() => this.props.addClient(this.state.inputName, this.state.inputPhone)}
            />
            {this.props.client.clients.map((client, i) =>
                <View key={i}>
                    <Text>{client.name}</Text>
                    <Text>{client.phone}</Text>
                    <TouchableOpacity onPress={()=> this.props.deleteClient(client.name)}><Text>X</Text></TouchableOpacity>
                </View>
            )}
          </ScrollView>
        </View>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  addClient: (name, phone) => dispatch(ClientActions.addClient(name, phone)),
  deleteClient: (name) => dispatch(ClientActions.deleteClient(name))
})
const mapStateToProps = state => ({ client: state.client })
export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldScreen)
