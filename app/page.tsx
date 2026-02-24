"use client";

import React, { useState } from "react";

// --------------------------------------------------
// SIMPLE WEBSITE — Finance with Parijat
// 3 Pages: Home | News | About
// FIXED VERSION (No external UI dependencies)
// --------------------------------------------------

// Simple reusable UI components (so no import errors)
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white shadow rounded-2xl border">{children}</div>
  );
}

function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-6">{children}</div>;
}

function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
    >
      {children}
    </button>
  );
}

export default function FinanceWithParijat() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "news") return <NewsPage />;
    if (page === "about") return <AboutPage />;
    return <HomePage />;
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => setPage("home")}
        >
          Finance with Parijat
        </h1>

        <div className="flex gap-3">
          <Button onClick={() => setPage("home")}>Home</Button>
          <Button onClick={() => setPage("news")}>News</Button>
          <Button onClick={() => setPage("about")}>About</Button>
        </div>
      </nav>

      {renderPage()}

      {/* FOOTER */}
      <footer className="text-center p-6 bg-white border-t mt-10">
        © {new Date().getFullYear()} Finance with Parijat
      </footer>
    </div>
  );
}

// ---------------- HOME PAGE ----------------
function HomePage() {
  return (
    <section className="p-10 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Welcome to Finance with Parijat
      </h2>
      <p className="text-lg max-w-2xl mx-auto opacity-80">
        A simple platform to learn stock market basics, read finance news,
        and understand investing in an easy way.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <FeatureCard
          title="Learn Investing"
          text="Simple explanations of stock market concepts for beginners."
        />
        <FeatureCard
          title="Daily News"
          text="Stay updated with important finance and market news."
        />
        <FeatureCard
          title="Student Friendly"
          text="Created especially for students starting their finance journey."
        />
      </div>
    </section>
  );
}

// ---------------- NEWS PAGE ----------------
function NewsPage() {
  const demoNews = [
    "NIFTY closes higher amid banking rally",
    "RBI policy expectations drive market sentiment",
    "IT stocks show recovery after global cues",
    "Midcap stocks attract new investors",
    "Sensex gains supported by financial sector",
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest Finance News</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {demoNews.map((news, index) => (
          <Card key={index}>
            <CardContent>
              <h3 className="font-semibold text-lg">{news}</h3>
              <p className="text-sm opacity-70 mt-2">
                Source: Finance with Parijat
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

// ---------------- ABOUT PAGE ----------------
function AboutPage() {
  return (
    <section className="p-10 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">About Parijat</h2>
      <p className="opacity-80 leading-relaxed">
        Finance with Parijat is a beginner-friendly finance education website
        created to help students understand the stock market in simple language.
        The mission is to make financial knowledge accessible to everyone.
      </p>
    </section>
  );
}

// ---------------- FEATURE CARD ----------------
function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="opacity-80">{text}</p>
      </CardContent>
    </Card>
  );
}
