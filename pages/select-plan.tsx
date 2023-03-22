import { useAppContext } from "@/context/app-context";
import Layout from "@/components/Layout";
import { getPlanPricing } from "@/utils/get-pricing";
import HeadersPage from "@/components/HeadersPage";
import arcadeIcon from "@/assets/images/icon-arcade.svg";
import advancedIcon from "@/assets/images/icon-advanced.svg";
import proIcon from "@/assets/images/icon-pro.svg";
import RadioCustom from "@/components/RadioCustom";
import CustomRadioContent from "@/components/CustomRadioContent";
import CustomToggleSlider from "@/components/CustomToggleSlider";

export default function SelectPlan() {
  const { plan, planDuration, handleChange, pricing } = useAppContext();

  return (
    <Layout>
      {pricing.plans && (
        <div>
          <HeadersPage
            heading="Select your plan"
            info="You have the option of monthly or yearly billing."
          />

          <fieldset className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <RadioCustom
              name="plan"
              value="arcade"
              checked={plan === "arcade"}
              handleChange={handleChange}
            >
              <CustomRadioContent
                imageSrc={arcadeIcon}
                plan="arcade"
                pricing={getPlanPricing(pricing, "arcade", planDuration)[1]}
                planDuration={planDuration}
              />
            </RadioCustom>

            <RadioCustom
              name="plan"
              value="advanced"
              checked={plan === "advanced"}
              handleChange={handleChange}
            >
              <CustomRadioContent
                imageSrc={advancedIcon}
                plan="advanced"
                pricing={getPlanPricing(pricing, "advanced", planDuration)[1]}
                planDuration={planDuration}
              />
            </RadioCustom>

            <RadioCustom
              name="plan"
              value="pro"
              checked={plan === "pro"}
              handleChange={handleChange}
            >
              <CustomRadioContent
                imageSrc={proIcon}
                plan="pro"
                pricing={getPlanPricing(pricing, "pro", planDuration)[1]}
                planDuration={planDuration}
              />
            </RadioCustom>
          </fieldset>

          <div className="mt-6 rounded-lg bg-magnolia ">
            <CustomToggleSlider
              name="planDuration"
              values={["monthly", "yearly"]}
              handleChange={handleChange}
              value={planDuration}
              labels={["monthly", "yearly"]}
            />
          </div>
        </div>
      )}
    </Layout>
  );
}
