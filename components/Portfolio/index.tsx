"use client"

import Image from "next/image"
import Link from "next/link"
import SectionHeader from "@/components/Common/SectionHeader"

type Website = {
  name: string
  url: string
  description?: string
}

type Category = {
  name: string
  subtitle: string
  description: string
  websites: Website[]
}

export default function Portfolio({
    categories,
    className
} : {
    categories: Category[];
    className?: string;
}) {
    return (
        <>
        {categories.map((category, index) => (
        <section key={index} className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            <div className="animate_top mx-auto text-center">
              <SectionHeader
                headerInfo={{
                  title: category.name,
                  subtitle: category.subtitle,
                  description: category.description,
                }}
              />
            </div>
          </div>

          <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
            <div className="absolute -bottom-15 -z-1 h-full w-full">
              <Image fill src="./images/shape/shape-dotted-light.svg" alt="Dotted" className="dark:hidden" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5">
              {category.websites.map((website, websiteIndex) => (
                <div
                  key={websiteIndex}
                  className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none"
                >
                  <div className="relative mb-7.5 aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                      src={`https://image.thum.io/get/width/600/crop/800/${website.url}`}
                      alt={`Screenshot of ${website.name}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">{website.name}</h4>
                  {website.description && (
                    <p className="mb-5 text-gray-500 dark:text-gray-400">{website.description}</p>
                  )}

                  <Link
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
                  >
                    <span className="duration-300 group-hover/btn:pr-2">Visit Website</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
        </>
    )
}