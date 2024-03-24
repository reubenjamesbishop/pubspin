import React from "react";
import PubspinAppshell from "../components/PubSpinAppshell/PubSpinAppshell";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <PubspinAppshell>{props.children}</PubspinAppshell>
    </>
  );
}
