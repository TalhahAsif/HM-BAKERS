import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import EditModal from "./editModal";

const AdminProductCard = ({ product }) => {
  const dropdownItems = [
    {
      title:
        product.status === "active" ? "Mark as Inactive" : "Mark as Active",
      action: () => console.log("status clicked"),
    },
    {
      title: "more detail",
      action: () => console.log("more detail clicked"),
    },
  ];

  return (
    <Card className="p-4 hover:shadow-md transition-all flex flex-col md:flex-row gap-6">
      <section className="flex flex-col sm:flex-row flex-wrap gap-4 w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full sm:w-28 h-28 rounded-xl object-cover"
        />

        <div className="flex flex-col space-y-2 flex-1">
          <CardHeader className="p-0">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">{product.name}</CardTitle>
            </div>
            <CardDescription className="text-sm">
              <span>
                ⭐ {product.rating} ({product.reviews} reviews)
              </span>
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0 text-sm text-gray-600 space-y-1 flex flex-wrap gap-3">
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
            <p>
              <strong>Price:</strong> ${product.price.toFixed(2)}
            </p>
            <p>
              <strong>Created:</strong> {product.createdAt}
            </p>
            <p>
              <strong>Updated:</strong> {product.updatedAt}
            </p>
          </CardContent>
        </div>
      </section>

      {/* Right-side controls */}
      <div className="flex flex-row md:flex-col justify-between md:items-end gap-4">
        <Badge
          variant={product.status === "active" ? "success" : "destructive"}
          className="self-start md:self-end"
        >
          {product.status}
        </Badge>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon">
              <MoreVertical size={18} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <EditModal product={product} />
            {dropdownItems.map((item, index) => (
              <DropdownMenuItem key={index} onClick={item.action}>
                {item.title}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
};

const CategoryCard = ({ category }) => {
  return (
    <div>
      <div
        key={category.id}
        className="flex items-center justify-between p-4 border-b"
      >
        <div className="flex items-center">
          <img
            src={category.image}
            alt={category.title}
            className="w-10 h-10 rounded-full mr-4"
          />
          <span className="text-lg font-semibold">{category.title}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-black font-bold text-xs">Created by: </span>
          <span className="text-sm text-gray-500">{category.createdBy}</span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => handleDelete(category)}
                className="text-red-600"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export { AdminProductCard, CategoryCard };
