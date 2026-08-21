
import fs from "node:fs/promises";

const FilePath = "userData.json";
async function createFile(data) {
    try {
        await fs.writeFile(
            FilePath,
            JSON.stringify(data, null, 2),
            "utf8"
        );
        console.log("JSON file created successfully");
    } catch (error) {
        console.log("Error:", error);
    }
}
async function readFile() {
    try {
        const content = await fs.readFile(FilePath, "utf8");
        const data = JSON.parse(content);

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}
async function appendFile(newData) {
    try {
        const content = await fs.readFile(FilePath, "utf8");
        const data = JSON.parse(content);

        data.push(newData);

        await fs.writeFile(
            FilePath,
            JSON.stringify(data, null, 2),
            "utf8"
        );

        console.log("Data appended successfully");
    } catch (error) {
        console.log("Error:", error);
    }
}
async function deleteFile() {
    try {
        await fs.unlink(FilePath);
        console.log("File deleted successfully");
    } catch (error) {
        console.log("Error:", error);
    }
}
async function main() {
    await createFile([
        {
            id: 1,
            name: "Anshika",
            age: 18
        }
    ]);

    await appendFile({
        id: 2,
        name: "Rahul",
        age: 20
    });

    await readFile();
}

main();