import http from "http";
import {
    getTeam,
    getPlayer,
    addPlayer,
    updatePlayer,
    deletePlayer,
} from "./controllers/team.controller.js";

const server = http.createServer((req, res) => {
    // url mengambil semua player dengan
    if (req.method === "GET" && req.url === "/api/team") {
        getTeam(req, res);

        // url mengambil 1 player
    } else if (req.method === "GET" && req.url.match(/\/api\/team\/([0-9]+)/)) {
        const id = req.url.split("/")[3];
        getPlayer(req, res, id);

        // url membuat player baru
    } else if (req.method === "POST" && req.url === "/api/team") {
        addPlayer(req, res);

        // url mengubah data player
    } else if (req.method === "PUT" && req.url === "/api/team") {
        updatePlayer(req, res);

        //url menghapus player
    } else if (req.method === "DELETE" && req.url === "/api/team") {
        deletePlayer(req, res);
    } else {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify({ message: "route not found" }));
    }
});

// menggunakan module http untuk membuat server http
server.listen(3000, () => console.info(`app listen on port 3000`));
