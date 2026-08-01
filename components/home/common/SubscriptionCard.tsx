import {
    formatCurrency,
    formatStatusLabel,
    formatSubscriptionDateTime,
} from "@/lib/utils";
import clsx from "clsx";
import dayjs from "dayjs";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

const SubscriptionCard = ({ item }: { item: Subscription }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Pressable
      className={clsx("sub-card bg-card", expanded && "sub-card-expanded")}
      style={{
        backgroundColor: !expanded ? item.color : undefined,
      }}
      onPress={() => setExpanded(!expanded)}
    >
      <View className="sub-head">
        <View className="sub-main">
          <Image source={item.icon} className="sub-icon" />
          <View className="sub-copy">
            <Text className="sub-title" numberOfLines={1}>
              {item.name}
            </Text>
            <Text numberOfLines={1} className="sub-meta">
              {item?.category ||
                item?.plan ||
                formatSubscriptionDateTime(item?.renewalDate ?? "")}
            </Text>
            <Text>
              {dayjs(item?.startDate).format("MMMM D, h:mm") || "Not available"}
            </Text>
          </View>
          <View className="sub-price-box">
            <Text className="sub-price">
              {formatCurrency(item.price, item.currency)}
            </Text>
            <Text className="sub-billing">{item.billing}</Text>
          </View>
        </View>
      </View>
      {expanded && (
        <View className="sub-body">
          <View className="sub-details">
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Payment:</Text>
                <Text className="sub-value">{item.paymentMethod}</Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Category:</Text>
                <Text className="sub-value">
                  {item?.category || item?.plan}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Started:</Text>
                <Text className="sub-value">
                  {dayjs(item?.startDate).format("MMMM D, h:mm") ||
                    "Not available"}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Status:</Text>
                <Text className="sub-value">
                  {formatStatusLabel(item?.status)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};
export default SubscriptionCard;
