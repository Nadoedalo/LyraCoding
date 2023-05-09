import { makeAutoObservable } from "mobx";

export class ToolStore {

    activeTools = {};

    constructor() {
        makeAutoObservable(this);
        return this;
    }

    toggleTool(name) {
        this.activeTools[name] = !this.activeTools[name];
    }
}
