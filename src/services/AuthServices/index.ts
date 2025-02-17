/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    if (result?.success) {
      (await cookies()).set("accessToken", result.data.accessToken);
    }
    return result;
  } catch (err: any) {
    return Error(err);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    if (result?.success) {
      (await cookies()).set("accessToken", result.data.accessToken);
    }
    return result;
  } catch (err: any) {
    return Error(err);
  }
};

export const getUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decode = null;
  if (accessToken) {
    decode = await jwtDecode(accessToken);
    return decode;
  } else {
    return null;
  }
};

export const logOut = async () => {
  (await cookies()).delete("accessToken");
};
