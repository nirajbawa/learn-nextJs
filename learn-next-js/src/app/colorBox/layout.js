export default function RootLayout({ children, left, right}) {
  const isSidebar = false;
  return (
    <section>
      {/* {children} */}
      {isSidebar ? left : right}
    </section>
  );
}
