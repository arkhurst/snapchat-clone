import React from 'react'; 
import {View, Modal, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import {Entypo, Ionicons, Feather, MaterialIcons,Foundation, MaterialCommunityIcons, EvilIcons} from '@expo/vector-icons'


export default function Profile({visible, down}) {
    return(
        <Modal style={{backgroundColor: "red", flex: 1}} visible={visible} animationType="slide">
            <ScrollView>
            <View style={{ marginTop: 25, padding: 20, justifyContent: "space-between"}}> 
                <View style={{flexDirection: 'row', marginBottom: 20}}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={down}>
                            <Entypo
                            name="chevron-thin-down"
                            size={25}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 4, justifyContent: "center", alignItems: 'center', marginTop: 15}}>
                        <View style={{}}>
                            <Image source={require('../assets/profile.png')} style={{height: 120, width: 120, borderRadius: 10}}/>
                        </View>
                        <View style={{justifyContent: "center", alignItems: 'center',}}>
                            <Text style={{marginTop:10, fontSize:20, fontWeight:'bold'}}>Fiifi Jr.</Text>
                            <View style={{flexDirection: "row"}}>
                                <Text style={{fontSize:11, color:"grey", fontWeight:'bold'}}>arkhurst-09 . </Text>
                                <Text style={{fontSize:11,color:"grey", fontWeight:'bold'}}>36,943 . </Text>
                                <MaterialCommunityIcons name="zodiac-cancer" color="grey" size={14} />
                            </View>
                        </View>
                    </View>

                    <View style={{flex:1, justifyContent: "flex-end", flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Ionicons
                            name="ios-settings"
                            size={25}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20, borderBottom: 10}}>
                    <Text style={{fontSize: 18, fontWeight:'bold'}}>Stories</Text>
                    <View style={{height: 20, width:95, backgroundColor: "#e5e4e2", borderRadius: 10, flexDirection: "row", justifyContent: 'center', alignItems: 'center',}}>
                        <View style={{paddingHorizontal:0}}>
                            <Ionicons name="ios-add" size={20} color="#11a9fd" style={{marginLeft:-2}} />
                        </View>
                         <Text style={{fontSize: 12, fontWeight:'300'}}> New Story</Text>  
                    </View>
                </View>

                <View style={{height: 50, width: "100%", marginTop: 15,backgroundColor: "white", shadowColor: '#000', shadowOpacity: .1, shadowOffset: {width: 0, height: 1}, borderRadius: 10, flexDirection: "row", justifyContent: 'center', alignItems: 'center', padding: 10}}>
                    {/* icon */}
                    <View style={{flex: 1}}>
                        <Feather name="camera" color="#11a9fd" size={20} />
                    </View>

                    {/* add to my story */}
                    <View style={{flex: 6, justifyContent: "flex-start"}}>
                        <Text style={{fontWeight:'500'}}>Add to My Story</Text>
                    </View>

                    <View style={{flex: 1}}>
                       <Entypo name="dots-three-vertical" color="#c4c4c4" size={20}/>
                    </View>
                </View>

                <View style={{height: 50, width: "100%", marginTop: 15,backgroundColor: "white", shadowColor: '#000', shadowOpacity: .1, shadowOffset: {width: 0, height: 1}, borderRadius: 10, flexDirection: "row", justifyContent: 'center', alignItems: 'center', padding: 10}}>
                    {/* icon */}
                    <View style={{flex: 1}}>
                    <Feather name="camera" color="#11a9fd" size={20} />
                    </View>

                    {/* add friends */}
                    <View style={{flex: 6, justifyContent: "flex-start"}}>
                       <Text style={{fontWeight:'500'}}>Add to Our Story</Text>
                    </View>

                    <View style={{flex: 1}}>
                       <Entypo name="dots-three-vertical" color="#c4c4c4" size={20}/>
                    </View>
                </View>

                {/* add friend section  */}
                <Text style={{marginTop:25,fontSize: 18, fontWeight:'bold'}}>Friends</Text>
                <View style={{height: 50,marginTop:15,  width: "100%", backgroundColor: "white", shadowColor: '#000', shadowOpacity: .1, shadowOffset: {width: 0, height: 1}, borderRadius: 10, flexDirection: "row", justifyContent: 'center', alignItems: 'center', padding: 10}}>
                    {/* icon */}
                    <View style={{flex: 1}}>
                        <Ionicons style={{marginLeft:7}} name="md-person-add" color="#c4c4c4" size={24} />
                    </View>

                    {/* add friends */}
                    <View style={{flex: 6, justifyContent: "flex-start"}}>
                        <Text style={{fontWeight:'500', marginLeft:5}}>Add friends</Text>
                    </View>

                    <View style={{flex: 1}}>
                        <Ionicons name="ios-arrow-forward" color="#c4c4c4" size={25} />
                    </View>
                </View>

                <View style={{height: 190,marginTop:15,  width: "100%", backgroundColor: "white", shadowColor: '#000', shadowOpacity: .1, shadowOffset: {width: 0, height: 1}, borderRadius: 10, padding: 10}}>
                     <Image source={require('../assets/myfriends.png')} style={{width:350, height:130}} />
                       <View style={{flexDirection:'row'}}>
                         <View style={{paddingLeft:23, marginTop:10}}>
                           <View style={{flexDirection:'row'}}>
                             <MaterialIcons name="person" size={16} color="#c4c4c4" />
                             <Foundation name="graph-horizontal" size={13} color="#c4c4c4"/>
                           </View>
                           <View style={{flexDirection:'row'}}>
                             <MaterialIcons name="person" size={16} color="#c4c4c4" />
                             <Foundation name="graph-horizontal" size={13} color="#c4c4c4"/>
                           </View>
                       </View>
                       <Text style={{marginTop:15, marginLeft:15, fontWeight:'600'}}>My Friends</Text>
                       </View>
                    
                </View>

                <View style={{ justifyContent: "space-between", marginTop: 30, borderBottom: 10}}>
                    <Text style={{fontSize: 20, fontWeight:"bold"}}>Bitmoji</Text>
                    <View style={{height: 150, width: "100%", marginTop: 15,backgroundColor: "white", shadowColor: '#000', shadowOpacity: .1, shadowOffset: {width: 0, height: 1}, borderRadius: 10, padding: 10}}>
                    {/* icon */}
                    <View style={{flexDirection:'row'}}>
                       <View style={{flex: 1}}>
                         <MaterialCommunityIcons name="tshirt-crew-outline" color="#c4c4c4" size={26} />
                       </View>

                        <View style={{flex: 6, marginTop:4, marginLeft:6}}>
                            <Text style={{fontWeight:'500'}}>Change My Outfit</Text>
                        </View>
                        <View style={{height: 25, width:55, backgroundColor: "#11a9fd", borderRadius: 12, flexDirection: "row", justifyContent: 'center', alignItems: 'center',}}>
                         <Text style={{fontSize: 12, color:'white', fontWeight:'700'}}> New</Text>  
                       </View>
                       
                    <View style={{flex: 1, marginLeft:26}}>
                        <Ionicons name="ios-arrow-forward" color="#c4c4c4" size={26} />
                    </View>
                    </View>
                   

                    {/* -------------------------------------------------- */}
                    <View style={{flexDirection:'row', marginTop:18}}>
                    <View style={{flex: 1}}>
                        <Entypo name="edit" color="#c4c4c4" size={23} />
                    </View>

                    <View style={{flex: 6, marginTop:4}}>
                        <Text style={{fontWeight:'500'}}>Edit your Bitmoji</Text>
                    </View>

                    <View style={{flex: 1, marginLeft:26}}>
                        <Ionicons name="ios-arrow-forward" color="#c4c4c4" size={26} />
                    </View>
                    </View>
                     {/* -------------------------------------------------- */}
                     <View style={{flexDirection:'row', marginTop:18}}>
                    <View style={{flex: 1}}>
                        <EvilIcons name="user" color="#c4c4c4" size={29} />
                    </View>

                    <View style={{flex: 6, marginTop:4, justifyContent: "flex-start"}}>
                        <Text style={{fontWeight:'500'}}>Select Selfie</Text>
                    </View>

                    <View style={{flex: 1, marginLeft:26}}>
                        <Ionicons name="ios-arrow-forward" color="#c4c4c4" size={26} />
                    </View>
                    </View>
                 
                </View>

                </View>

            </View>
            </ScrollView>
        </Modal>
    )
}