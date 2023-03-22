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
import HeadersPage from "@/components/HeadersPage";

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
          <HeadersPage
            heading="Finishing up"
            info="Double-check everything looks OK before confirming."
          />
          <table className="block rounded-lg bg-magnolia p-5 shadow">
            <thead className="mb-3 block border-b border-b-gray-light pb-5">
              <tr>
                <th className="font-medium capitalize text-blue-marine-dark">
                  {plan} ({planDuration})
                </th>
              </tr>
              <tr className="flex justify-between">
                <td className="text-sm text-gray-cool underline">
                  <Link href="/select-plan">Change</Link>
                </td>
                <td className="text-sm font-bold text-blue-marine-dark">
                  {getPlanPricing(pricing, plan, planDuration)[1]}
                </td>
              </tr>
            </thead>
            <tbody className="block">
              {addOns.map((addOn) => (
                <tr key={addOn} className="mb-3 flex justify-between">
                  <th className="text-sm font-normal text-gray-cool">
                    {addOnPhrases[addOn].label}
                  </th>
                  <td className="text-sm text-blue-marine-dark">
                    +{getAddOnPricing(pricing, addOn, planDuration)[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <section className="block p-5">
            <tr className="flex justify-between">
              <h4 className="text-sm text-gray-cool">
                Total (per {planDuration.replace("ly", "")})
              </h4>
              <p className="text-lg font-bold text-blue-standard">
                {sumTotal[1]}
              </p>
            </tr>
          </section>
        </>
      )}
    </Layout>
  );
}
