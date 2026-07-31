import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams();
  console.log({ id });
  return (
    <View>
      <Text>Subsription Details for id: {id}</Text>
    </View>
  );
};
export default SubscriptionDetails;
