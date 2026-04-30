import { BusinessConfig } from "../types";

export const businessConfig: BusinessConfig = {
  name: "Bridgeport Bites",
  description: "Authentic coastal flavors and hearty comfort food in the heart of Bridgeport, CT. Family-owned and operated since 2015.",
  address: "123 Main St",
  city: "Bridgeport",
  state: "CT",
  zip: "06604",
  phone: "(203) 555-0123",
  email: "hello@bridgeportbites.com",
  hours: [
    "Mon-Thu: 11:00 AM - 9:00 PM",
    "Fri-Sat: 11:00 AM - 10:00 PM",
    "Sun: 12:00 PM - 8:00 PM"
  ],
  socials: {
    instagram: "https://instagram.com/bridgeportbites",
    facebook: "https://facebook.com/bridgeportbites"
  },
  delivery: {
    available: true,
    fee: 3.50,
    minOrder: 15.00,
    estimatedTime: "30-45 mins"
  },
  pickup: {
    available: true,
    estimatedTime: "15-20 mins"
  },
  menu: [
    {
      id: "1",
      name: "Harbor Lobster Roll",
      description: "Fresh Atlantic lobster, lightly buttered on a toasted brioche bun. Served with slaw.",
      price: 24.99,
      category: "Seafood",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
      tags: ["Signature", "Fresh"],
      isAvailable: true
    },
    {
      id: "2",
      name: "St. Mary's Seafood Pasta",
      description: "Shrimp, scallops, and clams in a spicy garlic marinara over linguine.",
      price: 21.50,
      category: "Pasta",
      image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=800",
      tags: ["Spicy"],
      isAvailable: true
    },
    {
      id: "3",
      name: "Seaside Garden Salad",
      description: "Mixed greens, cherry tomatoes, cucumbers, and balsamic vinaigrette.",
      price: 12.00,
      category: "Salads",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
      isAvailable: true
    },
    {
      id: "4",
      name: "New England Clam Chowder",
      description: "Creamy chowder with local clams, potatoes, and thick-cut bacon.",
      price: 8.50,
      category: "Soups",
      image: "https://images.unsplash.com/photo-1511910849309-0dffb8c83742?auto=format&fit=crop&q=80&w=800",
      tags: ["Hot"],
      isAvailable: true
    }
  ],
  faqs: [
    {
      question: "Do you deliver to all of Bridgeport?",
      answer: "Yes! We deliver within a 5-mile radius of our downtown location, covering most of Bridgeport and parts of Fairfield."
    },
    {
      question: "Can I customize my order?",
      answer: "Absolutely. You can add notes to any item in your cart during checkout. We'll do our best to accommodate allergies and preferences."
    },
    {
      question: "What are your peak hours?",
      answer: "We are usually busiest on Friday and Saturday nights between 6:00 PM and 8:00 PM. We recommend ordering early for faster delivery!"
    }
  ]
};
