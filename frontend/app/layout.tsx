export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body style={{ margin: 0, background: "#222222", color: "#f5f5f5", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
