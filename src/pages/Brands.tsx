import Navbar from "@/components/Navbar";
import { Star, Award, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Brands = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-24 h-24 formula-gradient rounded-full flex items-center justify-center mx-auto mb-6">
            <Star className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Formula Brands
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore detailed information about all major baby formula brands,
            their history, product lines, and what makes each brand unique.
          </p>

          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Brand Directory Coming Soon
            </h2>
            <p className="text-muted-foreground mb-6">
              We're building comprehensive brand profiles that will include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-primary" />
                <span className="text-sm">Company backgrounds</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm">Brand ratings & reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm">Awards & certifications</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-primary" />
                <span className="text-sm">Product line overviews</span>
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

export default Brands;
