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
                    <li>
                      <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                      <img
                       src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white"
                       alt="Python"
                       />
                      </a>
                    </li>
                    <li>
                     <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
                     <img
                      src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white"
                      alt="PostgreSQL"
                      />
                     </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Frameworks</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>
                     <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">
                     <img
                     src="https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white"
                     alt="PyTorch"
                     />
                     </a>
                    </li>
                    <li>
                     <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
                     <img
                     src="https://img.shields.io/badge/TensorFlow-FF6F00?logo=tensorflow&logoColor=white"
                     alt="TensorFlow"
                     />
                     </a>
                    </li>
                    <li>
                      <a href="https://jax.readthedocs.io/" target="_blank" rel="noopener noreferrer">
                      <img
                      src="https://img.shields.io/badge/JAX-EA4335?logo=jax&logoColor=white"
                      alt="JAX"
                      />
                      </a>
                    </li>
                    <li>
                     <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer">
                     <img
                     src="https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=white"
                     alt="NumPy"
                     />
                     </a>
                    </li>
                    <li>
                     <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer">
                     <img
                     src="https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=white"
                     alt="Pandas"
                     />
                     </a>
                    </li>
                    <li>
                     <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                     <img
                     src="https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black"
                     alt="Firebase"
                     />
                     </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg">
  <h2 className="text-xl font-semibold mb-4">Interests</h2>
  <div className="flex flex-wrap gap-2">
    {[
      // Chess (Personal Profile)
      <a key="chess" href="https://www.chess.com/member/RK9_gamer" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.shields.io/badge/Chess-769656?logo=chess&logoColor=white&label=My%20Chess%20Profile"
          alt=""
          className="h-6"
        />
      </a>,

      // Football (Barcelona)
      <a key="football" href="https://www.fcbarcelona.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.shields.io/badge/FCB%20Fan-004D98?logo=fcbarcelona&logoColor=white&labelColor=A50044"
          alt="FC Barcelona Fan"
          className="h-6"
        />
      </a>,

      // Anime
      <a key="anime" href="https://myanimelist.net/animelist/your_profile" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.shields.io/badge/Anime-FF69B4?logo=myanimelist&logoColor=white"
          alt="My Anime List"
          className="h-6"
        />
      </a>,

      // Gaming (Steam + Epic)
      <a key="gaming" href="https://steamcommunity.com/profiles/76561199095498848" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.shields.io/badge/Gaming-000000?logo=steam&logoColor=white"
          alt="Steam Profile"
          className="h-6"
        />
      </a>,

      // Drumming (Drumeo)
      <a key="drumming" href="https://www.drumeo.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.shields.io/badge/Drumming-1D4F91?logo=musical-notation&logoColor=white&label=Drumeo%20Learner&logo=%F0%9F%A5%81"
          alt="Drumming via Drumeo"
          className="h-6"
        />
      </a>
    ].map((badge) => badge)}
  </div>
</div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}