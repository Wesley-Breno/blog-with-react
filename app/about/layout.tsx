export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Aqui vem o layout da página About</h1>
      {children}
    </>
  );
}
