"use client";
import { CircleCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  return (
    <div className="py-12 px-6 mt-20">
      <div className="container mx-auto md:max-w-[1200px]">
        <h1 className="font-semibold text-4xl lg:text-6xl max-w-2xl leading-snug">
          Affordable Plans for <span className="text-primary">Every Need</span>
        </h1>
        <p className="text-lg text-secondary-content max-w-2xl mt-2 leading-tight">
          Choose the perfect plan for your design projects, from startups to
          enterprises. Our pricing tiers are designed to offer flexibility and
          value, ensuring you get the most out of our AI-powered design
          assistant.
        </p>
        <div className="flex justify-center items-center gap-2 my-6">
          <Label
            className={isYearly ? "text-gray-400" : "text-white"}
            htmlFor="yearly-mode"
          >
            Monthly
          </Label>
          <Switch
            onClick={() => setIsYearly(!isYearly)}
            className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary "
            id="yearly-mode"
          />
          <Label
            className={!isYearly ? "text-gray-400" : "text-white"}
            htmlFor="yearly-mode"
          >
            Yearly
          </Label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <Card className="h-[530px] bg-zinc-200 dark:bg-zinc-800">
            <CardHeader>
              <CardTitle className="text-xs font-normal">FREE</CardTitle>
              <div className="text-4xl font-bold">$0/m</div>
              <p className="text-sm">Free forever</p>
            </CardHeader>
            <CardContent className="flex flex-col justify-between h-3/4">
              <div className="grid gap-4">
                <div className="h-[1px] bg-zinc-800 dark:bg-white" />
                {[
                  "Basic AI-generated designs",
                  "Access to customization tools",
                  "Standard templates library",
                  "5 projects per month",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CircleCheck className="h-4 w-4 text-zinc-800 dark:text-white" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full bg-transparent text-primary border-primary hover:bg-primary hover:text-white"
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
          <Card className="h-[530px] bg-primary text-white">
            <CardHeader>
              <CardTitle className="text-xs font-normal">BASIC</CardTitle>
              <div className="text-4xl font-bold">
                {!isYearly ? "$14.99/m" : "$11.93/m"}
              </div>
              <p className="text-sm">
                Billed {!isYearly ? "Monthly" : "Yearly"}
              </p>
            </CardHeader>
            <CardContent className="flex flex-col justify-between h-3/4">
              <div className="grid gap-4">
                <div className="h-[1px] bg-white" />
                {[
                  "Advanced AI-generated designs",
                  "Full access to customization tools",
                  "Premium templates library",
                  "Unlimited projects",
                  "Real-time collaboration",
                  "Priority email support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CircleCheck className="h-4 w-4 text-white" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-white text-zinc-800 hover:bg-gray-200">
                Get Started
              </Button>
            </CardContent>
          </Card>
          <Card className="h-[530px] bg-zinc-200 dark:bg-zinc-800">
            <CardHeader>
              <CardTitle className="text-xs font-normal">PRO</CardTitle>
              <div className="text-4xl font-bold">
                {!isYearly ? "$29.99/m" : "$24.93/m"}
              </div>
              <p className="text-sm">
                Billed {!isYearly ? "Monthly" : "Yearly"}
              </p>
            </CardHeader>
            <CardContent className="flex flex-col justify-between h-3/4">
              <div className="grid gap-4">
                <div className="h-[1px] bg-zinc-800 dark:bg-white" />
                {[
                  "Basic AI-generated designs",
                  "Dedicated account manager",
                  "Custom AI solutions and designs",
                  "Onboarding and training sessions",
                  "24/7 priority support",
                  "Advanced analytics and reporting",
                  "Secure cloud storage",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CircleCheck className="h-4 w-4 text-zinc-800 dark:text-white" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full bg-transparent text-primary border-primary hover:bg-primary hover:text-white"
              >
                Get Star
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
