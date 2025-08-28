import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    <>
      <footer className='mt-5'>
      <div className="bg-[#11009E] pt-10 pb-6 clip-custom-up">
        <div className="container mx-auto px-5">
            <div className="flex flex-wrap gap-y-5">
                <div className="w-[100%] lg:w-[33.33%] px-3">
                    <div>
                        <Link href="/">
                            <Image className='border-b-[2px] border-[#fff] pb-3' src="/img/dw-logo-white.png" alt="logo" width={100} height={50} />
                        </Link>
                    </div>
                    {/* <div className='border-b-[1px] border-white'>
                        <p className="text-lg text-white mb-5 mt-10">
                            Digital Wolfs best Digital Marketing Company in Kolkata
                            assists you to make your business rank highest in google 
                            and make your brand recognizable.
                        </p>
                    </div> */}
                    <p className="text-white my-5 sm:my-5">Follow Us On</p>
                    <div className="flex items-center gap-3">
                        <div>
                            <Link href="https://www.facebook.com/digitalwolfindia" target='_b' className='text-[#fff]'>
                                <FacebookIcon fontSize='large'/>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://api.whatsapp.com/send?phone=917003659978" target='_b' className='text-[#fff]'>
                                <WhatsAppIcon fontSize='large'/>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.instagram.com/digital_wolf_india/" target='_b' className='text-[#fff]'>
                                <InstagramIcon fontSize='large'/>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://x.com/i/flow/login?redirect_after_login=%2FDigitalWolf12" target='_b' className='text-[#fff]'>
                                <XIcon fontSize='large'/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex lg:justify-center w-[100%] lg:w-[33.33%] px-3">
                    <div className="text-white flex flex-col gap-y-5">
                        <p className="text-[25px] border-b-[2px] border-[#fff] w-[140px]">Links</p>
                        <Link href='/about-us'>About Us</Link>
                        <Link href='/services'>Our Services</Link>
                        <Link href='/blogs'>Blog</Link>
                        <Link href='/term-condition'>Term & Condition</Link>
                        <Link href='/privacy-policy'>Privacy Policy</Link>
                        {/* <Link href='/refund-policy'>Refund Policy</Link> */}
                    </div>
                </div>
                <div className="w-[100%] lg:w-[33.33%] px-3">
                    <div className="text-white">
                        <div className="">
                            <p className='text-[25px] border-b-[2px] border-[#fff] w-[180px]'>Contact Us</p>
                        </div>
                        <div className="flex justify- items-start my-5 gap-3">
                            <MapPinIcon width={25}/>
                            <Link href="https://g.co/kgs/ahiUgZQ" className="">22/263, Jodhpur Park, Tagore Park Road, Kolkata, West Bengal 700045</Link>
                        </div>
                        <div className="flex justify-start items-center gap-3">
                            <PhoneIcon width={20}/>
                            <Link href='tel:+917003659978'>+91 7003659978</Link>
                        </div>
                        <div className="flex justify-start items-center my-5 gap-3">
                            <EnvelopeIcon width={20}/>
                            <Link href='mailto:marketing@digitalwolf.co.in'>marketing@digitalwolf.co.in</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" my-10">
                <Link className="girl" href="#">

                </Link>
            </div>
            <div className="border-t border-white pt-8">
                <p className='text-[17px] text-center text-white'>COPYRIGHTS © DIGITAL WOLF 2025 | ALL RIGHTS RESERVED</p>
            </div>
        </div>
    </div>
      </footer>
    </>
  )
}

export default Footer