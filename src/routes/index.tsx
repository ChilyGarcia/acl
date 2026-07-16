import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, CheckCircle2, ShieldCheck, Zap, Cable,
  ClipboardCheck, FileCheck2, Wrench, Search, Cpu, Users, Award,
  BadgeCheck, HardHat, Handshake, Phone, Mail, MapPin, Clock, Linkedin,
  Facebook, ChevronRight, Sparkles, Activity, Cog,
  FileSearch, PenTool, Package, PhoneCall, MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";

import { toast } from "sonner";

import heroImg from "@/assets/hero-engineers.jpg";
import teamImg from "@/assets/team.jpg";
import panelImg from "@/assets/electrical-panel.jpg";
import sCorp from "@/assets/sector-corporate.jpg";
import sInd from "@/assets/sector-industrial.jpg";
import sHosp from "@/assets/sector-hospital.jpg";
import sRet from "@/assets/sector-retail.jpg";
import sRes from "@/assets/sector-residential.jpg";
import sEdu from "@/assets/sector-education.jpg";
import pTelecom from "@/assets/project-telecom.jpg";
import pPower from "@/assets/project-power.jpg";
import pLight from "@/assets/project-lighting.jpg";
import logoAsset from "@/assets/acl-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACL Ingeniería y Soluciones Eléctricas S.A.S. | Ingeniería eléctrica en Colombia" },
      { name: "description", content: "Diseño, construcción, mantenimiento, interventoría y certificación de proyectos eléctricos, telecomunicaciones, iluminación y seguridad electrónica bajo RETIE, RETILAP y NTC 2050." },
      { property: "og:title", content: "ACL Ingeniería y Soluciones Eléctricas S.A.S." },
      { property: "og:description", content: "Ingeniería confiable para proyectos seguros, eficientes y conformes con la normatividad vigente en Colombia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Normatividad />
        <Sectores />
        <PorQue />
        <Metodologia />
        <Proyectos />
        <Equipo />
        <CTAFinal />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------------------- HERO -------------------------------- */
function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Ingenieros de ACL trabajando en tablero eléctrico industrial"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
      </div>

      <div className="container-x relative py-20 md:py-32 lg:py-40 text-white">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs md:text-sm backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-electric" />
            <span className="font-medium tracking-wide">Cumplimiento RETIE · RETILAP · NTC 2050</span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-6 max-w-4xl text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] break-words hyphens-auto">
            Soluciones Integrales en Ingeniería Eléctrica, Telecomunicaciones, Iluminación y Seguridad Electrónica
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
            Diseñamos, construimos, certificamos y mantenemos proyectos eléctricos bajo los más altos estándares técnicos y normativos de Colombia.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-electric text-electric-foreground hover:bg-electric/90 shadow-lg">
              <a href="#contacto">Solicitar Cotización <ArrowRight className="ml-1.5 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 text-white hover:bg-white hover:text-navy backdrop-blur">
              <a href="#servicios">Nuestros Servicios</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}



/* ------------------------------ NOSOTROS ------------------------------ */
function Nosotros() {
  const norms = ["RETIE", "RETILAP", "NTC 2050", "Normas IEC", "Normas IEEE", "Enel Colombia"];
  const pillars = [
    { icon: PenTool, title: "Diseño" },
    { icon: HardHat, title: "Construcción" },
    { icon: Wrench, title: "Mantenimiento" },
    { icon: FileSearch, title: "Interventoría" },
    { icon: BadgeCheck, title: "Certificación" },
  ];
  return (
    <section id="nosotros" className="py-20 md:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img
              src={teamImg}
              alt="Equipo técnico de ACL Ingeniería"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-2xl shadow-[var(--shadow-elegant)] w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-navy text-navy-foreground rounded-xl p-5 shadow-[var(--shadow-elegant)] max-w-[220px]">
              <ShieldCheck className="h-8 w-8 text-electric mb-2" />
              <div className="text-sm font-semibold leading-snug">Ingeniería con respaldo normativo colombiano</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <SectionEyebrow>Quiénes Somos</SectionEyebrow>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-navy break-words">
              Ingeniería técnica, responsable y con enfoque normativo
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              En ACL Ingeniería y Soluciones Eléctricas S.A.S. desarrollamos proyectos integrales que abarcan
              diseño, construcción, mantenimiento, interventoría y certificación de instalaciones eléctricas,
              telecomunicaciones, iluminación y seguridad electrónica en Colombia.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
              {pillars.map((p) => (
                <div key={p.title} className="flex flex-col items-center text-center rounded-lg border border-border bg-card p-3 hover-lift">
                  <p.icon className="h-6 w-6 text-electric" />
                  <div className="mt-2 text-xs font-semibold text-navy">{p.title}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-xl border border-border bg-secondary p-5">
              <div className="flex items-center gap-2 text-navy font-semibold">
                <BadgeCheck className="h-5 w-5 text-success" />
                Todos nuestros proyectos cumplen con:
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {norms.map((n) => (
                  <span key={n} className="inline-flex items-center gap-1.5 rounded-full bg-background border border-border px-3 py-1 text-xs font-medium text-navy">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success" /> {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ SERVICIOS ------------------------------ */
function Servicios() {
  const services = [
    {
      icon: Cable,
      title: "Ejecución de Instalaciones",
      desc: "Redes eléctricas BT y MT, acometidas, tableros, canalizaciones y montaje eléctrico integral.",
      items: ["Redes BT y MT", "Acometidas", "Puestas a tierra", "Tableros eléctricos", "Canalizaciones", "Bandejas portacables", "Cableado estructurado", "Fibra óptica", "CCTV", "Contra incendio"],
    },
    {
      icon: PenTool,
      title: "Diseño de Ingeniería",
      desc: "Ingeniería de detalle con memorias, diagramas y estudios luminotécnicos conforme a RETIE y RETILAP.",
      items: ["Memorias de cálculo", "Diagramas unifilares", "Estudios luminotécnicos", "Diseño RETIE / RETILAP", "Sistemas de iluminación", "Redes de comunicaciones", "Diseño de tableros", "Estudios de demanda"],
    },
    {
      icon: BadgeCheck,
      title: "Certificación",
      desc: "Preparación documental, inspección y legalización para energización y puesta en servicio.",
      items: ["Certificación RETIE", "Certificación RETILAP", "Preparación documental", "Legalización", "Inspecciones", "Energización", "Puesta en servicio"],
    },
    {
      icon: FileCheck2,
      title: "Trámites ante Enel",
      desc: "Gestión completa de nuevos servicios, incrementos de carga e independización de medidores.",
      items: ["Nuevos servicios", "Incremento de carga", "Independización", "Traslado de medidores", "Disponibilidad", "Seguimiento técnico", "Legalización"],
    },
    {
      icon: Wrench,
      title: "Mantenimiento",
      desc: "Programas preventivos, predictivos y correctivos para infraestructura eléctrica y de comunicaciones.",
      items: ["Preventivo programado", "Predictivo con termografía", "Correctivo inmediato", "Atención 24/7", "Reporte técnico", "Repuestos originales"],
    },
    {
      icon: FileSearch,
      title: "Interventoría",
      desc: "Supervisión técnica, control de calidad e informes de cumplimiento normativo en obra.",
      items: ["Supervisión técnica", "Control de calidad", "Seguimiento", "Informes técnicos", "Recepción", "Cierre de proyectos", "Cumplimiento normativo"],
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-28 bg-secondary/50">
      <div className="container-x">
        <div className="max-w-2xl">
          <SectionEyebrow>Servicios</SectionEyebrow>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-navy break-words">
            Portafolio integral de ingeniería eléctrica
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cubrimos el ciclo completo del proyecto: desde el diseño técnico hasta la certificación y el mantenimiento.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <Card className="group h-full p-6 md:p-7 border-border hover-lift bg-card">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-navy text-navy-foreground group-hover:bg-electric transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-1.5 text-xs text-foreground/80">
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 mt-0.5 text-electric" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Mantenimiento sub-blocks */}
        <div className="mt-14">
          <Reveal>
            <h3 className="text-center text-xl md:text-2xl font-bold text-navy">Tipos de mantenimiento</h3>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {[
              { icon: Cog, title: "Preventivo", desc: "Programas periódicos para prolongar la vida útil y evitar fallas." },
              { icon: Activity, title: "Predictivo", desc: "Termografía y análisis para anticipar condiciones críticas." },
              { icon: Zap, title: "Correctivo", desc: "Respuesta técnica ante fallas eléctricas con equipos calificados." },
            ].map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <Card className="p-6 border-border hover-lift bg-card">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-md bg-electric/10 text-electric">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-bold text-navy">{m.title}</h4>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{m.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- NORMATIVIDAD ---------------------------- */
function Normatividad() {
  const norms = [
    { code: "RETIE", desc: "Reglamento técnico de instalaciones eléctricas." },
    { code: "RETILAP", desc: "Reglamento técnico de iluminación y alumbrado público." },
    { code: "NTC 2050", desc: "Código eléctrico colombiano de referencia." },
    { code: "IEC", desc: "Normas internacionales electrotécnicas." },
    { code: "IEEE", desc: "Estándares internacionales de ingeniería eléctrica." },
    { code: "ENEL", desc: "Requisitos técnicos del operador de red." },
  ];
  return (
    <section id="normatividad" className="py-20 md:py-28 relative overflow-hidden text-white" style={{ background: "var(--gradient-navy)" }}>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(14,92,173,0.4), transparent 50%)"
      }} />
      <div className="container-x relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-electric" /> Cumplimiento Normativo
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Ingeniería que cumple con la normatividad colombiana
          </h2>
          <p className="mt-4 text-white/75">
            Todos nuestros proyectos se desarrollan bajo estas normas técnicas, garantizando seguridad,
            eficiencia y trazabilidad documental.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {norms.map((n, i) => (
            <Reveal key={n.code} delay={i * 60}>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 text-center hover:border-electric/60 hover:bg-white/10 transition-all">
                <div className="text-lg md:text-xl font-black tracking-tight text-electric">{n.code}</div>
                <div className="mt-2 text-xs text-white/70 leading-snug">{n.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SECTORES ------------------------------ */
function Sectores() {
  const sectors = [
    { img: sRes, title: "Vivienda y P.H.", desc: "Residencial y propiedad horizontal." },
    { img: sRet, title: "Comercio", desc: "Retail y centros comerciales." },
    { img: sCorp, title: "Oficinas Corporativas", desc: "Edificios y centros empresariales." },
    { img: sInd, title: "Industria y Manufactura", desc: "Plantas y procesos industriales." },
    { img: sHosp, title: "Hospitales y Salud", desc: "Infraestructura crítica del sector salud." },
    { img: sEdu, title: "Educación y Gobierno", desc: "Instituciones educativas y entidades públicas." },
  ];
  return (
    <section id="sectores" className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <SectionEyebrow>Sectores</SectionEyebrow>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-navy break-words">
            Experiencia en múltiples sectores
          </h2>
          <p className="mt-4 text-muted-foreground">
            Acompañamos proyectos en toda la geografía colombiana, adaptando la ingeniería a los requerimientos específicos de cada industria.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group relative overflow-hidden rounded-xl bg-card shadow-[var(--shadow-card)] hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="text-lg font-bold">{s.title}</div>
                  <div className="text-xs text-white/80 mt-0.5">{s.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- POR QUÉ -------------------------------- */
function PorQue() {
  const items = [
    { icon: Cpu, title: "Ingeniería especializada", desc: "Equipo técnico con conocimiento normativo aplicado a cada proyecto." },
    { icon: Users, title: "Personal altamente calificado", desc: "Ingenieros, técnicos y personal en obra con certificaciones vigentes." },
    { icon: ShieldCheck, title: "Cumplimiento normativo", desc: "RETIE, RETILAP, NTC 2050, IEC, IEEE y requisitos de Enel Colombia." },
    { icon: HardHat, title: "Seguridad", desc: "Protocolos SST y equipos de protección personal en toda intervención." },
    { icon: Award, title: "Calidad garantizada", desc: "Materiales certificados y procesos con control de calidad documentado." },
    { icon: Handshake, title: "Acompañamiento integral", desc: "Un solo aliado desde el diseño hasta la certificación final." },
  ];
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container-x">
        <div className="max-w-2xl">
          <SectionEyebrow>¿Por qué ACL?</SectionEyebrow>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-navy break-words">
            Un aliado técnico confiable para su proyecto
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 60}>
              <Card className="p-6 h-full border-border hover-lift bg-card">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-electric/10 text-electric">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- METODOLOGÍA ---------------------------- */
function Metodologia() {
  const steps = [
    { icon: Search, title: "Diagnóstico" },
    { icon: PenTool, title: "Diseño" },
    { icon: ClipboardCheck, title: "Planeación" },
    { icon: HardHat, title: "Ejecución" },
    { icon: BadgeCheck, title: "Certificación" },
    { icon: Package, title: "Entrega" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <SectionEyebrow>Metodología</SectionEyebrow>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-navy break-words">
            Un proceso claro, verificable y trazable
          </h2>
        </div>

        <div className="mt-14 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border">
            <div className="h-full w-full bg-gradient-to-r from-electric via-electric to-electric/40" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-navy text-navy-foreground shadow-[var(--shadow-elegant)] ring-4 ring-background">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-electric">Etapa {i + 1}</div>
                  <div className="mt-1 text-base font-bold text-navy">{s.title}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PROYECTOS ------------------------------ */
const PROJECTS = [
  { img: pPower, title: "Subestación 13.2kV", cat: "Industrial", client: "Cliente industrial", service: "Diseño, montaje y certificación", loc: "Bogotá D.C.", status: "Ejecutado" },
  { img: pLight, title: "Iluminación LED corporativa", cat: "Comercial", client: "Centro empresarial", service: "Diseño luminotécnico RETILAP", loc: "Medellín", status: "Ejecutado" },
  { img: pTelecom, title: "Data center y fibra óptica", cat: "Telecomunicaciones", client: "Operador de servicios", service: "Cableado estructurado y fibra", loc: "Cali", status: "En ejecución" },
  { img: sInd, title: "Redes eléctricas planta manufactura", cat: "Industrial", client: "Grupo industrial", service: "Redes BT/MT y tableros", loc: "Cundinamarca", status: "Ejecutado" },
  { img: sCorp, title: "Instalaciones torre corporativa", cat: "Comercial", client: "Constructora aliada", service: "Montaje eléctrico integral", loc: "Bogotá D.C.", status: "Ejecutado" },
  { img: sRes, title: "Proyecto propiedad horizontal", cat: "Residencial", client: "Conjunto residencial", service: "Certificación RETIE y RETILAP", loc: "Chía", status: "Ejecutado" },
  { img: sHosp, title: "Infraestructura sector salud", cat: "Institucional", client: "IPS regional", service: "Interventoría eléctrica", loc: "Bucaramanga", status: "Ejecutado" },
  { img: sEdu, title: "Campus educativo", cat: "Institucional", client: "Institución educativa", service: "Diseño e instalación", loc: "Bogotá D.C.", status: "Ejecutado" },
];
const CATS = ["Todos", "Comercial", "Industrial", "Residencial", "Institucional", "Telecomunicaciones"];

function Proyectos() {
  const [cat, setCat] = useState("Todos");
  const list = cat === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.cat === cat);
  return (
    <section id="proyectos" className="py-20 md:py-28 bg-secondary/50">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <SectionEyebrow>Proyectos</SectionEyebrow>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-navy break-words">
              Proyectos ejecutados con estándares técnicos
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  cat === c
                    ? "bg-navy text-navy-foreground shadow-md"
                    : "bg-background text-navy border border-border hover:border-electric hover:text-electric"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 60}>
              <Card className="group overflow-hidden p-0 border-border hover-lift bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-electric/10 text-electric text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">{p.cat}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${p.status === "Ejecutado" ? "text-success" : "text-electric"}`}>
                      {p.status}
                    </span>
                  </div>
                  <h3 className="mt-3 font-bold text-navy">{p.title}</h3>
                  <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                    <div className="flex items-start gap-2"><Users className="h-3.5 w-3.5 mt-0.5 text-steel" /> {p.client}</div>
                    <div className="flex items-start gap-2"><Cog className="h-3.5 w-3.5 mt-0.5 text-steel" /> {p.service}</div>
                    <div className="flex items-start gap-2"><MapPin className="h-3.5 w-3.5 mt-0.5 text-steel" /> {p.loc}</div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- EQUIPO --------------------------------- */
function Equipo() {
  const team = [
    { name: "Ing. Leonardo Rozo", role: "Director de Ingeniería", desc: "Diseño, dirección técnica y gestión de proyectos eléctricos conforme a RETIE y RETILAP." },
    { name: "Ing. Camilo Fuentes", role: "Ingeniero Eléctrico", desc: "Ejecución de instalaciones, mantenimiento e interventoría con enfoque en calidad y seguridad." },
    { name: "Ing. Alexander Lara", role: "Ingeniero Residente Técnico", desc: "Certificación, trámites ante Enel y acompañamiento normativo integral en obra." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <SectionEyebrow>Equipo</SectionEyebrow>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-navy break-words">
            Un equipo técnico comprometido con su proyecto
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <Card className="p-8 text-center border-border hover-lift bg-card">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-navy to-electric text-white shadow-[var(--shadow-elegant)]">
                  <span className="text-2xl font-bold">{t.name.split(" ").slice(-1)[0][0]}</span>
                </div>
                <h3 className="mt-5 font-bold text-navy text-lg">{t.name}</h3>
                <div className="text-xs uppercase tracking-wider text-electric font-semibold mt-1">{t.role}</div>
                <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* --------------------------------- CTA FINAL --------------------------------- */
function CTAFinal() {
  return (
    <section className="relative isolate py-20 md:py-28 overflow-hidden text-white bg-navy">
      <div className="absolute inset-0 -z-10">
        <img src={panelImg} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.24 0.05 258 / 0.96), oklch(0.24 0.05 258 / 0.8))" }} />
      </div>
      <div className="container-x text-center max-w-3xl">
        <Reveal>
          <Sparkles className="mx-auto h-8 w-8 text-electric" />
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight break-words">
            ¿Necesita desarrollar un proyecto eléctrico seguro y conforme con la normatividad?
          </h2>
          <p className="mt-5 text-white/85 text-base md:text-lg">
            Nuestro equipo de ingenieros está preparado para acompañarlo desde el diseño hasta la certificación final de su proyecto.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-electric text-electric-foreground hover:bg-electric/90 shadow-lg">
              <a href="#contacto">Solicitar Cotización <ArrowRight className="ml-1.5 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 text-white hover:bg-white hover:text-navy backdrop-blur">
              <a href="#contacto"><MessageSquare className="mr-1.5 h-4 w-4" /> Hablar con un Ingeniero</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- CONTACTO ---------------------------------- */
function Contacto() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const nombre = String(fd.get("nombre") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const mensaje = String(fd.get("mensaje") || "").trim();
    if (!nombre || !email || !mensaje) {
      toast.error("Por favor complete los campos obligatorios.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Ingrese un correo válido.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Solicitud enviada. Un ingeniero se pondrá en contacto pronto.");
      form.reset();
    }, 900);
  };

  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16">
        <Reveal>
          <div>
            <SectionEyebrow>Contacto</SectionEyebrow>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-navy break-words">
              Cuéntenos sobre su proyecto
            </h2>
            <p className="mt-4 text-muted-foreground">
              Diligencie el formulario y un ingeniero de ACL le contactará para brindar asesoría técnica y una cotización personalizada.
            </p>

            <div className="mt-8 space-y-4">
              <ContactRow icon={MapPin} title="Dirección" text="Cra 12 Este #66-08 Sur, Torre C 202 · Bogotá D.C." />
              <ContactRow
                icon={Phone}
                title="Teléfonos"
                text={
                  <span className="flex flex-wrap gap-x-3 gap-y-0.5">
                    <a href="tel:+573023589183" className="hover:text-electric">302 358 9183</a>
                    <a href="tel:+573042468304" className="hover:text-electric">304 246 8304</a>
                    <a href="tel:+573046348018" className="hover:text-electric">304 634 8018</a>
                  </span>
                }
              />
              <ContactRow
                icon={Mail}
                title="Correo"
                text={<a href="mailto:aclingelec@gmail.com" className="hover:text-electric break-all">aclingelec@gmail.com</a>}
              />
              <ContactRow icon={Clock} title="Horario" text="Lunes a viernes · 8:00 a.m. – 6:00 p.m." />
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="Ubicación ACL Ingeniería"
                src="https://www.google.com/maps?q=Carrera%2012%20Este%20%2366-08%20Sur%20Torre%20C%20202%20Bogota&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Card className="p-6 md:p-8 border-border shadow-[var(--shadow-elegant)]">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nombre">Nombre completo *</Label>
                  <Input id="nombre" name="nombre" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" name="empresa" className="mt-1.5" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Correo *</Label>
                  <Input id="email" name="email" type="email" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="tel">Teléfono</Label>
                  <Input id="tel" name="tel" type="tel" className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="tipo">Tipo de proyecto</Label>
                <select id="tipo" name="tipo" className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                  <option>Diseño de ingeniería</option>
                  <option>Ejecución de instalaciones</option>
                  <option>Certificación RETIE / RETILAP</option>
                  <option>Trámites ante Enel</option>
                  <option>Mantenimiento</option>
                  <option>Interventoría</option>
                </select>
              </div>
              <div>
                <Label htmlFor="mensaje">Descripción del proyecto *</Label>
                <Textarea id="mensaje" name="mensaje" required rows={5} className="mt-1.5" placeholder="Cuéntenos el alcance, ubicación y necesidades." />
              </div>
              <Button type="submit" disabled={loading} size="lg" className="w-full bg-electric text-electric-foreground hover:bg-electric/90">
                {loading ? "Enviando..." : "Solicitar Asesoría"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Al enviar acepta ser contactado por ACL Ingeniería con fines comerciales.
              </p>
            </form>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, title, text }: { icon: typeof MapPin; title: string; text: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-electric/10 text-electric">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider font-bold text-steel">{title}</div>
        <div className="font-semibold text-navy">{text}</div>
      </div>
    </div>
  );
}

/* ---------------------------------- FOOTER ---------------------------------- */
function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground pt-16 pb-8">
      <div className="container-x grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center rounded-xl bg-white p-3 shadow-[var(--shadow-elegant)]">
            <img
              src={logoAsset.url}
              alt="ACL Ingeniería y Soluciones Eléctricas S.A.S."
              className="h-14 md:h-16 w-auto object-contain"
            />
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
            Ingeniería confiable para proyectos seguros, eficientes y conformes con la normatividad vigente en Colombia.
          </p>
          <div className="mt-5 flex gap-2">
            <SocialLink href="#" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialLink>
            <SocialLink href="#" label="Facebook"><Facebook className="h-4 w-4" /></SocialLink>
            <SocialLink href="https://wa.me/573023589183" label="WhatsApp"><PhoneCall className="h-4 w-4" /></SocialLink>
          </div>
        </div>
        <FooterCol title="Servicios" items={["Diseño de ingeniería", "Ejecución de instalaciones", "Certificación RETIE / RETILAP", "Trámites ante Enel", "Mantenimiento", "Interventoría"]} />
        <FooterCol title="Normatividad" items={["RETIE", "RETILAP", "NTC 2050", "Normas IEC", "Normas IEEE"]} />
        <FooterCol title="Contacto" items={["Cra 12 Este #66-08 Sur, Torre C 202", "Bogotá D.C., Colombia", "302 358 9183 · 304 246 8304", "304 634 8018", "aclingelec@gmail.com", "Lun–Vie · 8:00 a.m. – 6:00 p.m."]} />
      </div>

      <div className="container-x mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
        <div>© {new Date().getFullYear()} ACL Ingeniería y Soluciones Eléctricas S.A.S. Todos los derechos reservados.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white">Política de privacidad</a>
          <a href="#" className="hover:text-white">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label={label} target="_blank" rel="noreferrer"
       className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-electric transition-colors">
      {children}
    </a>
  );
}
function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-sm font-bold uppercase tracking-wider text-white">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map((i) => <li key={i} className="hover:text-white transition-colors">{i}</li>)}
      </ul>
    </div>
  );
}

/* --------------------------------- HELPERS --------------------------------- */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-electric">
      <span className="h-px w-6 bg-electric" />
      {children}
    </div>
  );
}
