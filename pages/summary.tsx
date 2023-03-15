import React from "react";
import { useAppContext } from "@/context/app-context";
import Layout from "@/components/Layout";

export default function Summary() {
  const { plan, planDuration, addOns, pricing, isConcluded } = useAppContext();
  console.log(pricing);
  return (
    <Layout>
      {isConcluded ? (
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
            {plan} ({planDuration})
          </h3>
          <a href="/">Change</a>
        </>
      )}
    </Layout>
  );
}
