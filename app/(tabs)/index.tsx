import CreateSubscriptionModal from "@/components/home/subscriptions/CreateSubscriptionModal";
import SubscriptionList from "@/components/home/subscriptions/SubscriptionList";
import "@/global.css";
import { useSubscriptionStore } from "@/lib/subscriptionStore";
import { useUser } from "@clerk/expo";
import { styled } from "nativewind";
import { usePostHog } from "posthog-react-native";
import { useState } from "react";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  const { user } = useUser();
  const posthog = usePostHog();
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<
    string | null
  >(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { subscriptions, addSubscription } = useSubscriptionStore();

  const handleCreateSubscription = (newSubscription: Subscription) => {
    addSubscription(newSubscription);
    posthog.capture("subscription_created", {
      subscription_name: newSubscription.name,
      subscription_price: newSubscription.price,
      subscription_frequency: newSubscription.frequency,
      subscription_category: newSubscription.category,
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <SubscriptionList onAdd={() => setIsModalVisible(true)} />

      <CreateSubscriptionModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSubmit={handleCreateSubscription}
      />
    </SafeAreaView>
  );
}
