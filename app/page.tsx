"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa"

// embla imports
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { MaxWidthWrapper } from "@/components/ui/max-width";
import { features, services, testimonials } from "@/data/data";

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
          <Link href="" className="bg-light_green w-3/5 h-14 text-lg text-dark_green shadow-2xl shadow-light_green flex items-center justify-center">Get in Touch</Link>
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
                      <p className="text-right my-2">Agop-Agriculture</p>
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
                      <p className="text-right my-2">Agop-Electrician</p>
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
                      <p className="text-right my-2">Agop-Agriculture</p>
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
                      <p className="text-right my-2">Agop-Agriculture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about agob-synergy */}
      <section>
        <MaxWidthWrapper>
          <div className="w-full">
            <div className="p-2">
              <div className="">
                <p className="text-dark_green text-lg font-semibold">
                  Who we are
                </p>
                <h3 className="text-2xl font-semibold text-style">
                  About <span className="text-light_green">Agob-Synergy</span>
                </h3>
                <p className="my-3">
                  Innovating Across Industries, Empowering Sustainable Growth.
                </p>
              </div>
              <p className="text-lg">
                Agob Synergy is a dynamic multi-vendor enterprise committed to
                excellence across diverse sectors. With deep roots in real
                estate, agriculture, construction, electrical merchandising, and
                logistics, we harness innovative strategies and sustainable
                practices to drive transformative projects.
              </p>
              <p className="text-lg mb-2">
                Our integrated approach ensures that every initiative not only
                meets modern standards of quality and efficiency but also
                contributes to building resilient communities and fostering
                long-term prosperity...{" "}
              </p>
              <Link href="" className="bg-light_green w-3/5 h-14 text-lg text-dark_green shadow-2xl shadow-light_green flex items-center justify-center">Learn more &rarr;</Link>
            </div>
            <div className="w-full my-4">
              <div className="relative w-full h-96">
                <Image
                  src="/agro-4.jpg"
                  alt="farmers"
                  fill
                  priority
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* service section */}
      <section className="w-full">
        <div className="p-2">
          <p className="text-dark_green">What we do</p>
          <h1 className="text-style text-2xl font-semibold">Our <span className="text-light_green">Services</span></h1>
          <p className="my-3">Empowering Industries with Integrated, Innovative Solutions</p>
        </div>
        <MaxWidthWrapper>
          <div className="w-full px-2 ">
            {
              services?.map((service)=>(
                <div key={service.id} className="my-3 pb-6 bg-near_white rounded-md shadow-2xl shadow-light_green/40">
                  <div className="relative w-full h-64">
                    <Image src="/construction.jpg" alt="construction" fill priority objectFit="cover" objectPosition="center" />
                    <div className="overlay"></div>
                  </div>
                  <div className="px-2">
                    <h3 className="text-2xl my-3 text-dark_green">{service.title}</h3>
                    <p className="text-lg">{service.description}... <span><Link href={`/services/${service.id}`} className="text-dark_green font-semibold">Read more</Link></span> </p>
                  </div>
                  {/* <div className="w-full px-2 h-10 flex items-start">
                    <Link href={""} className="text-dark_green px-6 py-2 border border-solid border-light_green rounded-full">Read more</Link>
                  </div> */}
                </div>
              ))
            }
          </div>
        </MaxWidthWrapper>
      </section>
      {/* features section */}
      <section className="w-full mt-3">
        <div className="p-2">
          <p className="text-dark_green">Why choose <span className="text-light_green">Agob-synergy</span></p>
          <h1 className="text-style text-2xl font-semibold">Our <span className="text-light_green">Features</span></h1>
          <p className="my-3">Unifying Excellence Across Industries.</p>
        </div>
        <MaxWidthWrapper>
          <div className="w-full px-2">
            {
              features?.map((feature)=>(
                <div key={ feature.id } className="px-2 py-6 border-t border-solid border-light_green">
                  <div className="relative w-full h-52">
                    <Image src={`/${feature.image}`} alt={feature.image} fill priority objectFit="cover" objectPosition="center" />
                    <div className="overlay"></div>
                  </div>
                  <div className="gap-4 my-3">
                    <span className="font-bold text-light_green text-2xl">0{feature.id}</span>
                    <span>
                      <p className="text-xl text-dark_green font-bold mb-2">{feature.title}</p>
                      <p className="text-lg">{feature.description}</p>
                    </span>
                  </div>
                </div>
              ))
            }
          </div>
        </MaxWidthWrapper>
      </section>
      {/* testimonial section */}
      <section className="w-full">
        <div className="p-2">
          <p className="text-dark_green">Voice of<span className="text-light_green">Trust</span></p>
          <h1 className="text-style text-2xl font-semibold">What Our<span className="text-light_green">Clients</span> Are Saying</h1>
          <p className="my-3">Our clients and partners speak for us. Learn how our commitment to excellence and innovation has made a lasting impact across multiple sectors.</p>
        </div>
        <MaxWidthWrapper>
          <div className="w-full">
            {
              testimonials?.map((value)=>(
                <div key={value.id} className="w-full px-2 my-3 flex flex-col items-center justify-center">
                  <p className="text-center text-dark_green text-xl my-3">{value.company}</p>
                  <p className="text-center text-lg">{value.testimonial}</p>
                  <span className="flex flex-row items-center gap-2 mt-4 mb-2 text-light_green text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  <p className="text-center text-lg font-bold">{value.name}</p>
                  <p className="text-center text-lg font-semibold">{value.position}</p>
                </div>
              ))
            }
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default Agob;
