import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SpecsCard = ({ title, description }) => {
  return (
    <div>
      <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export { SpecsCard };
