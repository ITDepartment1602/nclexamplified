import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";
import { componentTagger } from "lovable-tagger";

/**
 * Exposes the file names inside `public/calendar` as `virtual:calendar-images`.
 * Drop a new cycle image in that folder and it shows up on the landing page —
 * no code changes needed. In dev the list refreshes on add/remove.
 */
function calendarImages(): Plugin {
  const virtualId = "virtual:calendar-images";
  const resolvedId = "\0" + virtualId;
  const calendarDir = path.resolve(__dirname, "public/calendar");
  const IMAGE_RE = /\.(jpe?g|png|webp|avif|gif)$/i;

  const readFileNames = () => {
    if (!fs.existsSync(calendarDir)) return [];
    return fs.readdirSync(calendarDir).filter((name) => IMAGE_RE.test(name));
  };

  return {
    name: "calendar-images",
    resolveId(id) {
      if (id === virtualId) return resolvedId;
    },
    load(id) {
      if (id === resolvedId) {
        return `export default ${JSON.stringify(readFileNames())};`;
      }
    },
    configureServer(server) {
      server.watcher.add(calendarDir);

      const reload = (file: string) => {
        if (path.dirname(path.resolve(file)) !== calendarDir) return;
        if (!IMAGE_RE.test(file)) return;

        const mod = server.moduleGraph.getModuleById(resolvedId);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: "full-reload" });
      };

      server.watcher.on("add", reload);
      server.watcher.on("unlink", reload);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    calendarImages(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react":  ["react", "react-dom", "react-router-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-radix":  [
            "@radix-ui/react-dialog",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-slot",
            "@radix-ui/react-label",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-separator",
          ],
          "vendor-misc":   ["@tanstack/react-query", "lucide-react", "clsx", "tailwind-merge"],
          "vendor-globe":  ["cobe"],
        },
      },
    },
    chunkSizeWarningLimit: 300,
  },
}));
