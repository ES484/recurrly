import { useRouter } from "expo-router";
import { View } from "react-native";
import ListHeading from "../common/ListHeading";
import UpcomingList from "./UpcomingList";

const Upcoming = () => {
  const router = useRouter();
  const handlePress = () => router.push("/(tabs)/subscriptions");
  return (
    <View>
      <ListHeading
        title="Upcoming"
        actionText="View all"
        onPress={handlePress}
      />
      <UpcomingList />
    </View>
  );
};
export default Upcoming;
