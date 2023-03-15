import React from "react";
import {
  Addons,
  defaultState,
  PricingData,
  StateKeys,
} from "./interfaces-states";
import useSWR from "swr";

const fetcher = (url: URL) => fetch(url).then((res) => res.json());

type Context = typeof defaultState & {
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

const AppContext = React.createContext<Context | undefined>(undefined);
type Props = { children: React.ReactNode };

export default function AppProvider({ children }: Props) {
  const [state, setState] = React.useState<typeof defaultState>(defaultState);
  const { data, error, isLoading } = useSWR("/api/pricing", fetcher);

  React.useEffect(() => {
    if (error) {
      setState({ ...state, error: true, loading: false });
      return;
    }

    if (!data) {
      setState({ ...state, loading: true });
      return;
    } else {
      const pricing: PricingData = JSON.parse(data);
      setState({ ...state, loading: false, pricing });
    }
  }, [data, error, isLoading]);

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
