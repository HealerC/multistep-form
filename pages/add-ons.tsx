import React from "react";
import Layout from "@/components/Layout";
import { useAppContext } from "@/context/app-context";
import { getAddOnPricing } from "@/utils/get-pricing";
import HeadersPage from "@/components/HeadersPage";
import CustomCheckboxContent from "@/components/CustomCheckboxContent";
import CheckboxCustom from "@/components/CheckboxCustom";

export default function AddOns() {
  const { addOns, handleChange, planDuration, pricing, isConfirmed } =
    useAppContext();

  return (
    <Layout>
      {pricing.plans && (
        <div>
          <HeadersPage
            heading="Pick add-ons"
            info="Add-ons help enhance your gaming experience."
          />
          <CheckboxCustom
            name="addOns"
            value="service"
            checked={addOns.includes("service")}
            handleChange={handleChange}
            disabled={isConfirmed}
          >
            <CustomCheckboxContent
              heading="Online service"
              info="Access to multiplayer games"
              pricing={
                "+" + getAddOnPricing(pricing, "service", planDuration)[1]
              }
            />
          </CheckboxCustom>
          <CheckboxCustom
            name="addOns"
            value="storage"
            checked={addOns.includes("storage")}
            handleChange={handleChange}
            disabled={isConfirmed}
          >
            <CustomCheckboxContent
              heading="Larger storage"
              info="Extra 1TB of cloud save"
              pricing={
                "+" + getAddOnPricing(pricing, "storage", planDuration)[1]
              }
            />
          </CheckboxCustom>
          <CheckboxCustom
            name="addOns"
            value="profile"
            checked={addOns.includes("profile")}
            handleChange={handleChange}
            disabled={isConfirmed}
          >
            <CustomCheckboxContent
              heading="Customizable profile"
              info="Custom theme on your profile"
              pricing={
                "+" + getAddOnPricing(pricing, "profile", planDuration)[1]
              }
            />
          </CheckboxCustom>
        </div>
      )}
    </Layout>
  );
}
