import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const ListData = [
    {
        key:1, 
        name:'Nana Kofi', 
        icon:require('../assets/snap4.png'), 
        snap:'New Snap',
        time:'15m', 
        snapScore:60,
        emoji:require('../assets/emoji.png')
    },
    {
        key:2, 
        name:'iamesi', 
        icon:require('../assets/snap1.png'), 
        snap:'New Snap',
        time:'18m', 
        snapScore:10
    },
    {
        key:3, 
        name:'Audrey Z', 
        icon:require('../assets/snap2.png'), 
        snap:'New Snap',
        time:'25m', 
        snapScore:160,
        emoji:require('../assets/emoji2.png')
    },
    {
        key:4, 
        name:'onukps', 
        icon:require('../assets/snap5.png'), 
        snap:'New Chat',
        time:'27m', 
        snapScore:120
    },
    {
        key:5, 
        name:'Jade', 
        icon:require('../assets/snap3.png'), 
        snap:'New Snap',
        time:'35m', 
        snapScore:560,
        emoji:require('../assets/emoji.png')
    },
    {
        key:6, 
        name:'Ophelia', 
        icon:require('../assets/snap7.png'), 
        snap:'New Snap',
        time:'35m', 
        snapScore:16,
        emoji:require('../assets/emoji2.png')
    },
    {
        key:7, 
        name:'Yana', 
        icon:require('../assets/snap8.png'), 
        snap:'New Chat',
        time:'27m', 
        snapScore:690
    },
    {
        key:8, 
        name:'Jay', 
        icon:require('../assets/snap11.png'), 
        snap:'New Chat',
        time:'37m', 
        snapScore:40
    },
    {
        key:9, 
        name:'Esi', 
        icon:require('../assets/snap10.png'), 
        snap:'New Snap',
        time:'45m', 
        snapScore:760,
        emoji:require('../assets/emoji2.png')
    },
    {
        key:10, 
        name:'Sam', 
        icon:require('../assets/snap9.png'), 
        snap:'New Snap',
        time:'1h', 
        snapScore:1
        
    },{
        key:11, 
        name:'Mamoire', 
        icon:require('../assets/snap12.png'), 
        snap:'New Snap',
        time:'2h', 
        snapScore:16
        
    }
]

const Home = () => {

    const [items, setData ] = useState(ListData);
  
   return(
       <ScrollView style={styles.container}>
           {items.map(item => {
               return(
                   <View key={item.id} style={styles.listView}>
                       <Image source={item.icon} style={styles.avatar}  />
                       {item.snap === 'New Snap' ? (
                             <View style={styles.userContainer}>
                               <Text style={{fontSize:18, fontWeight:'bold' }}>{item.name}</Text>
                                 <View style={styles.snap}>
                                    <View style={{backgroundColor:'#fb3755', width:15, height:15, borderRadius:3}}/>
                                    <Text style={{marginLeft:8, fontSize:13,color:'#fb3755', fontWeight:'bold'}}>{item.snap}</Text>  
                                    <Text style={{ marginLeft:8, fontSize:13, color:'#c4c4c4',fontWeight:'700' }}> {item.time}</Text>
                                    <Text style={{marginLeft:8, fontSize:13, fontWeight:'bold'}}>{item.snapScore}</Text> 
                                    <Image source={require('../assets/fire.png')} style={{width:13, height:14, marginLeft:2}} />
                                    <Image source={item.emoji} style={styles.emoji} />
                               </View>   
                          </View>
                       ) : (
                        <View style={styles.userContainer}>
                         <Text style={{fontSize:18, fontWeight:'bold' }}>{item.name}</Text>
                          <View style={styles.snap}>
                             <MaterialIcons name="chat-bubble" size={18} color="#11a9fd" />
                             <Text style={{marginLeft:8, fontSize:13,color:"#11a9fd", fontWeight:'bold'}}>{item.snap}</Text>  
                             <Text style={{ marginLeft:8, fontSize:13, color:'#c4c4c4',fontWeight:'700' }}> {item.time}</Text>
                             <Text style={{marginLeft:8, fontSize:13, fontWeight:'bold'}}>{item.snapScore}</Text> 
                             <Image source={require('../assets/fire.png')} style={{width:13, height:14, marginLeft:2}} />
                     </View>   
                   </View>
                       )}
                              
                   </View>    
               )
           })}
        
       </ScrollView>    
   );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'whitesmoke'
     
    },
    listView: {
        flexDirection:'row',
        paddingVertical:12,
        marginLeft:19,
    },
    avatar: {
        width:50,
        height:50,
        borderRadius:30,
        borderWidth:2,
        borderColor:"#11a9fd"
    },
    userContainer:{
        marginLeft:15
        
    },
    snap:{
       flexDirection:'row',
       marginTop:4

    },
    emoji:{
        height:16, 
        width:16,
         marginLeft:120
    }

  });

export default Home;