import React from 'react';
import { CheckCircle, ArrowRight, Star, Clock, Layout, Type, Image as ImageIcon, MousePointer2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-50">
      {/* Background Grid - mimicking layout guides */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Text Content */}
          <div className="lg:w-5/12 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold mb-6 md:mb-8 uppercase tracking-wider">
               <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
               PowerPoint Kit 2025
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-[1.1] mb-6">
              Você não é professor para <span className="text-[#c43e1c]">viver de plantão no PowerPoint</span>.
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              Esqueça as horas formatando slides. Baixe o kit completo de Matemática (Fundamental 2 e Médio), <span className="font-bold text-slate-800">100% editável</span> e com animações que explicam por você.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-[#c43e1c] hover:bg-[#a03316] text-white rounded-lg font-bold text-lg shadow-xl shadow-orange-900/10 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1">
                Baixar Kit Completo
                <ArrowRight className="w-5 h-5 opacity-90" />
              </a>

            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500">
               <CheckCircle className="w-4 h-4 text-green-500" />
               <span>Compatível com Windows, Mac e Tablets</span>
            </div>
          </div>

          {/* Hero Visual - THE POWERPOINT INTERFACE MOCKUP */}
          <div className="lg:w-7/12 w-full relative perspective-1000 mt-4 lg:mt-0 order-1 lg:order-2">
             
             {/* The "Software" Window */}
             <div className="relative bg-white rounded-xl shadow-2xl border border-slate-300 overflow-hidden ring-1 ring-slate-900/5">
                
                {/* 1. Window Top Bar (Orange PPT Style) */}
                <div className="bg-[#c43e1c] h-8 md:h-10 flex items-center justify-between px-3 md:px-4">
                   <div className="flex items-center gap-3 md:gap-4">
                      <div className="flex gap-1.5 md:gap-2">
                         <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors"></div>
                         <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors"></div>
                      </div>
                      <div className="h-3 md:h-4 w-px bg-white/20"></div>
                      <span className="text-white text-[10px] md:text-xs font-medium opacity-90 truncate max-w-[150px]">Aula 05 - Geometria.pptx</span>
                   </div>
                   <div className="text-white/80 text-[9px] md:text-[10px] hidden sm:block">MathMaster Licença Pro</div>
                </div>

                {/* 2. Ribbon (Menu Bar) */}
                <div className="bg-[#f3f2f1] border-b border-slate-300 py-1.5 md:py-2 px-2 md:px-4 flex items-center gap-4 md:gap-6 overflow-hidden select-none pointer-events-none">
                   {['Página Inicial', 'Inserir', 'Desenhar', 'Design', 'Transições', 'Animações'].map((tab, i) => (
                      <span key={i} className={`text-[10px] md:text-xs font-medium whitespace-nowrap ${i === 0 ? 'text-[#c43e1c] border-b-2 border-[#c43e1c]' : 'text-slate-600'}`}>
                         {tab}
                      </span>
                   ))}
                </div>

                {/* 3. Toolbar (Icons) */}
                <div className="bg-[#f3f2f1] border-b border-slate-200 p-2 flex items-center gap-4 text-slate-500 hidden sm:flex select-none pointer-events-none">
                   <div className="flex flex-col items-center gap-1 px-3 border-r border-slate-300">
                      <Layout className="w-5 h-5" />
                      <span className="text-[9px]">Layout</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 px-3 border-r border-slate-300">
                      <div className="font-bold font-serif text-lg leading-none">B</div>
                      <span className="text-[9px]">Negrito</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 px-3 border-r border-slate-300">
                      <Type className="w-5 h-5" />
                      <span className="text-[9px]">Texto</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 px-3">
                      <ImageIcon className="w-5 h-5" />
                      <span className="text-[9px]">Imagem</span>
                   </div>
                </div>

                {/* 4. Main Workspace Area */}
                {/* Responsive Height: h-[230px] on mobile, increasing on breakpoints */}
                <div className="flex bg-[#e1dfdd] h-[230px] sm:h-[320px] md:h-[450px] transition-all duration-300">
                   
                   {/* Left Sidebar (Thumbnails) */}
                   <div className="w-24 md:w-32 bg-[#e1dfdd] border-r border-slate-300 p-2 md:p-3 hidden sm:flex flex-col gap-2 md:gap-3 overflow-hidden select-none pointer-events-none">
                      {[1, 2, 3].map((num) => (
                         <div key={num} className={`aspect-video bg-white shadow-sm flex items-center justify-center text-[8px] md:text-[10px] text-slate-300 border-2 ${num === 2 ? 'border-[#c43e1c]' : 'border-transparent'}`}>
                            {num === 2 ? (
                               <div className="w-full h-full bg-slate-100 flex flex-col p-1">
                                  <div className="h-0.5 md:h-1 w-1/2 bg-slate-300 mb-1"></div>
                                  <div className="h-2 md:h-4 w-full bg-slate-200"></div>
                               </div>
                            ) : (
                               <>Slide {num}</>
                            )}
                         </div>
                      ))}
                   </div>

                   {/* Center Stage (Canvas) */}
                   <div className="flex-1 p-2 sm:p-4 md:p-8 flex items-center justify-center overflow-hidden relative">
                      {/* White Slide Canvas */}
                      <div className="bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] aspect-video w-full max-w-4xl relative group">
                         
                         {/* --- PLACEHOLDER PARA O SEU GIF --- */}
                         <img 
                           src="https://pages.fisicabase.com.br/wp-content/uploads/2025/04/Gif-slides-math.webp" 
                           alt="Slide Animado" 
                           className="w-full h-full object-fit"
                         />
                         
                         {/* Cursor Decoration */}
                         <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 pointer-events-none animate-bounce z-20">
                            <MousePointer2 className="w-4 h-4 md:w-6 md:h-6 text-slate-900 fill-white drop-shadow-md" />
                         </div>

                      </div>
                   </div>

                </div>

                {/* 5. Bottom Status Bar */}
                <div className="bg-[#c43e1c] h-5 md:h-6 flex items-center justify-between px-3 text-[9px] md:text-[10px] text-white select-none pointer-events-none">
                   <div className="flex gap-4">
                      <span>Slide 2 de 15</span>
                      <span className="hidden sm:inline">Português (Brasil)</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <span className="hidden sm:inline">Anotações</span>
                      <div className="w-12 md:w-20 h-1 bg-white/30 rounded-full overflow-hidden">
                         <div className="w-2/3 h-full bg-white"></div>
                      </div>
                      <span>68%</span>
                   </div>
                </div>

             </div>

             {/* Decorative Background behind Window */}
             <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full bg-slate-200 rounded-3xl opacity-50 transform rotate-2 hidden sm:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};