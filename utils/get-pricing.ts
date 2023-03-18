import {
  Plan,
  PlanDuration,
  PricingData,
  Addons,
} from "@/context/interfaces-states";

export function getPlanPricing(
  pricing: PricingData,
  plan: Plan,
  duration: PlanDuration
): [number, string] {
  const price = pricing.plans[plan][duration];
  return [price, "$" + price + (duration === "monthly" ? "/mo" : "/yr")];
}

export function getAddOnPricing(
  pricing: PricingData,
  addon: Addons,
  duration: PlanDuration
): [number, string] {
  const price = pricing.addons[addon][duration];
  return [price, "$" + price + (duration === "monthly" ? "/mo" : "/yr")];
}

export function getSumPricing(
  pricing: PricingData,
  plan: Plan,
  duration: PlanDuration,
  addonList: Addons[]
) {
  let price = getPlanPricing(pricing, plan, duration)[0];
  price =
    price +
    addonList.reduce((prev, current) => {
      return prev + getAddOnPricing(pricing, current, duration)[0];
    }, 0);
  return [price, "$" + price + (duration === "monthly" ? "/mo" : "/yr")];
}
