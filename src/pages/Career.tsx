import { useState } from "react";
import { Cpu, Building2, Stethoscope, Wrench, Code2, Briefcase, Send } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

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

interface FormState {
  name: string;
  email: string;
  interest: string;
  message: string;
}

const Career = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", interest: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.interest) {
      toast.error("Please fill all required fields");
      return;
    }
    toast.success("Thank you! Our counselor will reach out within 48 hours.");
    setForm({ name: "", email: "", interest: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pattachitra-pattern py-20 md:py-28">
        <div className="container relative text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Career Counseling</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Find Your <span className="text-gradient">True Calling</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Free, personalized career counseling for students, graduates and professionals
            across Odisha — from Class 10 to your first job and beyond.
          </p>
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

      {/* Form */}
      <section className="container py-20">
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
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="mt-1.5" />
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
                <Button type="submit" className="w-full rounded-full bg-gradient-hero hover:opacity-90 shadow-warm h-11">
                  <Send className="h-4 w-4 mr-2" /> Submit Request
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
