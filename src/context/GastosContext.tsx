import { createContext, useContext, useState } from "react";

type Gasto = {
  id: string;
  descricao: string;
  valor: number;
};

type ContextType = {
  gastos: Gasto[];
  adicionar: (g: Gasto) => void;
  remover: (id: string) => void;
};

const GastosContext = createContext<ContextType>({} as ContextType);

export function GastosProvider({ children }: any) {
  const [gastos, setGastos] = useState<Gasto[]>([]);

  function adicionar(gasto: Gasto) {
    setGastos((prev) => [...prev, gasto]);
  }

  function remover(id: string) {
    setGastos((prev) => prev.filter((g) => g.id !== id));
  }

  return (
    <GastosContext.Provider value={{ gastos, adicionar, remover }}>
      {children}
    </GastosContext.Provider>
  );
}

export function useGastos() {
  return useContext(GastosContext);
}
