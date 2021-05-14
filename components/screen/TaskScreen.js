import React, { Component, useState} from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Accordion, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NewTask } from "./NewTask.js";



const Stack = createStackNavigator();

export const TaskScreen= () => {
    const [tasks, setTasks] = useState([])



    return (
      
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TaskHome" component={TaskScreenHome}/>
        <Stack.Screen name="NewTask" component={NewTask}/>
      </Stack.Navigator>
    </NavigationContainer>
      


     
    );
  
}

 const TaskScreenHome= (props) => {
   const [task, settask] = useState([])
   return (
     
     
     <Container>
        <Header style={styles.header} >
          <Button success small  rounded onPress={()=>{
              props.navigation.navigate('NewTask', {
            setTask:settask
          } )
            }} >
            <Icon name='ios-add' />
          </Button>
        </Header>
        <Content>
        {task.map((e) => {
          if(e!=null){
            console.log(e)
            return  (
            <Card key={e}> 
            <CardItem>
              <Left>
                <Body>
                  <Text>{e.title}</Text>
                  <Text note>{e.materia}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            <Text>{e.descripcion}</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon  name="calendar" />
                  <Text>{e.dia}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon  name="time-sharp" />
                  <Text>{e.hora}</Text>
                </Button>
              </Body>
              <Right>
                <Icon  name="trash" />
              </Right>
            </CardItem>
          </Card>
          )
          }
        })}
          
        </Content>
      </Container>
   )
 } 

const styles = StyleSheet.create({
  header: {
    backgroundColor:'transparent',
    display: 'flex',
    alignSelf: 'flex-end',
  },
  

  
})