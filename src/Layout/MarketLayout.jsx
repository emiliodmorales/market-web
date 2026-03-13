import { Global } from "@emotion/react";
import Navbar from "./Navbar";

export default function MarketLayout({ children }) {
  return (
    <div>
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
          },
        }}
      />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
