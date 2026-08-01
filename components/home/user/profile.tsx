import { HOME_USER } from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, View } from "react-native";

const UserProfile = () => {
  return (
    <View className="home-header">
      <View className="home-user">
        <Image source={images.avatar} className="home-avatar" />
        <Text className="home-user-name">{HOME_USER.name}</Text>
      </View>
      <View className="home-add-icon-container">
        <Image source={icons.add} className="home-add-icon" />
      </View>
    </View>
  );
};
export default UserProfile;
