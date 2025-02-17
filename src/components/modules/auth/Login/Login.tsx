/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitErrorHandler, useForm } from "react-hook-form";

import Logo from "@/components/shared/Logo";

import { toast } from "sonner";
import { loginValidation } from "./loginValidation";
import { loginUser } from "@/services/AuthServices";

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginValidation),
  });
  const {
    formState: { isSubmitting },
    reset,
  } = form;
  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      if (res?.success) {
        toast.success(res?.message);
        reset();
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border p-8 w-[40%] rounded-lg">
        <h2 className="flex justify-center items-center">
          <Logo />
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="email"
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="password"
                      value={field.value || ""}
                      type="password"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full" type="submit">
              {isSubmitting ? "LogIning....." : "Login"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
