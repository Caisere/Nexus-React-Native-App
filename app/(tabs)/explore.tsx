import { Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "@/context/cart-context";

export default function ExploreScreen() {
  const { cartItems, removeItem } = useCart();

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: 'white' }}>Cart</Text>
      {cartItems.map((item) => (
        <View
          key={item.id}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <Text style={{color: 'orange'}}>{item.name} : {item.id}</Text>
          <Pressable onPress={() => removeItem(item.id)}>
            <Text style={{ color: "red" }}>Remove</Text>
          </Pressable>
        </View>
      ))}
    </SafeAreaView>
  );
}
