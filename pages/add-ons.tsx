import { useAppContext } from "@/context/app-context";
import React from "react";

export default function AddOns() {
  const { addOns, handleChange } = useAppContext();
  return (
    <div>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience</p>
      <label htmlFor="service">
        Online service (Access to multiplayer games) $1/mo
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
        Larger storage (Extra 1TB of cloud save) $2/mo
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
        Customizable profile (Custom theme on your profile) $2/mo
      </label>
      <input
        type="checkbox"
        name="addOns"
        value="profile"
        checked={addOns.includes("profile")}
        onChange={handleChange}
        id="profile"
      />
    </div>
  );
}
