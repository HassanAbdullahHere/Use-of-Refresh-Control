import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { RefreshControl, SectionList, StyleSheet, Text, View } from 'react-native';

export default function App() {


const [DATA,setData] = useState( [
  
  {
    name: 'SECTION 1',
    data: ['obj 1-1','obj 1-2']
  },
]
);

const [Refreshing,setRefreshing] = useState(false);

const OnRefresh = ()=>{
  setRefreshing(true);
  const num = DATA.length+1;
  setData([...DATA,{name:'SECTION '+num.toString(),data: ['obj '+num.toString()+'-1','obj '+num.toString()+'-2']}]);
  setRefreshing(false);
}

  return (
    <View>
    <SectionList
    keyExtractor={(item,index)=>index.toString()}
    sections={DATA}
    renderItem={({item})=>(
      <View style={styles.container}>
      <Text style={styles.TextStyle}>{item}</Text>
      
      </View>
    )
  }
  renderSectionHeader={({section})=>(
    <View style={styles.container1}>
      <Text style={styles.TextStyle1}>{section.name}</Text>
    </View>
  )}
  refreshControl={
    <RefreshControl
    refreshing = {Refreshing}
    onRefresh = {OnRefresh}
    colors = {["red","blue"]}
    />
  }
    />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  container2: {
    flex: 1,
    alignItems:"stretch"
  },
  
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    margin:9,
    borderRadius: 10,
  },
  TextStyle:{
    fontSize: 25,
    fontFamily:'sans-serif',
    fontStyle: 'italic',
    fontWeight: "bold",
    margin: 15,
    color: "#000",
    
  },
  TextStyle1:{
    fontSize: 25,
    fontFamily:'sans-serif',
    fontStyle: 'italic',
    fontWeight: "bold",
    margin: 15,
    color: "#fff",
    
  },
});
