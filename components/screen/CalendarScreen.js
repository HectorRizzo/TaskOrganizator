
import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import {Day} from './week/Day.js';
export const CalendarScreen= () => {
   
   
   
    return (
      <Container>
        <Header hasTabs/>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Lunes">
            <Day day='lunes' index='0' />
          </Tab>
          <Tab heading="Martes">
            <Day day='martes' index='1' />
          </Tab>
          <Tab heading="Miercoles">
            <Day day='miercoles' index='2' />
          </Tab>
          <Tab heading="Jueves">
            <Day day='jueves' index='3'/>
          </Tab>
          <Tab heading="Viernes">
            <Day day='viernes' index='4' />
          </Tab>
          <Tab heading="Sábado">
            <Day day='sabado' index='5' />
          </Tab>
          <Tab heading="Domingo">
            <Day day='domingo' index='6'/>
          </Tab>
        </Tabs>
      </Container>
    );
  
}