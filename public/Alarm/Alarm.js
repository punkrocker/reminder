"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notifier = require("node-notifier");
class Alarm {
    static showMessage() {
        notifier.notify({ title: "hello", message: "world" });
    }
}
exports.default = Alarm;
//# sourceMappingURL=Alarm.js.map