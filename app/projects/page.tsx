import type { Metadata } from "next";
import CurrentFocus from "../components/CurrentFocus";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return <CurrentFocus />;
}