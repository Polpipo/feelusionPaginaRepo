const Paginas = [
  {
    titles: {
      home: "Página de Inicio",
      about: "Sobre Nosotros",
      services: "Nuestros Servicios",
      contact: "Contacto",
    },
  },
];

const Equipo = [
  {
    equipo: {
      Ferreira: {
        Nombre: "Sergio Ferreira",
        Posicion: "CEO/Co-founder",
        Imagen: "/src/assets/team/ferreira.png",
        Instagram: "its.sferreira",
        Twitter: "#",
        Facebook: "#",
        Linkedin: "#",
        Id: "#sergio"
      },
      Sandra: {
        Nombre: "Sandra Rodríguez",
        Posicion: "CEO/Co-founder",
        Imagen: "/src/assets/team/sandra.png",
        Instagram: "sanndra.roco",
        Twitter: "#",
        Facebook: "#",
        Linkedin: "#",
        Id: "#sandra"
      },
    },
  },
];

const Eventos = [
  {
    id: "TengoUnPlan",
    collection: "Tengo un Plan",
    eventos: [
      { 
        titulo: "Primer Evento Tengo un Plan", 
        imagen: "/src/assets/organizaciones/TengoUnPlanLogo.jpg",
        url: "/TengoUnPlan1",
        contenido: {
          titulo1: "Titulo del evento 1",
          descripcion1: "Hola 1",
          titulo2: "Titulo del evento 2",
          descripcion2: "Hola 2",
          imagen1: "/src/assets/organizaciones/TengoUnPlanLogo.jpg",
          imagen2: "/src/assets/organizaciones/TengoUnPlanLogo.jpg",
          video: "video"
        }
      },
      { 
        titulo: "Segundo Evento Tengo un Plan", 
        imagen: "/src/assets/organizaciones/TengoUnPlanLogo.jpg",
        url: "/TengoUnPlan2",
        contenido: {
          titulo1: "Titulo del evento 1",
          descripcion1: "Hola 1",
          titulo2: "Titulo del evento 2",
          descripcion2: "Hola 2",
          imagen1: "/src/assets/organizaciones/TengoUnPlanLogo.jpg",
          imagen2: "/src/assets/organizaciones/TengoUnPlanLogo.jpg",
          video: "video"
        }
      },
    ],
    },
  {
  id: "DaviTuru",
  collection: "DaviTuru",
  eventos: [
    { 
      titulo: "Primer Evento DaviTuru", 
      imagen: "/src/assets/organizaciones/DaviTuru.jpg",
      url: "/DaviTuru1",
      contenido: {
        titulo1: "Titulo del evento 1",
        descripcion1: "Hola 1",
        titulo2: "Titulo del evento 2",
        descripcion2: "Hola 2",
        imagen1: "/src/assets/organizaciones/TengoUnPlanLogo.jpg",
        imagen2: "/src/assets/organizaciones/TengoUnPlanLogo.jpg",
        video: "video"
      }
    },
    { 
      titulo: "Segundo Evento DaviTuru", 
      imagen: "/src/assets/organizaciones/DaviTuru.jpg",
      url: "/DaviTuru2",
      contenido: {
        titulo1: "Titulo del evento 1",
        descripcion1: "Hola 1",
        titulo2: "Titulo del evento 2",
        descripcion2: "Hola 2",
        imagen1: "/src/assets/organizaciones/TengoUnPlanLogo.jpg",
        imagen2: "/src/assets/organizaciones/TengoUnPlanLogo.jpg",
        video: "video"
      }
    },
  ],
},
{
  id: "YoutubExperto",
  collection: "YoutubExperto",
  eventos: [
    { 
      titulo: "Primer Evento YoutubExperto", 
      imagen: "/src/assets/organizaciones/YoutubExperto.jpg",
      url: "/YoutubExperto1",
      contenido: {
        titulo1: "Titulo del evento 1",
        descripcion1: "Hola 1",
        titulo2: "Titulo del evento 2",
        descripcion2: "Hola 2",
        imagen1: "/src/assets/organizaciones/TengoUnPlanLogo.jpg",
        imagen2: "/src/assets/organizaciones/TengoUnPlanLogo.jpg",
        video: "video"
      }
    },
  ],
  },];

export { Paginas, Equipo, Eventos };