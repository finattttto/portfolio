import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Particles from "@/components/Particles";


export default function Home() {
  return (
    <div className="flex max-h-[100dvh] w-full flex-col bg-black">
      <Header />
      <Particles />
      <Footer />
    </div>
  );
}
