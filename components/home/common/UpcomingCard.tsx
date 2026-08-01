import { formatCurrency } from "@/lib/utils";
import { Image, Text, View } from "react-native";

const UpcomingCard = ({ item }: { item: UpcomingSubscription }) => (
  <View className="upcoming-card">
    <View className="upcoming-row">
      <View className="upcoming-icon-container">
        <Image source={item.icon} className="upcoming-icon" />
      </View>
      <View>
        <Text className="upcoming-price">
          {formatCurrency(item.price, item.currency)}
        </Text>
        <Text className="upcoming-meta">
          {item.daysLeft > 1 ? `${item.daysLeft} days left` : "Last day"}
        </Text>
      </View>
    </View>
    <Text className="upcoming-name">{item.name}</Text>
  </View>
);
export default UpcomingCard;
