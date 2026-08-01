import { UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { FlatList, Text } from "react-native";
import UpcomingCard from "../common/UpcomingCard";

const UpcomingList = () => {
  return (
    <FlatList
      data={UPCOMING_SUBSCRIPTIONS}
      renderItem={({ item }) => <UpcomingCard item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={
        <Text className="home-empty-state">No upcoming renewals yet.</Text>
      }
    />
  );
};
export default UpcomingList;
