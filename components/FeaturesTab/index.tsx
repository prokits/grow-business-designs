"use client";
import Image from "next/image";
import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";

import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <section className="relative pb-20 pt-18.5 lg:pb-22.5">
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <motion.div
          className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
        >
          <div
            onClick={() => setCurrentTab("tabOne")}
            className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${currentTab === "tabOne" ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary" : ""
              }`}
          >
            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
              <p className="text-metatitle3 font-medium text-black dark:text-white">01</p>
            </div>
            <div className="md:w-3/5 lg:w-auto">
              <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                Web Design
              </button>
            </div>
          </div>
          <div
            onClick={() => setCurrentTab("tabTwo")}
            className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${currentTab === "tabTwo" ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary" : ""
              }`}
          >
            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
              <p className="text-metatitle3 font-medium text-black dark:text-white">02</p>
            </div>
            <div className="md:w-3/5 lg:w-auto">
              <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                Digital Marketing
              </button>
            </div>
          </div>
          <div
            onClick={() => setCurrentTab("tabThree")}
            className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${currentTab === "tabThree" ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary" : ""
              }`}
          >
            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
              <p className="text-metatitle3 font-medium text-black dark:text-white">03</p>
            </div>
            <div className="md:w-3/5 lg:w-auto">
              <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                App Development
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="animate_top mx-auto max-w-c-1154"
        >
          {featuresTabData.map((feature, key) => (
            <div
              className={feature.id === currentTab ? "block" : "hidden"}
              key={key}
            >
              <FeaturesTabItem featureTab={feature} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesTab;
