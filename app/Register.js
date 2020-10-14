import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
    TouchableOpacity,
    TextInput,
    Button,
  StatusBar,
} from 'react-native';
function Register ({ navigation })  {
  return (
        <View style={styles.container}>
       <Text style={{marginTop:80}}>Email</Text>
       <TextInput   placeholder="Your Email .."
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyle} />
      
      <Text>Password</Text>
       <TextInput   placeholder="Your Password .."
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyle}
 
          // Making the Text Input Text Hidden.
          secureTextEntry={true}/>
       <Text>Confirm Password</Text>
       <TextInput   placeholder="Confirm Your Password .."
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyle}
 
          // Making the Text Input Text Hidden.
          secureTextEntry={true}/>
      <View style={{marginLeft:80, marginTop:50,width:150,borderRadius:20}}>
      <TouchableOpacity  
      onPress={() =>
        navigation.navigate('Login', { name: 'Login' })
      }>
    <Text style={{textAlign:"center", fontSize:16, color:"#ffff", backgroundColor: '#3b7bc4',borderRadius:7, height:35,textAlign:'center',textAlignVertical: "center"}}>Register</Text>
 </TouchableOpacity>
</View>
      </View>
   
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'flex-start',
        marginLeft:30,
        
    },
});
export default Register;