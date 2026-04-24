import Footer from "./footer/footer";
// import { Header } from "./header";

export default function Layout({ children }) {
  return (
    <div className="relative flex w-full flex-col">
      {/* <Header /> */}
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  );
}
