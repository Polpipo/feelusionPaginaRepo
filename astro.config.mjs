import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import NetlifyCMS from 'astro-netlify-cms';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), react(),
   NetlifyCMS({
      config: {
        display_url: 'https://feelusion.com',
        site_url: 'https://feelusion.com',
        locale: 'es',
        disableIdentityWidgetInjection: true,
        backend: {
          name: 'git-gateway',
          branch: 'master',
        },

        media_folder: 'public/eventsImages',
        public_folder: '/eventsImages',
        collections: [
          {
            name: 'events',
            identifier_field: 'url',
            label: 'Evento',
            folder: 'src/constants/eventos',
            create: true,
            delete: true,
            extension: 'json',
            format: 'json',
            slug: '{{slug}}',
            fields: [
              {
                label: "Título",
                name: "titulo",
                widget: "string"
              },
              {
                label: "Imagen",
                name: "imagen",
                widget: "image"
              },
              {
                label: "Url evento",
                name: "url",
                widget: "string"
              },
              {
                label: "Contenido",
                name: "contenido",
                widget: "list",
                fields: [
                  {
                    label: "Título del evento 1",
                    name: "titulo1",
                    widget: "string"
                  },
                  {
                    label: "Descripción del evento 1",
                    name: "descripcion1",
                    widget: "string"
                  },
                  {
                    label: "Título del evento 2",
                    name: "titulo2",
                    widget: "string"
                  },
                  {
                    label: "Descripción del evento 2",
                    name: "descripcion2",
                    widget: "string"
                  },
                  {
                    label: "Imagen del evento 1",
                    name: "imagen1",
                    widget: "image"
                  },
                  {
                    label: "Imagen del evento 2",
                    name: "imagen2",
                    widget: "image"
                  },
                  {
                    label: "Video del evento (youtube)",
                    name: "video",
                    widget: "string" // o 'file' si es un archivo de video local
                  }
                ]
              }
            ],
          },  
        ],
      },
    })],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});