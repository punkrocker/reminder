import * as notifier from "node-notifier";
import * as React from "react";
import {
    WiredButton,
} from "react-wired-element";

// tslint:disable-next-line:interface-name
export interface MainPageProps {
    compiler: string;
    framework: string;
}

export class MainPage extends React.Component<MainPageProps, {}> {

    public render() {
        return (<div onClick={this.warning.bind(this)}><WiredButton elevation={3}>Hello</WiredButton></div>);
    }

    public warning() {
        notifier.notify({title: "hello", message: "world"});
    }
}
