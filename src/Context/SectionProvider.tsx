'use client';

import { ReactNode, useState } from "react";
import { SectionContext } from "./CreateContext";

type SectionProviderProps = {
  children: ReactNode;
};

function SectionProvider({ children }: SectionProviderProps) {
  const [active, setActive] = useState(0);

  return (
    <SectionContext.Provider
      value={{ active, setActive }}
    >
      {children}
    </SectionContext.Provider>
  );
}

export default SectionProvider;
