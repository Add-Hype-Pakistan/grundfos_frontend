import type { Metadata } from "next";
import localFont from "next/font/local";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

const grundfosSans = localFont({
  src: [
    { path: "../fonts/GrundfosTheSans-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../fonts/GrundfosTheSans-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "../fonts/GrundfosTheSans-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/GrundfosTheSans-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../fonts/GrundfosTheSans-SemiLight.ttf", weight: "350", style: "normal" },
    { path: "../fonts/GrundfosTheSans-SemiLightItalic.ttf", weight: "350", style: "italic" },
    { path: "../fonts/GrundfosTheSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/GrundfosTheSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "../fonts/GrundfosTheSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/GrundfosTheSans-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../fonts/GrundfosTheSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/GrundfosTheSans-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../fonts/GrundfosTheSans-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/GrundfosTheSans-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "../fonts/GrundfosTheSans-Black.ttf", weight: "900", style: "normal" },
    { path: "../fonts/GrundfosTheSans-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-grundfos-sans",
});

const grundfosSansExtd = localFont({
  src: [
    { path: "../fonts/GrundfosTheSans-ExtdLight.ttf", weight: "300", style: "normal" },
    { path: "../fonts/GrundfosTheSans-ExtdSemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/GrundfosTheSans-ExtdBold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/GrundfosTheSans-ExtdBlack.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-grundfos-sans-extd",
});

export const metadata: Metadata = {
  title: "Grundfos - Possibility in every drop",
  description:
    "Grundfos is a global leader in advanced pump solutions and water technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${grundfosSans.variable} ${grundfosSansExtd.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
