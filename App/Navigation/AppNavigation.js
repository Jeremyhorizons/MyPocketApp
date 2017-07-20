import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import AgentLaunchScreen from '../Containers/AgentLaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  AgentLaunchScreen: { screen: AgentLaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'AgentLaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
