"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "maxgorin.com",
          name: form.name,
          email: form.email,
          message: form.message,
          source: "contact-page",
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 text-center">
          <nav className="text-sm text-gray-300 mb-4">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gold">Contact</span>
          </nav>
          <Mail size={56} className="text-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a question or want to connect? Fill out the form below and we will get back to you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-20">
          {status === "sent" ? (
            <div className="text-center py-12">
              <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-navy mb-2">
                Message Sent!
              </h2>
              <p className="text-gray-600">
                Thank you for reaching out. We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors resize-y"
                  placeholder="How can we help?"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 text-sm">
                  <AlertCircle size={16} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-semibold px-6 py-3 rounded-full transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
