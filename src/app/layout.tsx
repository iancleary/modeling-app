import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/theme-provider";
import "./app.css";

export const metadata: Metadata = {
  title: "Modeling App",
  description: "RF Modeling App",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
