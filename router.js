function route(handle, pathname) {
    console.log("About to route to " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        console.log("Request handler " + pathname + " not found.");
        return "404 Not Found";
    }
}

exports.route = route;
