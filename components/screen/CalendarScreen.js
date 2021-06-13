
import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import {Day} from './week/Day.js';
import * as FileSystem from 'expo-file-system';


export const CalendarScreen= () => {
   let index=new Date().getDay()-1
   if(index<0){
     index=6
   }

   
   
    return (
      <Container>
        <Tabs  renderTabBar={()=> <ScrollableTab underlineStyle={{backgroundColor:"#fff"}} />} initialPage={index}>
          <Tab   heading="Lunes">
            <Day day='lunes' index='1' />
          </Tab>
          <Tab heading="Martes">
            <Day day='martes' index='2' />
          </Tab>
          <Tab heading="Miercoles">
            <Day day='miercoles' index='3' />
          </Tab>
          <Tab heading="Jueves">
            <Day day='jueves' index='4'/>
          </Tab>
          <Tab heading="Viernes">
            <Day day='viernes' index='5' />
          </Tab>
          <Tab heading="Sábado">
            <Day day='sabado' index='6' />
          </Tab>
          <Tab heading="Domingo">
            <Day day='domingo' index='0'/>
          </Tab>
        </Tabs>
      </Container>
    );
  
}