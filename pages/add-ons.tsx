import React from "react";
import Layout from "@/components/Layout";
import { useAppContext } from "@/context/app-context";
import { getAddOnPricing } from "@/utils/get-pricing";

export default function AddOns() {
  const { addOns, handleChange, planDuration, pricing } = useAppContext();

  return (
    <Layout>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience</p>
      <label htmlFor="service">
        Online service (Access to multiplayer games) +
        {getAddOnPricing(pricing, "service", planDuration)}
      </label>
      <input
        type="checkbox"
        name="addOns"
        value="service"
        checked={addOns.includes("service")}
        onChange={handleChange}
        id="service"
      />
      <label htmlFor="storage">
        Larger storage (Extra 1TB of cloud save) +
        {getAddOnPricing(pricing, "storage", planDuration)}
      </label>
      <input
        type="checkbox"
        name="addOns"
        value="storage"
        checked={addOns.includes("storage")}
        onChange={handleChange}
        id="storage"
      />
      <label htmlFor="profile">
        Customizable profile (Custom theme on your profile) +
        {getAddOnPricing(pricing, "profile", planDuration)}
      </label>
      <input
        type="checkbox"
        name="addOns"
        value="profile"
        checked={addOns.includes("profile")}
        onChange={handleChange}
        id="profile"
      />
    </Layout>
  );
}
