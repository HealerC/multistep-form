import AddOns from "@/pages/add-ons";
import React from "react";
import { Addons, defaultState, StateKeys } from "./interfaces-states";

type Context = typeof defaultState & {
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

const AppContext = React.createContext<Context | undefined>(undefined);
export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = React.useState<typeof defaultState>(defaultState);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name as StateKeys;
    let value = event.target.value;

    if (name === "addOns") {
      const stateAddons = state.addOns;

      if (stateAddons.includes(value as Addons)) {
        const addOns = stateAddons.filter((item) => item !== value);
        setState({ ...state, addOns });
      } else {
        setState({ ...state, addOns: [...state.addOns, value as Addons] });
      }
      return;
    }

    setState({ ...state, [name]: value });
  }

  return (
    <AppContext.Provider value={{ ...state, handleChange }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) throw new Error("Context is not defined");
  return context;
}
