import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: any) => void;
}

const SearchBar = ({ onSearch, onFilterChange }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    priceRange: "",
    ageGroup: "",
    brand: "",
    organic: false,
    hypoallergenic: false,
    dha: false,
  });

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleFilterUpdate = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search baby formula brands, types, or features..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>

        {/* Filter Button */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="h-12 px-6">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="end">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Filter Results</h3>

              {/* Age Group Filter */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Age Group</Label>
                <div className="space-y-2">
                  {["0-6 months", "6-12 months", "12+ months", "Toddler"].map(
                    (age) => (
                      <div key={age} className="flex items-center space-x-2">
                        <Checkbox
                          id={age}
                          checked={filters.ageGroup === age}
                          onCheckedChange={(checked) =>
                            handleFilterUpdate("ageGroup", checked ? age : "")
                          }
                        />
                        <Label htmlFor={age} className="text-sm">
                          {age}
                        </Label>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Price Range</Label>
                <div className="space-y-2">
                  {["Under $25", "$25-$35", "$35-$50", "$50+"].map((price) => (
                    <div key={price} className="flex items-center space-x-2">
                      <Checkbox
                        id={price}
                        checked={filters.priceRange === price}
                        onCheckedChange={(checked) =>
                          handleFilterUpdate("priceRange", checked ? price : "")
                        }
                      />
                      <Label htmlFor={price} className="text-sm">
                        {price}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Features */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Special Features</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="organic"
                      checked={filters.organic}
                      onCheckedChange={(checked) =>
                        handleFilterUpdate("organic", checked)
                      }
                    />
                    <Label htmlFor="organic" className="text-sm">
                      Organic
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hypoallergenic"
                      checked={filters.hypoallergenic}
                      onCheckedChange={(checked) =>
                        handleFilterUpdate("hypoallergenic", checked)
                      }
                    />
                    <Label htmlFor="hypoallergenic" className="text-sm">
                      Hypoallergenic
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="dha"
                      checked={filters.dha}
                      onCheckedChange={(checked) =>
                        handleFilterUpdate("dha", checked)
                      }
                    />
                    <Label htmlFor="dha" className="text-sm">
                      DHA Added
                    </Label>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => {
                  setFilters({
                    priceRange: "",
                    ageGroup: "",
                    brand: "",
                    organic: false,
                    hypoallergenic: false,
                    dha: false,
                  });
                  onFilterChange({});
                }}
                variant="outline"
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default SearchBar;
