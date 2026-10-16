export const metadata = {
  title: "Hello World",
  description: "App Next.js minimale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
