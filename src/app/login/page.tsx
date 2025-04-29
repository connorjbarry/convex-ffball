"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";

type TAuthFormSubmit = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const SignUp = ({ handleSubmit }: TAuthFormSubmit) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-4 w-full">
      {/* <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
          <Label htmlFor="first-name">First name</Label>
          <Input name="first-name" id="first-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input name="last-name" id="last-name" required />
        </div>
      </div> */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input name="password" id="password" type="password" required />
      </div>
      <div className="space-y-2">
        {/* <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input
          name="confirm-password"
          id="confirm-password"
          type="password"
          required
        /> */}
      </div>
      <Input name="flow" id="flow" type="hidden" value="signUp" />
      <Button type="submit" className="w-full">
        Create Account
      </Button>
    </form>
  );
};

export const SignIn = ({ handleSubmit }: TAuthFormSubmit) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-4 w-full">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link href="#" className="text-sm text-green-600 hover:underline">
            Forgot password?
          </Link>
        </div>
        <Input name="password" id="password" type="password" required />
        <Input name="flow" id="flow" type="hidden" value="signIn" />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
};

export default function Login() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [currentTab, setCurrentTab] = useState("login");

  const { signIn } = useAuthActions();

  useEffect(() => {
    if (searchParams.get("register") === "true") {
      setCurrentTab("register");
    }
  }, [searchParams]);

  const onTabValueChange = (value: string) => {
    setCurrentTab(value);
    if (value === "register") {
      router.push(pathname + "?register=true");
    } else {
      router.push(pathname);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    void signIn("password", formData)
      .then(() => {
        router.push("/dashboard"); // or wherever your logged-in page is
      })
      .catch((err) => {
        console.error("Auth error:", err);
      });
  };

  return (
    <div className="flex flex-col h-screen">
      <Link className="absolute p-4" href={"/"}>
        <ArrowLeft />
      </Link>
      <div className="flex items-center justify-center h-full">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold tracking-tight">
              Welcome
            </CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              value={currentTab}
              onValueChange={onTabValueChange}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <SignIn handleSubmit={handleSubmit} />
              </TabsContent>
              <TabsContent value="register">
                <SignUp handleSubmit={handleSubmit} />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
