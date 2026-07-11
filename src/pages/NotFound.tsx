import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative pattachitra-pattern py-20 md:py-32">
        <div className="container relative text-center max-w-xl">
          <div className="font-display text-8xl md:text-9xl font-bold text-gradient mb-4">
            404
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Looks like this path doesn't lead anywhere. Let's get you back on track —
            there's so much more to explore at Smilling Odisha.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full bg-gradient-hero hover:opacity-90 shadow-warm h-12 px-7">
              <Link to="/">
                <Home className="h-4 w-4 mr-2" /> Go Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-primary/30 hover:bg-primary/5 h-12 px-7">
              <Link to="/career">
                <ArrowLeft className="h-4 w-4 mr-2" /> Career Counseling
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
