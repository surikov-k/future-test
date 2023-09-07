import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export function Main({children}: MainProps) {
  return (
    <div className="container">
      {children}
    </div>
  );
}
