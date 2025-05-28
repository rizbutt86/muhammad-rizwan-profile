/*  src/App.jsx
    Muhammad Rizwan Butt – one-page profile  */

import "./App.css";
import profilePic from "./assets/rizwan-profile.png";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <div className="app">
      {/* Header bar */}
      <header className="header">
        <img src={profilePic} alt="Muhammad Rizwan Butt" className="profile-pic" />
        <img src={logo} alt="Personal logo" className="logo" />
      </header>

      {/* Main content */}
      <main className="content">
        {/* Hero / headline */}
        <h1 className="headline">Strategic Data & AI Executive</h1>
        <p className="sub">
          12 + years leading enterprise data platforms, AI/ML, and cloud
          transformation across Canadian telecom.
        </p>

        {/* === Sections ===== */}
        {/* Executive Highlights */}
        <Section title="Executive Highlights" bullets={[
          "Scaled cloud-native data platforms to 1,500+ internal users and ~$1.5 B CAPEX/OPEX impact over 5 years.",
          "Cut cloud OPEX from CAD 9 M → 5 M/year with FinOps chargeback & smart workload placement.",
          "Guided hybrid Azure–GCP architecture powering real-time CDR & 5G analytics."
        ]}/>

        {/* Signature Platforms */}
        <Section title="Signature Platforms" bullets={[
          "⛰  PlanAid – 20 B rows/month forecasting engine; 35 % faster planning; enabled 5G Home rollout (100 K subs in 2 qtrs).",
          "🌐  Netstat – real-time network monitor (1.2 M API calls/day, 99.95 % SLA); MTTD improved 42 %.",
          "🔄  NetWorth Customer-360 API – 500 K calls/day, 99.9 % uptime; churn model AUC 0.88."
        ]}/>

        {/* AI & ML Acceleration */}
        <Section title="AI & ML Acceleration" bullets={[
          "Deployed A/B flighting + feature store → model release cycle: weeks ➜ hours.",
          "Launched GenAI agents (OpenAI, Llama) to translate network KPIs to natural language; frontline triage –30 %.",
          "Built 100-seat self-service ML workspace with RBAC & tokenization (PIPEDA-compliant)."
        ]}/>

        {/* Leadership & Culture */}
        <Section title="Leadership & Culture" bullets={[
          "Direct manager of 12, influence over 50+ vendor & offshore staff;contributed to establishing recruitment pipelines to support future staffing expansion.",
          "Founded Rogers Data Engineering Community of Practice – 120 + members; cross-org best-practice hub.",
          "Mentor, Women in Data Science Toronto (2022–present)."
        ]}/>

        {/* Contact row */}
        <p className="contact">
          <a href="mailto:rizwanbutt86@gmail.com">rizwanbutt86@gmail.com</a> •{" "}
          <a
            href="https://www.linkedin.com/in/muhammadrizwanbutt"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          •{" "}
          <a href="tel:+15144028508">+1 514-402-8508</a>
        </p>
      </main>
    </div>
  );
}

/* ----- small helper component ----- */
function Section({ title, bullets }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <ul>
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </section>
  );
}