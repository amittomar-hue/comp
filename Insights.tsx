@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --brand-blue: #0057FF;
  --brand-navy: #020B2D;
  --brand-navy-light: #071140;
  --brand-cyan: #00D4FF;
  --font-plus-jakarta: 'Plus Jakarta Sans', sans-serif;
  --font-dm-sans: 'DM Sans', sans-serif;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  color: #111827;
  background: #ffffff;
  font-family: var(--font-dm-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #f1f1f1; }
::-webkit-scrollbar-thumb { background: var(--brand-blue); border-radius: 3px; }

/* Marquee animation */
@keyframes marquee-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes marquee-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.marquee-left { animation: marquee-left 40s linear infinite; }
.marquee-right { animation: marquee-right 40s linear infinite; }

/* Hero slider */
@keyframes heroFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-animate { animation: heroFadeIn 0.8s ease forwards; }

/* Gradient mesh background */
.gradient-mesh {
  background: 
    radial-gradient(ellipse at 20% 50%, rgba(0,87,255,0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(0,212,255,0.1) 0%, transparent 50%),
    var(--brand-navy);
}

/* Glass card */
.glass-card {
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.08);
}

/* Hover underline */
.hover-underline {
  position: relative;
}
.hover-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--brand-blue);
  transition: width 0.3s ease;
}
.hover-underline:hover::after { width: 100%; }

/* Service card hover */
.service-card {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 60px rgba(0,87,255,0.15);
}

/* Dropdown menu animations */
.dropdown-menu {
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: all 0.2s ease;
}
.nav-item:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Section reveal animation */
@keyframes revealUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}
.reveal { 
  opacity: 0;
  animation: revealUp 0.7s ease forwards;
}

/* Blue dot accent */
.blue-dot::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--brand-blue);
  margin-right: 8px;
  vertical-align: middle;
}

/* Slider dots */
.slider-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}
.slider-dot.active {
  width: 24px;
  border-radius: 4px;
  background: white;
}

/* Number counter animation */
@keyframes countUp {
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
}
.stat-number {
  animation: countUp 0.6s ease forwards;
}

/* Mega menu columns */
.mega-menu-col {
  border-right: 1px solid rgba(0,87,255,0.08);
}
.mega-menu-col:last-child { border-right: none; }

/* CTA section */
.cta-bg {
  background: linear-gradient(135deg, var(--brand-blue) 0%, #0033cc 50%, #001a80 100%);
  position: relative;
  overflow: hidden;
}
.cta-bg::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: rgba(255,255,255,0.04);
  pointer-events: none;
}
.cta-bg::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(255,255,255,0.03);
  pointer-events: none;
}
