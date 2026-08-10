import type { Experiment } from "../experiment/Experiment";

export const ExperimentTemplate: Omit<Experiment, "id"> = {
  type: "Physical",
  name: "",
  description: "",
  location: "",
  institution: "UESB",
  schedule_time: 2147483647,
};