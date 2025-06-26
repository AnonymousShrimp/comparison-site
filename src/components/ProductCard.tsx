import {
  Star,
  ShoppingCart,
  Info,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    brand: string;
    image: string;
    currentPrice: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    ageGroup: string;
    size: string;
    features: string[];
    priceChange: "up" | "down" | "stable";
    availability: "in-stock" | "low-stock" | "out-of-stock";
    stores: Array<{
      name: string;
      price: number;
      url: string;
    }>;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    name,
    brand,
    image,
    currentPrice,
    originalPrice,
    rating,
    reviewCount,
    ageGroup,
    size,
    features,
    priceChange,
    availability,
    stores,
  } = product;

  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case "in-stock":
        return "text-green-600 bg-green-50 border-green-200";
      case "low-stock":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "out-of-stock":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const lowestPrice = Math.min(...stores.map((store) => store.price));
  const lowestPriceStore = stores.find((store) => store.price === lowestPrice);

  return (
    <Card className="formula-card group hover:scale-[1.02] transition-transform duration-200">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative">
          <img
            src={image}
            alt={`${brand} ${name}`}
            className="w-full h-48 object-cover rounded-t-xl"
          />
          {discountPercentage > 0 && (
            <Badge className="absolute top-3 left-3 bg-red-500 text-white">
              -{discountPercentage}%
            </Badge>
          )}
          <div className="absolute top-3 right-3">
            <div className="flex items-center gap-1">
              {priceChange === "down" && (
                <TrendingDown className="h-4 w-4 text-green-500" />
              )}
              {priceChange === "up" && (
                <TrendingUp className="h-4 w-4 text-red-500" />
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Brand and Product Name */}
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {brand}
            </h3>
            <p className="text-muted-foreground text-sm">{name}</p>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium ml-1">{rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({reviewCount} reviews)
            </span>
          </div>

          {/* Age Group and Size */}
          <div className="flex gap-2 mb-4">
            <Badge variant="secondary" className="text-xs">
              {ageGroup}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {size}
            </Badge>
            <Badge
              className={`text-xs border ${getAvailabilityColor(availability)}`}
            >
              {availability.replace("-", " ")}
            </Badge>
          </div>

          {/* Features */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded-full"
                >
                  {feature}
                </span>
              ))}
              {features.length > 3 && (
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                  +{features.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Price Information */}
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">
                ${currentPrice.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {lowestPriceStore && (
              <p className="text-xs text-muted-foreground mt-1">
                Best price at {lowestPriceStore.name}
              </p>
            )}
          </div>

          {/* Store Comparison */}
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Available at:</p>
            <div className="space-y-1">
              {stores.slice(0, 3).map((store, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-muted-foreground">{store.name}</span>
                  <span
                    className={`font-medium ${store.price === lowestPrice ? "text-primary" : "text-foreground"}`}
                  >
                    ${store.price.toFixed(2)}
                  </span>
                </div>
              ))}
              {stores.length > 3 && (
                <p className="text-xs text-muted-foreground">
                  +{stores.length - 3} more stores
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button className="flex-1" size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Compare Prices
            </Button>
            <Button variant="outline" size="sm">
              <Info className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
