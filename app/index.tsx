import { StyleSheet, Platform } from "react-native";
import { Link } from "expo-router";
import { useEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedLink } from "@/components/ThemedLink";
import { useTranslation } from "react-i18next";
import { Image } from "expo-image";
import i18n from "@/i18n/LanguageContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function HomeScreen() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem("language");
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, [i18n]);
  const flags = [
    { component: "../assets/images/flags/en.png", lang: "en-EN", name: "USA" },
    {
      component: "../assets/images/flags/ru.png",
      lang: "ru-RU",
      name: "Russia",
    },
    {
      component: "../assets/images/flags/tm.png",
      lang: "tm-TM",
      name: "Turkmenistan",
    },
  ];
  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <ThemedView style={styles.titleContainer}>
      {flags.map(({ component: Flag, lang, name }) => (
        <ThemedView key={name} style={styles.flagsContainer}>
          <Image
            source="data:image/png;base64,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"
            contentFit="cover"
            transition={1000}
            onPress={() => changeLanguage(lang)}
            style={[
              styles.flag,
              currentLanguage === lang && styles.activeFlag,
              currentLanguage !== lang && styles.inactiveFlag,
            ]}
          />
        </ThemedView>
      ))}
      <ThemedLink type="title" href="/DriverLogin">
        {t("Driver")}
      </ThemedLink>

      <ThemedLink type="title" href="/ShipperLogin">
        Shipper
      </ThemedLink>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  linkStyle: {
    color: "white",
  },
  textcontainer: {
    flexDirection: "row",
    width: 200,
    height: 200,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  flagsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  flag: {
    paddingHorizontal: 10,
  },
  activeFlag: {
    transform: [{ scale: 1.2 }],
  },
  inactiveFlag: {
    opacity: 0.5,
  },
  text: {
    fontSize: 22,
    lineHeight: 32,
    marginTop: -6,
  },
});
