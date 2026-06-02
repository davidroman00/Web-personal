'use client';

import { useContext } from "react";
import { SlidesContext } from "../context/CreateContext";

export function useSlidesContext() {
  const context = useContext(SlidesContext);
  if (!context)
    throw new Error("useSectionContext must be used within a SlidesProvider");
  return context;
}
