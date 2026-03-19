"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

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
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,168,67,0.12),transparent_60%)]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center relative">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <ChevronRight size={14} className="text-gray-500" />
            <span className="text-gold font-medium">Contact</span>
          </nav>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mb-6 animate-float">
            <Mail size={40} className="text-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-up-delay-1">
            Have a question or want to connect? Fill out the form below and we
            will get back to you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center mb-4">
                  <Mail size={22} className="text-gold" />
                </div>
                <h3 className="font-bold text-navy mb-1">Email</h3>
                <p className="text-gray-500 text-sm">Send us a message using the form</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center mb-4">
                  <MapPin size={22} className="text-gold" />
                </div>
                <h3 className="font-bold text-navy mb-1">Location</h3>
                <p className="text-gray-500 text-sm">Los Angeles County, California</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center mb-4">
                  <Phone size={22} className="text-gold" />
                </div>
                <h3 className="font-bold text-navy mb-1">Response Time</h3>
                <p className="text-gray-500 text-sm">We typically respond within 24 hours</p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
                {status === "sent" ? (
                  <div className="text-center py-16 animate-scale-in">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-5">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy mb-2">
                      Message Sent!
                    </h2>
                    <p className="text-gray-600">
                      Thank you for reaching out. We will get back to you
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-navy mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-300 text-gray-700"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-navy mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-300 text-gray-700"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-navy mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-300 resize-y text-gray-700"
                        placeholder="How can we help?"
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-xl">
                        <AlertCircle size={16} />
                        <span>Something went wrong. Please try again.</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)] disabled:opacity-50 disabled:cursor-not-allowed text-base"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
