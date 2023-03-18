import { useAppContext } from "@/context/app-context";
import Layout from "@/components/Layout";
import { Plan, PlanDuration } from "@/context/interfaces-states";

export default function SelectPlan() {
  const { plan, planDuration, handleChange, pricing } = useAppContext();

  function getPlanPricing(plan: Plan, duration: PlanDuration) {
    console.log(plan, duration);
    return (
      "$" +
      pricing.plans[plan][duration] +
      (duration === "monthly" ? "/mo" : "/yr")
    );
  }

  return (
    <Layout>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <label htmlFor="arcade">
        Arcade {getPlanPricing("arcade", planDuration)}{" "}
      </label>
      <input
        type="radio"
        name="plan"
        value="arcade"
        id="arcade"
        checked={plan === "arcade"}
        onChange={handleChange}
      />
      {planDuration === "yearly" && "2 months free"}
      <label htmlFor="advanced">
        Advanced {getPlanPricing("advanced", planDuration)}
      </label>
      <input
        type="radio"
        name="plan"
        value="advanced"
        id="advanced"
        checked={plan === "advanced"}
        onChange={handleChange}
      />
      {planDuration === "yearly" && "2 months free"}
      <label htmlFor="pro">Pro {getPlanPricing("pro", planDuration)}</label>
      <input
        type="radio"
        name="plan"
        value="pro"
        id="pro"
        checked={plan === "pro"}
        onChange={handleChange}
      />
      {planDuration === "yearly" && "2 months free"}

      <label htmlFor="monthly">Monthly</label>
      <input
        type="radio"
        name="planDuration"
        value="monthly"
        id="monthly"
        checked={planDuration === "monthly"}
        onChange={handleChange}
      />
      <label htmlFor="yearly">Yearly</label>
      <input
        type="radio"
        name="planDuration"
        value="yearly"
        id="yearly"
        checked={planDuration === "yearly"}
        onChange={handleChange}
      />
    </Layout>
  );
}
