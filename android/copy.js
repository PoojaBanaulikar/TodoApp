import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const COLORS = {primary: '#1f145c', white: '#fff'};

const App = () => {
  const [todos, setTodos] = React.useState([]);

  const ListItem =() =>{
    return <View style={styles.listItem}></View>;
  };


  return (
  <SafeAreaView
  style={{flex:1, backgroundColor: COLORS.white}}>
    <View style={styles.header}>
      <Text style={styles.title}>TODO APP</Text>
      <Icon name="delete" size={25} color='red'/>
    </View>
    <FlatList 
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingg:20,paddingBottom:100 }}
    data={todos}
    renderItem={({item})=><ListItem todo={item}/>}/>
    <View style={styles.footer}>
      <View style={styles.inputcontainer}>
        <TextInput placeholder="Add Todo"/>
      </View>
    <TouchableOpacity>
      <View styles={styles.iconContainer}>
        <Icon name="add" color={COLORS.white} size={30}/>
      </View>
    </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer:{
  backgroundColor:COLORS.primary,
  elevation:40,
  flex:1,
  height:50,
  marginVertical:20,
  marginRight:20,
  borderRadius:30,
  paddingHorizontal:20,
  },
  header:{
    padding:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  footer:{
    position:'absolute',
    bottom:0,
    color: COLORS.white,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
  },
  title:{
    fontWeight:'bold',
    fontSize:20,
    color:'red',
  },
  iconContainer:{
    height:50,
    width:50,
    backgroundColor:COLORS,primary,
    borderRadius:25,
    elevation:40,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default App;
