import { getPermalink } from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "Inicio",
      href: getPermalink("/"),
    },
    {
      text: "Sobre Mí",
      href: getPermalink("/sobre-mi"),
    },
    {
      text: "Servicios",
      href: getPermalink("/servicios"),
    },
    {
      text: "Reseñas",
      href: getPermalink("/resenas"),
    },
    {
      text: "Galería",
      href: getPermalink("/galeria"),
    },
    {
      text: "Contacto",
      href: getPermalink("/contacto"),
    },
  ],
  actions: [
    {
      text: "Reservar Cita",
      href: "https://wa.me/34679975580?text=Hola,%20me%20gustaría%20reservar%20una%20cita",
      target: "_blank",
      icon: "tabler:brand-whatsapp",
    },
  ],
};

export const headerDataEN = {
  links: [
    {
      text: "Home",
      href: getPermalink("/en"),
    },
    {
      text: "About",
      href: getPermalink("/en/about"),
    },
    {
      text: "Services",
      href: getPermalink("/en/services"),
    },
    {
      text: "Reviews",
      href: getPermalink("/en/reviews"),
    },
    {
      text: "Gallery",
      href: getPermalink("/en/gallery"),
    },
    {
      text: "Contact",
      href: getPermalink("/en/contact"),
    },
  ],
  actions: [
    {
      text: "Book Appointment",
      href: "https://wa.me/34679975580?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment",
      target: "_blank",
      icon: "tabler:brand-whatsapp",
    },
  ],
};

export const footerData = {
  links: [
    {
      title: "Servicios",
      links: [
        { text: "Implantes Dentales", href: "/servicios#implantes" },
        { text: "Cirugía Oral", href: "/servicios#cirugia" },
        { text: "Alineadores", href: "/servicios#alineadores" },
        { text: "Odontología Estética", href: "/servicios#estetica" },
      ],
    },
    {
      title: "Información",
      links: [
        { text: "Sobre Mí", href: "/sobre-mi" },
        { text: "Reseñas", href: "/resenas" },
        { text: "Galería", href: "/galeria" },
        { text: "Contacto", href: "/contacto" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { text: "WhatsApp: +34 679975580", href: "https://wa.me/34679975580" },
        {
          text: "eugeniavila63@gmail.com",
          href: "mailto:eugeniavila63@gmail.com",
        },
        { text: "El Palo, Málaga, España", href: "#" },
      ],
    },
  ],
  secondaryLinks: [
    { text: "Términos", href: "/terms" },
    { text: "Política de Privacidad", href: "/privacy" },
  ],
  socialLinks: [
    {
      ariaLabel: "WhatsApp",
      icon: "tabler:brand-whatsapp",
      href: "https://wa.me/34679975580",
    },
    { ariaLabel: "Instagram", icon: "tabler:brand-instagram", href: "#" },
    { ariaLabel: "Facebook", icon: "tabler:brand-facebook", href: "#" },
  ],
  footNote: `
    <div class="text-sm">
      <p class="mb-2">Clínica Dental Dra. Eugenia Vila - Más de 30 años de experiencia en Málaga</p>
      <p class="text-xs text-muted">Registro GDC: 287705 | Clínica abierta fines de semana selectos</p>
      <p class="mt-2">© ${new Date().getFullYear()} Dra. Eugenia Vila. Todos los derechos reservados.</p>
    </div>
  `,
};

export const footerDataEN = {
  links: [
    {
      title: "Services",
      links: [
        { text: "Dental Implants", href: "/en/services#implants" },
        { text: "Oral Surgery", href: "/en/services#surgery" },
        { text: "Aligners", href: "/en/services#aligners" },
        { text: "Cosmetic Dentistry", href: "/en/services#cosmetic" },
      ],
    },
    {
      title: "Information",
      links: [
        { text: "About", href: "/en/about" },
        { text: "Reviews", href: "/en/reviews" },
        { text: "Gallery", href: "/en/gallery" },
        { text: "Contact", href: "/en/contact" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "WhatsApp: +34 679975580", href: "https://wa.me/34679975580" },
        {
          text: "eugeniavila63@gmail.com",
          href: "mailto:eugeniavila63@gmail.com",
        },
        { text: "El Palo, Málaga, Spain", href: "#" },
      ],
    },
  ],
  secondaryLinks: [
    { text: "Terms", href: "/en/terms" },
    { text: "Privacy Policy", href: "/en/privacy" },
  ],
  socialLinks: [
    {
      ariaLabel: "WhatsApp",
      icon: "tabler:brand-whatsapp",
      href: "https://wa.me/34679975580",
    },
    { ariaLabel: "Instagram", icon: "tabler:brand-instagram", href: "#" },
    { ariaLabel: "Facebook", icon: "tabler:brand-facebook", href: "#" },
  ],
  footNote: `
    <div class="text-sm">
      <p class="mb-2">Dr. Eugenia Vila Dental Clinic - Over 30 years of experience in Málaga</p>
      <p class="text-xs text-muted">GDC Registration: 287705 | Clinic open select weekends</p>
      <p class="mt-2">© ${new Date().getFullYear()} Dr. Eugenia Vila. All rights reserved.</p>
    </div>
  `,
};
