import React from "react";
import { useAppContext } from "@/context/app-context";
import Layout from "@/components/Layout";

export default function YourInfo() {
  const {
    formHandler: { errors, register },
  } = useAppContext();
  return (
    <Layout>
      <h2>Personal info</h2>
      <p>Please provide your name, email address and phone number</p>
      <fieldset>
        {errors.name && <p>{errors.name.message}</p>}
        <label htmlFor="name">name</label>
        <input
          autoComplete="name"
          placeholder="e.g. Stephen King"
          {...register("name", { required: "Please enter your name" })}
          id="name"
          required
        />
      </fieldset>
      <fieldset>
        {errors.email && (
          <p>
            {errors.email.type === "required"
              ? errors.email.message
              : "Please enter a valid email"}
          </p>
        )}
        <label htmlFor="email">email address</label>
        <input
          type="email"
          autoComplete="email"
          placeholder="e.g. stephenking@lorem.com"
          {...register("email", {
            required: "This field is required",
            pattern: /^\S+@\S+$/i,
          })}
          id="email"
          required
        />
      </fieldset>
      <fieldset>
        {errors.phone && <p>{errors.phone.message}</p>}
        <label htmlFor="phone">phone number</label>
        <input
          type="tel"
          autoComplete="tel"
          placeholder="e.g. +1 234 567 890"
          {...register("phone", { required: "This field is required" })}
          id="phone"
        />
      </fieldset>
    </Layout>
  );
}
