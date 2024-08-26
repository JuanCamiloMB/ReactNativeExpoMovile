// Feed.js
import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { posts } from "@/constants/Posts";
import Stories from "./Stories";

const Feed = () => {
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      <View style={styles.footer}>
        <Text style={styles.likes}>{item.likes} likes</Text>
        <Text style={styles.caption}>
          <Text style={styles.username}>{item.username}</Text> {item.caption}
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={<Stories />}
      contentContainerStyle={styles.feedContainer}
    />
  );
};

const styles = StyleSheet.create({
  feedContainer: {
    marginTop: 30,
  },
  postContainer: {
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    color: "white",
  },
  postImage: {
    width: "100%",
    height: 400,
  },
  footer: {
    padding: 10,
  },
  likes: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  caption: {
    marginTop: 5,
    color: "white",
  },
});

export default Feed;
