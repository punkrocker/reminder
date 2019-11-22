import * as React from "react";
import {WiredCheckbox} from "react-wired-element";

// tslint:disable-next-line:interface-name
export interface MainPageProps {
    compiler: string;
    framework: string;
}

export class MainPage extends React.Component<MainPageProps, {}> {
    public render() {
        return (<WiredCheckbox text="Hello" />);
    }
}
