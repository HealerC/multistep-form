import React from "react";
import {
  Addons,
  defaultState,
  PricingData,
  StateKeys,
} from "./interfaces-states";
import useSWR from "swr";
import { UserInfo } from "./interfaces-states";
import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  UseFormTrigger,
} from "react-hook-form/dist/types";
import { useForm } from "react-hook-form";

// Handle validation of the form
type ReactHookForm = {
  register: UseFormRegister<UserInfo>;
  getValues: UseFormGetValues<UserInfo>;
  errors: FieldErrors<UserInfo>;
  isValid: boolean;
  trigger: UseFormTrigger<UserInfo>;
};

// Fetcher which SWR wraps in order to fetch JSON from API
const fetcher = (url: URL) => fetch(url).then((res) => res.json());

// App Context which all components will utilize
type Context = typeof defaultState & {
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
  confirm(): void;
  setUserInfo(user: UserInfo): void;
  formHandler: ReactHookForm;
};

const AppContext = React.createContext<Context | undefined>(undefined);
type Props = { children: React.ReactNode };

export default function AppProvider({ children }: Props) {
  const [state, setState] = React.useState<typeof defaultState>(defaultState);
  const {
    register,
    getValues,
    formState: { errors, isValid },
    trigger,
  } = useForm<UserInfo>({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
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

  function confirm() {
    setState({ ...state, isConfirmed: true });
  }

  function setUserInfo(user: UserInfo) {
    if (user.name && user.email && user.phone) {
      setState({ ...state, ...user });
    } else {
      console.log("Something is going on");
    }
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
        confirm,
        setUserInfo,
        formHandler: { register, errors, trigger, getValues, isValid },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) throw new Error("Context is not defined");
  return context;
}
