"use client";

import { useEffect } from "react";

export function LangAttribute({ lng }) {
  useEffect(() => {
    document.documentElement.lang = lng;
  }, [lng]);

  return null;
}
