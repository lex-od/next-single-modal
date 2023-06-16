import { Container } from "@/components/layout/container/container";
import "@/styles/globals.scss";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Single Modal | Home",
  description: "Home page description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
