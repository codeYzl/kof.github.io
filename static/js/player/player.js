import { AcGameObject } from "../ac_game_object/base.js";

export class player extends AcGameObject {
    constructor(root, info) {
        super();

        this.x = info.x;
        this.y = info.y;
        this.width = info.width;
        this.height = info.height;
        this.color = info.color;

        this.vx = 0;
        this.vy = 0;

    }
}