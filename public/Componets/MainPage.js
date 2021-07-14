"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainPage = void 0;
const notifier = require("node-notifier");
const React = require("react");
const react_wired_element_1 = require("react-wired-element");
class MainPage extends React.Component {
    render() {
        return (React.createElement("div", { style: { background: 'green' } },
            React.createElement(react_wired_element_1.WiredListbox, null,
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "9:00" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "9:30" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "10:00" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "10:30" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "11:00" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "11:30" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "12:00" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "13:30" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "14:00" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "14:30" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "15:00" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "15:30" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "16:00" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "16:30" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "17:00" }),
                React.createElement(react_wired_element_1.WiredCheckbox, { text: "17:30" }))));
    }
    warning() {
        notifier.notify({ title: "hello", message: "world" });
    }
}
exports.MainPage = MainPage;
//# sourceMappingURL=MainPage.js.map