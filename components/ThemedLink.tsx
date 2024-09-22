import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { Link } from "expo-router";
export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  href?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedLink({
  style,
  lightColor,
  darkColor,
  type = "default",
  href,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Link
      href={href}
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,

    fontFamily: "Poppins-Regular",
  },
  defaultSemiBold: {
    fontSize: 16,

    fontFamily: "Poppins-SemiBold",
  },
  title: {
    fontSize: 32,

    fontFamily: "Poppins-Bold",
  },
  subtitle: {
    fontSize: 20,

    fontFamily: "Poppins-Bold",
  },
  link: {
    fontSize: 16,
    color: "#0a7ea4",
    fontFamily: "Poppins-Regular",
  },
});
