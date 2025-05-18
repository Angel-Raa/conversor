import { Stack } from "expo-router";

export default function LayoutConverts() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="converts" />
    </Stack>
  );
}
