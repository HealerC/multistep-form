import React from "react";
import { useAppContext } from "@/context/app-context";
import Layout from "@/components/Layout";
import HeadersPage from "@/components/HeadersPage";
import TextFieldHookForm from "@/components/TextFieldHookForm";

export default function YourInfo() {
  const {
    formHandler: { errors, register },
  } = useAppContext();
  return (
    <Layout>
      <div>
        <HeadersPage
          heading="Personal info"
          info="Please provide your name, email address and phone number."
        />
        <TextFieldHookForm
          helperText={errors.name && errors.name.message}
          name="name"
          label="name"
          autoComplete="name"
          placeholder="e.g. Stephen King"
          validationRegister={register("name", {
            required: "Please enter your name",
          })}
        />
        <TextFieldHookForm
          helperText={
            errors.email &&
            (errors.email.type === "required"
              ? errors.email.message
              : "Please enter a valid email")
          }
          name="email"
          label="email address"
          autoComplete="email"
          placeholder="e.g. stephenking@lorem.com"
          validationRegister={register("email", {
            required: "This field is required",
            pattern: /^\S+@\S+$/i,
          })}
        />
        <TextFieldHookForm
          helperText={errors.phone && errors.phone.message}
          name="phone"
          label="phone number"
          type="tel"
          autoComplete="tel"
          placeholder="e.g. +1 234 567 890"
          validationRegister={register("phone", {
            required: "This field is required",
          })}
        />
      </div>
    </Layout>
  );
}
