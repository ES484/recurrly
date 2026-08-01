import { Text, TouchableOpacity, View } from "react-native";

const ListHeading = ({ title, onPress, actionText }: ListHeadingProps) => {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>
      <TouchableOpacity className="list-action" onPress={onPress}>
        <Text className="list-action-text">{actionText}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ListHeading;
