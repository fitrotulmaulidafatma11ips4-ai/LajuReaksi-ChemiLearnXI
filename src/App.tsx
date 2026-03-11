/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { LandingPage } from "./pages/LandingPage";
import { ObjectivesPage } from "./pages/ObjectivesPage";
import { Dashboard } from "./pages/Dashboard";

export default function App() {
  const [currentModule, setCurrentModule] = useState<"landing" | "objectives" | "dashboard">("landing");

  return (
    <div className="font-sans text-black relative min-h-screen">
      {/* Global UM Logo */}
      <img 
        src="https://dibimbing.id/images/campus/logo-um.webp" 
        alt="Logo Universitas Negeri Malang" 
        className="fixed top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-16 md:h-16 object-contain z-50 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] pointer-events-none"
        referrerPolicy="no-referrer"
      />

      {currentModule === "landing" && (
        <LandingPage onNext={() => setCurrentModule("objectives")} />
      )}
      {currentModule === "objectives" && (
        <ObjectivesPage 
          onHome={() => setCurrentModule("landing")} 
          onNext={() => setCurrentModule("dashboard")} 
        />
      )}
      {currentModule === "dashboard" && (
        <Dashboard onHome={() => setCurrentModule("landing")} />
      )}

      {/* Global Watermark */}
      <div className="fixed bottom-2 left-0 right-0 text-center z-50 pointer-events-none">
        <p className="font-black text-black/50 uppercase tracking-widest text-xs md:text-sm drop-shadow-[1px_1px_0px_rgba(255,255,255,0.8)]" style={{ WebkitTextStroke: '0.5px white' }}>
          © 2026 Ika Ni'amah Sari
        </p>
      </div>
    </div>
  );
}

