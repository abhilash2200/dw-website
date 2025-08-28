"use client";

import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  ClipboardDocumentListIcon,
  CursorArrowRaysIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  PresentationChartBarIcon,
  VideoCameraIcon,
  XMarkIcon,
  CogIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import products2 from "../data/headerServiceList";

const products = [
  {
    name: "Digital Marketing",
    description: "Get a better understanding of your traffic",
    href: "/digital-marketing-services",
    icon: ChartPieIcon,
  },
  {
    name: "SEO Services",
    description: "Speak directly to your customers",
    href: "/seo-service",
    icon: PresentationChartBarIcon,
  },
  {
    name: "SMO Services",
    description: "Your customers data will be safe and secure",
    href: "/social-media-marketing-agency",
    icon: VideoCameraIcon,
  },
  {
    name: "Website Development",
    description: "Connect with third-party tools",
    href: "/website-development-company",
    icon: CodeBracketIcon,
  },
  {
    name: "PPC Marketing",
    description: "Build strategic funnels that will convert",
    href: "/ppc-ad-agency",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Mobile App Development",
    description: "Build strategic funnels that will convert",
    href: "/mobile-app-development-company",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Logo & Graphic Design",
    description: "Build strategic funnels that will convert",
    href: "/graphic-design-agency",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Facebook Ad Services",
    description: "Build strategic funnels that will convert",
    href: "/facebook-ads-agency",
    icon: FacebookOutlinedIcon,
  },
  {
    name: "Content Writing Services",
    description: "Build strategic funnels that will convert",
    href: "/content-writing-service",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Software Development",
    description: "Build strategic funnels that will convert",
    href: "/software-development-company",
    icon: CommandLineIcon,
  },
  {
    name: "Bulk Message Services",
    description: "Build strategic funnels that will convert",
    href: "/bulk-message-service-provider",
    icon: ChatBubbleLeftRightIcon,
  },
];
const callsToAction = [
  {
    name: "Mail Us",
    href: "mailto:marketing@digitalwolf.co.in",
    icon: EnvelopeIcon,
  },
  { name: "Contact Us", href: "tel:+918250054478", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverOpen2, setPopoverOpen2] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState("hidden");

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? "hidden" : index);
  };

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setStickyHeader(window.scrollY > headerRef.current.offsetTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`bg-transparent w-[100%] ${stickyHeader ? "sticky" : ""}`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt=""
              src="/img/dw-logo.png"
              className="h-auto w-12 lg:w-20"
              width={60}
              height={50}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900 py-5"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-sm font-semibold leading-6 text-gray-900 py-5"
          >
            About Us
          </Link>
          <Popover
            className="relative"
            onMouseEnter={() => setPopoverOpen(true)}
            onMouseLeave={() => setPopoverOpen(false)}
          >
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 group py-5">
              Services
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel
              static
              className={`absolute -left-[20rem] top-full z-[99] w-[50rem] max-w-[50rem] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-opacity duration-300 ${
                popoverOpen ? "block" : "hidden pointer-events-none"
              }`}
            >
              <div className="p-4 grid grid-cols-2">
                {products.map((item, i) => (
                  <div
                    key={i}
                    className="group relative flex items-center gap-x-6 rounded-lg px-4 py-3 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        onClick={() => setPopoverOpen(false)}
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* <Popover
            className="relative"
            onMouseEnter={() => setPopoverOpen2(true)}
            onMouseLeave={() => setPopoverOpen2(false)}
          >
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 group py-5">
              Services
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel
              static
              className={`absolute -left-[10rem] top-full z-[99] w-[25rem] max-w-[25rem] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-opacity duration-300 ${popoverOpen2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <div className="p-4 grid grid-cols-1">
                {products2.map((item,index) => (
                  <div key={item.href}>
                    <div
                      className="group relative flex items-center gap-x-6 rounded-lg px-4 py-3 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <Link onClick={()=>setPopoverOpen(false)} href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                      <div>
                        <Button onClick={() => toggleDropdown(index)} className='bg-slate-100 text-[15px] min-w-[50px]'>
                          <span className={` transition-all duration-300 ease-in-out ${openDropdownIndex === index ? 'rotate-45' : ' rotate-0'}`}><AddIcon fontSize='small'/></span>
                        </Button>
                      </div>
                    </div>
                    {
                      <div className={`overflow-hidden transition-all duration-[.38s] px-6  ${openDropdownIndex === index ? "max-h-[500px]" : "max-h-0"}`}>
                          {
                            item.dropItem.map((item,i) => (
                              <div key={i} className='py-1 border-b border-slate-200 [&:nth-last-child(-n+1)]:border-0'>
                                <Link
                                  href={item.href}
                                  className="py-2 px-3 w-full block hover:bg-[#f7f7f7] rounded-md text-[14px]"
                                >
                                  {item.name}
                                </Link>
                              </div>
                            ))
                          }
                      </div>
                    }
                  </div>
                ))}
                <div
                    className="group relative flex items-center gap-x-6 rounded-lg px-4 py-3 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <ClipboardDocumentListIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link href='#' className="block font-semibold text-gray-900">
                        Content Creation
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item,i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover> */}

          <Link
            href="/events"
            className="text-sm font-semibold leading-6 text-gray-900 py-5"
          >
            Happy To Share
          </Link>
          <Link
            href="/blogs"
            className="text-sm font-semibold leading-6 text-gray-900 py-5"
          >
            Blog
          </Link>
          <Link
            href="/contact-us"
            className="text-sm font-semibold leading-6 text-gray-900 py-5"
          >
            Contact Us
          </Link>
        </PopoverGroup>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-[99]" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[1000] w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="/img/dw-logo.png"
                className="h-auto w-12 lg:w-20"
                width={80}
                height={50}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-0 py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/"
                  className="-mx-2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/about-us"
                  className="-mx-2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                {/* <Disclosure as="div" className="-mx-2">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products2.map((item,index) => (
                      <div key={item.href}>
                        <div className='flex justify-between items-center'>
                          <Link
                            
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg py-2 pl-4 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                          <Button onClick={() => toggleDropdown(index)} className='bg-slate-100 text-[15px] min-w-[50px]'>
                            <span className={` transition-all duration-300 ease-in-out ${openDropdownIndex === index ? 'rotate-45' : ' rotate-0'}`}><AddIcon fontSize='small'/></span>
                          </Button>
                        </div>
                        {
                          <div className={`overflow-hidden transition-all duration-[.38s] px-3  ${openDropdownIndex === index ? "max-h-[500px]" : "max-h-0"}`}>
                              {
                                item.dropItem.map((item,i) => (
                                  <div key={i} className='py-1 border-b border-slate-200 [&:nth-last-child(-n+1)]:border-0'>
                                    <Link
                                      href={item.href}
                                      className="py-2 px-3 w-full block hover:bg-[#f7f7f7] rounded-md text-[14px]"
                                    >
                                      {item.name}
                                    </Link>
                                  </div>
                                ))
                              }
                          </div>
                        }
                      </div>
                    ))}
                  </DisclosurePanel>
                </Disclosure> */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/events"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Happy To Share
                </Link>
                <Link
                  href="/blogs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blogs
                </Link>
                <Link
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
