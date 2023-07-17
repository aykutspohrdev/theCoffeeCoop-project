import { createServer } from "miragejs";

import data from "./data.json";

createServer({
  routes() {
    this.namespace = "/"

    this.get("/storeData", () => {
      return data;
    })
  },
})
