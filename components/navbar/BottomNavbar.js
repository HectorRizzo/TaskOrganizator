import React, { useState } from 'react'
import { View } from 'react-native';
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'
import  Icon  from '@expo/vector-icons/AntDesign.js';
import { HomeScreen } from "../screen/HomeScreen.js";
import { CalendarScreen } from "../screen/CalendarScreen.js";
import  {NewTask}  from "../screen/NewTask.js";
import { TaskScreen } from "../screen/TaskScreen.js";



export default class BottomNavbar extends React.Component {
  tabs = [
    {
      key: 'home',
      icon: 'home',
      label: 'Home',
      barColor: '#388Ef1',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      screen: <HomeScreen />
    },

    {
      key: 'calendar',
      icon: 'calendar',
      label: 'Horario',
      barColor: '#B7B71C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      screen: <CalendarScreen />
    },
    {
      key: 'tasks',
      icon: 'check',
      label: 'Tasks',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)',
            screen: <TaskScreen />
    },
    {
      key: 'configuration',
      icon: 'tool',
      label: 'Configuración',
      barColor: '#152535',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      screen: <View> </View>
    }
  ]
  state = {
    activeTab: 'home'
  }

  screen=this.tabs[0].screen;

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )


  render() {

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
        {this.screen}
        </View>
        <BottomNavigation
          activeTab={this.state.activeTab}
          onTabPress={newTab => {
            this.setState({ activeTab: newTab.key })
            this.screen=newTab.screen;
          }}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    )

    
  }
}