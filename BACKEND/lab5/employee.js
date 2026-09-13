import http from 'http';
import fs from 'fs';

const port = 3000;
const filePath = "employees.json";

// Initialize file if not exists
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
}

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    res.setHeader("Content-Type", "application/json");

    // HOME ROUTE
    if (url === "/" && method === "GET") {
        res.statusCode = 200;
        res.end(JSON.stringify({
            message: "Employee Management Server is running successfully!",
            port: port
        }));
    }

    // ADD EMPLOYEE
    else if (url === "/employee" && method === "POST") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            try {
                const parsedData = JSON.parse(body);

                const newEmployee = {
                    id: parsedData.id,
                    name: parsedData.name,
                    email: parsedData.email,
                    department: parsedData.department
                };

                const data = JSON.parse(
                    fs.readFileSync(filePath, "utf-8")
                );

                data.push(newEmployee);

                fs.writeFileSync(
                    filePath,
                    JSON.stringify(data, null, 2)
                );

                res.statusCode = 201;

                res.end(JSON.stringify({
                    message: "Employee saved successfully",
                    employee: newEmployee
                }));

            } catch (err) {

                res.statusCode = 400;

                res.end(JSON.stringify({
                    error: "Invalid JSON data"
                }));
            }
        });
    }

    // GET ALL EMPLOYEES
    else if (url === "/employees" && method === "GET") {

        const data = fs.readFileSync(filePath, "utf-8");

        res.statusCode = 200;
        res.end(data);
    }

    // GET EMPLOYEE BY ID
    else if (url.startsWith("/employee/") && method === "GET") {

        // Example: /employee/101
        const empId = parseInt(url.split("/")[2]);

        console.log("Requested ID:", empId);

        const data = JSON.parse(
            fs.readFileSync(filePath, "utf-8")
        );

        const employee = data.find(
            emp => emp.id === empId
        );

        if (employee) {

            res.statusCode = 200;

            res.end(JSON.stringify(employee));

        } else {

            res.statusCode = 404;

            res.end(JSON.stringify({
                error: "Employee not found"
            }));
        }
    }

    // INVALID ROUTE
    else {

        res.statusCode = 404;

        res.end(JSON.stringify({
            error: "Page not found"
        }));
    }
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});