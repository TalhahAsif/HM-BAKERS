import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axiosInstance from "../../../lib/Axios";
import Cookies from "js-cookie";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

// const token = Cookies.get();
// console.log(token);

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, watch, isValid },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const fetchAuthData = async () => {
      const token = Cookies.get("jwt");
      console.log("JWT Token:", token);

      try {
        const response = await axiosInstance.get("/auth/checkAuth");
        console.log(response.data, "response.data");
      } catch (error) {
        console.error(
          error.response?.data || "Error occurred",
          "error.response.data"
        );
      }
    };

    fetchAuthData(); // Call the async function
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    await axiosInstance
      .post("/auth/login", data)
      .then((response) => {
        console.log(response.data, "response.data");
      })
      .catch((error) => {
        console.error(error.response.data, "error.response.data");
      });
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-sm mx-auto p-6 shadow-md">
        <CardHeader className="text-center">
          <CardTitle>Welcome</CardTitle>
          {/* <p className="text-center font-bold text-xl mt-5">Login</p> */}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email")}
              required
            />
            <p className="text-xs text-red-600">
              {errors.email && errors.email.message}
            </p>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password")}
              required
            />
            <p className="text-xs text-red-600">
              {errors.password && errors.password.message}
            </p>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          {/* Signup Form */}
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-500">
          Secure & Simple Authentication
        </CardFooter>
      </Card>
    </section>
  );
}
