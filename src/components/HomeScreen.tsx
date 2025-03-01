import { View, Text } from 'react-native'
import { Button } from 'react-native';
import React from 'react'

const HomeScreen = ({navigation}:any) => {
  return (
     <Button
       title="Go to Jane's profile"
       onPress={() =>
         navigation.navigate('Profile', {name: 'Jane'})
       }
     />         
   );
}

export default HomeScreen