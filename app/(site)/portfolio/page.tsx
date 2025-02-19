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
      {
        name: "KCL",
        url: "https://www.kcl.co.in/",
        description: "Paper printing and packaging industry",
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
      { name: "Druk Trips", url: "http://www.druktrips.com/", description: "Travel design solutions" },
      { name: "First Steps Soccer", url: "http://www.firststepssoccer.com/", description: "Sports design" },
      { name: "RX Bar", url: "http://www.rxbar.com/", description: "Food packaging design" },
      { name: "Sunday Morning Designs", url: "http://sundaymorningdesigns.com/", description: "Lifestyle design" },
      { name: "Zu Design", url: "http://www.zudesign.com.au/", description: "Australian design studio" },
      { name: "Mondo Floral Designs", url: "http://www.mondofloraldesigns.com.au/", description: "Floral design specialists" },
      { name: "Calypso Designs", url: "http://calypsodesigns.com.au/", description: "Creative design solutions" },
      { name: "Ando Design", url: "http://www.andodesign.com.au/", description: "Professional design services" },
      { name: "Grand Designs Live", url: "http://www.granddesignslive.com.au/", description: "Design exhibitions" },
      { name: "Imaginarium Designs", url: "http://www.imaginariumdesigns.com.au/", description: "Imaginative design concepts" },
      { name: "Walker Designs", url: "http://walkerdesigns.com.au/", description: "Professional design studio" },
      { name: "Koolaman Designs", url: "http://www.koolamandesigns.com.au/", description: "Unique design solutions" },
      { name: "Dinosaur Designs", url: "http://dinosaurdesigns.com.au/", description: "Distinctive design style" },
      { name: "Benudbeharidutt Legacy", url: "http://benudbehariduttlegacy.com/", description: "Heritage design" },
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
  {
    name: "Travel Services",
    subtitle: "Explore the World",
    description: "Travel services and tourism information resources.",
    websites: [
      { name: "Busabout", url: "http://www.busabout.com/", description: "Hop-on hop-off bus tours" },
      { name: "The Aussie Nomad", url: "http://www.theaussienomad.com/", description: "Travel blog and resources" },
      { name: "Fodors", url: "http://www.fodors.com/", description: "Travel guides and information" },
      { name: "Interrail", url: "http://www.interrail.eu/", description: "European rail travel" },
      { name: "Smart Traveller", url: "http://www.smartraveller.gov.au/", description: "Travel advisories and safety" },
      { name: "Rail Europe India", url: "http://www.raileurope.co.in/", description: "European train tickets" },
      { name: "Exodus Travels", url: "http://www.exodus.co.uk", description: "Adventure travel specialists" },
      { name: "The Man in Seat 61", url: "http://www.seat61.com/", description: "Train travel expertise" },
      { name: "AEGEE", url: "http://www.aegee.org/", description: "European student travel" },
    ],
  },
  {
    name: "Photography",
    subtitle: "Capturing Moments",
    description: "Professional photography services and resources.",
    websites: [
      { name: "Melanie Kellermann Photography", url: "http://melaniekellermannphotography.com.au/", description: "Professional photographer" },
      { name: "TAFE NSW Illawarra", url: "http://www.illawarra.tafensw.edu.au/", description: "Photography education" },
      { name: "Service Seeking", url: "http://www.serviceseeking.com.au/", description: "Find photographers" },
      { name: "Dreamlife", url: "http://dreamlife.net.au/", description: "Wedding photography" },
      { name: "Warren Keelan Photography", url: "http://www.warrenkeelanphotography.com.au/", description: "Fine art photography" },
      { name: "Australian Photography", url: "http://www.australianphotography.com/", description: "Photography magazine" },
      { name: "Peter Grant Photography", url: "http://petergrantphotography.net/", description: "Professional photography services" },
    ],
  },
  {
    name: "Painting Services",
    subtitle: "Professional Painting",
    description: "House painting and professional painting services.",
    websites: [
      { name: "House Painters Wollongong", url: "http://www.housepainterswollongong.com/", description: "Local painting services" },
      { name: "Home Improvement Pages", url: "http://www.homeimprovementpages.com.au/", description: "Find painters and contractors" },
      { name: "Illawarra House Painter", url: "http://www.illawarrahousepainter.com/", description: "Regional painting experts" },
      { name: "ElChaars", url: "http://www.elchaars.com.au/", description: "Quality painting services" },
      { name: "Ben Bayliss Painting", url: "http://www.benbaylisspainting.com/", description: "Professional painter" },
      { name: "Licensed Trades", url: "http://www.licensedtrades.com.au/", description: "Find qualified painters" },
      { name: "Cutting Edge NSW", url: "http://cuttingedgensw.com.au/", description: "Premium painting services" },
      { name: "Dulux Accredited", url: "http://www.duluxaccredited.com.au/", description: "Certified painting professionals" },
      { name: "Service.com.au", url: "http://www.service.com.au/", description: "Service provider directory" },
      { name: "GetQuote", url: "http://www.getquote.com.au/", description: "Painting quotes and estimates" },
    ],
  },
  {
    name: "Home Decor",
    subtitle: "Interior Design",
    description: "Home decoration and interior design services.",
    websites: [
      { name: "Mango Trees", url: "http://www.mangotrees.com.au/", description: "Home decor retailer" },
      { name: "Macbog", url: "http://macbog.com/", description: "Unique home accessories" },
      { name: "Vicky Sun", url: "http://www.vickysun.com/", description: "Designer homewares" },
      { name: "Home One", url: "http://www.homeone.com.au/", description: "Home improvement community" },
      { name: "Inside Out Colour and Design", url: "http://www.insideoutcolouranddesign.com.au/", description: "Interior design services" },
      { name: "French Knot", url: "http://www.frenchknot.com.au/", description: "Textile homewares" },
      { name: "Papaya", url: "http://www.papaya.com.au/", description: "Luxury homewares" },
      { name: "Home Biz", url: "http://homebiz.com/", description: "Home business resources" },
    ],
  },
  {
    name: "Real Estate",
    subtitle: "Property Solutions",
    description: "Real estate agencies and property services.",
    websites: [
      { name: "MyRP", url: "http://www.myrp.com.au/", description: "Property reports" },
      { name: "First National", url: "http://www.firstnational.com.au/", description: "Real estate agency" },
      { name: "Sotheby's Realty", url: "http://www.sothebysrealty.com/", description: "Luxury properties" },
      { name: "Property Observer", url: "http://www.propertyobserver.com.au/", description: "Property news and information" },
      { name: "Real Estate Fees", url: "http://www.realestatefees.com.au/", description: "Fee comparison service" },
      { name: "REIACT", url: "http://www.reiact.com.au/", description: "Real estate institute" },
      { name: "Professionals", url: "http://www.professionals.com.au/", description: "Real estate network" },
      { name: "McGrath", url: "http://www.mcgrath.com.au/", description: "Premium real estate agent" },
      { name: "Cite Group", url: "https://www.citegroup.com.au/", description: "Real estate development" },
      { name: "iBuildNew", url: "https://www.ibuildnew.com.au/", description: "New home building platform" },
      { name: "D7 Lead Finder", url: "https://d7leadfinder.com/", description: "Real estate lead generation" },
      { name: "Bill Bergia", url: "https://www.billbergia.com.au/", description: "Property developer" },
      { name: "Level 33", url: "https://level33.com.au/", description: "Real estate services" },
      { name: "Legacy Property", url: "https://legacyproperty.com.au/", description: "Property development" },
      { name: "Grihashakti", url: "https://www.grihashakti.com/", description: "Home financing" },
      { name: "Square Yards", url: "https://www.squareyards.com/", description: "Real estate platform" },
      { name: "NexGen Realty", url: "https://nexgenrealty.in/", description: "Modern real estate agency" },
      { name: "PropTech Buzz", url: "https://www.proptechbuzz.com/", description: "Property technology news" },
      { name: "Propacity", url: "https://propacity.com/", description: "Real estate solutions" },
      { name: "Prologis", url: "https://www.prologis.com/", description: "Logistics real estate" },
      { name: "The Timbers Jupiter", url: "https://www.timbersjupiter.com/", description: "Luxury properties" },
      { name: "ONE Sotheby's", url: "https://www.onesothebysrealty.com/", description: "Premium real estate" },
      { name: "Boyer Company", url: "https://www.boyercompany.com/", description: "Real estate developer" },
      { name: "DC Real Estate NWA", url: "https://dcrealestatenwa.com/", description: "Regional real estate" },
      { name: "Kajima USA", url: "https://kajimausa.com/", description: "Property development" },
      { name: "Easy Leadz", url: "https://www.easyleadz.com/", description: "Lead generation for real estate" },
    ],
  },
  {
    name: "Machinery & Equipment",
    subtitle: "Industrial Solutions",
    description: "Farm machinery, industrial equipment, and related services.",
    websites: [
      { name: "Hitachi Construction Machinery", url: "http://www.hitachi-c-m.com/au/", description: "Construction equipment" },
      { name: "Car Sales", url: "http://www.carsales.com.au/", description: "Vehicle marketplace" },
      { name: "Phillips Farm Machinery", url: "http://www.phillipsfm.com.au/", description: "Agricultural equipment" },
      { name: "Hitachi Careers", url: "http://www.hitachicareers.com.au/", description: "Industry employment" },
      { name: "Price Farm Machinery", url: "http://www.pricefarmmachinery.com.au/", description: "Farm equipment specialists" },
      { name: "Greg Allan Farm Machinery", url: "http://www.gregallanfarmmachinery.com.au/", description: "Agricultural machinery" },
      { name: "Machines4U", url: "http://www.machines4u.com.au/", description: "Machinery marketplace" },
      { name: "Prime Industrial Supplies", url: "http://www.primeindustrialsupplies.com.au/", description: "Industrial equipment" },
      { name: "Spareco", url: "http://www.spareco.com.au/", description: "Spare parts and equipment" },
      { name: "Perkins Machinery", url: "http://www.perkinsmachinery.com.au/", description: "Specialized machinery" },
      { name: "Lockyer Farm Machinery", url: "http://www.lockyerfarmmachinery.com.au/", description: "Farm equipment" },
      { name: "Specialised Farm Machinery", url: "http://www.specialisedfarmmachinery.com.au/", description: "Niche agricultural equipment" },
    ],
  },
  {
    name: "Beauty Products",
    subtitle: "Personal Care",
    description: "Beauty care products and services.",
    websites: [
      { name: "Buckley & Phillips", url: "http://www.buckleyandphillips.com/", description: "Beauty and fragrance products" },
    ],
  },
  {
    name: "Software Development",
    subtitle: "Digital Solutions",
    description: "Software development and IT services.",
    websites: [
      { name: "Netable", url: "http://www.netable.com.au/", description: "Web development services" },
      { name: "Digital Tsunami", url: "http://www.digital-tsunami.com/", description: "Digital transformation services" },
    ],
  },
  {
    name: "WordPress Websites",
    subtitle: "CMS Solutions",
    description: "WordPress development and design portfolio.",
    websites: [
      { name: "Centro Universitario", url: "http://www.centrouniversitario.it/", description: "Educational institution website" },
      { name: "The Gold King", url: "http://www.thegoldking.com.au/", description: "Gold investment website" },
      { name: "iSecure VAP", url: "http://www.isecurevap.com/", description: "Security solutions" },
      { name: "Adelaide Martial Arts Academy", url: "http://www.adelaidemartialartsacademy.com.au", description: "Martial arts school" },
      { name: "Sign Time", url: "http://signtime.co.nz/", description: "Signage business" },
      { name: "Peter Grant Photography", url: "http://petergrantphotography.net/", description: "Photography portfolio" },
      { name: "Voltamp", url: "http://voltamp.in/", description: "Electrical solutions" },
      { name: "Etchells", url: "http://etchells.com.au/", description: "Business website" },
      { name: "3D Team", url: "http://www.3dteam.com.au", description: "3D design services" },
      { name: "Globat", url: "https://www.globat.com/", description: "Web hosting" },
      { name: "3D Rendering India", url: "http://www.3drenderingindia.net/", description: "3D visualization services" },
      { name: "Shenanigans Music", url: "http://shenanigansmusic.com/", description: "Music business website" },
      { name: "Yogi Ji's", url: "http://www.yogijis.co.nz/", description: "Yoga studio website" },
      { name: "Voltamp Org", url: "http://www.voltamp.org/", description: "Electrical organization" },
    ],
  },
  {
    name: "Magento E-Commerce",
    subtitle: "Online Stores",
    description: "Magento-powered e-commerce websites.",
    websites: [
      { name: "Reve Boutique", url: "https://www.reveboutique.com/", description: "Fashion boutique" },
      { name: "Graham and Green", url: "http://www.grahamandgreen.co.uk/", description: "Home furnishings" },
      { name: "Maples Publications", url: "http://maplespublications.com/", description: "Publishing company" },
      { name: "Folk Clothing", url: "http://www.folkclothing.com/", description: "Contemporary clothing" },
      { name: "Home Style Direct", url: "https://www.homestyledirect.com/", description: "Home decor online store" },
    ],
  },
  {
    name: "E-Commerce Websites",
    subtitle: "Online Retail",
    description: "Various e-commerce platforms and online stores.",
    websites: [
      { name: "Sareeka", url: "http://www.sareeka.com/", description: "Indian ethnic wear" },
      { name: "LAX Gadgets", url: "http://www.laxgadgets.com/", description: "Electronics and gadgets" },
    ],
  },
  {
    name: "Industrial Services",
    subtitle: "Manufacturing & Production",
    description: "Industrial manufacturing and production services.",
    websites: [
      { name: "K+S", url: "https://www.kpluss.com/", description: "Fertilizer production" },
      { name: "Tata Steel UK", url: "https://www.tatasteeluk.com/", description: "Packaging and polymer-coated steel" },
      { name: "Tata Communications", url: "https://www.tatacommunications.com/", description: "Telecom services" },
      { name: "Yokogawa", url: "https://www.yokogawa.com/", description: "Energy and supply chain solutions" },
      { name: "Ruchi Infrastructure", url: "http://www.ruchiinfrastructure.com/home.htm", description: "Infrastructure services" },
    ],
  },
  {
    name: "Life Sciences",
    subtitle: "Healthcare Solutions",
    description: "Life sciences and healthcare services.",
    websites: [
      { name: "Dr. H.L.S.L.", url: "https://drhlsl.com/", description: "Life sciences organization" },
    ],
  },
  {
    name: "Fencing Contractors",
    subtitle: "Fencing Solutions",
    description: "Professional fencing services and contractors.",
    websites: [
      { name: "Fencing USA", url: "https://www.fencing-usa.com/", description: "National fencing contractor" },
      { name: "All-Rite Fence", url: "https://allritefence.com/", description: "Quality fencing solutions" },
      { name: "All Fence Contractors", url: "https://www.allfencecontractors.com/", description: "Comprehensive fencing services" },
      { name: "The American Fence Company", url: "https://theamericanfencecompany.com/", description: "Traditional fencing" },
      { name: "Smith Fence", url: "https://smithfence.com/", description: "Commercial and residential fencing" },
      { name: "Fence Builders USA", url: "https://fencebuildersusa.com/", description: "Custom fence construction" },
      { name: "Houzz", url: "https://www.houzz.com/", description: "Find fence contractors and inspiration" },
      { name: "Discount Fence USA", url: "https://discountfenceusa.com/", description: "Affordable fencing options" },
      { name: "Kowboy Fence", url: "https://www.kowboyfence.com/", description: "Durable fence installation" },
      { name: "All Island Fence", url: "https://allislandfence.com/", description: "Island-wide fencing services" },
      { name: "Anchor Fence Contractors", url: "https://www.anchorfencecontractors.com/", description: "Reliable fencing installation" },
      { name: "Gate Solutions", url: "https://www.gatesolutions.com/", description: "Gates and fencing systems" },
    ],
  },
  {
    name: "Food & Restaurants",
    subtitle: "Culinary Experiences",
    description: "Restaurants and food service websites.",
    websites: [
      { name: "Junoon NYC", url: "https://www.junoonnyc.com/", description: "Fine dining restaurant in New York" },
    ],
  },
];

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

