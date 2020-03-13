import React, {useState} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import Profile from './component/profile';


import Home from './component/home';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Stack = createStackNavigator();

const HeaderItem = () => {
  return(
    <View style={{marginBottom:6}}>
       <SearchBar
        placeholder="Search"
        containerStyle={{width:300, height:35, backgroundColor:'white', marginLeft:25}}
        inputContainerStyle={{borderRadius:55}} 
         platform="ios"/>
    </View>
  );
};

export default function App() {

  const [isMode, setisMode] = useState(false);

  function cancel(){
    setisMode(false)
  }
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen 
         name="home"
         component={Home}
         options={{
           headerStyle:{
             backgroundColor:'white'
           },
           headerTitle: () => <HeaderItem />,
           headerRight: () => 
               <TouchableOpacity style={{marginRight:15, marginBottom:4}}>
                   <Ionicons name="ios-create" size={26} color="black" />
               </TouchableOpacity>,
           headerLeft: () => 
                <TouchableOpacity  onPress={()=>{setisMode(true)}}>
                  <Image source={require('./assets/main.png')} style={{width:50, height:50, borderRadius:30, marginLeft:16, marginBottom:7}} />
                        {/* profile modal  */}
                       <Profile visible={isMode} down={()=>cancel()}/>
                </TouchableOpacity>    
          
         }}
       />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
