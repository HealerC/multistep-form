import React from "react";
import { useAppContext } from "@/context/app-context";

export default function Summary() {
  const { plan, planDuration, addOns, pricing } = useAppContext();
  console.log(pricing);
  return (
    <div>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <h3>
        {plan} ({planDuration})
      </h3>
      <a href="/">Change</a>
    </div>
  );
}
