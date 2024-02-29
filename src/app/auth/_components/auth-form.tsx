"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gyBu7Ix8j5Z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

export function AuthForm() {
  const form = useForm<{ email: string }>();

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn("email", { email: data.email, redirect: false });

      toast({
        title: "Magic Link Sent",
        description: "Check your email for the magic link to login.",
      });
    } catch (error) {
      toast({
        title: "Magic Link Error",
        description: "Could not sent your magic link. Try again.",
      });
    }
  });

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-sm text-neutral-muted">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="w-full max-w-sm space-y-4">
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              type="email"
              required
              {...form.register("email")}
            />
          </div>
          <Button className="w-full" type="submit">
            Send Magic Link
          </Button>
        </form>
      </div>
    </div>
  );
}
