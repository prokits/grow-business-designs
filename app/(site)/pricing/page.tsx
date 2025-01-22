import React from "react";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - GrowBusinessDesigns",
  description: "Our pricing plans are designed to help businesses of all sizes grow and succeed. Get started today!",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-10">
      <Pricing />
    </div>
  );
};

export default SupportPage;
