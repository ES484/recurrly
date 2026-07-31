import { Link } from "expo-router";
import { Text, View } from "react-native";

const Subscriptions = () => {
  return (
    <View>
      <Text>Subscriptions</Text>
      <Link href="/(tabs)/subscriptions/1">Go To Subscription 1</Link>
    </View>
  );
};
export default Subscriptions;
