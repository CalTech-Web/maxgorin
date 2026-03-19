"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle, MapPin, Clock, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

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
        body: JSON.stringify({ site: "maxgorin.com", name: form.name, email: form.email, message: form.message, source: "contact-page" }),
      });
      if (res.ok) { setStatus("sent"); setForm({ name: "", email: "", message: "" }); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-foreground/30 mb-10">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <ChevronRight size={14} />
            <span className="text-foreground/60">Contact</span>
          </nav>
          <div className="accent-line mx-auto mb-8" />
          <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Get in<br /><span className="text-gold">Touch</span>
          </h1>
          <p className="text-foreground/40 text-lg max-w-xl mx-auto">
            Have a question or want to connect? Fill out the form and we will get back to you.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Info */}
            <div className="space-y-5">
              {[
                { icon: Mail, title: "Email", desc: "Send us a message using the form" },
                { icon: MapPin, title: "Location", desc: "Los Angeles County, California" },
                { icon: Clock, title: "Response Time", desc: "We typically respond within 24 hours" },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1} direction="left">
                  <div className="editorial-card rounded-2xl p-6">
                    <item.icon size={20} className="text-gold mb-3" />
                    <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-foreground/40 text-xs">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <FadeIn direction="right">
                <div className="editorial-card rounded-2xl p-8 md:p-10">
                  {status === "sent" ? (
                    <div className="text-center py-16">
                      <CheckCircle size={40} className="text-green-500 mx-auto mb-4" />
                      <h2 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h2>
                      <p className="text-foreground/40 text-sm">Thank you for reaching out. We will get back to you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Full Name</label>
                        <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-5 py-4 rounded-xl bg-cream border-0 focus:ring-2 focus:ring-gold/30 outline-none transition-all text-foreground placeholder-foreground/25 text-sm" placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Email</label>
                        <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-5 py-4 rounded-xl bg-cream border-0 focus:ring-2 focus:ring-gold/30 outline-none transition-all text-foreground placeholder-foreground/25 text-sm" placeholder="you@example.com" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Message</label>
                        <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-5 py-4 rounded-xl bg-cream border-0 focus:ring-2 focus:ring-gold/30 outline-none transition-all resize-y text-foreground placeholder-foreground/25 text-sm" placeholder="How can we help?" />
                      </div>
                      {status === "error" && (
                        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-xl">
                          <AlertCircle size={16} /><span>Something went wrong. Please try again.</span>
                        </div>
                      )}
                      <button type="submit" disabled={status === "sending"}
                        className="w-full inline-flex items-center justify-center gap-2 bg-foreground hover:bg-navy text-background font-medium text-sm px-6 py-4 rounded-full transition-colors duration-300 disabled:opacity-50">
                        {status === "sending" ? "Sending..." : <><Send size={16} /> Send Message</>}
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
