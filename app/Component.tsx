"use client";
import Link from "next/link";
import anime from "animejs";
import { Explore } from "@/components/explore-call";
import CoffeeIcon from "./page";

export default function Component() {
  const handleLocationClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId || "");

    if (targetElement) {
      anime({
        targets: document.scrollingElement,
        scrollTop:
          targetElement.getBoundingClientRect().top + window.pageYOffset,
        duration: 800,
        easing: "easeInOutQuad",
      });
    }
  };

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
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-20  flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <CoffeeIcon />
          <span className="sr-only">Charap</span>
        </Link>
        <nav className="ml-auto flex gap-2 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#menu"
            onClick={handleLocationClick}
          >
            Menu
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#location"
            onClick={handleLocationClick}
          >
            Location
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full h-screen flex flex-col items-center justify-center bg-white">
          <div className="px-2 md:px-2 space-y-8 xl:space-y-16 text-center">
            <div className="inline-block rounded-lg bg-[#FFF8F0] px-3 py-1 text-sm">
              Bubble Tea Shop
            </div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Charap
            </h1>
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
          className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 min-h-screen"
          id="menu"
        >
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Our Menu
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover a wide variety of bubble tea flavors and
                  customization options to suit your taste buds.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Classic Flavors</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Indulge in our signature milk tea, fruit tea, and classic
                  toppings.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="text-base font-semibold">Taro Milk Tea</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Creamy and indulgent.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="text-base font-semibold">
                      Strawberry Milk Tea
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Sweet and refreshing.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="text-base font-semibold">Matcha Milk Tea</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Earthy and invigorating.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="text-base font-semibold">Mango Fruit Tea</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Tropical and tangy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Customization</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Personalize your bubble tea with a variety of toppings and
                  sweetness levels.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="text-base font-semibold">Boba Pearls</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Chewy and delightful.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="text-base font-semibold">Jelly Cubes</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Bouncy and refreshing.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="text-base font-semibold">
                      Sweetness Levels
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      From 0% to 100% to suit your taste.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="text-base font-semibold">Ice Levels</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      From no ice to extra ice.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Seasonal Specials</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore our limited-time seasonal flavors and toppings.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="text-base font-semibold">
                      Pumpkin Spice Latte
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Cozy and autumnal.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="text-base font-semibold">Lychee Boba</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Refreshing and tropical.
                    </p>
                  </div>
                </div>
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
                  Visit Us
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
