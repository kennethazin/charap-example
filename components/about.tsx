import { JSX, SVGProps } from "react";
import Image from "next/image";

export function About() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-52 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-10">
                  <u style={{ textDecorationColor: "yellow" }}>About</u> us
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  We&apos;re a Filipino-owned bubble tea shop in the heart of
                  Dublin, passionate about serving up the most delectable bubble
                  tea experience. Our mission is to bring the vibrant flavors of
                  Asia to your fingertips, one sip at a time.
                </p>
              </div>
            </div>
            <Image
              alt="Charap Bubble Tea"
              className="rounded-xl mx-auto aspect-square overflow-hidden  object-cover lg:order-last mt-10"
              height="400"
              src="/bubble.webp"
              width="400"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-10">
                Our Passion, Your Delight
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mb-10">
                At Charap, a Filipino-owned bubble tea shop in the heart of
                Dublin, we believe in creating an unforgettable bubble tea
                experience. Our core values of quality, innovation, and
                customer-centricity guide everything we do, from sourcing the
                finest ingredients to crafting our unique flavor profiles.
              </p>
            </div>
            <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 mb-28">
              <div className="flex flex-col items-center justify-center space-y-2">
                <TurtleIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-bold">Quality</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  We source the freshest, highest-quality ingredients to ensure
                  every sip is a delight.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <LightbulbIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Our team is constantly exploring new flavor combinations and
                  techniques to push the boundaries of bubble tea.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <HeartIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-bold">Customer-Centricity</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Our customers&apos; satisfaction is our top priority, and
                  we&apos;re dedicated to providing an exceptional experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function LightbulbIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function TurtleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" />
      <path d="M4.82 7.9 8 10" />
      <path d="M15.18 7.9 12 10" />
      <path d="M16.93 10H20a2 2 0 0 1 0 4H2" />
    </svg>
  );
}
