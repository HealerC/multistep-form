type TimeDuration = {
  monthly: number;
  yearly: number;
};

export type PricingData = {
  plans: {
    arcade: TimeDuration;
    advanced: TimeDuration;
    pro: TimeDuration;
  };
  addons: {
    service: TimeDuration;
    storage: TimeDuration;
    profile: TimeDuration;
  };
};

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
  error: false,
  loading: true,
  pricing: {} as PricingData,
};

export type StateKeys = keyof typeof defaultState;
