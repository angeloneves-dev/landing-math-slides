import React from 'react';
import { ChevronRight, Maximize2, Monitor, ZoomIn } from 'lucide-react';

export const Samples = () => {
  // SUBSTITUA AS URLs ABAIXO PELOS SEUS GIFs
  const samples = [
    {
      id: 1,
      title: "Teorema de Pitágoras",
      level: "9º Ano",
      image: "https://placehold.co/600x450/ffffff/2563eb?text=GIF+Pitagoras" 
    },
    {
      id: 2,
      title: "Estatística Básica",
      level: "Ensino Médio",
      image: "https://placehold.co/600x450/ffffff/059669?text=GIF+Estatistica"
    },
    {
      id: 3,
      title: "Função Exponencial",
      level: "1º Ano Médio",
      image: "https://placehold.co/600x450/ffffff/9333ea?text=GIF+Funcao"
    }
  ];

  return (
    <section className="py-24 bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-slate-500 font-bold tracking-widest text-xs uppercase mb-2 block">
             Por dentro do material
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">
            Qualidade Visual
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Veja como os slides aparecem na sua tela de edição. Tudo limpo, organizado e pronto para projetar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {samples.map((sample) => (
            <div key={sample.id} className="flex flex-col">
               
               {/* Label above card */}
               <div className="flex justify-between items-end mb-3 px-1">
                  <h4 className="font-bold text-slate-800 text-lg">{sample.title}</h4>
                  <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
                     {sample.level}
                  </span>
               </div>

               {/* PowerPoint Mini UI Card */}
               <div className="bg-white rounded-lg shadow-lg border border-slate-300 overflow-hidden flex flex-col group hover:shadow-xl hover:ring-2 hover:ring-[#c43e1c]/20 transition-all duration-300">
                  
                  {/* Mini Toolbar */}
                  <div className="h-8 bg-slate-50 border-b border-slate-200 flex items-center px-3 gap-2">
                     <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                     </div>
                     <div className="h-4 w-px bg-slate-300 mx-1"></div>
                     <div className="flex gap-2 opacity-40">
                        <div className="w-3 h-3 bg-slate-400 rounded-sm"></div>
                        <div className="w-3 h-3 bg-slate-400 rounded-sm"></div>
                        <div className="w-3 h-3 bg-slate-400 rounded-sm"></div>
                     </div>
                  </div>

                  {/* Canvas Area (Background Gray) */}
                  <div className="bg-[#e1dfdd] p-4 relative aspect-[4/3] flex items-center justify-center overflow-hidden">
                     
                     {/* The Slide Paper (White) */}
                     <div className="bg-white shadow-md w-full h-full relative group-hover:scale-[1.02] transition-transform duration-500">
                        <img 
                           src={sample.image} 
                           alt={sample.title} 
                           className="w-full h-full object-cover"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                           <div className="bg-white/90 backdrop-blur text-slate-800 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                              <Monitor className="w-3 h-3" />
                              Modo Apresentação
                           </div>
                        </div>
                     </div>

                  </div>

                  {/* Status Bar / Zoom */}
                  <div className="h-7 bg-white border-t border-slate-200 flex items-center justify-between px-3">
                     <span className="text-[9px] text-slate-400 font-mono">Slide 1 de 1</span>
                     <div className="flex items-center gap-2">
                        <ZoomIn className="w-3 h-3 text-slate-400" />
                        <div className="w-16 h-1 bg-slate-200 rounded-full overflow-hidden">
                           <div className="w-1/2 h-full bg-slate-400"></div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <a href="#pricing" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:border-[#c43e1c] text-slate-700 hover:text-[#c43e1c] rounded-full font-bold transition-all shadow-sm group">
              Explorar a Biblioteca Completa
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
};