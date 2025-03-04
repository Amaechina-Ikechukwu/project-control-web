import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function AuthenticationPage() {
  return (
    <div>
      <LoginLink postLoginRedirectURL="/">Sign in</LoginLink>
      <RegisterLink postLoginRedirectURL="/">Sign up</RegisterLink>
    </div>
  );
}
