import PageTransition from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <PageTransition>
      <div className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm a <span className="text-primary">Rishabh Kumar</span>
              <br />
              Passionate about AI & ML
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              I specialize in Python with expertise in AI/ML technologies like TensorFlow and Pytorch. 
              Currently exploring Automation and DevOps For MLOps .
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Languages</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Python</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Frameworks</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Pytorch</li>
                    <li>TensorFlow</li>
                    <li>JAX</li>
                    <li>NumPy</li>
                    <li>Pandas</li>
                    <li>keras</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {["Chess", "Football", "Anime", "Simulations", "Drumming"].map((interest) => (
                  <span key={interest} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}