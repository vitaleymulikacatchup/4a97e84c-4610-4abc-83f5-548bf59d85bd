"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Car, DollarSign, Handshake, MessageCircle, Shield, ShieldCheck, Star, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Inventory", id: "product" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AutoDeal"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Find Your Perfect Car Today"
          description="Browse our premium selection of quality vehicles with competitive financing and expert service"
          tag="Trusted Dealer"
          tagIcon={Car}
          buttons={[
            { text: "Browse Inventory", href: "product" },
            { text: "Get Financing", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Premium car showroom with luxury vehicles"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We connect you with quality vehicles from trusted dealers nationwide, making car buying simple, transparent, and stress-free"
          buttons={[
            { text: "Learn More", href: "about" },
            { text: "View Inventory", href: "product" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Why Choose AutoDeal"
          description="Experience the difference with our comprehensive car buying services"
          tag="Services"
          tagIcon={Shield}
          features={[
            {
              title: "Quality Guarantee",
              description: "Every vehicle undergoes rigorous inspection and comes with our quality guarantee",
              icon: ShieldCheck
            },
            {
              title: "Best Prices",
              description: "Competitive pricing with no hidden fees and transparent negotiations",
              icon: DollarSign
            },
            {
              title: "Expert Service",
              description: "Our experienced team guides you through every step of the buying process",
              icon: Users
            },
            {
              title: "Fast Financing",
              description: "Quick approval process with flexible financing options for all credit types",
              icon: Zap
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Vehicles"
          description="Explore our handpicked selection of premium cars"
          tag="Inventory"
          tagIcon={Car}
          products={[
            {
              id: "1",
              name: "2023 BMW 330i Sedan",
              price: "$42,900",
              imageSrc: "https://images.pexels.com/photos/100650/pexels-photo-100650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "2023 BMW 330i luxury sedan"
            },
            {
              id: "2",
              name: "2022 Audi Q5 Premium",
              price: "$38,500",
              imageSrc: "https://images.pexels.com/photos/1005632/pexels-photo-1005632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "2022 Audi Q5 premium SUV"
            },
            {
              id: "3",
              name: "2024 Porsche 911 Carrera",
              price: "$115,200",
              imageSrc: "https://images.pexels.com/photos/7925480/pexels-photo-7925480.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "2024 Porsche 911 sports car"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real experiences from satisfied car buyers"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Michael Rodriguez",
              role: "Business Owner",
              testimonial: "Outstanding service from start to finish. The team helped me find the perfect SUV for my family and made the financing process incredibly smooth.",
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Rodriguez portrait"
            },
            {
              id: "2",
              name: "Sarah Johnson",
              role: "Marketing Director",
              testimonial: "Best car buying experience I have ever had. Transparent pricing, no pressure tactics, and they delivered exactly what they promised.",
              imageSrc: "https://images.pexels.com/photos/7648239/pexels-photo-7648239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "3",
              name: "David Chen",
              role: "Software Engineer",
              testimonial: "Found my dream car at an unbeatable price. The quality inspection gave me complete confidence in my purchase.",
              imageSrc: "https://images.pexels.com/photos/11683965/pexels-photo-11683965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Chen portrait"
            },
            {
              id: "4",
              name: "Emma Williams",
              role: "Teacher",
              testimonial: "The financing options were perfect for my budget. Professional service and genuine care for customers made all the difference.",
              imageSrc: "https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Williams portrait"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Authorized Dealer"
          description="Partnered with leading automotive brands"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/12522419/pexels-photo-12522419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/17357680/pexels-photo-17357680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18234127/pexels-photo-18234127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/104372/pexels-photo-104372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18234150/pexels-photo-18234150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={MessageCircle}
          title="Ready to Find Your Next Car?"
          description="Contact us today for personalized assistance and exclusive offers on quality vehicles"
          inputPlaceholder="Enter your email"
          buttonText="Contact Us"
          termsText="By clicking Contact Us you agree to receive updates about available vehicles and special offers."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Inventory",
              items: [
                { label: "New Cars", href: "product" },
                { label: "Used Cars", href: "product" },
                { label: "Luxury Vehicles", href: "product" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Financing", href: "contact" },
                { label: "Trade-In", href: "contact" },
                { label: "Extended Warranty", href: "contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Reviews", href: "testimonial" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | AutoDeal"
        />
      </div>
    </ThemeProvider>
  );
}