import React from "react";
import { useAppContext } from "@/context/app-context";

export default function YourInfo() {
  const { name, email, phone, handleChange } = useAppContext();

  return (
    <div>
      <h2>Personal info</h2>
      <p>Please provide your name, email address and phone number</p>
      <label htmlFor="name">name</label>
      <input
        autoComplete="name"
        name="name"
        value={name}
        onChange={handleChange}
        id="name"
      />
      <label htmlFor="email">email address</label>
      <input
        type="email"
        autoComplete="email"
        name="email"
        value={email}
        onChange={handleChange}
        id="email"
      />
      <label htmlFor="phone">phone number</label>
      <input
        type="tel"
        autoComplete="tel"
        name="phone"
        value={phone}
        onChange={handleChange}
        id="phone"
      />
    </div>
  );
}
