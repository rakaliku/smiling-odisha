import { useState } from "react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { BookOpen, Sprout, HeartPulse, Target, Eye, Users, Send, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CountUpStat from "@/components/CountUpStat";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PhotoGallery from "@/components/gallery/PhotoGallery";
import { toast } from "sonner";
import { submitForm } from "@/lib/submitForm";

interface Initiative {
  icon: typeof BookOpen;
  title: string;
  desc: string;
}

const initiatives: Initiative[] = [
  { icon: BookOpen, title: "Education for All", desc: "Free tuition, libraries and digital learning hubs in 80+ rural schools across Odisha." },
  { icon: Sprout, title: "Rural Empowerment", desc: "Livelihood training, women's self-help groups and sustainable farming workshops." },
  { icon: HeartPulse, title: "Health Camps", desc: "Monthly free medical camps, eye check-ups and awareness drives in tribal regions." },
];

const stats = [
  { num: "5,000+", label: "Lives Touched" },
  { num: "120+", label: "Active Volunteers" },
  { num: "85", label: "Villages Reached" },
  { num: "30+", label: "Districts" },
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  city: string;
  area: string;
  message: string;
}

const SocialWork = () => {
  useDocumentTitle("Social Work & Community Service");
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", city: "", area: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.area) {
      toast.error("Please fill all required fields");
      return;
    }
    setSubmitting(true);
    const result = await submitForm({
      data: {
        Name: form.name,
        Phone: form.phone,
        Email: form.email,
        City: form.city,
        "Area of Interest": form.area,
        Message: form.message,
      },
      subject: "New Volunteer Application",
    });
    setSubmitting(false);
    if (result.success) {
      toast.success("Welcome to the family! We'll be in touch soon.");
      setForm({ name: "", phone: "", email: "", city: "", area: "", message: "" });
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
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Social Work</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Service is the <span className="text-gradient">Highest Prayer</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Together, we build the Odisha of tomorrow — through education, healthcare
            and unwavering grassroots commitment.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-card border-border/60 shadow-soft">
            <CardContent className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero mb-4">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower every village, every school and every family in Odisha with
                the tools, knowledge and dignity they deserve — through compassionate
                action and community-led change.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border/60 shadow-soft">
            <CardContent className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero mb-4">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Smilling Odisha where no child's future is limited by circumstance,
                where tradition and progress walk hand in hand, and where service
                shapes every smile.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Initiatives */}
      <section id="initiatives" className="bg-gradient-warm py-20 relative">
        <div className="absolute inset-0 temple-pattern opacity-40" />
        <div className="container relative">
          <SectionHeading
            eyebrow="Ongoing Programs"
            title="Initiatives Making a Difference"
            subtitle="Where action meets intention — across Odisha's heartlands."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {initiatives.map((i) => (
              <Card key={i.title} className="group bg-card border-border/60 hover:border-primary/40 hover:-translate-y-1 hover:shadow-warm transition-all">
                <CardContent className="p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero mb-5 group-hover:scale-110 transition-transform">
                    <i.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{i.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container py-20">
        <SectionHeading eyebrow="Impact" title="Our Footprint, Your Story" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { num: 5000, suffix: "+", label: "Lives Touched" },
            { num: 120, suffix: "+", label: "Active Volunteers" },
            { num: 85, suffix: "", label: "Villages Reached" },
            { num: 30, suffix: "+", label: "Districts" },
          ].map((s) => (
            <Card key={s.label} className="bg-gradient-card border-border/60 text-center hover:shadow-warm transition-shadow">
              <CardContent className="p-7">
                <CountUpStat end={s.num} suffix={s.suffix} label={s.label} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Volunteer Form */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              eyebrow="Join Us"
              title="Become a Volunteer"
              subtitle="Give a few hours a month — change a lifetime."
              align="left"
            />
            <div className="space-y-4">
              {[
                { icon: Users, title: "Be part of a community", desc: "Connect with 120+ passionate change-makers." },
                { icon: HeartPulse, title: "Real impact, real people", desc: "Work directly with communities that need you." },
                { icon: BookOpen, title: "Learn & grow", desc: "Workshops, training and certificates included." },
              ].map((b) => (
                <div key={b.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/20">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{b.title}</div>
                    <div className="text-sm text-muted-foreground">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-card border-border/60 shadow-warm">
            <CardContent className="p-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="vname">Full Name *</Label>
                    <Input id="vname" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="vphone">Phone / WhatsApp *</Label>
                    <Input id="vphone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 9876543210" className="mt-1.5" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="vemail">Email *</Label>
                    <Input id="vemail" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="vcity">City</Label>
                    <Input id="vcity" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="Bhubaneswar" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="varea">Area of Interest *</Label>
                  <Select value={form.area} onValueChange={(v) => setForm({ ...form, area: v })}>
                    <SelectTrigger id="varea" className="mt-1.5">
                      <SelectValue placeholder="Where would you like to help?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="health">Health Camps</SelectItem>
                      <SelectItem value="rural">Rural Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="vmsg">Why do you want to volunteer?</Label>
                  <Textarea id="vmsg" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1.5" />
                </div>
                <Button type="submit" disabled={submitting} className="w-full rounded-full bg-gradient-hero hover:opacity-90 shadow-warm h-11">
                  {submitting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Send className="h-4 w-4 mr-2" />}
                  {submitting ? "Submitting..." : "Sign Me Up"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default SocialWork;
