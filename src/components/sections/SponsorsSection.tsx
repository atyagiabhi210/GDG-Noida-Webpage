import React from "react";

// Import sponsor logos
import digitaloceanLogo from "@/assets/SponsorsSection/digitalocean.svg";
import githubLogo from "@/assets/SponsorsSection/GitHub_Logo 1.svg";
import dhiwiseLogo from "@/assets/SponsorsSection/dhiwise.svg";
import brevoLogo from "@/assets/SponsorsSection/brevo.svg";
import h2sLogo from "@/assets/SponsorsSection/H2S_Gradient_Logo 2.svg";
import tata1mgLogo from "@/assets/SponsorsSection/tata1mg.svg";
import orkesLogo from "@/assets/SponsorsSection/orkes.svg";
import coummudleLogo from "@/assets/SponsorsSection/coummudle.svg";
import thoughtworksLogo from "@/assets/SponsorsSection/thoughtworks.svg";
import sheroesLogo from "@/assets/SponsorsSection/sheroes.svg";
import kaggleLogo from "@/assets/SponsorsSection/kaggle.svg";
import gdgLogo from "@/assets/SponsorsSection/gdg.svg";
import styavaLogo from "@/assets/SponsorsSection/styava.svg";
import humalectLogo from "@/assets/SponsorsSection/humalect.svg";
import neo4jLogo from "@/assets/SponsorsSection/neo4j.svg";
import jetbrainsLogo from "@/assets/SponsorsSection/jetbrains.svg";
import redhatSponsorLogo from "@/assets/SponsorsSection/redhat.svg";

// Import industry expert logos
import googleLogo from "@/assets/IndustryExperts/google.svg";
import redhatLogo from "@/assets/IndustryExperts/redhat.svg";
import microsoftLogo from "@/assets/IndustryExperts/microsoft.svg";
import timeswapLogo from "@/assets/IndustryExperts/timeswap.svg";
import techMahindraLogo from "@/assets/IndustryExperts/tech-mahindra.svg";
import mahillaMoneyLogo from "@/assets/IndustryExperts/mahilla-money.svg";
import elasticLogo from "@/assets/IndustryExperts/elastic.svg";
import mLogo from "@/assets/IndustryExperts/m.svg";
import rightpointLogo from "@/assets/IndustryExperts/Rightpoint_red_black_RGB 2.svg";
import upstoxLogo from "@/assets/IndustryExperts/upstox-logo 2.svg";
import arcanaLogo from "@/assets/IndustryExperts/arcana.svg";
import mlhLogo from "@/assets/IndustryExperts/mlh.svg";
import bharatpeLogo from "@/assets/IndustryExperts/bharatpe.svg";
import adplistLogo from "@/assets/IndustryExperts/adplist.svg";
import appwriteLogo from "@/assets/IndustryExperts/appwrite.svg";
import accentureLogo from "@/assets/IndustryExperts/accenture.svg";
import zuddlLogo from "@/assets/IndustryExperts/zuddl.svg";
import zomatoLogo from "@/assets/IndustryExperts/zomato.svg";
import cervelloLogo from "@/assets/IndustryExperts/cervello.svg";
import reskillLogo from "@/assets/IndustryExperts/reskill.svg";
import decimalLogo from "@/assets/IndustryExperts/decimal.svg";
import publicissapientLogo from "@/assets/IndustryExperts/publicissapient.svg";
import byjuLogo from "@/assets/IndustryExperts/byju.svg";
import intuitLogo from "@/assets/IndustryExperts/intuit.svg";
import maerskLogo from "@/assets/IndustryExperts/800px-Maersk_Group_Logo 2.svg";
import kaggleIndustryLogo from "@/assets/IndustryExperts/Kaggle_logo 2.svg";
import kyndrylLogo from "@/assets/IndustryExperts/Kyndryl_logo 2.svg";
import tensorflowLogo from "@/assets/IndustryExperts/tensorflow_logo_icon_170598 2.svg";
import paytmLogo from "@/assets/IndustryExperts/2560px-Paytm_Logo_(standalone) 2.svg";
import nielsenLogo from "@/assets/IndustryExperts/nielsen.svg";

export const SponsorsSection = () => {
  const sponsors = [
    { name: "DigitalOcean", logo: digitaloceanLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "DhiWise", logo: dhiwiseLogo },
    { name: "Brevo", logo: brevoLogo },
    { name: "H2S", logo: h2sLogo },
    { name: "Tata1mg", logo: tata1mgLogo },
    { name: "Orkes", logo: orkesLogo },
    { name: "Coummudle", logo: coummudleLogo },
    { name: "ThoughtWorks", logo: thoughtworksLogo },
    { name: "Sheroes", logo: sheroesLogo },
    { name: "Kaggle", logo: kaggleLogo },
    { name: "Google for Developers", logo: gdgLogo },
    { name: "Styava", logo: styavaLogo },
    { name: "Humalect", logo: humalectLogo },
    { name: "Neo4j", logo: neo4jLogo },
    { name: "JetBrains", logo: jetbrainsLogo },
    { name: "Red Hat", logo: redhatSponsorLogo },
  ];

  const industryExperts = [
    { name: "Google", logo: googleLogo },
    { name: "Red Hat", logo: redhatLogo },
    { name: "Microsoft", logo: microsoftLogo },
    { name: "TimeSwap", logo: timeswapLogo },
    { name: "Tech Mahindra", logo: techMahindraLogo },
    { name: "Mahila Money", logo: mahillaMoneyLogo },
    { name: "Elastic", logo: elasticLogo },
    { name: "Nielsen", logo: mLogo },
    { name: "RightPoint", logo: rightpointLogo },
    { name: "Upstox", logo: upstoxLogo },
    { name: "Arcana", logo: arcanaLogo },
    { name: "MLH", logo: mlhLogo },
    { name: "BharatPe", logo: bharatpeLogo },
    { name: "ADPList", logo: adplistLogo },
    { name: "Appwrite", logo: appwriteLogo },
    { name: "Accenture", logo: accentureLogo },
    { name: "Zuddl", logo: zuddlLogo },
    { name: "Zomato", logo: zomatoLogo },
    { name: "Cervello", logo: cervelloLogo },
    { name: "Reskill", logo: reskillLogo },
    { name: "Decimal", logo: decimalLogo },
    { name: "Publicis Sapient", logo: publicissapientLogo },
    { name: "BYJU'S", logo: byjuLogo },
    { name: "Intuit", logo: intuitLogo },
    { name: "Maersk", logo: maerskLogo },
    { name: "Kaggle", logo: kaggleIndustryLogo },
    { name: "Kyndryl", logo: kyndrylLogo },
    { name: "TensorFlow", logo: tensorflowLogo },
    { name: "Paytm", logo: paytmLogo },
    { name: "Nielsen", logo: nielsenLogo },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Previous Sponsors */}
        <h3 className="text-center mb-16 font-sans font-normal text-[64px] leading-tight">
          <span className="text-gray-800">Our previous </span>
          <span className="font-medium text-[#4285f4]">Sponsors</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                className="max-w-full max-h-16 object-contain transition-all duration-300"
                alt={sponsor.name}
                src={sponsor.logo}
              />
            </div>
          ))}
        </div>

        {/* Industry Experts */}
        <h3 className="text-center mb-16 font-sans font-normal text-[64px] leading-tight">
          <span className="text-gray-800">Joined by </span>
          <span className="font-medium text-[#4285f4]">Industry Experts</span>
          <span className="text-gray-800"> from</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {industryExperts.map((expert, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                className="max-w-full max-h-16 object-contain transition-all duration-300"
                alt={expert.name}
                src={expert.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
