"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Our Pricing Plans`,
                subtitle: `Plans for all business sizes`,
                description: `Choose the perfect package for your business growth. All plans include ongoing support and maintenance.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
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
                ₹ 45,000
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Startup Package
              </h4>
              <p>Perfect for small businesses entering the digital space</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Custom 5-page website
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Basic SEO setup
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Social media integration
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Monthly performance report
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    5 hours monthly maintenance
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
                ₹ 95,000
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Growth Package
              </h4>
              <p>Ideal for established businesses seeking expansion</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Custom 10-page website
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Advanced SEO optimization
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    PPC campaign management
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Social media marketing
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    10 hours monthly maintenance
                  </li>
                </ul>
              </div>

              <button
                aria-label="Scale Now button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Scale Now
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
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                ₹ 1,95,000
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Enterprise Package
              </h4>
              <p>Comprehensive solution for large-scale operations</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Custom 20+ page website
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Full-scale SEO & content strategy
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Advanced analytics & reporting
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Multi-platform marketing
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    20 hours monthly maintenance
                  </li>
                </ul>
              </div>

              <button
                aria-label="Transform Your Business button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Transform Your Business
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
