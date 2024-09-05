import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className={"flex flex-col min-h-screen items-center justify-between"}
      >
        {children}
      </body>
    </html>
  );
}
