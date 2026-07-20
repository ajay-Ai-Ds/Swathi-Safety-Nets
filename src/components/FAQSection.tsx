"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What are safety nets made of?",
    answer: "Our safety nets are made from high-quality HDPE (High-Density Polyethylene) and nylon materials. These materials are UV-stabilized, weather-resistant, and provide exceptional tensile strength for long-lasting protection. We use only ISI-certified materials.",
  },
  {
    question: "How long do safety nets last in Bangalore's climate?",
    answer: "High-quality HDPE safety nets typically last 5-8 years with proper maintenance, even in Bangalore's tropical climate. Nylon nets last 3-5 years. Our UV-stabilized materials withstand heavy monsoon rains, intense sunlight, and strong winds.",
  },
  {
    question: "How much do safety nets cost in Bangalore?",
    answer: "Pigeon nets range from ₹8-15 per sq ft, balcony safety nets from ₹10-20 per sq ft, and heavy-duty construction nets from ₹15-30 per sq ft. Contact us at +91 9000182240 for a free site inspection and accurate quote — no hidden charges!",
  },
  {
    question: "Do you provide free site inspection?",
    answer: "Yes! Swathi Safety Nets provides completely free site inspection across all areas of Bangalore including Whitefield, Marathahalli, HSR Layout, Electronic City, Koramangala, and more. Our expert team will visit, take measurements, and provide a detailed quotation at absolutely no cost.",
  },
  {
    question: "Are safety nets safe for children?",
    answer: "Absolutely! Our children safety nets can withstand up to 80 kg of weight and impact. They meet international safety standards and are used in high-rise apartments across Bangalore. The nets are non-toxic and completely child-friendly.",
  },
  {
    question: "Do safety nets block the view from my balcony?",
    answer: "No, our safety nets are designed to be nearly invisible! We use transparent, thin-gauge HDPE nets that do not obstruct your view or reduce natural light. The net blends seamlessly with your balcony. Most visitors won't even notice it.",
  },
  {
    question: "How long does safety net installation take?",
    answer: "Standard safety net installation for a balcony or window takes 1-3 hours depending on the size. Larger installations for entire buildings may take a full day. We offer same-day installation service across Bangalore for urgent requirements.",
  },
  {
    question: "Are your safety nets weather resistant?",
    answer: "Yes, all our safety nets are UV-stabilized and fully weather-resistant. They withstand heavy monsoon rain, strong winds, and intense sunlight without degradation. Our nets are specifically treated to perform optimally in Bangalore's tropical climate.",
  },
  {
    question: "Do you offer warranty on safety nets?",
    answer: "Yes, we provide warranty on all our safety net installations. The warranty covers material defects and installation quality. Warranty period varies by product type — typically 2-5 years depending on the net material and type.",
  },
  {
    question: "Can safety nets be removed and re-installed?",
    answer: "Yes, our safety nets can be easily removed and re-installed. This is useful during home renovation, painting, or when you move to a new apartment. Our team handles it professionally at a minimal charge.",
  },
  {
    question: "What is the weight capacity of your safety nets?",
    answer: "Our standard HDPE safety nets can support 50-80 kg of weight. Heavy-duty construction nets support 100-150 kg. Children safety nets are specifically tested to hold up to 80 kg, ensuring complete protection against fall accidents.",
  },
  {
    question: "Do you provide services across all of Bangalore?",
    answer: "Yes! We cover all areas of Bangalore including Whitefield, Marathahalli, KR Puram, HSR Layout, Electronic City, Sarjapur Road, Koramangala, Hebbal, Indiranagar, Jayanagar, BTM Layout, JP Nagar, Bannerghatta Road, Yelahanka, Rajajinagar, and all surrounding areas.",
  },
  {
    question: "Are pigeon safety nets harmful to birds?",
    answer: "No, our pigeon safety nets are completely humane. They simply act as a physical barrier to prevent pigeons from entering your space without causing any harm to the birds. The nets are soft, flexible, and bird-friendly.",
  },
  {
    question: "What is the difference between nylon and HDPE safety nets?",
    answer: "HDPE nets are UV-stabilized, more durable in outdoor conditions, and last 5-8 years. Ideal for balconies and permanent installations. Nylon nets offer higher tensile strength but degrade faster in UV exposure (3-5 years). Nylon is preferred for construction sites and temporary installations.",
  },
  {
    question: "How do I maintain safety nets?",
    answer: "Safety nets require minimal maintenance. Periodically clean with water and mild soap to remove dust. Inspect for damage every 6 months. Avoid placing heavy objects on the nets. We also offer annual maintenance services and repairs if needed.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
      {faqItems.map((item, index) => (
        <div key={index} className={`faq-item reveal revealed ${activeIndex === index ? "active" : ""}`}>
          <button
            className="faq-question"
            aria-expanded={activeIndex === index}
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
            <i className="fas fa-chevron-down"></i>
          </button>
          <div
            className="faq-answer"
            style={{
              maxHeight: activeIndex === index ? "400px" : "0",
              transition: "max-height 0.35s ease",
            }}
          >
            <div className="faq-answer-content">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
