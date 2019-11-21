import * as React from "react";

// tslint:disable-next-line:interface-name
export interface MainPageProps {
    compiler: string;
    framework: string;
}

export class MainPage extends React.Component<MainPageProps, {}> {
    public render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>;
    }
}
