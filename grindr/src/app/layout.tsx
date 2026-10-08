import type { ReactNode } from "react";

export const metadata = {
  title: "Grindr",
  description: "Grindr on Firebase App Hosting",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
