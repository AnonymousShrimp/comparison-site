import Navbar from "@/components/Navbar";
import { Baby, Package, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-24 h-24 formula-gradient rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            All Formula Products
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our complete catalog of baby formula products from all major
            brands. This page will feature detailed product listings, advanced
            filtering, and comparison tools.
          </p>

          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              We're working on bringing you the most comprehensive formula
              product database. Features will include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-2">
                <Baby className="h-4 w-4 text-primary" />
                <span className="text-sm">Age-specific filtering</span>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-primary" />
                <span className="text-sm">Advanced search filters</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-primary" />
                <span className="text-sm">Detailed product specs</span>
              </div>
              <div className="flex items-center gap-2">
                <Baby className="h-4 w-4 text-primary" />
                <span className="text-sm">Nutritional comparisons</span>
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

export default Products;
