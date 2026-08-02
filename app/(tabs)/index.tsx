import Subscriptions from "@/components/home/subscriptions";
import { useUser } from "@clerk/expo";
import { View } from "react-native";

const Home = () => {
  const { user } = useUser();
  const displayName =
    user?.firstName ||
    user?.fullName ||
    user?.emailAddresses[0]?.emailAddress ||
    "User";
  return (
    <View className="bg-background flex-1 p-5">
      <Subscriptions />
    </View>
  );
};
export default Home;
