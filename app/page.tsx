import { About } from "@/components/About";
import { Builds } from "@/components/Builds";
import { Close } from "@/components/Close";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Results } from "@/components/Results";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1200px] overflow-x-clip px-4 lg:px-8">
        <Hero />
        <Results />
        <Builds />
        <About />
        <Close />
      </main>
      <Footer />
    </>
  );
}
