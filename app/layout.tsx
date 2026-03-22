import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ★ ここで「アイコンはこれだよ！」とiPhoneに直接教えています
export const metadata: Metadata = {
  title: "時間割",
  description: "自分だけの1日時間割アプリ",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png", // iPhone（Apple）用の設定を追加
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}