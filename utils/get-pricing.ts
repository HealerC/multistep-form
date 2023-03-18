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
) {
  return (
    "$" +
    pricing.plans[plan][duration] +
    (duration === "monthly" ? "/mo" : "/yr")
  );
}

export function getAddOnPricing(
  pricing: PricingData,
  addon: Addons,
  duration: PlanDuration
) {
  console.log(addon, duration);
  return (
    "$" +
    pricing.addons[addon][duration] +
    (duration === "monthly" ? "/mo" : "/yr")
  );
}
