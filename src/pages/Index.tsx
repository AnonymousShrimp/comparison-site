import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Baby,
  Heart,
  Shield,
  TrendingDown,
  Star,
  CheckCircle,
} from "lucide-react";

// Mock data for baby formula products
const formulaProducts = [
  {
    id: "1",
    name: "Organic Infant Formula",
    brand: "Similac",
    image: "/placeholder.svg",
    currentPrice: 29.99,
    originalPrice: 34.99,
    rating: 4.7,
    reviewCount: 1243,
    ageGroup: "0-6 months",
    size: "12.4 oz",
    features: ["Organic", "DHA Added", "Iron Fortified"],
    priceChange: "down" as const,
    availability: "in-stock" as const,
    stores: [
      { name: "Target", price: 29.99, url: "#" },
      { name: "Amazon", price: 31.99, url: "#" },
      { name: "Walmart", price: 30.49, url: "#" },
    ],
  },
  {
    id: "2",
    name: "Pro-Advance Infant Formula",
    brand: "Enfamil",
    image: "/placeholder.svg",
    currentPrice: 27.89,
    originalPrice: 32.99,
    rating: 4.5,
    reviewCount: 987,
    ageGroup: "0-12 months",
    size: "20.7 oz",
    features: ["DHA", "Choline", "Iron"],
    priceChange: "stable" as const,
    availability: "in-stock" as const,
    stores: [
      { name: "CVS", price: 27.89, url: "#" },
      { name: "Target", price: 28.99, url: "#" },
      { name: "Walgreens", price: 29.49, url: "#" },
    ],
  },
  {
    id: "3",
    name: "Gentle Formula",
    brand: "Gerber",
    image: "/placeholder.svg",
    currentPrice: 24.99,
    rating: 4.3,
    reviewCount: 756,
    ageGroup: "0-12 months",
    size: "12.7 oz",
    features: ["Gentle", "Probiotics", "Comfort"],
    priceChange: "up" as const,
    availability: "low-stock" as const,
    stores: [
      { name: "Amazon", price: 24.99, url: "#" },
      { name: "Target", price: 25.99, url: "#" },
      { name: "Walmart", price: 26.49, url: "#" },
    ],
  },
  {
    id: "4",
    name: "Hypoallergenic Formula",
    brand: "Nutramigen",
    image: "/placeholder.svg",
    currentPrice: 42.99,
    originalPrice: 45.99,
    rating: 4.6,
    reviewCount: 432,
    ageGroup: "0-12 months",
    size: "12.6 oz",
    features: ["Hypoallergenic", "Protein Hydrolysate", "DHA"],
    priceChange: "down" as const,
    availability: "in-stock" as const,
    stores: [
      { name: "CVS", price: 42.99, url: "#" },
      { name: "Target", price: 44.99, url: "#" },
      { name: "Amazon", price: 43.49, url: "#" },
    ],
  },
  {
    id: "5",
    name: "Complete Comfort Formula",
    brand: "Similac",
    image: "/placeholder.svg",
    currentPrice: 31.49,
    rating: 4.4,
    reviewCount: 623,
    ageGroup: "0-12 months",
    size: "12.6 oz",
    features: ["Easy Digestion", "DHA", "Lutein"],
    priceChange: "stable" as const,
    availability: "in-stock" as const,
    stores: [
      { name: "Walmart", price: 31.49, url: "#" },
      { name: "Target", price: 32.99, url: "#" },
      { name: "Amazon", price: 33.99, url: "#" },
    ],
  },
  {
    id: "6",
    name: "Organic A2 Formula",
    brand: "Happy Baby",
    image: "/placeholder.svg",
    currentPrice: 38.99,
    originalPrice: 41.99,
    rating: 4.8,
    reviewCount: 289,
    ageGroup: "0-6 months",
    size: "21 oz",
    features: ["Organic", "A2 Protein", "DHA", "Prebiotics"],
    priceChange: "down" as const,
    availability: "in-stock" as const,
    stores: [
      { name: "Target", price: 38.99, url: "#" },
      { name: "Amazon", price: 39.99, url: "#" },
      { name: "Whole Foods", price: 40.49, url: "#" },
    ],
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});

  const filteredProducts = useMemo(() => {
    let filtered = formulaProducts;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.features.some((feature) =>
            feature.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      );
    }

    // Apply additional filters
    if (filters.ageGroup) {
      filtered = filtered.filter(
        (product) => product.ageGroup === filters.ageGroup,
      );
    }

    if (filters.organic) {
      filtered = filtered.filter((product) =>
        product.features.some((feature) =>
          feature.toLowerCase().includes("organic"),
        ),
      );
    }

    if (filters.hypoallergenic) {
      filtered = filtered.filter((product) =>
        product.features.some((feature) =>
          feature.toLowerCase().includes("hypoallergenic"),
        ),
      );
    }

    if (filters.dha) {
      filtered = filtered.filter((product) =>
        product.features.some((feature) =>
          feature.toLowerCase().includes("dha"),
        ),
      );
    }

    return filtered;
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Baby className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">
                  Trusted by 50,000+ Parents
                </span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Find the Best{" "}
              <span className="formula-gradient bg-clip-text text-transparent">
                Baby Formula
              </span>{" "}
              Prices
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Compare prices across all major retailers and find the perfect
              formula for your baby. Save money while ensuring the best
              nutrition for your little one.
            </p>

            {/* Trust Indicators */}
            <div className="flex justify-center gap-8 mb-12">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">FDA Approved</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Real-time Prices</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-sm">Parent Reviews</span>
              </div>
            </div>

            {/* Search Bar */}
            <SearchBar onSearch={setSearchQuery} onFilterChange={setFilters} />

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Formula Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Retail Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  $2.5M+
                </div>
                <div className="text-muted-foreground">Saved by Parents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Compare Formula Prices
              </h2>
              <p className="text-muted-foreground">
                {filteredProducts.length} products found
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <TrendingDown className="h-3 w-3" />
                Prices Updated Daily
              </Badge>
            </div>
          </div>

          {/* Popular Brands */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Popular Brands</h3>
            <div className="flex flex-wrap gap-2">
              {["Similac", "Enfamil", "Gerber", "Nutramigen", "Happy Baby"].map(
                (brand) => (
                  <Button
                    key={brand}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(brand)}
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    {brand}
                  </Button>
                ),
              )}
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Baby className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setFilters({});
                }}
                variant="outline"
              >
                Clear Search
              </Button>
            </div>
          )}

          {/* Load More Button */}
          {filteredProducts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose FormulaCompare?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make it easy to find the best deals on baby formula while
              ensuring you get the nutrition your baby needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 formula-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-muted-foreground">
                Compare prices across 20+ retailers to find the lowest price on
                every formula.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 formula-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Reviews</h3>
              <p className="text-muted-foreground">
                Read reviews from real parents and pediatrician recommendations
                for each formula.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 formula-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-muted-foreground">
                All formulas are FDA-approved and meet the highest safety
                standards for infant nutrition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-8 h-8 formula-gradient rounded-lg flex items-center justify-center">
                <Baby className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Formula<span className="text-primary">Compare</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Helping parents find the best formula deals since 2024
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary">
                About
              </a>
              <a href="#" className="hover:text-primary">
                Privacy
              </a>
              <a href="#" className="hover:text-primary">
                Terms
              </a>
              <a href="#" className="hover:text-primary">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
