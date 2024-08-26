// Stories.ts
import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { stories } from "@/constants/Stories";

interface StoryItem {
  id: number;
  username: string;
  avatar: string;
}

const Stories = () => {
  const renderStories = ({ item }: { item: StoryItem }) => (
    <View style={styles.storyContainer}>
      <Image source={{ uri:item.avatar }} style={styles.storyAvatar} />
      <Text style={styles.storyUsername}> {item.username} </Text>
    </View>
  );

  return (
    <FlatList
      data={stories}
      renderItem={renderStories}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.storiesList}
    />
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  storyAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#ff8501",
  },
  storyUsername: {
    marginTop: 5,
    fontSize: 12,
    color: "#333",
  },
  storiesList: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default Stories;
