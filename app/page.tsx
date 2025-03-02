"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// embla imports
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";


import { MaxWidthWrapper } from "@/components/ui/max-width";
import { features, services } from "@/data/data";
import About from "@/components/About";
import Testimonies from "@/components/Testimonies";
import ContactUs from "@/components/contact-us";
import FAQSection from "@/components/FAQSection";

const Agob = () => {
  // embla config
  const OPTIONS: EmblaOptionsType = {
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: false,
  };
  const [sliderRef] = useEmblaCarousel(OPTIONS, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <div>
      <section className="w-full lg:flex lg:flex-row">
        <div className="px-4 py-6 lg:px-9">
          <p className="text-light_green ml-2 md:text-2xl">Agob-Synergy</p>
          <p className="text-5xl md:text-8xl">
            Cultivating <span className="text-dark_green">Excellence</span>{" "}
            Across Industries.
          </p>
          <p className="my-3 text-lg md:text-2xl lg:text-base lg:w-3/4">
            Empowering progress through innovative solutions in real estate, agriculture, logistics, and more. Building sustainable futures with advanced technology.
          </p>
          <Link
            href="/contact"
            className="bg-light_green w-3/5 h-14 text-lg text-dark_green shadow-2xl shadow-light_green flex items-center justify-center uppercase md:h-20 md:text-3xl lg:h-16 md:w-1/2 lg:text-base"
          >
            Get in Touch
          </Link>
        </div>
        <div className="w-full">
          {/* <div className="bg-red-200 h-6"></div> */}
          <div className="overflow-hidden w-full">
            {/* carousel parent container */}{" "}
            <div className="overflow-hidden w-full" ref={sliderRef}>
              {/* carousel viewport */}{" "}
              <div className="flex flex-row gap-3">
                {/* carousel item container/track */}{" "}
                <div className="carousel-item">
                  {/* carousel items */}
                  <div className="relative w-full h-80 md:h-[35rem]">
                    <Image
                      src="/agro-2.jpg"
                      alt="farmers-in-farm"
                      fill
                      priority
                      objectFit="cover"
                      objectPosition="center"
                    />
                    <div className="overlay">
                      <p className="text-right my-2 uppercase">
                        Agob-Agriculture
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <div className="carousel-item">
                  <div className="relative w-full h-80 md:h-[35rem]">
                    <Image
                      src="/electrician.jpg"
                      alt="farmers-in-farm"
                      fill
                      priority
                      objectFit="cover"
                      objectPosition="center"
                    />
                    <div className="overlay">
                      <p className="text-right my-2 uppercase">
                        Agob-Electrician
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <div className="carousel-item">
                  <div className="relative w-full h-80 md:h-[35rem]">
                    <Image
                      src="/car-rental.jpg"
                      alt="farmers-in-farm"
                      fill
                      priority
                      objectFit="cover"
                      objectPosition="center"
                    />
                    <div className="overlay">
                      <p className="text-right my-2 uppercase">Agob-Car-Rent</p>
                    </div>
                  </div>
                </div>{" "}
                <div className="carousel-item">
                  <div className="relative w-full h-80 md:h-[35rem]">
                    <Image
                      src="/construction.jpg"
                      alt="farmers-in-farm"
                      fill
                      priority
                      objectFit="cover"
                      objectPosition="center"
                    />
                    <div className="overlay">
                      <p className="text-right my-2 uppercase">
                        Agob-Construction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about agob-synergy */}
      <About />
      {/* service section */}
      <section className="w-full">
        <div className="p-2 lg:flex lg:flex-col lg:item-center lg:justify-center">
          <p className="text-dark_green text-lg md:text-2xl lg:text-center lg:text-base">What we do</p>
          <h1 className="text-style text-2xl font-semibold md:text-3xl lg:text-center lg:text-2xl">
            Our <span className="text-light_green">Services</span>
          </h1>
          <p className="my-3 text-lg md:text-2xl lg:text-center lg:text-base">
            Empowering Industries with Integrated, Innovative Solutions
          </p>
        </div>
        <MaxWidthWrapper>
          <div className="w-full px-2 lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
            {services?.slice(0, 8).map((service) => (
              <div
                key={service.id}
                className={`my-3 pb-6 bg-near_white rounded-md shadow-2xl shadow-light_green/40 lg:my-0`}
              >
                <div className="relative w-full h-64 md:h-[25rem] lg:h-52">
                  <Image
                    src={`/${service.image}`}
                    alt={service.title}
                    fill
                    priority
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <div className="overlay"></div>
                </div>
                <div className="px-2">
                  <h3 className="text-2xl my-3 text-dark_green md:text-3xl lg:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-2xl lg:text-base">
                    {service.description.slice(0, 100)}...
                    <span>
                      <Link
                        href={`/service/${service.link}`}
                        className="text-dark_green font-semibold"
                      >
                        Read more
                      </Link>
                    </span>{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>{" "}
          <div className="w-full my-3 px-2 lg:grid lg:grid-cols-2 lg:items-center lg:gap-4">
            {services?.slice(-2).map((service) => (
              <div
                key={service.id}
                className={`my-3 pb-6 bg-near_white rounded-md shadow-2xl shadow-light_green/40 lg:my-0`}
              >
                <div className="relative w-full h-64 md:h-[25rem] lg:h-96">
                  <Image
                    src={`/${service.image}`}
                    alt={service.title}
                    fill
                    priority
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <div className="overlay"></div>
                </div>
                <div className="px-2">
                  <h3 className="text-2xl my-3 text-dark_green md:text-3xl lg:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-2xl lg:text-base">
                    {service.description.slice(0, 100)}...
                    <span>
                      <Link
                        href={`/service/${service.link}`}
                        className="text-dark_green font-semibold"
                      >
                        Read more
                      </Link>
                    </span>{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      {/* features section */}
      <section className="w-full mt-6 lg:my-9">
        <div className="p-2 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <p className="text-dark_green text-lg md:text-2xl lg:text-base">
            Why choose <span className="text-light_green">Agob-synergy</span>
          </p>
          <h1 className="text-style text-2xl font-semibold md:text-3xl lg:text-2xl">
            Our <span className="text-light_green">Features</span>
          </h1>
          <p className="my-3 text-lg md:text-2xl lg:text-base">
            Unifying Excellence Across Industries.
          </p>
        </div>
        <MaxWidthWrapper>
          <div className="w-full px-2 lg:grid lg:grid-cols-2 lg:gap-4">
            {features?.map((feature) => (
              <div
                key={feature.id}
                className="px-2 py-6 border-t border-solid border-light_green lg:flex lg:flex-row lg:gap-6"
              >
                <div className="relative w-full h-52 md:h-[25rem] lg:h-32">
                  <Image
                    src={`/${feature.image}`}
                    alt={feature.image}
                    fill
                    priority
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <div className="overlay"></div>
                </div>
                <div className="gap-4 my-3 lg:flex lg:flex-row lg:gap-4">
                  <span className="font-bold text-light_green text-2xl md:text-4xl">
                    0{feature.id}
                  </span>
                  <span>
                    <p className="text-xl text-dark_green font-bold mb-2 md:text-3xl lg:text-xl">
                      {feature.title}
                    </p>
                    <p className="text-lg md:text-2xl lg:text-base">{feature.description}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      {/* testimonial section */}
      <Testimonies />
      {/* FAQs section */}
      <FAQSection />
      {/* cta section */}
      <div className="w-full my-8 px-2 pt-10 bg-light_green lg:flex lg:flex-row lg:justify-between lg:gap-9 lg:px-16">
        <div className="w-full 2">
          <div className="w-[90%] h-96 relative md:h-[30rem] md:w-[96%] md:mx-auto">
            <Image
              src={"/workers.jpg"}
              alt="agob-logo"
              fill
              priority
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="w-[90%] h-96 relative -top-44 left-8 md:h-[30rem] md:left-20">
            <Image
              src={"/agob-logo.jpg"}
              alt="agob-logo"
              fill
              priority
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="relative -top-40 md:-top-32 lg:-top-0 lg:order-first">
          <h1 className="text-5xl text-dark_green my-2 md:text-7xl lg:text-8xl">
            Join the Movement Towards Innovation.
          </h1>
          <p className="text-lg text-dark_green my-3 md:text-2xl lg:text-base lg:w-3/4">
            Partner with Agob Synergy and unlock transformative solutions
            tailored to your industry needs. Connect with us today to explore
            how we can shape a sustainable tomorrow.
          </p>
          <Link
            href="/contact"
            className="bg-dark_green w-3/5 h-14 text-lg text-light_green shadow-2xl shadow-light_green flex items-center justify-center uppercase md:h-20 md:text-3xl"
          >
            Connect Now
          </Link>
        </div>
      </div>
      {/* contact section */}
      <ContactUs />
    </div>
  );
};

export default Agob;
