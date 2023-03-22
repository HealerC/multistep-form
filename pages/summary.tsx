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
import ConfirmIcon from "@/assets/images/icon-thank-you.svg";
import Image from "next/image";

export default function Summary() {
  const { plan, planDuration, addOns, pricing, isConfirmed } = useAppContext();
  if (!pricing.plans) {
    return;
  }
  const sumTotal = getSumPricing(pricing, plan, planDuration, addOns);
  return (
    <Layout>
      {isConfirmed ? (
        <div className="flex grow items-center justify-center">
          <div className="text-center">
            <Image src={ConfirmIcon} alt="Thank you" className="mx-auto mb-8" />
            <h2 className="text-3xl font-bold leading-8 text-blue-marine-dark">
              Thank you!
            </h2>
            <p className="mt-2 text-[0.9rem] text-gray-cool">
              Thanks for confirming your subscription! We hope you have fun
              using our platform! If you ever need support, please feel free to
              email us at{" "}
              <a
                href="mailto:support@loremgaming.com"
                className="hover:underline"
              >
                support@loremgaming.com
              </a>
            </p>
          </div>
        </div>
      ) : pricing.plans ? (
        <div>
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
          <section className="flex justify-between p-5">
            <h4 className="text-sm text-gray-cool">
              Total (per {planDuration.replace("ly", "")})
            </h4>
            <p className="text-lg font-bold text-blue-standard">
              {sumTotal[1]}
            </p>
          </section>
        </div>
      ) : (
        <></>
      )}
    </Layout>
  );
}
