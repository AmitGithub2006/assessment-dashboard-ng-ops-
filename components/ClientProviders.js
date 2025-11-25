'use client';

import { NextUIProvider } from "@nextui-org/react";

export default function ClientProviders({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
