export type Plan = "arcade" | "advanced" | "pro";
export type PlanDuration = "monthly" | "yearly";
export type Addons = "service" | "storage" | "profile";

export const defaultState = {
  name: "",
  email: "",
  phone: "",
  planDuration: "" as PlanDuration,
  plan: "" as Plan,
  addOns: [] as Addons[],
};

export type StateKeys = keyof typeof defaultState;
