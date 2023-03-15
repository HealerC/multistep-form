import { useAppContext } from "@/context/app-context";
import Layout from "@/components/Layout";

export default function SelectPlan() {
  const { plan, planDuration, handleChange } = useAppContext();
  return (
    <Layout>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <label htmlFor="arcade">Arcade $9/mo</label>
      <input
        type="radio"
        name="plan"
        value="arcade"
        id="arcade"
        checked={plan === "arcade"}
        onChange={handleChange}
      />
      <label htmlFor="advanced">Advanced $12/mo</label>
      <input
        type="radio"
        name="plan"
        value="advanced"
        id="advanced"
        checked={plan === "advanced"}
        onChange={handleChange}
      />

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
