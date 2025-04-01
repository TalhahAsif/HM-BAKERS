"use client";

import React from "react";
import mainImg from "../../assets/sendwichCookie.jpg";
import fulllogo from "../../assets/fulllogo.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, Star, Menu, X, ArrowRight } from "lucide-react";
import { SpecsCard } from "../../CustomComponent/cards";
import Footer from "../../CustomComponent/Footer";

const Landingpage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const specsDetail = [
    {
      title: "Premium Ingredients",
      description:
        "We use only the finest ingredients, sourced locally whenever possible, to ensure exceptional taste and quality.",
    },
    {
      title: "Handcrafted Daily",
      description:
        "Each cookie is made by hand with care and attention to detail, ensuring consistent quality and taste.",
    },
    {
      title: "Unique Flavors",
      description:
        "Explore our wide range of unique and seasonal flavors that you won't find anywhere else.",
    },
  ];

  const reviews = [
    {
      id: 1,
      stars: 5,
      title: "Amazing Cookies!",
      content:
        "These cookies are absolutely delicious! The texture is perfect - crispy on the outside and soft on the inside. Will definitely order again!",
      customerName: "Happy Customer 1",
    },
    {
      id: 2,
      stars: 4,
      title: "Great Taste!",
      content:
        "The cookies were fantastic! Loved the sweetness and the crunch. Would recommend them to anyone with a sweet tooth.",
      customerName: "Happy Customer 2",
    },
    {
      id: 3,
      stars: 5,
      title: "Best Cookies Ever!",
      content:
        "Best cookies I've had in a long time! Fresh, soft, and full of flavor. Can't wait to try more flavors!",
      customerName: "Happy Customer 3",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-15">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 ">
              Delicious Cookies for Every Occasion
            </h1>
            <p className="text-lg text-gray-600">
              Handcrafted with love and premium ingredients. Our sandwich
              cookies are the perfect treat for yourself or as a gift.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                Shop Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                View Menu
              </Button>
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              src={mainImg || "/placeholder.svg"}
              className="w-full rounded-2xl shadow-xl"
              alt="Delicious Sandwich Cookie"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 bg-gradient-to-r from-purple-100 to-blue-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Cookies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We take pride in our baking process and quality ingredients that
              make our cookies stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specsDetail.map((spec, index) => {
              return (
                <SpecsCard
                  key={index}
                  title={spec.title}
                  description={spec.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="bg-gradient-to-br from-white to-purple-50 border-none shadow-md"
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(review.stars)].map((_, index) => (
                      <Star
                        key={index}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{review.content}</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">
                    - {review.customerName}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Taste the Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and treat yourself to our
            delicious cookies today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              Order Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Join Our Newsletter
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>   
    </div>
  );
};

export default Landingpage;
