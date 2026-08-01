import { HOME_USER } from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import { Image, Pressable, Text, View } from "react-native";

const UserProfile = () => {
  return (
    <View className="home-header">
      <View className="home-user">
        <Image source={images.avatar} className="home-avatar" />
        <Text className="home-user-name">{HOME_USER.name}</Text>
      </View>
      <Pressable
        className="home-add-icon-container"
        onPress={() => console.log("add")}
      >
        <Image source={icons.add} className="home-add-icon" />
      </Pressable>
    </View>
  );
};
export default UserProfile;
