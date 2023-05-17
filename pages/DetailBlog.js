import { View, Text, StyleSheet, Image } from 'react-native'
import React,{ useContext } from 'react'
import BlogContext from '../context/BlogContext'

const DetailBlog = ({route}) => {
  const {data}=useContext(BlogContext)

    let BlogDtl=data.find((blog)=>{
      return blog.postId ===route.params.id
    })
  
   

  return (
    <View
    style={styles.wrapperCustom}
    >
      <View style={styles.innerContainer}>
        <View >
          <Image
            source={{
              uri: BlogDtl.banner,
            }}
            style={{ width:'100%', height: 200, overflow:'hidden' }}
          />
        </View>
        <View style={styles.titleStyle}>
          <Text style={{fontSize:20, fontWeight:500}}>{BlogDtl.title}</Text>
        </View>
        <View style={styles.description}>
          <Text style={{fontSize:18}}>{BlogDtl.summary}</Text>
        </View>
        <View style={styles.nameStyle}>
          <Text style={{ fontWeight:300, fontSize:16}}>{BlogDtl.users.name} </Text>
          <Text>{BlogDtl.users.email}</Text>
          <Text style={[styles.minute,{top:20}]}>Total Reading Time</Text>
          <Text style={[styles.minute,{top:40}]}>{BlogDtl.totalReadingTime} minute</Text>
        </View>
      </View>
    </View>
  )
}

export default DetailBlog


const styles = StyleSheet.create({
  wrapperCustom: {
    flex:1,
    borderColor: "black",
    borderRadius: 8,
    overflow:'hidden',
    marginVertical:8,
    marginHorizontal:16
  },
innerContainer: {
  flex:1,

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
  flex:1,
  justifyContent:'flex-end',
  alignItems:'flex-end',
  paddingRight:12,
  paddingBottom:10,
},
minute:{
  position:'absolute',
  left:0,
}
});
