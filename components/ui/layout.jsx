import DigitalTwinChat from "@/components/digital-twin-chat";
import Footer from "./footer/footer";

export default function Layout({ children, lng }) {
  return (
    <div className="relative flex w-full flex-col">
      <main className="flex-auto">{children}</main>
      <DigitalTwinChat lng={lng} />
      <Footer lng={lng} />
    </div>
  );
}
