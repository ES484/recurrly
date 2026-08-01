import { HOME_SUBSCRIPTIONS } from "@/constants/data";
import { useRouter } from "expo-router";
import { FlatList, Text } from "react-native";
import Balance from "../balance";
import ListHeading from "../common/ListHeading";
import SubscriptionCard from "../common/SubscriptionCard";
import Upcoming from "../upcoming";
import UserProfile from "../user/profile";

const SubscriptionList = () => {
  const router = useRouter();
  const handlePress = () => router.push("/(tabs)/subscriptions");
  return (
    <FlatList
      ListHeaderComponent={() => (
        <>
          <UserProfile />
          <Balance />
          <Upcoming />
          <ListHeading
            title="All Subscriptions"
            actionText="View all"
            onPress={handlePress}
          />
        </>
      )}
      data={HOME_SUBSCRIPTIONS}
      renderItem={({ item }) => <SubscriptionCard item={item} />}
      keyExtractor={(item) => item.id}
      contentContainerClassName="gap-4 pb-20"
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <Text className="home-empty-state">No Subscriptions yet.</Text>
      }
    />
  );
};
export default SubscriptionList;
