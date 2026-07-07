console.log("Throttling");
//throtling it is a techniques that runs at function at most one every specified interval

//no matter how many times the event fires;

function throttle(callback, interval) {
    let lastCall = 0;

    return function (...args) {
        const currentTime = Date.now();

        if (currentTime - lastCall < interval * 1000) {
            return;
        }

        lastCall = currentTime;
        callback(...args);
    };
}

function sendcomment(msg) {
    console.log("Message:", msg);
}

const sendcommentusingthrottle = throttle(sendcomment, 1);

sendcommentusingthrottle("Call 1");
sendcommentusingthrottle("Call 2");
sendcommentusingthrottle("Call 3");
sendcommentusingthrottle("Call 4");
sendcommentusingthrottle("Call 5");

setTimeout(() => {
    sendcommentusingthrottle("Call after 1 second");
}, 1000);

setTimeout(() => {
    sendcommentusingthrottle("Call after 2 seconds");
}, 2000);

setTimeout(() => {
    sendcommentusingthrottle("Call after 3 seconds");
}, 3000);