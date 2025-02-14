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
import FAQs from "@/components/FAQs";
import About from "@/components/About";
import Testimonies from "@/components/Testimonies";
import ContactUs from "@/components/contact-us";

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
        <div className="px-4 py-6">
          <p className="text-light_green ml-2">Agob-Synergy</p>
          <p className="text-5xl">
            Cultivating <span className="text-dark_green">Excellence</span>{" "}
            Across Industries.
          </p>
          <p className="my-3">
            Empowering progress through innovative solutions in real estate ,
            agriculture, logistics, and more. Building sustainable futures, one
            industry at a time.
          </p>
          <Link
            href="/contact"
            className="bg-light_green w-3/5 h-14 text-lg text-dark_green shadow-2xl shadow-light_green flex items-center justify-center uppercase"
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
                  <div className="relative w-full h-80">
                    <Image
                      src="/agro-2.jpg"
                      alt="farmers-in-farm"
                      fill
                      priority
                      objectFit="cover"
                      objectPosition="center"
                    />
                    <div className="overlay">
                      <p className="text-right my-2 uppercase">Agob-Agriculture</p>
                    </div>
                  </div>
                </div>{" "}
                <div className="carousel-item">
                  <div className="relative w-full h-80">
                    <Image
                      src="/electrician.jpg"
                      alt="farmers-in-farm"
                      fill
                      priority
                      objectFit="cover"
                      objectPosition="center"
                    />
                    <div className="overlay">
                      <p className="text-right my-2 uppercase">Agob-Electrician</p>
                    </div>
                  </div>
                </div>{" "}
                <div className="carousel-item">
                  <div className="relative w-full h-80">
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
                  <div className="relative w-full h-80">
                    <Image
                      src="/construction.jpg"
                      alt="farmers-in-farm"
                      fill
                      priority
                      objectFit="cover"
                      objectPosition="center"
                    />
                    <div className="overlay">
                      <p className="text-right my-2 uppercase">Agob-Construction</p>
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
        <div className="p-2">
          <p className="text-dark_green">What we do</p>
          <h1 className="text-style text-2xl font-semibold">
            Our <span className="text-light_green">Services</span>
          </h1>
          <p className="my-3">
            Empowering Industries with Integrated, Innovative Solutions
          </p>
        </div>
        <MaxWidthWrapper>
          <div className="w-full px-2 ">
            {services?.map((service) => (
              <div
                key={service.id}
                className="my-3 pb-6 bg-near_white rounded-md shadow-2xl shadow-light_green/40"
              >
                <div className="relative w-full h-64">
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
                  <h3 className="text-2xl my-3 text-dark_green">
                    {service.title}
                  </h3>
                  <p className="text-lg">
                    {service.description}...{" "}
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
                {/* <div className="w-full px-2 h-10 flex items-start">
                    <Link href={""} className="text-dark_green px-6 py-2 border border-solid border-light_green rounded-full">Read more</Link>
                  </div> */}
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      {/* features section */}
      <section className="w-full mt-6">
        <div className="p-2">
          <p className="text-dark_green">
            Why choose <span className="text-light_green">Agob-synergy</span>
          </p>
          <h1 className="text-style text-2xl font-semibold">
            Our <span className="text-light_green">Features</span>
          </h1>
          <p className="my-3">Unifying Excellence Across Industries.</p>
        </div>
        <MaxWidthWrapper>
          <div className="w-full px-2">
            {features?.map((feature) => (
              <div
                key={feature.id}
                className="px-2 py-6 border-t border-solid border-light_green"
              >
                <div className="relative w-full h-52">
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
                <div className="gap-4 my-3">
                  <span className="font-bold text-light_green text-2xl">
                    0{feature.id}
                  </span>
                  <span>
                    <p className="text-xl text-dark_green font-bold mb-2">
                      {feature.title}
                    </p>
                    <p className="text-lg">{feature.description}</p>
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
      <section className="w-full mb-4 mt-16">
        <MaxWidthWrapper>
          <div className="w-full p-2">
            <div>
              <h3 className="text-4xl text-dark_green">Frequently Asked Questions</h3>
              <p className="text-lg my-3">Got Questions? We&apos;ve got answers, Explore our FAQs to learn more about Agob Synergy&apos;s inovative approach and multi-industry expertise.</p>
              <div className="relative w-full h-80 overflow-hidden">
                <Image src={"/FAQs.jpg"} alt="faqs" fill priority objectFit="cover" objectPosition="center" />
              </div>
            </div>
            <div>
              <FAQs />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* cta section */}
      <div className="w-full my-8 p-2 bg-light_green">
        <div className="w-full 2">
          <div className="w-[90%] h-96 relative">
            <Image
              src={"/workers.jpg"}
              alt="agob-logo"
              fill
              priority
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="w-[90%] h-96 relative -top-44 left-8">
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
        <div className="relative -top-40">
          <h1 className="text-5xl text-dark_green my-2">Join the Movement Towards Innovation.</h1>
          <p className="text-lg text-dark_green my-3">Partner with Agob Synergy and unlock transformative solutions tailored to your industry needs. Connect with us today to explore how we can shape a sustainable tomorrow.</p>
          <Link
            href="/contact"
            className="bg-dark_green w-3/5 h-14 text-lg text-light_green shadow-2xl shadow-light_green flex items-center justify-center uppercase"
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
