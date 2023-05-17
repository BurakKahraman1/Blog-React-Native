import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

const Message = ({navigation,id,image,title,summary,name}) => {
 
  const NavigationHandler=()=>{
    navigation.navigate('Detail',{
      id
    })
  }
 
  return (
    <Pressable
    onPress={NavigationHandler}
      style={({ pressed }) => [
        styles.wrapperCustom,
        {
          backgroundColor: pressed ? "rgb(240, 239, 239)" : "white",
        },
      ]}
    >
      <View style={styles.innerContainer}>
        <View >
          <Image
            source={{
              uri: image,
            }}
            style={{ width:'100%', height: 200, overflow:'hidden' }}
          />
        </View>
        <View style={styles.titleStyle}>
          <Text style={{fontSize:15, fontWeight:500}}>{title}</Text>
        </View>
        <View style={styles.description}>
          <Text>{summary}</Text>
        </View>
        <View style={styles.nameStyle}>
          <Text>{name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Message;

const styles = StyleSheet.create({
    wrapperCustom: {
      borderColor: "black",
      borderRadius: 8,
      overflow:'hidden',
      marginVertical:8,
      marginHorizontal:16
    },
  innerContainer: {
    minHeight: 300,
  },
  titleStyle:{
    justifyContent:'center',
    alignItems:'center',
    padding:12
  },
  description:{
    paddingVertical:8,
    paddingHorizontal:8
  },
  nameStyle:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingRight:12,
    paddingBottom:10,
    fontWeight:200
  }
});
