import type { Metadata } from "next"
import Portfolio from "@/components/Portfolio"

export const metadata: Metadata = {
    title: "Portfolio - GrowBusinessDesigns",
    description: "Explore our diverse collection of websites and digital solutions that we've created for clients across various industries. Each project showcases our commitment to excellence and innovation.",
}

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

const categories: Category[] = [
  {
    name: "Printing Solutions",
    subtitle: "Professional Printing Services",
    description: "Explore our portfolio of printing and machinery solutions.",
    websites: [
      {
        name: "AS New Print",
        url: "http://www.asnewprint.com.au/",
        description: "Quality printing services in Australia",
      },
      { name: "Mr Print", url: "http://www.mrprint.com/en/Home.aspx", description: "Professional printing solutions" },
      {
        name: "GJS Machinery",
        url: "http://www.gjsmachinery.com.au/index.asp",
        description: "Printing machinery specialists",
      },
      { name: "Fuji Xerox Australia", url: "http://www.fujixerox.com.au/", description: "Leading printing technology" },
      {
        name: "Rapid Machinery",
        url: "http://www.rapidmachinery.com.au/",
        description: "Fast and efficient machinery",
      },
      {
        name: "Whitehorse Machinery",
        url: "http://www.whitehorsemachinery.co.uk/",
        description: "UK-based machinery experts",
      },
    ],
  },
  {
    name: "Design Portfolio",
    subtitle: "Creative Design Solutions",
    description: "Showcase of our diverse design projects and creative works.",
    websites: [
      { name: "PQ LEDs", url: "http://www.pqleds.com/", description: "LED lighting design" },
      { name: "Real Tech Nirman", url: "http://realtechnirman.com/", description: "Technical design solutions" },
      { name: "Mark Motors Thailand", url: "http://markmotorsthailand.com/", description: "Automotive design" },
      { name: "PT Corporate Gifts", url: "http://www.ptcorporategifts.com.sg/", description: "Corporate gift design" },
      { name: "Cogfree", url: "http://cogfree.com/", description: "Innovative designs" },
      { name: "Kemaico", url: "http://www.kemaico.com/", description: "Industrial design solutions" },
      // Add more design websites...
    ],
  },
  {
    name: "Education & Tutoring",
    subtitle: "Learning Solutions",
    description: "Educational institutions and tutoring services in our portfolio.",
    websites: [
      { name: "University of Victoria", url: "http://www.uvic.ca/", description: "Higher education institution" },
      {
        name: "Illawarra Home Tuition",
        url: "http://www.illawarrahometuition.com.au/",
        description: "Personal tutoring services",
      },
      {
        name: "Progressive Home Tutors",
        url: "http://www.progressivehometutors.com.au/",
        description: "Professional tutoring",
      },
      { name: "Royal Roads University", url: "http://www.royalroads.ca/", description: "Quality education" },
    ],
  },
  // Add more categories...
]

const PortfolioPage = () => {
  return (
    <div className="pb-20 pt-20">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <div className="mb-8">
            <h1 className="mb-4 mt-10 text-4xl font-bold text-black dark:text-white md:text-5xl">
              Our Portfolio
            </h1>
            <p className="mx-auto max-w-[800px] text-lg text-gray-600 dark:text-gray-400">
              Explore our diverse collection of websites and digital solutions that we've created for clients across various industries. Each project showcases our commitment to excellence and innovation.
            </p>
          </div>
        </div>

        <Portfolio categories={categories} />
      </div>
    </div>
  )
}

export default PortfolioPage

