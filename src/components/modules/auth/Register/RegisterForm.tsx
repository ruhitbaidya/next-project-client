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
import { registerValidation } from "./registerValidation";
import Logo from "@/components/shared/Logo";
import { registerUser } from "@/services/AuthServices";
import { toast } from "sonner";

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(registerValidation),
  });
  const {
    formState: { isSubmitting },
    reset,
  } = form;
  const password = form.watch("password");
  const confirmPass = form.watch("confirmPassword");
  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data);
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="name"
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="confirmPassword"
                      value={field.value || ""}
                      type="password"
                    />
                  </FormControl>
                  <FormDescription />
                  {confirmPass && password !== confirmPass ? (
                    <FormMessage>Both Password Not Match</FormMessage>
                  ) : (
                    ""
                  )}
                </FormItem>
              )}
            />
            <Button
              disabled={confirmPass && password !== confirmPass ? true : false}
              className="w-full"
              type="submit"
            >
              {isSubmitting ? "Registring....." : "Register"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
