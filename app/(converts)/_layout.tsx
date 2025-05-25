import { Stack } from "expo-router";

export default function LayoutConverts() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="converts" />
    </Stack>
  );
}
