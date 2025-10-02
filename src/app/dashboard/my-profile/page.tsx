"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@/context/UserContext";
import { Mail, Shield, User as UserIcon } from "lucide-react";

export default function MyProfilePage() {
  const { user } = useUser();

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#595e70]">My Profile</h1>
        <p className="text-sm text-[#8c94ab] mt-1">
          View your profile information
        </p>
      </div>

      {/* Profile Card */}
      <Card className="border border-[#e3e5ec] shadow-sm">
        <CardHeader className="bg-gradient-to-r from-[#f8f9fc] to-white border-b border-[#e3e5ec]">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24 rounded-full border-4 border-white shadow-md">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="text-2xl font-bold text-[#595e70]">
                {user.name}
              </CardTitle>
              <p className="text-[#8c94ab] mt-1 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                {user.role}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Profile Information Section */}
            <div>
              <h3 className="text-lg font-semibold text-[#595e70] mb-4">
                Profile Information
              </h3>
              <div className="space-y-4">
                {/* Name Field */}
                <div className="flex items-start gap-4 p-4 bg-[#f8f9fc] rounded-lg border border-[#e3e5ec]">
                  <div className="mt-1">
                    <UserIcon className="w-5 h-5 text-[#8c94ab]" />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-[#8c94ab] uppercase tracking-wide">
                      Full Name
                    </label>
                    <p className="text-[#595e70] font-medium mt-1">
                      {user.name}
                    </p>
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex items-start gap-4 p-4 bg-[#f8f9fc] rounded-lg border border-[#e3e5ec]">
                  <div className="mt-1">
                    <Mail className="w-5 h-5 text-[#8c94ab]" />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-[#8c94ab] uppercase tracking-wide">
                      Email Address
                    </label>
                    <p className="text-[#595e70] font-medium mt-1">
                      {user.email}
                    </p>
                  </div>
                </div>

                {/* Role Field */}
                <div className="flex items-start gap-4 p-4 bg-[#f8f9fc] rounded-lg border border-[#e3e5ec]">
                  <div className="mt-1">
                    <Shield className="w-5 h-5 text-[#8c94ab]" />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-[#8c94ab] uppercase tracking-wide">
                      Role
                    </label>
                    <p className="text-[#595e70] font-medium mt-1">
                      {user.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Status Section */}
            <div className="pt-4 border-t border-[#e3e5ec]">
              <h3 className="text-lg font-semibold text-[#595e70] mb-4">
                Account Status
              </h3>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-semibold text-green-800">
                    Active Account
                  </p>
                  <p className="text-xs text-green-600 mt-0.5">
                    Your account is active and in good standing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info Note */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">Note:</span> This is a read-only view
          of your profile. Contact your administrator if you need to update any
          information.
        </p>
      </div>
    </div>
  );
}
