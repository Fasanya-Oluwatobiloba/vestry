import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/vestrylogo.svg";
import { AnimateOnScroll } from "./AnimateScroll";

const Footer: React.FC = () => {
  return (
    <><footer className="bg-gray-100 pt-12">
      <div className="container mx-auto xl:w-[90%] 2xl:w-[75%] px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8">
        <div>
          <AnimateOnScroll delay={0.2}>
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Vestry Logo"
                width={300}
                height={40}
                className="rounded-md mb-6" />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="flex :flex-row md:gap-12 gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase text-gray-600 mb-3">
                  Sitemap
                </h3>
                <ul className="space-y-2">
                  {["Home", "About", "Pricing", "Testimonials", "Contacts"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href={`/${item.toLowerCase()}`}
                          className="text-gray-600 hover:text-gray-900 text-sm"
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase text-gray-600 mb-3">
                  Resources
                </h3>
                <ul className="space-y-2">
                  {["Services", "Portfolio", "Resources", "Licensing"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href={`/${item.toLowerCase()}`}
                          className="text-gray-600 hover:text-gray-900 text-sm"
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase text-gray-600 mb-3">
                  Socials
                </h3>
                <ul className="space-y-2">
                  {["Instagram", "Facebook", "X"].map((item) => (
                    <li key={item}>
                      <Link
                        href={`https://${item.toLowerCase()}.com`}
                        className="text-gray-600 hover:text-gray-900 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item}
                      </Link>

                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </AnimateOnScroll>
        </div>
      </div>
      <div className="w-full md:w-auto">
        <AnimateOnScroll delay={0.2}>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Subscribe to be in touch with latest news.
          </h3>
        </AnimateOnScroll>
        <div className="flex items-center gap-2">
          <AnimateOnScroll delay={0.2}>
            <Input
              type="email"
              placeholder="Email address"
              className="w-full md:w-64 rounded-lg border-gray-300 focus:border-gray-500" />
            <Button variant="ghost" className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    <footer className="bg-gray-300 py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Vestry. All rights reserved.
      </footer>
    </footer>
    </>
  );
};

export default Footer;
