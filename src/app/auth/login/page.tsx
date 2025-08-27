"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    setLoading(false);

    if (res.ok) {
      router.push("/");
      const { error } = await res.json();
      alert(error);
    }
  };

  return (
    <div className="w-full max-w-md">
      <Card>
        <CardHeader>
          <div className="flex flex-col items-center gap-2.5 py-2">
            <CardTitle className="text-[22px] text-BlackBg font-bold">
              Welcome back!
            </CardTitle>
            <p className="text-Subtitle">
              Let’s login to your account & get started
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <Label className="mb-[5px]">Email</Label>
              <Input
                type="email"
                placeholder="ex: johndoe@gmail.com"
                {...register("email")}
                className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400 focus:border-Primary caret-Primary"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <Label className="mb-[5px]">Password</Label>
              <Input
                type="password"
                {...register("password")}
                placeholder="*************"
                className="flex-1 bg-transparent outline-none text-sm placeholder-Inactive caret-Primary"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
