import Team from "../model/Team.js";

// @controller mengambil semua player
const getTeam = async (req, res) => {
    try {
        const data = await Team.findAll();
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(data));
    } catch (error) {
        res.writeHead(400, { "Content-type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Bad request!",
            })
        );
    }
};

// @controller mengambil 1 player
const getPlayer = async (req, res, id) => {
    try {
        const data = await Team.findOne(id);

        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(data));
    } catch (error) {
        res.writeHead(400, { "Content-type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Bad request!",
            })
        );
    }
};

// @contoller membuat player baru
const addPlayer = async (req, res) => {
    try {
        let body = "";
        req.addListener("data", (chunk) => {
            body += chunk.toString();
        });

        req.addListener("end", async () => {
            const request = body.split("&");

            const player = request.map((element) => {
                const arr = element.split("=");
                return arr[1];
            });

            const data = {
                id: parseInt(player[0]),
                name: player[1],
                role: player[2],
            };

            const response = await Team.create(data);
            res.writeHead(201, { "Content-type": "application/json" });
            res.end(JSON.stringify(response));
        });
    } catch (error) {
        res.writeHead(400, { "Content-type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Bad request!",
            })
        );
    }
};

// @controller mengubah player
const updatePlayer = async (req, res) => {
    try {
        let body = "";
        req.addListener("data", (chunk) => {
            body += chunk.toString();
        });

        req.addListener("end", async () => {
            const request = body.split("&");

            const player = request.map((element) => {
                const arr = element.split("=");
                return arr[1];
            });

            const data = {
                id: parseInt(player[0]),
                name: player[1],
                role: player[2],
            };

            const response = await Team.update(data);

            if (response.length < 1) {
                const message = {
                    message: "Player not found!",
                };
                res.writeHead(404, { "Content-type": "application/json" });
                res.end(JSON.stringify(message));
            } else {
                res.writeHead(201, { "Content-type": "application/json" });
                res.end(JSON.stringify(response));
            }
        });
    } catch (error) {
        res.writeHead(400, { "Content-type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Bad request!",
            })
        );
    }
};

// @controller menghapus player player
const deletePlayer = async (req, res) => {
    try {
        // dapatkan id
        let body = "";
        req.addListener("data", (chunk) => {
            body += chunk.toString();
        });
        // parse id ke model
        req.addListener("end", async () => {
            const arr = body.split("=");
            const id = arr[1];

            // check id player
            const player = await Team.findOne(id);
            if (player == undefined) {
                const response = {
                    message: "Player not found",
                };
                res.writeHead(404, { "Content-type": "application/json" });
                res.end(JSON.stringify(response));
            } else {
                const data = await Team.destroy(id);

                const response = { message: data };

                // balikan response berhasil
                res.writeHead(200, { "Content-type": "application/json" });
                res.end(JSON.stringify(response));
            }
        });
    } catch (error) {
        res.writeHead(400, { "Content-type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Bad request!",
            })
        );
    }
};

export { getTeam, getPlayer, addPlayer, updatePlayer, deletePlayer };
