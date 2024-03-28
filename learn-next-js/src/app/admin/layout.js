import AdminHeader from "../componets/AdminHeader";

export default function RootLayout({ children}) {
  return (
    <section>
      <AdminHeader />
      {children}
    </section>
  );
}
