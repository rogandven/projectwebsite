import { List, ShoppingBag, CornerDownLeft, Home, User, Book, Mail, Layout, Shield } from "astro-feather-icons2";
import LinkInfo from "../classes/LinkInfo";
import { Github, Php } from "simple-icons-astro";
import CardInfo from "../classes/CardInfo";
export const DATA = {
    projectName: "Proyecto SCM",
    defaultIcon: ShoppingBag,
    links: {
        _0_GO_BACK_HOME: LinkInfo.ExternalLink("https://rogandven.github.io", CornerDownLeft, "Volver"),
        _1_START: LinkInfo.InternalLink(Home, "Inicio"),
        _2_FEATURES: LinkInfo.InternalLink(List, "Características"),
    },
    socials: [
        LinkInfo.ExternalLink("https://github.com/rogandven/projectwebsite", Github, "GitHub"),
    ].toSorted((a, b) => {
        return a.name.localeCompare(b.name);
    }),
    cards: [
        new CardInfo(User, "Accesibilidad", "Las nuevas versiones de los módulos se ajustarán a los estándares de accesibilidad vigentes, establecidos por el equipo de Transformación Digital de la Universidad del Bío-Bío."),
        new CardInfo(Book, "Cumplimiento Legal", "Las nuevas versiones de los módulos seguirán las restricciones establecidas por las leyes 19.886 y 21.180, que restringen la forma en que deben gestionarse las compras a agentes externos en entornos digitales en Chile."),
        new CardInfo(Mail, "Mejor Interoperabilidad", "Las nuevas versiones de los módulos ofreceran mejor interoperabilidad con la API de Mercado Público."),
        new CardInfo(Php, "Nueva Versión de PHP", "Las nuevas versiones de los módulos serán migradas de PHP 5.4 a PHP 8.2, la cual incluye varias mejoras de seguridad, seguirá recibiendo soporte en 2026 y actualiza su funcionalidad a los estándares modernos."),
        new CardInfo(Layout, "Rediseño Visual", "Las nuevas versiones de los módulos se ajustarán a los estándares de rediseño visual vigentes, establecidos por el equipo de Transformación Digital de la Universidad del Bío-Bío."),
        new CardInfo(Shield, "Validaciones de Datos Robustas", "Las nuevas versiones de los módulos ofreceran mejor validación de datos tanto en el cliente como en el servidor, lo que agiliza el proceso de rellenar los formularios necesarios, además de mejorar la seguridad general de la aplicación."),
    ],
    HERO_TITLE: "Sistema de Compra de Materiales por Mercado Público para la intranet de la Universidad del Bío-Bío",
    HERO_SUBTITLE: "Los módulos de intranet de la Universidad del Bío-Bío se encuentran actualmente en proceso de migración de la versión actual de sí mismos, a una versión mejorada en desarrollo de ellos, y el sistema de solicitud de compras a Mercado Público no es la excepción.",
    FEATURES_TITLE: "Características",
    FEATURES_SUBTITLE: "La integración de estas características es lo que inspiró todo este proceso de migración.",
};

export default DATA;