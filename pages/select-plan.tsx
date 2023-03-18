import { useAppContext } from "@/context/app-context";
import Layout from "@/components/Layout";
import { getPlanPricing } from "@/utils/get-pricing";

export default function SelectPlan() {
  const { plan, planDuration, handleChange, pricing } = useAppContext();

  return (
    <Layout>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <label htmlFor="arcade">
        Arcade {getPlanPricing(pricing, "arcade", planDuration)[1]}{" "}
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
        Advanced {getPlanPricing(pricing, "advanced", planDuration)[1]}
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
      <label htmlFor="pro">
        Pro {getPlanPricing(pricing, "pro", planDuration)[1]}
      </label>
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
