import React from "react";
import { defaultState } from "./interfaces-states";

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
    console.log("Hello world");
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
