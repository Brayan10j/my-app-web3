"use client";

import { ConnectButton } from "thirdweb/react";
import { useTheme } from "next-themes";
import { client } from "@/app/client";

export default function ConnectButtonWrapper() {
  const { theme } = useTheme();

  return (
    <ConnectButton client={client} theme={theme === "light" || theme === "dark" ? theme : "light"} />
  );
}
