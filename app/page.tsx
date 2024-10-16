import Menu from "@/components/navigation/menu";
import ThemeToggle from "@/components/theme/theme-toggle";
import Academics from "@/views/academics";
import Career from "@/views/career";
import Home from "@/views/home";
import Projects from "@/views/projects";
import Contact from "@/views/contact";
import Footer from "@/views/footer";

export default function Page() {
  return (
    <main className="w-full flex min-h-screen flex-col">
      <span className="z-50">
        <Menu/>
        <ThemeToggle className="absolute top-0 right-0"/>
      </span>
      {/* Sections */}
      <Home />
      <Career />
      <Academics />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
