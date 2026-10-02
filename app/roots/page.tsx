import type { Metadata } from "next";
import Roots from "../components/Roots";

export const metadata: Metadata = {
  title: "Roots",
};

export default function RootsPage() {
  return <Roots />;
}