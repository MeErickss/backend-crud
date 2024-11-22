// get, post, delete, put
import fastfy from "fastfy";
const server = fastfy()
server.get("/", () => {
    return"Olá"
})


server.listen({
    port: 3333
})