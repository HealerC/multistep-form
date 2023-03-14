import React from "react";
import { defaultState, StateKeys } from "./interfaces-states";

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
    const value = event.target.value;

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
