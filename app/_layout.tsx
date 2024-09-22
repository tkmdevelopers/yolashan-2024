import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import i18n from "@/i18n/LanguageContext";
export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.dark.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Poppins-Bold",
          fontWeight: "bold",
          fontSize: 20,
        },
        headerTitle: "Hosh Geldiniz",
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
