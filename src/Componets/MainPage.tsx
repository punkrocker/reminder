import * as notifier from "node-notifier";
import * as React from "react";
import {
    WiredButton, WiredListbox, WiredCheckbox
} from "react-wired-element";

// tslint:disable-next-line:interface-name
export interface MainPageProps {
    compiler: string;
    framework: string;
}

export class MainPage extends React.Component<MainPageProps, {}> {

    public render() {
        return (<div>
            <WiredListbox>
                <WiredCheckbox text="9:00" />
                <WiredCheckbox text="9:30" />
                <WiredCheckbox text="10:00" />
                <WiredCheckbox text="10:30" />
                <WiredCheckbox text="11:00" />
                <WiredCheckbox text="11:30" />
                <WiredCheckbox text="12:00" />
                <WiredCheckbox text="13:30" />
                <WiredCheckbox text="14:00" />
                <WiredCheckbox text="14:30" />
                <WiredCheckbox text="15:00" />
                <WiredCheckbox text="15:30" />
                <WiredCheckbox text="16:00" />
                <WiredCheckbox text="16:30" />
                <WiredCheckbox text="17:00" />
                <WiredCheckbox text="17:30" />
            </WiredListbox>
        </div>);
    }

    public warning() {
        notifier.notify({ title: "hello", message: "world" });
    }
}
