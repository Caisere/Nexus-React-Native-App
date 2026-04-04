import { Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "@/context/cart-context";

export default function HomeScreen() {
  const { cartItems, addItem } = useCart();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color: 'white' }}>Home Screen</Text>
      <Text style={{color: 'orange'}}>Cart Items: {cartItems.length}</Text>
      <Pressable
        style={{ backgroundColor: "blue", padding: 16, borderRadius: 8 }}
        onPress={() => addItem({ id: Date.now(), name: "Product" })}
      >
        <Text style={{ color: "white" }}>Add to Cart</Text>
      </Pressable>
    </SafeAreaView>
  );
}
