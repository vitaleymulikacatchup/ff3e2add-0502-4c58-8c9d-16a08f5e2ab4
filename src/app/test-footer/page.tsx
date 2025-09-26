"use client";

import React, { useState } from "react";
import {
  SiteThemeProvider,
  StyleVariant,
} from "@/components/sections/ThemeProvider";
import BaseFooter from "@/components/sections/layouts/footer/BaseFooter";

const footerColumns = [
  {
    title: "Product",
    items: [
      { label: "Features" },
      { label: "Pricing" },
      { label: "Documentation" },
    ],
  },
  {
    title: "Company",
    items: [{ label: "About" }, { label: "Blog" }, { label: "Careers" }],
  },
  {
    title: "Support",
    items: [
      { label: "Help Center" },
      { label: "Contact" },
      { label: "Status" },
    ],
  },
];

export default function TestFooterPage() {
  const [currentTheme, setCurrentTheme] =
    useState<StyleVariant>("funAndTrendy");

  const themes: StyleVariant[] = [
    "funAndTrendy",
    "futuristicAndOutOfBox",
    "brainRot",
  ];
  console.log(currentTheme);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Footer Style Test</h1>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Select Theme:
          </label>
          <select
            value={currentTheme}
            onChange={(e) => setCurrentTheme(e.target.value as StyleVariant)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <h2 className="text-lg font-semibold">
              Current Theme: {currentTheme}
            </h2>
          </div>

          <div className="min-h-[400px] bg-white">
            <SiteThemeProvider
              theme={{
                styleVariant: currentTheme,
                colorTemplate: 1,
                textAnimation: "none",
              }}
            >
              <BaseFooter
                columns={footerColumns}
                copyrightText="© 2025 | Webild Test"
              />
            </SiteThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
