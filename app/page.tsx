'use client'
import Tools from "@/components/global/tools";
import Hero from "@/components/global/hero";
import Navbar from "@/components/global/navbar";
import Skills from "@/components/global/skills";




export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Skills />
      <Tools />

    </main>
  );
}
