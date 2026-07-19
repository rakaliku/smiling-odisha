import { useState } from "react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { BookOpen, Calculator, Landmark, TrendingUp, Coins, BarChart3, Globe, Briefcase, Users, GraduationCap, Award, BadgeCheck, HandCoins, Sparkles, Send, ChevronRight, Target, Eye, Loader2 } from "lucide-react";
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
import { commerceGalleryPhotos } from "@/data/commerceGalleryPhotos";
import { useLanguage } from "@/i18n/LanguageContext";

const courses = [
  { icon: BookOpen, title: "B.Com", desc: "Foundation in commerce, accounting, and business studies." },
  { icon: GraduationCap, title: "M.Com", desc: "Advanced commerce studies for research and specialization." },
  { icon: Briefcase, title: "MBA", desc: "Master of Business Administration for future leaders." },
  { icon: TrendingUp, title: "BBA", desc: "Undergraduate business administration and management." },
  { icon: Landmark, title: "Banking & Finance", desc: "Specialized courses for careers in banking and financial services." },
  { icon: Calculator, title: "Accounting", desc: "Professional accounting programs including CA, CMA pathways." },
  { icon: Coins, title: "Taxation", desc: "Expertise in direct and indirect taxation, GST, and compliance." },
  { icon: Globe, title: "Digital Commerce", desc: "E-commerce, digital marketing, and online business management." },
];

const features = [
  { icon: Users, title: "Experienced Faculty", desc: "Learn from industry professionals and academic experts." },
  { icon: BarChart3, title: "Practical Learning", desc: "Hands-on projects, case studies, and real-world applications." },
  { icon: Target, title: "Career Guidance", desc: "Personalized career roadmaps for every student." },
  { icon: Award, title: "Internship Support", desc: "Connections with top companies for industry exposure." },
  { icon: BadgeCheck, title: "Placement Assistance", desc: "End-to-end support for campus and off-campus placements." },
  { icon: HandCoins, title: "Affordable Education", desc: "Quality education accessible to all, with scholarship support." },
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}

const CommerceEducation = () => {
  const { t } = useLanguage();
  useDocumentTitle(t("Commerce Class & Professional Courses"));
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", course: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.course) {
      toast.error(t("Please fill all required fields"));
      return;
    }
    setSubmitting(true);
    const result = await submitForm({
      data: {
        Name: form.name,
        Phone: form.phone,
        Email: form.email,
        "Course of Interest": form.course,
        Message: form.message,
      },
      subject: "New Commerce Class Enquiry",
    });
    setSubmitting(false);
    if (result.success) {
      toast.success(t("Enquiry submitted! Our team will contact you soon."));
      setForm({ name: "", phone: "", email: "", course: "", message: "" });
    } else {
      toast.error(t(result.message));
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pattachitra-pattern py-20 md:py-28">
        <div className="container relative text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{t("Commerce Class")}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            {t("Commerce Class & Professional Courses")}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t("We help students build successful careers in commerce by providing quality education support and admission guidance for various professional courses.")}
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="container py-16 md:py-20">
        <SectionHeading
          eyebrow={t("Programs Offered")}
          title={t("Courses")}
          subtitle={t("Comprehensive commerce and professional course options for your career growth.")}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((c) => (
            <Card key={c.title} className="group bg-gradient-card border-border/60 hover:border-primary/40 hover:-translate-y-1 hover:shadow-warm transition-all">
              <CardContent className="p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero mx-auto mb-4 group-hover:scale-110 transition-transform shadow-warm">
                  <c.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-base font-semibold mb-1.5">{t(c.title)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(c.desc)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Features */}
      <section className="bg-gradient-warm py-20 relative">
        <div className="absolute inset-0 temple-pattern opacity-40" />
        <div className="container relative">
          <SectionHeading
            eyebrow={t("Why Us")}
            title={t("Our Features")}
            subtitle={t("What makes our commerce class programs stand out.")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <Card key={f.title} className="group bg-card border-border/60 hover:border-primary/40 hover:-translate-y-1 hover:shadow-warm transition-all">
                <CardContent className="p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero mb-5 group-hover:scale-110 transition-transform shadow-warm">
                    <f.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{t(f.title)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(f.desc)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission CTA Banner */}
      <section className="container py-12 md:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-14 text-center shadow-warm">
          {/* Decorative floating circles */}
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 animate-pulse" />
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 animate-pulse [animation-delay:1s]" />
          <div className="absolute top-1/2 left-1/4 h-20 w-20 rounded-full bg-white/5 animate-pulse [animation-delay:0.5s]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-5">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">{t("Our Mission")}</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              {t("Prepare for Success in Business")}
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              {t("Our mission is to prepare students for successful careers in business, finance, and entrepreneurship. Start your journey with us today.")}
            </p>
            <a href="#enquire">
              <Button
                size="lg"
                className="rounded-full bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all h-14 px-10 text-base font-semibold group"
              >
                <GraduationCap className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                {t("Enquire Now")}
                <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery
        photos={commerceGalleryPhotos}
        display="carousel"
        eyebrow={t("Photo Gallery")}
        title={t("Classroom Moments")}
        subtitle={t("Glimpses from our commerce class sessions and events.")}
      />

      {/* Enquiry Form */}
      <section id="enquire" className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              eyebrow={t("Get in Touch")}
              title={t("Enquire About Admission")}
              subtitle={t("Interested in our commerce programs? Fill in your details and we'll guide you.")}
              align="left"
            />
            <div className="space-y-4">
              {[
                { icon: Target, title: "Personalized guidance", desc: "Get advice tailored to your career goals." },
                { icon: GraduationCap, title: "Multiple course options", desc: "B.Com, MBA, BBA, and many more to choose from." },
                { icon: BadgeCheck, title: "Placement support", desc: "We help you land your first job after graduation." },
              ].map((b) => (
                <div key={b.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/20">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t(b.title)}</div>
                    <div className="text-sm text-muted-foreground">{t(b.desc)}</div>
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
                    <Label htmlFor="cname">{t("Full Name *")}</Label>
                    <Input id="cname" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t("Your name")} className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="cphone">{t("Phone / WhatsApp *")}</Label>
                    <Input id="cphone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 9876543210" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cemail">{t("Email *")}</Label>
                  <Input id="cemail" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="ccourse">{t("Course of Interest *")}</Label>
                  <Select value={form.course} onValueChange={(v) => setForm({ ...form, course: v })}>
                    <SelectTrigger id="ccourse" className="mt-1.5">
                      <SelectValue placeholder={t("Select a course")} />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((c) => (
                        <SelectItem key={c.title} value={c.title}>{t(c.title)}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="cmsg">{t("Message")}</Label>
                  <Textarea id="cmsg" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t("Tell us about your educational goals...")} className="mt-1.5" />
                </div>
                <Button type="submit" disabled={submitting} className="w-full rounded-full bg-gradient-hero hover:opacity-90 shadow-warm h-11">
                  {submitting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Send className="h-4 w-4 mr-2" />}
                  {submitting ? t("Submitting...") : t("Submit Enquiry")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default CommerceEducation;
