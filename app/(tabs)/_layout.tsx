import { tabs } from "@/constants/data";
import { theme } from "@/constants/theme";
import { useAuth } from "@clerk/expo";
import clsx from "clsx";
import { Redirect, Tabs } from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const { components, colors } = theme;
  const { isSignedIn, isLoaded } = useAuth();
  if (!isLoaded) {
    return null;
  }

  // Redirect to sign-in if user is not authenticated
  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  const TabBarIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className="tabs-icon">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} className="tabs-glyph" resizeMode="contain" />
        </View>
      </View>
    );
  };
  const tabsItems = tabs.map((tab: AppTab) => (
    <Tabs.Screen
      key={tab.name}
      name={tab.name}
      options={{
        title: tab.title,
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} icon={tab.icon} />
        ),
      }}
    />
  ));
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          height: components.tabBar.height,
          marginHorizontal: components.tabBar.horizontalInset,
          borderRadius: components.tabBar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical:
            components.tabBar.height / 2 - components.tabBar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: components.tabBar.iconFrame,
          height: components.tabBar.iconFrame,
          alignSelf: "center",
        },
      }}
    >
      {tabsItems}
    </Tabs>
  );
}
