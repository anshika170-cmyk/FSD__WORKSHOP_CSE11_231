import fs from "node:fs/promises";

const FilePath = "userData.txt";

async function createFile(content) {
    try {
        await fs.writeFile(FilePath, content, "utf8");
        console.log("File created successfully");
    } catch (error) {
        console.log("Error:", error);
    }
}

async function readFile() {
    try {
        const content = await fs.readFile(FilePath, "utf8");
        console.log(content);
    } catch (error) {
        console.log("Error:", error);
    }
}

async function appendFile(content) {
    try {
        await fs.appendFile(FilePath, content, "utf8");
        console.log("Content appended successfully");
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
    await createFile("Hello World!");
    await appendFile("\nThis is new content.");
    await readFile();
}

main();