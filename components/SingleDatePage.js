import React, {useState} from 'react';
import { Container, Header, Content, Button, Icon, Text, ListItem, Left, Body, Right } from 'native-base';
import {View, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export const SingleDatePage = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if(selectedDate!=null){
    props.date(selectedDate)
    }

  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <Container>
    <Content>
          <ListItem icon>
            <Left>
            <Button  onPress={showDatepicker}  >
              <Icon name='calendar' />
               </Button>          
            </Left>
            <Body>
            </Body>
            <Right>
               <Text>{date.toString().substr(4,11)}</Text>
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
            <Button  onPress={showTimepicker}>
            <Icon name='ios-time' />
          </Button>
            </Left>
            <Body>
            </Body>
            <Right>
             <Text>{`${ (date.getHours()<10?'0':'') + date.getHours() } : ${ (date.getMinutes()<10?'0':'') + date.getMinutes() }`}</Text>
            </Right>
          </ListItem>

          {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
        </Content>
    </Container>

  );
};

export const date=date;
