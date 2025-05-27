'use client';

import { createContext, useContext, useState, ReactNode } from "react";

// Définition du type pour notre contexte
type GlobalContextType = {
  env: string;
  envs: { id: string, label: string }[];
  setEnv?: (env: string) => void;
};

const defaultEnvs = [
  { id: "de", label: "Développement" },
  { id: "in", label: "Integration" },
  { id: "va", label: "Validation" },
  { id: "pp", label: "Pré-production" },
  { id: "pr", label: "Production" }
];

// Création du contexte avec une valeur par défaut
export const GlobalContext = createContext<GlobalContextType>({ 
  env: "in", 
  envs: defaultEnvs
});

// Hook personnalisé pour utiliser le contexte
export const useGlobalContext = () => useContext(GlobalContext);

// Provider component
export function ClientProvider({ children }: { children: ReactNode }) {
  const [env, setEnv] = useState("in");

  return (
    <GlobalContext.Provider value={{ env, envs: defaultEnvs, setEnv }}>
      {children}
    </GlobalContext.Provider>
  );
} 