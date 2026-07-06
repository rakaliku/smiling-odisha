import { useState } from "react";
import { Trophy, Star, Target, Lightbulb, GraduationCap, Medal, Award, BookOpen, Sparkles, Send, ChevronRight, CheckCircle2, Loader2 } from "lucide-react";
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

const objectives = [
  { icon: Star, title: "Encourage Academic Excellence", desc: "Inspire students to strive for the highest academic standards." },
  { icon: Lightbulb, title: "Motivate Talented Students", desc: "Fuel the ambitions of bright minds across Odisha." },
  { icon: Target, title: "Inspire Future Leaders", desc: "Nurture the leaders, innovators, and change-makers of tomorrow." },
  { icon: Trophy, title: "Recognize Outstanding Achievements", desc: "Celebrate remarkable academic accomplishments publicly." },
  { icon: BookOpen, title: "Promote Quality Education", desc: "Advocate for educational excellence at every level." },
];

const eligibility = [
  { icon: GraduationCap, title: "School Toppers", desc: "Top-ranking students from schools across Odisha." },
  { icon: Award, title: "College Toppers", desc: "Best-performing students from colleges and universities." },
  { icon: Medal, title: "Competitive Exam Achievers", desc: "Students excelling in JEE, NEET, OPSC, and other exams." },
  { icon: CheckCircle2, title: "Outstanding Performers", desc: "Exceptional achievers in academics and education." },
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  category: string;
  achievement: string;
  message: string;
}

const MedhaSanman = () => {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", category: "", achievement: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.category || !form.achievement) {
      toast.error("Please fill all required fields");
      return;
    }
    setSubmitting(true);
    const result = await submitForm({
      data: {
        "Student Name": form.name,
        Phone: form.phone,
        Email: form.email,
        Category: form.category,
        "Achievement Details": form.achievement,
        Message: form.message,
      },
      subject: "New Medha Sanman Nomination",
    });
    setSubmitting(false);
    if (result.success) {
      toast.success("Nomination submitted! We'll review and get back to you soon.");
      setForm({ name: "", phone: "", email: "", category: "", achievement: "", message: "" });
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
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Honouring Excellence</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Medha <span className="text-gradient">Sanman</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Medha Sanman is our initiative to recognize and honour outstanding students
            for their academic excellence and achievements.
          </p>
        </div>
      </section>

      {/* Objectives */}
      <section className="container py-16 md:py-20">
        <SectionHeading
          eyebrow="Our Purpose"
          title="Objectives"
          subtitle="Driving academic excellence and inspiring the next generation."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {objectives.map((o) => (
            <Card key={o.title} className="group bg-gradient-card border-border/60 hover:border-primary/40 hover:-translate-y-1 hover:shadow-warm transition-all">
              <CardContent className="p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero mb-5 group-hover:scale-110 transition-transform shadow-warm">
                  <o.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{o.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-gradient-warm py-20 relative">
        <div className="absolute inset-0 temple-pattern opacity-40" />
        <div className="container relative">
          <SectionHeading
            eyebrow="Who Qualifies"
            title="Eligibility Criteria"
            subtitle="Medha Sanman celebrates achievers across these categories."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {eligibility.map((e) => (
              <Card key={e.title} className="group bg-card border-border/60 hover:border-primary/40 hover:-translate-y-1 hover:shadow-warm transition-all text-center">
                <CardContent className="p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero mx-auto mb-4 group-hover:scale-110 transition-transform shadow-warm">
                    <e.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-1.5">{e.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Banner */}
      <section className="container py-12 md:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-14 text-center shadow-warm">
          {/* Decorative floating circles */}
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 animate-pulse" />
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 animate-pulse [animation-delay:1s]" />
          <div className="absolute top-1/2 left-1/4 h-20 w-20 rounded-full bg-white/5 animate-pulse [animation-delay:0.5s]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-5">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">Recognition & Rewards</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Certificates, Trophies &amp; <span className="underline decoration-wavy decoration-white/60 underline-offset-8">Medals</span>
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Students receiving Medha Sanman are honoured with certificates, trophies, medals,
              and heartfelt appreciation for their hard work and dedication.
            </p>
            <a href="#nominate">
              <Button
                size="lg"
                className="rounded-full bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all h-14 px-10 text-base font-semibold group"
              >
                <Trophy className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Nominate a Student
                <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Nomination Form */}
      <section id="nominate" className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              eyebrow="Nominate"
              title="Submit a Nomination"
              subtitle="Know a deserving student? Help us honour their achievements."
              align="left"
            />
            <div className="space-y-4">
              {[
                { icon: Trophy, title: "Public recognition", desc: "Awardees are felicitated at special ceremonies." },
                { icon: Medal, title: "Certificates & medals", desc: "Tangible awards to celebrate their hard work." },
                { icon: Star, title: "Inspire others", desc: "Motivate peers to pursue academic excellence." },
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
                    <Label htmlFor="mname">Student Name *</Label>
                    <Input id="mname" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="mphone">Phone / WhatsApp *</Label>
                    <Input id="mphone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 9876543210" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="memail">Email *</Label>
                  <Input id="memail" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="mcategory">Category *</Label>
                  <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                    <SelectTrigger id="mcategory" className="mt-1.5">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="school-topper">School Topper</SelectItem>
                      <SelectItem value="college-topper">College Topper</SelectItem>
                      <SelectItem value="competitive-exam">Competitive Exam Achiever</SelectItem>
                      <SelectItem value="outstanding">Outstanding Performer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="machievement">Achievement Details *</Label>
                  <Input id="machievement" value={form.achievement} onChange={(e) => setForm({ ...form, achievement: e.target.value })} placeholder="e.g., 1st rank in Board Exam 2025" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="mmsg">Additional Details</Label>
                  <Textarea id="mmsg" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us more about the student's achievements..." className="mt-1.5" />
                </div>
                <Button type="submit" disabled={submitting} className="w-full rounded-full bg-gradient-hero hover:opacity-90 shadow-warm h-11">
                  {submitting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Send className="h-4 w-4 mr-2" />}
                  {submitting ? "Submitting..." : "Submit Nomination"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default MedhaSanman;
