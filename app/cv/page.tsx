"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Printer,
  FileText,
  Globe,
} from "lucide-react";
import cvData from "@/data/cv.json";
import martinQueroCV from "@/public/images/martinQuero.webp";

import { useEffect } from "react";

export default function CVPage() {
  const {
    perfil_profesional,
    educacion_formal,
    titulaciones_complementarias,
    experiencia_laboral,
    investigacion,
    produccion_cientifica,
    becas_y_premios,
    otros_datos,
  } = cvData;

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    // Detectar si es móvil o tablet (menor a 1024px o user agent)
    const isMobile =
      window.innerWidth < 1024 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      // Pequeño delay para asegurar que se renderice todo antes de abrir el diálogo
      const timer = setTimeout(() => {
        window.print();
      }, 500); // 500ms delay
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#E5E5E5] print:bg-white text-[#1B3A52] font-sans pb-20 pt-28 md:pt-36 print:p-0 print:m-0 print:min-h-0">
      {/* Botón Flotante */}
      <button
        onClick={handlePrint}
        className="fixed bottom-8 right-8 bg-[#C85A3C] text-white p-4 rounded-full shadow-xl hover:bg-[#1B3A52] transition-all z-50 print:hidden group"
        aria-label="Imprimir CV"
      >
        <Printer className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-none md:shadow-xl print:shadow-none my-0 md:my-10 print:my-0 flex flex-col print:block min-h-screen print:min-h-0 print:h-auto print:max-w-none print:w-full relative">
        {/* HEADER */}
        <header className="px-8 md:px-12 pt-14 pb-8 border-b-4 border-[#C85A3C]">
          <div className="flex flex-col md:flex-row print:flex-row gap-[8px] items-start justify-between">
            <div className="flex-1">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C85A3C] mb-2 block">
                Curriculum Vitae • Edición 2025
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-black mb-3 leading-tight tracking-tight text-[#1B3A52]">
                {perfil_profesional.nombre_completo}
              </h1>
              <div className="flex flex-wrap gap-x-1 gap-y-1 text-base md:text-[10px] font-medium text-[#6B7280]">
                {perfil_profesional.titulos_principales.map((titulo, index) => (
                  <span
                    key={index}
                    className={`flex items-center ${
                      index === 0 ? "text-[#C85A3C] font-bold" : ""
                    }`}
                  >
                    {index > 0 && <span className="mx-1 text-gray-300">•</span>}
                    {titulo}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative w-32 h-32 shrink-0 rounded-lg overflow-hidden border-2 border-[#1B3A52]/10 grayscale-[10%]">
              <Image
                src={martinQueroCV}
                alt={perfil_profesional.nombre_completo}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Abstract */}
          <div className=" p-6 bg-[#FAFAF9] border-l-4 border-[#C85A3C] rounded-r-sm">
            <h3 className="font-serif font-bold text-[#1B3A52] mb-2 flex items-center gap-2 text-xs uppercase tracking-widest">
              <FileText className="w-4 h-4 text-[#C85A3C]" /> Perfil Profesional
            </h3>
            <p className="font-serif italic text-[#4B5563] text-sm leading-relaxed text-justify">
              &ldquo;Veterinario y Doctor en Ciencias con una trayectoria
              híbrida que une el rigor de la investigación científica con la
              visión humana del Coaching Ontológico. Especializado en gestión de
              equipos técnicos, bienestar animal y liderazgo en entornos de alto
              rendimiento.&rdquo;
            </p>
          </div>
        </header>

        {/* GRID LAYOUT - Float para impresión (más seguro para saltos de página) */}
        <div className="grid grid-cols-1 md:grid-cols-12 print:block flex-1">
          {/* COLUMNA IZQUIERDA (SIDEBAR) */}
          <aside className="md:col-span-4 print:float-left print:w-[30%] bg-[#FAFAF9] p-6 border-r border-gray-100 space-y-10 print:bg-gray-50 print:border-r-2 print:border-gray-200">
            {/* SECCIÓN CONTACTO */}
            <section className="break-inside-avoid">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1B3A52] border-b border-[#C85A3C] pb-2 mb-5">
                Contacto
              </h3>
              <div className="space-y-4 text-xs text-[#4B5563]">
                {/* Dirección - Con break-words para evitar desborde */}
                <div className="flex items-start gap-3 group">
                  <MapPin className="w-4 h-4 text-[#C85A3C] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="leading-relaxed w-full break-words">
                    {perfil_profesional.datos_personales.direccion}
                  </span>
                </div>

                {/* Teléfono */}
                <div className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-[#C85A3C] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-medium tracking-wide">
                    {perfil_profesional.datos_personales.contacto.telefono}
                  </span>
                </div>

                {/* Emails - Manejo de múltiples líneas */}
                <div className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-[#C85A3C] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col gap-1 w-full break-all">
                    {" "}
                    {/* break-all asegura que emails largos bajen */}
                    {perfil_profesional.datos_personales.contacto.emails.map(
                      (email, i) => (
                        <span
                          key={i}
                          className="leading-tight hover:text-[#1B3A52] transition-colors cursor-pointer"
                        >
                          {email}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* LinkedIn - Texto limpio */}
                <div className="flex items-center gap-3 group">
                  <Linkedin className="w-4 h-4 text-[#C85A3C] shrink-0 group-hover:scale-110 transition-transform" />
                  <a
                    href={`https://${perfil_profesional.datos_personales.contacto.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#1B3A52] hover:underline transition-colors w-full break-words leading-tight"
                  >
                    /martin-quero
                  </a>
                </div>

                {/* Web (Opcional si tienes) */}
                <div className="flex items-center gap-3 group">
                  <Globe className="w-4 h-4 text-[#C85A3C] shrink-0 group-hover:scale-110 transition-transform" />
                  <a
                    href="https://martinquero.com"
                    target="_blank"
                    className="hover:text-[#1B3A52] hover:underline transition-colors"
                  >
                    martinquero.com
                  </a>
                </div>
              </div>
            </section>

            {/* FORMACIÓN ACADÉMICA */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1B3A52] border-b border-[#C85A3C] pb-2 mb-5">
                Formación
              </h3>
              <div className="space-y-5">
                {educacion_formal.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative pl-4 border-l-2 border-gray-200 hover:border-[#C85A3C] transition-colors duration-300 break-inside-avoid"
                  >
                    <span className="text-[10px] font-bold text-[#C85A3C] uppercase tracking-wider block mb-1">
                      {item.periodo}
                    </span>
                    <h4 className="font-bold text-sm text-[#1B3A52] leading-tight mb-1">
                      {item.titulo}
                    </h4>
                    <p className="text-xs text-[#6B7280] italic leading-tight">
                      {item.institucion}
                    </p>
                    {item.nota_final && (
                      <span className="inline-block mt-2 px-2 py-0.5 bg-white border border-gray-100 rounded text-[10px] font-semibold text-[#1B3A52]">
                        Nota: {item.nota_final}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* COMPETENCIAS */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1B3A52] border-b border-[#C85A3C] pb-2 mb-5">
                Competencias
              </h3>
              <div className="space-y-6">
                <div className="break-inside-avoid">
                  <h4 className="text-xs font-bold text-[#1B3A52] mb-2 uppercase">
                    Idiomas
                  </h4>
                  <ul className="text-xs space-y-1 text-[#4B5563]">
                    {otros_datos.idiomas.map((idioma, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#C85A3C] rounded-full"></span>
                        {idioma}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="break-inside-avoid">
                  <h4 className="text-xs font-bold text-[#1B3A52] mb-2 uppercase">
                    Certificaciones
                  </h4>
                  <ul className="text-xs space-y-2 text-[#4B5563]">
                    {titulaciones_complementarias.slice(0, 3).map((t, i) => (
                      <li key={i} className="leading-snug">
                        <span className="font-semibold text-[#1B3A52] block mb-0.5">
                          • {t.titulo}
                        </span>
                        <span className="text-[10px] opacity-80">
                          {t.institucion}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </aside>

          {/* COLUMNA DERECHA (CONTENIDO PRINCIPAL) */}
          <main className="md:col-span-8 print:float-right print:w-[70%] p-8 md:p-12 space-y-12">
            {/* EXPERIENCIA PROFESIONAL */}
            <section>
              <h2 className="text-xl font-serif font-bold text-[#1B3A52] border-b-2 border-gray-100 pb-3 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded bg-[#FAFAF9] text-[#C85A3C] text-sm font-sans font-bold">
                  01
                </span>
                Experiencia Profesional
              </h2>

              <div className="space-y-10">
                {/* Bloque Academia */}
                <div>
                  <h3 className="text-xs font-bold text-[#C85A3C] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-[#C85A3C]"></span>{" "}
                    Investigación & Academia
                  </h3>
                  <div className="space-y-6 pl-2 md:pl-6 border-l border-dashed border-gray-200">
                    {experiencia_laboral.investigacion_y_academia.map(
                      (exp, idx) => (
                        <div key={idx} className="relative break-inside-avoid">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                            <h4 className="font-bold text-base text-[#1B3A52]">
                              {exp.cargo}
                            </h4>
                            <span className="text-xs font-medium text-[#C85A3C] whitespace-nowrap bg-[#FFF5F3] px-2 py-0.5 rounded mt-1 sm:mt-0 w-fit">
                              {exp.periodo}
                            </span>
                          </div>
                          <p className="text-sm text-[#4B5563] italic mb-1">
                            {exp.lugar}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Bloque Privado */}
                <div>
                  <h3 className="text-xs font-bold text-[#C85A3C] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-[#C85A3C]"></span> Sector
                    Privado
                  </h3>
                  <div className="space-y-6 pl-2 md:pl-6 border-l border-dashed border-gray-200">
                    {experiencia_laboral.sector_privado.map((exp, idx) => (
                      <div key={idx} className="relative break-inside-avoid">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                          <h4 className="font-bold text-base text-[#1B3A52]">
                            {exp.cargo}
                          </h4>
                          <span className="text-xs font-medium text-[#C85A3C] whitespace-nowrap bg-[#FFF5F3] px-2 py-0.5 rounded mt-1 sm:mt-0 w-fit">
                            {exp.periodo}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-[#4B5563] mb-2">
                          {exp.empresa}
                        </p>
                        {exp.funciones && (
                          <p className="text-sm text-[#6B7280] leading-relaxed text-justify">
                            {exp.funciones}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* INVESTIGACIÓN */}
            <section>
              <h2 className="text-xl font-serif font-bold text-[#1B3A52] border-b-2 border-gray-100 pb-3 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded bg-[#FAFAF9] text-[#C85A3C] text-sm font-sans font-bold">
                  02
                </span>
                Proyectos de Investigación
              </h2>
              <ul className="space-y-3">
                {investigacion.proyectos_destacados.map((proyecto, i) => (
                  <li
                    key={i}
                    className="text-sm text-[#4B5563] relative pl-6 leading-relaxed text-justify break-inside-avoid"
                  >
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 border border-[#C85A3C] rounded-full"></span>
                    {proyecto}
                  </li>
                ))}
              </ul>
            </section>

            {/* PRODUCCIÓN CIENTÍFICA */}
            <section className="break-inside-avoid">
              <h2 className="text-xl font-serif font-bold text-[#1B3A52] border-b-2 border-gray-100 pb-3 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded bg-[#FAFAF9] text-[#C85A3C] text-sm font-sans font-bold">
                  03
                </span>
                Producción Científica
              </h2>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-[#1B3A52] bg-gray-50 p-2 uppercase mb-4 rounded inline-block">
                    Publicaciones Indexadas (Selección)
                  </h4>
                  <ol className="list-decimal list-outside ml-4 space-y-3 text-sm text-[#4B5563]">
                    {produccion_cientifica.publicaciones_revistas
                      .slice(0, 10)
                      .map((pub, i) => (
                        <li
                          key={i}
                          className="pl-2 marker:font-bold marker:text-[#C85A3C] leading-snug text-justify"
                        >
                          {pub}
                        </li>
                      ))}
                  </ol>
                  {produccion_cientifica.publicaciones_revistas.length > 10 && (
                    <div className="mt-4 text-center">
                      <span className="text-xs font-medium text-[#C85A3C] bg-[#FFF5F3] px-3 py-1 rounded-full">
                        +{" "}
                        {produccion_cientifica.publicaciones_revistas.length -
                          10}{" "}
                        publicaciones adicionales disponibles en versión
                        completa
                      </span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-100 break-inside-avoid">
                  <div>
                    <h4 className="text-xs font-bold text-[#1B3A52] uppercase mb-3">
                      Divulgación
                    </h4>
                    <ul className="space-y-2 text-xs text-[#4B5563]">
                      {produccion_cientifica.divulgacion
                        .slice(0, 5)
                        .map((d, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-[#C85A3C] font-bold">›</span>{" "}
                            {d}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1B3A52] uppercase mb-3">
                      Premios Destacados
                    </h4>
                    <ul className="space-y-2 text-xs text-[#4B5563]">
                      {becas_y_premios.premios.slice(0, 4).map((d, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#C85A3C]">★</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* FOOTER PARA IMPRESIÓN */}
        <footer className="bg-[#FAFAF9] text-[#6B7280] py-6 text-center text-[10px] print:text-[8px] print:py-2 border-t border-gray-200 mt-auto w-full print:clear-both">
          <p className="uppercase tracking-widest mb-1">
            Dr. Martín Quero • Veterinario & Coach Ontológico
          </p>
          <p>
            Documento actualizado a {new Date().getFullYear()} • Disponible en
            martinquero.com/cv
          </p>
        </footer>
      </div>
    </div>
  );
}
