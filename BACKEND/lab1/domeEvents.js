import EventEmitter from "node:events";
// const emitter = new EventEmitter();
// emitter.on("click", () => {
//     console.log("Button clicked!");
// });
// emitter.emit("click");
function createDomElements() {
    const emitter = new EventEmitter();

    return {
        addEventListener(eventType, listener) {
            emitter.on(eventType, listener);
        },

        removeEventListener(eventType, listener) {
            emitter.off(eventType, listener);
        },

        dispatchEvent(event) {
            event.target = this;
            event.currentTarget = this;

            // Fire the event
            emitter.emit(event.eventType, event);
        }
    };
}

const button = createDomElements();
button.addEventListener("save", (event) => {
    console.log("Saving...");
    
});
function handleClick(event) {
    console.log("Button clicked!");
}
button.addEventListener("click", handleClick);
button.dispatchEvent({
    eventType: "save"
});
button.dispatchEvent({
    eventType: "click"
});
button.addEventListener("submit",()=>{
    console.log("Data submitted sucessfully.....");
});
button.dispatchEvent({
    eventType:"submit"
})