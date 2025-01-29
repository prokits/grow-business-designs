"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Digital Marketing & SEO Pricing Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Digital Marketing & SEO`,
                subtitle: `Marketing Solutions`,
                description: `Boost your online presence and reach with our comprehensive digital marketing and SEO packages.`,
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $ 299
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Basic SEO Package
              </h4>
              <p>Essential SEO services for small businesses</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Keyword Research & Analysis
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    On-Page SEO Optimization
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Local SEO Setup
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Monthly Performance Reports
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Basic Content Strategy
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get Started button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get Started
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $ 599
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Pro Marketing Bundle
              </h4>
              <p>Complete digital marketing solution</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Advanced SEO Package
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Social Media Management
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    PPC Campaign Management
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Content Marketing
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Email Marketing Campaigns
                  </li>
                </ul>
              </div>

              <button
                aria-label="Scale Now button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <Link href="https://paypal.com/sendMoney?receiver=growbusinessdesigns@gmail.com" className="duration-300 group-hover/btn:pr-2">
                 Pay Now
                </Link>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $ 1299
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Enterprise Marketing
              </h4>
              <p>Full-scale marketing for large businesses</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Custom Marketing Strategy
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Multi-Platform Campaigns
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Advanced Analytics Suite
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Dedicated Marketing Team
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    ROI-Focused Reporting
                  </li>
                </ul>
              </div>

              <button
                aria-label="Transform Your Business button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <Link href="https://paypal.com/sendMoney?receiver=growbusinessdesigns@gmail.com" className="duration-300 group-hover/btn:pr-2">
                  Pay Now
                </Link>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Digital Marketing & SEO Pricing End ===== --> */}

      {/* <!-- ===== Web & App Development Pricing Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Web & App Development`,
                subtitle: `Development Solutions`,
                description: `Custom web and mobile app development solutions to bring your digital vision to life.`,
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $ 999
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Basic Website Package
              </h4>
              <p>Professional website for small businesses</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    5-Page Custom Website
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Mobile Responsive Design
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Contact Form Integration
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Basic SEO Setup
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    3 Months Support
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get Started button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <Link href="https://paypal.com/sendMoney?receiver=growbusinessdesigns@gmail.com" className="duration-300 group-hover/btn:pr-2">
                  Pay Now
                </Link>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $ 2499
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                E-Commerce Package
              </h4>
              <p>Complete online store solution</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Full E-Commerce Website
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Payment Gateway Integration
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Inventory Management
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Order Management System
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Customer Account Portal
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Product Reviews & Ratings
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    SEO Optimization
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Mobile Responsive Design
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get Started button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get Started
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
