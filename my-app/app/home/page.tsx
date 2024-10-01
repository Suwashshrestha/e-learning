"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, GraduationCap } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Home from "../../components/custom/home";      // Note the uppercase 'H'
import About from "../../components/custom/about";    // Uppercase 'A'
import Prepare from "../../components/custom/prepare"; // Uppercase 'P'
import Courses from "../../components/custom/courses"; // Uppercase 'C'
import Contact from "../../components/custom/contact"; // Uppercase 'C'

const NAV = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState<string>("#home");

  // Function to handle clicking on a nav item
  const handleNavClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 bg-slate-600">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className="px-[100px]">
            <Link
              href="#home"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
              onClick={() => handleNavClick("#home")}
            >
              <GraduationCap className="h-10 w-10" />
            </Link>
          </div>

          <div className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              href="#home"
              className={`text-white transition-colors hover:text-foreground ${
                activeLink === "#home" ? "text-gray-800" : "text-white"
              }`}
              onClick={() => handleNavClick("#home")}
            >
              Home
            </Link>

            <Link
              href="#about"
              className={`text-white transition-colors hover:text-foreground ${
                activeLink === "#about" ? "text-gray-800" : "text-white"
              }`}
              onClick={() => handleNavClick("#about")}
            >
              About
            </Link>

            <Link
              href="#prepare"
              className={`text-white transition-colors hover:text-foreground ${
                activeLink === "#prepare" ? "text-gray-800" : "text-white"
              }`}
              onClick={() => handleNavClick("#prepare")}
            >
              Prepare
            </Link>

            <Link
              href="#courses"
              className={`text-white transition-colors hover:text-foreground ${
                activeLink === "#courses" ? "text-gray-800" : "text-white"
              }`}
              onClick={() => handleNavClick("#courses")}
            >
              Courses
            </Link>

            <Link
              href="#contact"
              className={`text-white transition-colors hover:text-foreground ${
                activeLink === "#contact" ? "text-gray-800" : "text-white"
              }`}
              onClick={() => handleNavClick("#contact")}
            >
              Contact
            </Link>
          </div>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#home"
                className={`text-muted-foreground hover:text-foreground ${
                  activeLink === "#home" ? "text-gray-800" : "text-muted-foreground"
                }`}
                onClick={() => handleNavClick("#home")}
              >
                Home
              </Link>

              <Link
                href="#about"
                className={`text-muted-foreground hover:text-foreground ${
                  activeLink === "#about" ? "text-gray-800" : "text-muted-foreground"
                }`}
                onClick={() => handleNavClick("#about")}
              >
                About
              </Link>

              <Link
                href="#prepare"
                className={`text-muted-foreground hover:text-foreground ${
                  activeLink === "#prepare" ? "text-gray-800" : "text-muted-foreground"
                }`}
                onClick={() => handleNavClick("#prepare")}
              >
                Prepare
              </Link>

              <Link
                href="#courses"
                className={`text-muted-foreground hover:text-foreground ${
                  activeLink === "#courses" ? "text-gray-800" : "text-muted-foreground"
                }`}
                onClick={() => handleNavClick("#courses")}
              >
                Courses
              </Link>

              <Link
                href="#contact"
                className={`text-muted-foreground hover:text-foreground ${
                  activeLink === "#contact" ? "text-gray-800" : "text-muted-foreground"
                }`}
                onClick={() => handleNavClick("#contact")}
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Link href="/auth/login" className="ml-auto">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/auth/signup">
          <Button variant="outline">Sign UP</Button>
          </Link>
        </div>
      </header>

      {/* Sections */}
      {/* all sections in middleof the page by div */}
      <div>
      <section id="home">
        {/* Add Home component content */}
        <Home />
      </section>

      <section id="about">
        {/* Add About component content */}
        <About />
      </section>

      <section id="prepare">
        {/* Add Prepare component content */}
        <Prepare />
      </section>

      <section id="courses">
        {/* Add Courses component content */}
        <Courses />
      </section>

      <section id="contact">
        {/* Add Contact component content */}
        <Contact />
      </section>
      </div>
    </div>
  );
};

export default NAV;
