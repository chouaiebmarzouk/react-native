import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
    TouchableOpacity ,
    TextInput,
    Button,
  StatusBar,
} from 'react-native';
function Login ({ navigation })  {
  return (
        <View style={styles.container}>
       <Text style={{marginTop:80}}>Email</Text>
       <TextInput   placeholder="Enter  your Email"
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyle} />
      
      <Text>Password</Text>
       <TextInput   placeholder="Enter  your Password"
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyle}
 
          // Making the Text Input Text Hidden.
          secureTextEntry={true}/>
      <View style={{marginLeft:80, marginTop:50,width:150,justifyContent: 'center'}}>
       <TouchableOpacity 
      onPress={() =>
        navigation.navigate('List', { name: 'List' })
      }>
     <Text style={{textAlign:"center", fontSize:16, color:"#ffff", backgroundColor: '#3b7bc4',borderRadius:7, height:35,textAlign:'center',textAlignVertical: "center"}}>Login</Text>
</TouchableOpacity>
</View>
 <View style={{marginLeft:30, marginTop:15,width:250}}>
<TouchableOpacity 
      onPress={() =>
        navigation.navigate('Register', { name: 'Register' })
      }>
      <Text style={{textAlign:"center", fontSize:16, color:"#3b88c3", backgroundColor: 'rgba(0,0,0,0)'}}>No Account?? Sign up here.</Text>
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
export default Login;