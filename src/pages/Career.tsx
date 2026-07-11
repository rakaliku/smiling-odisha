import { useState } from "react";
import { Cpu, Building2, Stethoscope, Wrench, Code2, Briefcase, Send, GraduationCap, BookOpen, Landmark, Award, HandCoins, Lightbulb, BadgeCheck, Users, CalendarCheck, Sparkles, PhoneCall, ChevronRight, CheckCircle2, Star, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { submitForm } from "@/lib/submitForm";
import PhotoGallery from "@/components/gallery/PhotoGallery";
import { careerGalleryPhotos } from "@/data/careerGalleryPhotos";

interface CareerPath {
  icon: typeof Cpu;
  title: string;
  desc: string;
  tags: string[];
}

const paths: CareerPath[] = [
  { icon: Cpu, title: "Engineering", desc: "Mechanical, civil, electrical and emerging fields like AI & robotics.", tags: ["JEE", "NIT", "BPUT"] },
  { icon: Building2, title: "Government Jobs", desc: "OPSC, SSC, Banking, Railways — structured roadmaps & mentorship.", tags: ["OPSC", "SSC", "UPSC"] },
  { icon: Code2, title: "Information Technology", desc: "Software, data, cloud, cybersecurity — high-growth modern careers.", tags: ["Dev", "Data", "Cloud"] },
  { icon: Stethoscope, title: "Healthcare", desc: "MBBS, nursing, paramedical, public health and allied sciences.", tags: ["NEET", "AIIMS"] },
  { icon: Wrench, title: "Skill-Based Careers", desc: "ITI, vocational training, design, hospitality, entrepreneurship.", tags: ["ITI", "Skill India"] },
  { icon: Briefcase, title: "Commerce & Management", desc: "CA, CS, MBA, finance and business leadership tracks.", tags: ["CA", "MBA"] },
];

const services = [
  { icon: GraduationCap, title: "Career Counselling", desc: "Expert guidance to help you discover the right career path." },
  { icon: Landmark, title: "College Admission Guidance", desc: "Navigate the admission process with confidence and ease." },
  { icon: BookOpen, title: "MBA, B.Tech, BBA, BCA, MCA, M.Tech", desc: "Admissions support for top professional courses." },
  { icon: Award, title: "Scholarship Assistance", desc: "Find and apply for scholarships that match your profile." },
  { icon: HandCoins, title: "Education Loan Guidance", desc: "Understand loan options and get hassle-free approvals." },
  { icon: Lightbulb, title: "Skill Development Programs", desc: "Upskill with industry-relevant training and certifications." },
  { icon: BadgeCheck, title: "Paid Internship Assistance", desc: "Land valuable internships to kickstart your career." },
  { icon: Users, title: "Placement Support", desc: "End-to-end placement assistance for your dream job." },
];

const whyChooseUs = [
  { icon: Star, text: "Experienced Career Counsellors" },
  { icon: CheckCircle2, text: "Trusted Admission Support" },
  { icon: Landmark, text: "Government & Private College Guidance" },
  { icon: CalendarCheck, text: "Personalized Career Planning" },
  { icon: Users, text: "Student-Centered Approach" },
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

const Career = () => {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", interest: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.interest) {
      toast.error("Please fill all required fields");
      return;
    }
    setSubmitting(true);
    const result = await submitForm({
      data: {
        Name: form.name,
        Phone: form.phone,
        Email: form.email,
        "Area of Interest": form.interest,
        Message: form.message,
      },
      subject: "New Career Counseling Request",
    });
    setSubmitting(false);
    if (result.success) {
      toast.success("Thank you! Our counselor will reach out within 48 hours.");
      setForm({ name: "", phone: "", email: "", interest: "", message: "" });
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pattachitra-pattern py-20 md:py-28">
        <div className="container relative text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Authorized Career Counselling Centre</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Career Counselling &amp; <span className="text-gradient">Admission Guidance</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Smilling Odisha is an Authorized Career Counselling Centre dedicated to helping students choose the right career path.
            We provide expert guidance for higher education admissions, scholarships, and skill development.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-warm py-16 md:py-20 relative">
        <div className="absolute inset-0 temple-pattern opacity-40" />
        <div className="container relative">
          <SectionHeading
            eyebrow="Our Promise"
            title="Why Choose Us?"
            subtitle="Trusted by hundreds of students and families across Odisha."
          />
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {whyChooseUs.map((w) => (
              <div
                key={w.text}
                className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-card border border-border/60 shadow-soft hover:shadow-warm hover:border-primary/40 transition-all"
              >
                <w.icon className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{w.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner — Book Free Counselling */}
      <section className="container py-12 md:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-14 text-center shadow-warm">
          {/* Decorative floating circles */}
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 animate-pulse" />
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 animate-pulse [animation-delay:1s]" />
          <div className="absolute top-1/2 left-1/4 h-20 w-20 rounded-full bg-white/5 animate-pulse [animation-delay:0.5s]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-5">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">Limited Slots Available</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Book Your <span className="underline decoration-wavy decoration-white/60 underline-offset-8">Free</span> Career Counselling Today
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Take the first step towards your dream career. Our expert counsellors are ready to guide you — completely free of charge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#book-session">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all h-14 px-10 text-base font-semibold group"
                >
                  <CalendarCheck className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Book Free Session
                  <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="tel:+919040458544" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium">
                <PhoneCall className="h-5 w-5" />
                <span>Or call us directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { num: "1:1", label: "Counselor Sessions" },
            { num: "20+", label: "Career Streams" },
            { num: "100%", label: "Free for Students" },
          ].map((s) => (
            <Card key={s.label} className="bg-gradient-card border-border/60 text-center">
              <CardContent className="p-7">
                <div className="font-display text-4xl font-bold text-gradient">{s.num}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="container py-16 md:py-20">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Services"
          subtitle="Comprehensive support for every step of your academic and professional journey."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Card key={s.title} className="group bg-gradient-card border-border/60 hover:border-primary/40 hover:-translate-y-1 hover:shadow-warm transition-all">
              <CardContent className="p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero mx-auto mb-4 group-hover:scale-110 transition-transform shadow-warm">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-base font-semibold mb-1.5">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>




      {/* Paths */}
      <section className="bg-gradient-warm py-20 relative">
        <div className="absolute inset-0 temple-pattern opacity-40" />
        <div className="container relative">
          <SectionHeading
            eyebrow="Career Paths"
            title="Explore Your Possibilities"
            subtitle="Pick a stream — we'll guide you with mentors, resources and roadmaps."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paths.map((p) => (
              <Card key={p.title} className="group bg-card border-border/60 hover:border-primary/40 hover:-translate-y-1 hover:shadow-warm transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero mb-4 group-hover:scale-110 transition-transform">
                    <p.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] uppercase font-semibold tracking-wider px-2 py-1 rounded-full bg-secondary/20 text-foreground/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery
        photos={careerGalleryPhotos}
        eyebrow="Photo Gallery"
        title="Counselling in Action"
        subtitle="Snapshots from our career counselling sessions and events."
      />

      {/* Form */}
      <section id="book-session" className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              eyebrow="Book a Session"
              title="Talk to a Counselor"
              subtitle="Share a few details — we'll match you with the right mentor."
              align="left"
            />
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Free, confidential 1-on-1 sessions", "Available in Odia, Hindi & English", "Online or in-person at our centers", "Follow-up resources & roadmap"].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {b}
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-gradient-card border-border/60 shadow-warm">
            <CardContent className="p-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone / WhatsApp *</Label>
                    <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 9876543210" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="interest">Area of Interest *</Label>
                  <Select value={form.interest} onValueChange={(v) => setForm({ ...form, interest: v })}>
                    <SelectTrigger id="interest" className="mt-1.5">
                      <SelectValue placeholder="Select a career path" />
                    </SelectTrigger>
                    <SelectContent>
                      {paths.map((p) => (
                        <SelectItem key={p.title} value={p.title}>{p.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your goals..." className="mt-1.5" />
                </div>
                <Button type="submit" disabled={submitting} className="w-full rounded-full bg-gradient-hero hover:opacity-90 shadow-warm h-11">
                  {submitting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Send className="h-4 w-4 mr-2" />}
                  {submitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
