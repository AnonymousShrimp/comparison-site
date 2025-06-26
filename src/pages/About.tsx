import Navbar from "@/components/Navbar";
import { Users, Heart, Target, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-24 h-24 formula-gradient rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About FormulaCompare
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn about our mission to help parents find the best baby formula
            deals while ensuring the highest quality nutrition for their little
            ones.
          </p>

          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Founded by parents for parents, FormulaCompare was born from the
              need to make baby formula shopping easier and more affordable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                <span className="text-sm">Our mission</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm">Our team</span>
              </div>
              <div className="flex items-center gap-2">
                <Baby className="h-4 w-4 text-primary" />
                <span className="text-sm">Parent testimonials</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-sm">Community impact</span>
              </div>
            </div>
            <Button className="mt-6" onClick={() => window.history.back()}>
              Back to Compare
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
