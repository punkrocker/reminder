import * as notifier from "node-notifier";

export default class Alarm {
    public static showMessage() {
        notifier.notify({title: "hello", message: "world"});
    }
}
