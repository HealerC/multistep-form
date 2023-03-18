type AddOnPhrases = {
  [key in Addons]: { label: string; moreInfo: string };
};

export const addOnPhrases: AddOnPhrases = {
  service: {
    label: "Online service",
    moreInfo: "Access to multiplayer games",
  },
  storage: {
    label: "Larger storage",
    moreInfo: "Extra 1TB of cloud save",
  },
  profile: {
    label: "Customizable profile",
    moreInfo: "Custom theme on your profile",
  },
};

export type UserInfo = {
  name: string;
  email: string;
  phone: string;
};

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
  planDuration: "monthly" as PlanDuration,
  plan: "arcade" as Plan,
  addOns: [] as Addons[],
  error: false,
  loading: true,
  pricing: {} as PricingData,
  isConfirmed: false,
};

export type StateKeys = keyof typeof defaultState;
