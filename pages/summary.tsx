import React from "react";
import { useAppContext } from "@/context/app-context";
import Layout from "@/components/Layout";
import Link from "next/link";
import {
  getPlanPricing,
  getAddOnPricing,
  getSumPricing,
} from "@/utils/get-pricing";
import { addOnPhrases } from "@/context/interfaces-states";

export default function Summary() {
  const { plan, planDuration, addOns, pricing, isConfirmed } = useAppContext();
  const sumTotal = getSumPricing(pricing, plan, planDuration, addOns);
  console.log(sumTotal);
  return (
    <Layout>
      {isConfirmed ? (
        <>
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform! If you ever need support, please feel free to email us
            at{" "}
            <a href="mailto:support@loremgaming.com">support@loremgaming.com</a>
          </p>
        </>
      ) : (
        <>
          <h2>Finishing up</h2>
          <p>Double-check everything looks OK before confirming.</p>
          <h3>
            {plan} ({planDuration}) <Link href="/select-plan">Change</Link>{" "}
            {getPlanPricing(pricing, plan, planDuration)[1]}
            {addOns.map((addOn) => (
              <div key={addOn}>
                {addOnPhrases[addOn].label} +
                {getAddOnPricing(pricing, addOn, planDuration)[1]}
              </div>
            ))}
            Total (per {planDuration.replace("ly", "")}) {sumTotal[1]}
          </h3>
        </>
      )}
    </Layout>
  );
}
