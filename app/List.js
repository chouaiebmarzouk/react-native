import React, {Component} from 'react';
  import {
    SafeAreaView,
    View,StyleSheet,
    TouchableOpacity,
    Text,
    FlatList,
    Alert} from 'react-native';
  import {SearchBar} from 'react-native-elements';
  const data=[
    {key:"1",title:"Todo 1"},
    {key:"2",title:"Todo 2"},
    {key:"3",title:"Todo 3"},
    {key:"4",title:"Todo 4"},
    {key:"5",title:"Todo 5"},
    {key:"6",title:"Todo 6"},
    {key:"7",title:"Todo 7"},
    {key:"8",title:"Todo 8"},
    {key:"9",title:"Todo 9"},
    {key:"10",title:"Todo 10"},
    
  ];
  class FlatListWithSearch extends Component {
      constructor(){
          super()
          this.state={
              data:data,
              search:""
          }
      }
    

      renderHeader=()=>{
        const { search } = this.state;
          return(
              <View style={{height:30,marginBottom:60}}>
              <SearchBar 
              placeholder="Search Here .."
              lightTheme   
              onChangeText={text=>this.searchAction(text)}
              autoCorrect={false}
              value={search}
              />
                  </View>
          )
      }
      searchAction=(text)=>{
          const newData=data.filter(item=>{
              const itemData=`${item.title}`;
              const textData=text;
              return itemData.indexOf(textData) > -1;

          });
          this.setState({
              data:newData,
              search:text
          });
      }
    

      renderItem=(item)=>{
        return(
        <View key={item.key} style={styles.item}>
            <Text>{item.title}</Text>
       </View>
        )
      }
      render(){
          return(
              <SafeAreaView style={styles.container}>
                  <FlatList
                  data={this.state.data}
                  renderItem={({item})=>this.renderItem(item)}
                  keyExtractor={item=>item.key}
                  ListHeaderComponent={this.renderHeader}
                  >
                  </FlatList>
              </SafeAreaView>         
              
          );
      }
  }
  export default FlatListWithSearch;

  const styles =StyleSheet.create({
      container: {
          padding:10
          
        },
        item:{
          padding:10,
          borderWidth:1,
          borderRadius:5,
          borderColor:"#c1dec5", 
          marginBottom:10},
  })