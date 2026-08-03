import { Text, View } from "react-native";

function ErrorFallback() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}
    >
      <Text>Something went wrong.</Text>
      <Text>Please restart the app.</Text>
    </View>
  );
}
export default ErrorFallback;
