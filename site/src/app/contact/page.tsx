"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

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
    <div className="grain">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 md:pt-40 md:pb-20 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-10">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <ChevronRight size={14} className="text-gray-600" />
            <span className="text-gold font-medium">Contact</span>
          </nav>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass mb-8 animate-float">
            <Mail size={36} className="text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Get in<br />
            <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to connect? Fill out the form below and we
            will get back to you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 mesh-bg-alt" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Info Cards */}
            <div className="space-y-5">
              <FadeIn delay={0} direction="left">
                <div className="glass-card rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <h3 className="font-bold text-white mb-1">Email</h3>
                  <p className="text-gray-500 text-sm">Send us a message using the form</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.1} direction="left">
                <div className="glass-card rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <h3 className="font-bold text-white mb-1">Location</h3>
                  <p className="text-gray-500 text-sm">Los Angeles County, California</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} direction="left">
                <div className="glass-card rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <Clock size={20} className="text-gold" />
                  </div>
                  <h3 className="font-bold text-white mb-1">Response Time</h3>
                  <p className="text-gray-500 text-sm">We typically respond within 24 hours</p>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <FadeIn direction="right">
                <div className="glass-strong rounded-2xl p-8 md:p-10">
                  {status === "sent" ? (
                    <div className="text-center py-16">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 mb-5">
                        <CheckCircle size={40} className="text-emerald-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        Message Sent!
                      </h2>
                      <p className="text-gray-400">
                        Thank you for reaching out. We will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-300 mb-2"
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
                          className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 focus:ring-2 focus:ring-gold/10 outline-none transition-all duration-300 text-white placeholder-gray-600"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-300 mb-2"
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
                          className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 focus:ring-2 focus:ring-gold/10 outline-none transition-all duration-300 text-white placeholder-gray-600"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-gray-300 mb-2"
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
                          className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 focus:ring-2 focus:ring-gold/10 outline-none transition-all duration-300 resize-y text-white placeholder-gray-600"
                          placeholder="How can we help?"
                        />
                      </div>

                      {status === "error" && (
                        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 px-4 py-3 rounded-xl border border-red-500/20">
                          <AlertCircle size={16} />
                          <span>Something went wrong. Please try again.</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-background font-semibold px-6 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,67,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
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
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
