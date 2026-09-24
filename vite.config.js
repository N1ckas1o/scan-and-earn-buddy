import { defineConfig } from "vite";

export default defineConfig({
  plugins: [{
    name: "nfc-route",
    configureServer(server) {
      server.middlewares.use((request, _response, next) => {
        if (request.url === "/nfc" || request.url?.startsWith("/nfc?")) {
          request.url = request.url.replace(/^\/nfc/, "/nfc/");
        }
        next();
      });
    }
  }]
});
