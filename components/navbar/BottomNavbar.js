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
import {Notification} from "../notification/Notificacion.js"
import {Utilidades} from "../notification/Utilities.js"
import {ScheduleNotification} from "../notification/Notificacion.js"




export default class BottomNavbar extends React.Component {
  tabs = [
    {
      key: 'home',
      icon: 'home',
      label: 'Inicio',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 255, 0.16)',
      screen: <HomeScreen />
    },

    {
      key: 'calendar',
      icon: 'calendar',
      label: 'Horario',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 255, 0.16)',
      screen: <CalendarScreen />
    },
    {
      key: 'tasks',
      icon: 'check',
      label: 'Tareas',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 255, 0.16)',
            screen: <TaskScreen />
    },
    {
      key: 'utilidades',
      icon: 'tool',
      label: 'Utilidades',
      barColor: '#fff',
      pressColor: 'rgba(0, 0, 255, 0.16)',
      screen: <Utilidades />
    }
    
  ]
  state = {
    activeTab: 'home'
  }

  screen=this.tabs[0].screen;

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="#004ba0" name={icon} />
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
    ScheduleNotification
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