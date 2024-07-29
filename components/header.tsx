"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import anime from "animejs";
import Image from "next/image";
interface CoffeeIconProps {}

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

  const handleHomeClick = (event: React.MouseEvent) => {
    event.preventDefault();

    const menuElement = document.querySelector("#start");

    if (menuElement) {
      anime({
        targets: document.scrollingElement,
        scrollTop: menuElement.getBoundingClientRect().top + window.pageYOffset,
        duration: 800,
        easing: "easeInOutSine",
      });
    }
  };

  return (
    <header className="px-4 lg:px-6 h-20  flex items-center sticky top-0 bg-white z-10">
      <Link
        className="flex items-center justify-center"
        href="/"
        onClick={handleHomeClick}
      >
        <CoffeeIcon />
        <span className="sr-only">Charap</span>
      </Link>
      <nav className="ml-auto flex gap-2 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#menu"
          onClick={handleLocationClick}
          tabIndex={0}
        >
          Menu
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#location"
          onClick={handleLocationClick}
          tabIndex={0}
        >
          Location
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#about"
          onClick={handleLocationClick}
          tabIndex={0}
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#contact"
          onClick={handleLocationClick}
          tabIndex={0}
        >
          Contact
        </Link>
      </nav>
    </header>
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
