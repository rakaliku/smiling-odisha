import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, HeartHandshake, GraduationCap, Users, Quote, Star } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Briefcase,
    title: "Career Counseling",
    desc: "Personalized guidance to help students and professionals discover their true calling.",
    link: "/career",
  },
  {
    icon: HeartHandshake,
    title: "Social Work",
    desc: "Grassroots initiatives in education, healthcare and rural empowerment across Odisha.",
    link: "/social-work",
  },
  {
    icon: GraduationCap,
    title: "Skill Development",
    desc: "Training programs that prepare youth for tomorrow's industries and opportunities.",
    link: "/career",
  },
  {
    icon: Users,
    title: "Community Outreach",
    desc: "Volunteer-led efforts that bring change to villages, schools and underserved areas.",
    link: "/social-work",
  },
];

const testimonials = [
  {
    name: "Priyanka Sahoo",
    role: "Engineering Student, Cuttack",
    text: "The counseling helped me choose the right stream. I'm now pursuing AI at NIT Rourkela.",
  },
  {
    name: "Rakesh Patra",
    role: "Volunteer, Puri",
    text: "Joining their rural health camp was life-changing. Real impact, real people.",
  },
  {
    name: "Sushree Mohanty",
    role: "Teacher, Bhubaneswar",
    text: "Their school programs have transformed how my students think about careers.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden pattachitra-pattern">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

        <div className="container relative py-20 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Rooted in Odisha · Reaching the World
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
              Empowering Odisha's <span className="text-gradient">Future</span> Through Guidance & Service
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              From the temples of Puri to the classrooms of Bhubaneswar — we walk with
              every dreamer, every doer, every soul ready to serve.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full bg-gradient-hero hover:opacity-90 shadow-warm h-12 px-7 text-base">
                <Link to="/career">
                  Get Career Guidance <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-primary/30 hover:bg-primary/5 h-12 px-7 text-base">
                <Link to="/social-work">Join Social Work</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm">
              <div>
                <div className="font-display text-2xl font-bold text-primary">5,000+</div>
                <div className="text-muted-foreground">Lives Touched</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-2xl font-bold text-primary">120+</div>
                <div className="text-muted-foreground">Volunteers</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-2xl font-bold text-primary">30+</div>
                <div className="text-muted-foreground">Districts</div>
              </div>
            </div>
          </div>

          {/* Decorative pattachitra-style art panel */}
          <div className="relative animate-float hidden lg:block">
            <div className="relative aspect-square max-w-md mx-auto rounded-[2rem] bg-gradient-hero p-1 shadow-warm">
              <div className="h-full w-full rounded-[calc(2rem-4px)] bg-card temple-pattern flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 200 200" className="w-3/4 h-3/4">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="hsl(var(--primary))" />
                      <stop offset="1" stopColor="hsl(var(--secondary))" />
                    </linearGradient>
                  </defs>
                  {/* Stylized temple silhouette */}
                  <path d="M100 20 L130 70 L160 80 L140 100 L150 160 L100 140 L50 160 L60 100 L40 80 L70 70 Z" fill="url(#g1)" opacity="0.9" />
                  <circle cx="100" cy="100" r="15" fill="hsl(var(--background))" />
                  <circle cx="100" cy="100" r="8" fill="hsl(var(--ink))" />
                  {/* Petals */}
                  {[0, 60, 120, 180, 240, 300].map((d) => (
                    <ellipse key={d} cx="100" cy="55" rx="6" ry="14" fill="hsl(var(--secondary))" transform={`rotate(${d} 100 100)`} />
                  ))}
                </svg>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm shadow-soft">
              ॐ Jai Jagannath
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="A Movement Born from Odisha's Soul"
              align="left"
            />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Smiling Odisha is a non-profit initiative founded by a collective of
              educators, social workers and dreamers who believe that every child in
              Odisha deserves clarity in their career and dignity in their community.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Inspired by the timeless art of Pattachitra and the unifying spirit of
              Lord Jagannath, we blend tradition with modern tools to nurture the next
              generation of Odias — confident, capable and compassionate.
            </p>
            <Button asChild variant="outline" className="rounded-full border-2">
              <Link to="/social-work">Discover Our Mission <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "8+", label: "Years of Service" },
              { num: "200+", label: "Workshops" },
              { num: "45+", label: "Partner Schools" },
              { num: "12K+", label: "Students Counseled" },
            ].map((s) => (
              <Card key={s.label} className="bg-gradient-card border-border/60 shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.num}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-warm py-20 md:py-28 relative">
        <div className="absolute inset-0 temple-pattern opacity-50" />
        <div className="container relative">
          <SectionHeading
            eyebrow="What We Do"
            title="Key Services"
            subtitle="Two pillars, one mission — to uplift Odisha's youth and strengthen its communities."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Card key={s.title} className="group bg-card border-border/60 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-warm">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero mb-4 group-hover:scale-110 transition-transform">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <Link to={s.link} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="Voices"
          title="Stories from Our Community"
          subtitle="Real people, real change — across Odisha."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="bg-gradient-card border-border/60 shadow-soft relative overflow-hidden">
              <Quote className="absolute -top-2 -right-2 h-24 w-24 text-primary/5" />
              <CardContent className="p-7 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/85 italic leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                  <div className="h-10 w-10 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-semibold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 text-center shadow-warm">
          <div className="absolute inset-0 temple-pattern opacity-30" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Ready to make a difference?
            </h2>
            <p className="mt-4 text-primary-foreground/90 max-w-xl mx-auto">
              Whether you seek guidance or wish to give back — there's a place for you in our journey.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90 h-12 px-7">
                <Link to="/career">Find Your Path</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-background/40 bg-transparent text-primary-foreground hover:bg-background/10 h-12 px-7">
                <Link to="/social-work">Volunteer Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
