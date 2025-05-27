import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <header className="py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Muhammad Rizwan Butt</h1>
        <p className="text-xl text-gray-400">
          Driving Scalable Data & AI Transformation Across Telecom
        </p>
        <a
          href="https://www.linkedin.com/in/yourprofile/muhammadrizwanbutt"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-400 hover:underline"
        >
          View LinkedIn Profile
        </a>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-16">
        {/* Leadership Scope */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Leadership Scope</h2>
          <p>
            Leads a core team of 12 with influence over 20+ cross-functional members across OSS, IT, and analytics. Mentors analysts across Network Engineering—10+ trained through his programs. 
          </p>
        </section>

        {/* Platform Evolution */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Enterprise Data Platforms</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>PlanAid:</strong> 250 users from planning, strategy, and marketing; built on 20B+ data points.</li>
            <li><strong>Netstat:</strong> 1300+ users from ops, optimization, support, and engineering.</li>
            <li>Both platforms use A/B testing, feature stores, and automated CI/CD for analytics use cases.</li>
          </ul>
        </section>

        {/* AI & FinOps */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">AI & Data FinOps</h2>
          <p>
            Established FinOps model tracking cloud/on-prem cost per function. Achieved OPEX reduction from $9M to $5M annually via hybrid architectures.
          </p>
        </section>

        {/* Governance & Access */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Governance & Self-Service</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Implemented Collibra and Confluence; reduced time-to-insight by 45–65%.</li>
            <li>Built a secure self-service data science portal using privacy-by-design, role-based access, and encryption at rest.</li>
          </ul>
        </section>

        {/* Customer 360 & APIs */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Customer 360 & APIs</h2>
          <p>
            Led <strong>Networth</strong>: a telecom Customer 360 platform integrated with PlanAid, enabling marketing & churn predictions using H3-level resolution data. Supports cross-functional use via real-time APIs.
          </p>
        </section>

        {/* Cloud Platform Skills */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Cloud & Data Stack</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Azure (primary), GCP, AWS – multi-cloud familiarity.</li>
            <li>Tools: Databricks, Snowflake, Kafka, Spark, Python, Flink.</li>
          </ul>
        </section>

        {/* Collaboration */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Collaboration & Innovation</h2>
          <p>
            Partnered with AI & Product teams to co-launch GenAI agents powered by OpenAI and Llama, enabling intuitive interaction with complex network systems.
          </p>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Education</h2>
          <p>M.Eng – plus hands-on leadership in enterprise data architecture and FinOps strategy. Exploring executive programs to complement technical depth.</p>
        </section>
      </main>

      <footer className="mt-16 py-6 text-center text-sm text-gray-500">
        Built with ❤️ — Muhammad Rizwan Butt © 2025
      </footer>
    </div>
  );
}