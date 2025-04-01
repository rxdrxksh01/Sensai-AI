"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    const imageref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if (imageref.current) {
                if (scrollPosition > scrollThreshold) {
                    imageref.current.classList.add("scrolled");
                } else {
                    imageref.current.classList.remove("scrolled");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return ( // ✅ Added return statement
      <section className="w-full pt-36 md:pt-48 pb-">
        <div className="space-y-6 text-center">
          <div className="space-y-6 mx-auto">
            <h1 className="gradient-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold ">
              Your AI Career Coach for <br /> Professional Success 
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="/dashboard">
              <Button size="lg" className="px-8 animate-custom-bounce" variant="outline">Get Started</Button>
            </Link>
          </div>
          <div className="hero-image-wrapper mt-5 md:mt-0">
            <div ref={imageref} className="hero-image">
                <Image
                  src="/banner.jpeg"
                  width={1280}
                  height={720}
                  alt="Dashboard Preview"
                  className="rounded-lg shadow-2xl border mx-auto"
                  priority
                />
            </div>
          </div>
        </div>
      </section>
    );
};

export default HeroSection;
