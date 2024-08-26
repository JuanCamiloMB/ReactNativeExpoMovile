import Feed from "@/components/Feed";
import { useTheme } from "@react-navigation/native";
import { Image, StyleSheet, Platform, Text, View } from "react-native";

export default function HomeScreen() {
  const {colors} = useTheme()
  return (
    <Feed/>
  );
}
