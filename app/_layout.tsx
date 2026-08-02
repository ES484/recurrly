import "@/global.css";
import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "sans-regular": require("@/assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-light": require("@/assets/fonts/PlusJakartaSans-Light.ttf"),
    "sans-medium": require("@/assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-bold": require("@/assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-semibold": require("@/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "sans-extrabold": require("@/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded) return null;
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <View className="bg-background flex-1">
        <SafeAreaView style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaView>
      </View>
    </ClerkProvider>
  );
}
