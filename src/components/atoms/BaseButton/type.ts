import { ReactNode } from "react";

export interface BaseButtonPropsType {
    children: ReactNode;
    filled?: boolean;
    click: () => void;
}