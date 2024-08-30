"use client";

import Link from "next/link";
import anime from "animejs";
import Image from "next/image";
import { Explore } from "@/components/explore-call";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import localFont from "next/font/local";
import { Separator } from "@/components/ui/separator";
import ModalImage from "react-modal-image";

const amerton = localFont({
  src: [
    {
      path: "fonts/amerton.ttf",
    },
  ],
});

interface CoffeeIconProps {}

export default function Component() {
  const handleExploreClick = (event?: React.MouseEvent) => {
    event?.preventDefault();

    const menuElement = document.querySelector("#menu");

    if (menuElement) {
      anime({
        targets: document.scrollingElement,
        scrollTop: menuElement.getBoundingClientRect().top + window.pageYOffset,
        duration: 800,
        easing: "easeInOutSine",
      });
    }
  };

  const handleExploreClickWrapper = () => handleExploreClick();

  return (
    <div className="flex flex-col min-h-[100dvh] ">
      <main className="flex-1" id="start">
        <section className="w-full h-screen flex flex-col items-center justify-center bg-white">
          <div className="px-2 md:px-2 space-y-8 xl:space-y-16 text-center">
            <div className="inline-block rounded-lg bg-[#ffe97d] px-3 py-1 text-sm">
              Bubble Tea Shop
            </div>
            <div className={amerton.className}>
              <h1 className=" text-6xl  sm:text-8xl md:text-9xl ">Charap</h1>
            </div>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Indulge in the perfect blend of flavors and textures at Charap,
              your premier bubble tea destination.
            </p>
          </div>
          <div className="mt-32">
            <Explore onClick={handleExploreClickWrapper} />
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 min-h-screen"
          id="menu"
          tabIndex={0}
        >
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  <u style={{ textDecorationColor: "yellow" }}>Explore </u> Our
                  Menu
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover a wide variety of bubble tea flavors and
                  customization options to suit your taste buds.
                </p>
              </div>
              <div style={{ marginTop: "100px" }}>
                <ModalImage
                  small="/menu.png"
                  large="/menu.png"
                  imageBackgroundColor="#ffffff"
                  showRotate={true}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 min-h-screen flex items-center justify-center"
          id="location"
        >
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  <u style={{ textDecorationColor: "yellow" }}>Visit </u>us
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Find us at our cozy bubble tea shop in the heart of the city.
                </p>
              </div>
              <div className="mx-auto w-full max-w-2xl rounded-lg border shadow-sm  flex-col items-center justify-center auto-cols-auto">
                <div>
                  <iframe
                    width="100%"
                    height="500px"
                    loading="lazy"
                    src="https://maps.google.com/maps?hl=en&amp;q=13%20Anglesea%20St,%20Temple%20Bar,%20Dublin,%20D02%20PA46+(Charap)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg font-bold">Charap Bubble Tea</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    13 Anglesea St, Temple Bar, Dublin, D02 PA46, Ireland
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Open daily from 12pm - 6:30pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Separator />
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32  min-h-screen"
        >
          <About />
        </section>
        <Separator />
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32  min-h-screen"
        >
          <Contact />
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Charap. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function CoffeeIcon(props: CoffeeIconProps) {
  return (
    <Image
      src="/tea-icon.png"
      width={50}
      height={50}
      style={{ rotate: "20deg" }}
      alt="icon of a bubble tea drink in clip art style"
    />
  );
}

function MenuImage() {
  return (
    <Image
      src="/menu.png"
      width="1000"
      height="1000"
      alt="image of menu and offering selection "
    />
  );
}

function SmallMenuImage() {
  return (
    <Image
      src="/menusmall.png"
      width="1000"
      height="1000"
      alt="image of menu and offering selection "
    />
  );
}
