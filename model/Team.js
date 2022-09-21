// import data from "../data.json" assert { type: "json" };
import fs from "fs/promises";

// @model mengambil semua data
function findAll() {
    return new Promise(async (resolve, reject) => {
        const result = await fs.readFile("data.json", { encoding: "utf-8" });
        const data = JSON.parse(result);
        resolve(data.sort((a, b) => a.id - b.id));
    });
}

// @model mengambil data berdasarkan id
function findOne(id) {
    return new Promise(async (resolve, reject) => {
        const result = await fs.readFile("data.json", { encoding: "utf-8" });
        const data = JSON.parse(result);
        const player = data.find((i) => i.id == id);

        resolve(player);
    });
}

// @model membuat data player baru
function create(player) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await fs.readFile("data.json", {
                encoding: "utf-8",
            });
            const data = JSON.parse(result);

            data.push(player);

            await fs.writeFile("data.json", JSON.stringify(data));
            resolve(player);
        } catch (error) {
            console.info(error);
        }
    });
}

//@ model untuk mengubah data player
function update(player) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await fs.readFile("data.json", {
                encoding: "utf-8",
            });
            const data = JSON.parse(result);
            //temukan data dengan id yang sama
            const check = data.find((element) => element.id == player.id);
            if (!check) {
                resolve([]);
            }

            const index = new Promise((resolve, reject) => {
                data.forEach((element, index) => {
                    if (element.id == player.id) {
                        resolve(index);
                    }
                });
            });

            const oldIndex = await index;

            //hilangkan data dengan id yang sama
            const newData = data.filter((data, index) => index != oldIndex);

            const finalData = [...newData, player];
            await fs.writeFile("data.json", JSON.stringify(finalData));
            resolve(player);
        } catch (error) {
            console.info(error);
        }
    });
}

// @model untuk menghapus data
function destroy(id) {
    return new Promise(async (resolve, reject) => {
        try {
            // ambil semua data
            const result = await fs.readFile("data.json", {
                encoding: "utf-8",
            });
            const data = JSON.parse(result);

            // filter data berdasrkan id
            const newData = data.filter((element) => element.id != id);

            await fs.writeFile("data.json", JSON.stringify(newData));

            resolve("Player successfully deleted");
        } catch (error) {
            console.info(error);
        }
    });
}

export default { findAll, findOne, create, update, destroy };
