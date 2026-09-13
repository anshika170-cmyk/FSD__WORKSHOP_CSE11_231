import http from "http";
const array = []
const PORT = 8080;

const app = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/msg" && method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");

        res.end("Welcome to backend");
    }
    else if(url == "/user" && method == "GET"){

    }
     else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");

        res.end("Route not found");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});