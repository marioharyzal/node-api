<h3 align="center">RESTful APi using Node JS</h3>

---

## 📝 Table of Contents

-   [About](#about)
-   [Installing](#installing)
-   [Built Using](#built_using)
-   [Authors](#authors)

## About <a name = "about"></a>

Repo ini merupakan aplikasi CRUD RESTful API pemain game sederhana yang menggunakan Node JS module HTTP. Repo ini dibuat untuk kebutuhan belajar.

### Installing and Run <a name = "installing"></a>

-   Clone repo di local computer.
-   Run command "node index" / "node ." di terminal.
-   Buka app response client API seperti postmen atau yang lainnya.
-   masukkan alamat berikut pada app response client API
    -   http://localhost:3000/api/team -> GET, mengambil semua player.
    -   http://localhost:3000/api/team/:id -> GET, mengambil 1 player.
    -   http://localhost:3000/api/team -> POST, membuat player baru dengan menggunakan format request x-www-form-urlencoded (id, name, role).
    -   http://localhost:3000/api/team -> PUT, mengubah player lama dengan menggunakan format request x-www-form-urlencoded (id, name, role).
    -   http://localhost:3000/api/team -> DELETE, menghapus 1 player dengan menggunakan format request x-www-form-urlencoded (id).

## Built Using <a name = "built_using"></a>

-   [NodeJs](https://nodejs.org/en/) - Server Environment.

## Authors <a name = "authors"></a>

-   [@marioharyzal](https://github.com/marioharyzal)
