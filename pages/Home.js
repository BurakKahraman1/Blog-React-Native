import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  RefreshControl
} from "react-native";
import React, { useEffect, useContext, useState, useCallback } from "react";
import Message from "../components/Message";
import { getApi } from "../service/blogApi";
import BlogContext from "../context/BlogContext";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const { data, setData, page, setPage } = useContext(BlogContext);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    getApi(page)
      .then((res) => res.json())
      .then((res) => setData(res.result));
  }, [page]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{ paddingTop: 10, paddingBottom: 50 }}
    >
      {data.map((item) => {
        return (
          <Message
            key={item.postId}
            navigation={navigation}
            id={item.postId}
            name={item.users.name}
            title={item.title}
            summary={item.summary}
            image={item.banner}
            ReadTime={item.totalReadingTime}
          />
        );
      })}
      <View style={styles.arrowContainer}>
        <Pressable
          onPress={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          <Ionicons size={30} name="arrow-back-outline" />
        </Pressable>
        <Pressable onPress={() => setPage(1)}>
          <Text> 1{"  "}</Text>
        </Pressable>
        <Pressable onPress={() => setPage(2)}>
          <Text>2  </Text>
        </Pressable>
        <Pressable onPress={() => setPage(3)}>
          <Text>3 </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            if (page < 3) {
              setPage(page + 1);
            }
          }}
        >
          <Ionicons size={30} name="arrow-forward-outline" />
        </Pressable>
      </View>
      <View style={{ paddingBottom: 28 }}>
        <Text style={{ textAlign: "center", color: "#060058" }}>
          Page {page}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  arrowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
