import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-ink text-background">
      <div className="absolute inset-0 temple-pattern opacity-40 pointer-events-none" />
      <div className="container relative py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-background ring-2 ring-background/20">
              <img
                src="/smiling-odisha-logo.jpeg"
                alt="Smilling Odisha logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="font-display text-xl font-bold">Smilling Odisha</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-background/60">Guidance · Service</div>
            </div>
          </div>
          <p className="text-sm text-background/70 max-w-md leading-relaxed">
            Empowering Odisha's youth and communities through trusted career counseling
            and grassroots social work — rooted in our culture, building tomorrow.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-4 text-secondary">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
            <li><Link to="/career" className="hover:text-secondary transition-colors">Career Counseling</Link></li>
            <li><Link to="/social-work" className="hover:text-secondary transition-colors">Social Work</Link></li>
            <li><Link to="/commerce-education" className="hover:text-secondary transition-colors">Commerce Education</Link></li>
            <li><Link to="/medha-sanman" className="hover:text-secondary transition-colors">Medha Sanman</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-4 text-secondary">Contact</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary-glow" /> Plot No. HIG-3/5, Extension, Near Bhubaneswar Drug House, C.S. Pur, Bhubaneswar - 751016</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary-glow" /> +91 9040458544</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary-glow" /> +91 9348578109</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary-glow" /> info@smillingodisha.org</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-background/10 py-5 text-center text-xs text-background/50">
        © {new Date().getFullYear()} Smilling Odisha · Made with ❤ for the people of Odisha
      </div>
    </footer>
  );
};

export default Footer;
