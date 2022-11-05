let AC_GAME_OBJECT = [];
class AcGameObject {
    constructor() {
        AC_GAME_OBJECT.push(this);
        this.timedelta = 0;
        this.has_call_start = false;
    }
    start() {

    }
    update() {

    }
    destroy() {
        for (let i in AC_GAME_OBJECT) {
            if (AC_GAME_OBJECT[i] == this) {
                AC_GAME_OBJECT.splice(i, 1);
                break;
            }
        }
    }
}
let last_timestamp;
let AC_GAME_OBJECTS_FRAME = (timestep) => {
    for (let obj of AC_GAME_OBJECT) {
        if (!obj.has_call_start) {
            obj.has_call_start = true;
            obj.start();
        } else {
            obj.timedelta = timestep - last_timestamp;
            obj.update();

        }
    }
    last_timestamp = timestep;
    requestAnimationFrame(AC_GAME_OBJECTS_FRAME);
}
requestAnimationFrame(AC_GAME_OBJECTS_FRAME);