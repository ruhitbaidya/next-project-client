import React from "react";
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import Logo from "@/app/assets/svgs/Logo";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-6">
      <div className="container mx-auto px-4">
        {/* Logo and Description */}
        <div className="flex flex-col items-center mb-4">
          <Logo />
          <p className="mt-2 text-sm">
            Your trusted partner in business solutions.
          </p>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-300 my-4" />

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 my-4">
          <a href="#" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-gray-600 hover:text-green-500 transition" />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook className="h-6 w-6 text-gray-600 hover:text-green-500 transition" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-gray-600 hover:text-green-500 transition" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-gray-600 hover:text-green-500 transition" />
          </a>
          <a href="#" aria-label="GitHub">
            <Github className="h-6 w-6 text-gray-600 hover:text-green-500 transition" />
          </a>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-300 my-4" />

        {/* Copyright */}
        <div className="text-center text-sm">
          © 2025 RBusiness. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
