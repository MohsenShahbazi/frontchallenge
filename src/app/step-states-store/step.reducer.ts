import {createReducer, on} from "@ngrx/store";
import {nextStep} from "./step.action";

export const initialEntries: any[] = [];

export const stepReducer = createReducer(
  initialEntries,
  on(nextStep, _ => [])
);
