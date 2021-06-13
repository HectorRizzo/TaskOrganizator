import React from 'react';
import { View,Accordion , Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image, StyleSheet, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NewTask } from "../screen/NewTask.js";
import { CalendarScreen } from "../screen/CalendarScreen.js";


const Stack = createStackNavigator();

export const Utilidades= () => {

    return (
      
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Herramientas Educativas" component={UtilidadesScreen}/>
        <Stack.Screen name="Aula Virtual" component={AulaVirtual}/>
        <Stack.Screen name="Microsoft Teams" component={MicrosoftTeams}/>
      </Stack.Navigator>
    </NavigationContainer>
      

     
    );
  
}

 const UtilidadesScreen = (props) => {

  return (
          <Container>

      <Content  style={styles.content}>
      <Card cardbody style={styles.carta} >
          
          <CardItem cardbody style={styles.carta}  >
        <Button   success style={styles.btn} onPress={()=>{
              props.navigation.navigate('Aula Virtual', )
            }} > 
                  <Icon  style={styles.img} name="school" />
                  
        </Button>
          </CardItem>
           <CardItem>
                    <Text> Aula Virtual</Text>

          </CardItem>
          
         </Card>
         <Card cardbody style={styles.carta} >
          
          <CardItem cardbody style={styles.carta}  >
        <Button   success style={styles.btn} onPress={()=>{
              props.navigation.navigate('Microsoft Teams', )
            }} >
                  <Icon  style={styles.img} name="people" />
                  
        </Button>
          </CardItem>
          <CardItem>
                    <Text> Microsoft Teams</Text>

          </CardItem>

         </Card>
      
      </Content>
      </Container>

  )
}

const AulaVirtual = (props) =>{

  return (
    <WebView source={{ uri: 'https://aulavirtual.espol.edu.ec' }} style={{ marginTop: 20 }} />
  )

}

const MicrosoftTeams = (props) =>{

  return (
    <WebView source={{ uri: 'https://teams.microsoft.com' }} style={{ marginTop: 20 }} />
  )

}




const styles = StyleSheet.create({
  btn:{
    width:100,
    height:100,
    backgroundColor: "#004ba0",
  },
  carta:{
    display: 'flex',
    alignSelf: 'center',
        backgroundColor: "#004ba0"

  },
  content:{
        margin:50,
  },
  img:{
    fontSize: 70,
  }
})



