import type { Metadata } from "next";
import Observations from "../components/Observations";

export const metadata: Metadata = {
  title: "Observations",
};

export default function ObservationsPage() {
  return <Observations />;
}