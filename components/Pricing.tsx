import React from 'react';
import { Check, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-50 via-white to-accent-50 opacity-50 -z-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row relative z-10">
            
            {/* Left Side: Features */}
            <div className="md:w-3/5 p-8 md:p-12">
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">O que está incluso?</h3>
                <p className="text-slate-600 mb-8">
                    Acesso imediato à plataforma com todo o material organizado.
                </p>
                
                <div className="space-y-4">
                {[
                    "+160 slides editáveis (PPTX)",
                    "Fundamental 2 e Ensino Médio Completo",
                    "Animações prontas em todos os slides",
                    "Bônus: Curso 'Domine o PowerPoint'",
                    "Bônus: 7 dias grátis para usar o criador de provas em WORD",
                    "Acesso Vitalício + Atualizações 2026",
                    "Suporte prioritário"
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-brand-100 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-brand-600 stroke-[3px]" />
                        </div>
                        <span className="text-slate-700 text-sm font-medium">{item}</span>
                    </div>
                ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    <span>7 dias de garantia incondicional</span>
                </div>
            </div>

            {/* Right Side: Pricing */}
            <div className="md:w-2/5 bg-brand-600 p-8 md:p-12 text-center text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-500 opacity-20 rounded-full -ml-10 -mb-10"></div>
                
                <div className="relative z-10">
                    <div className="inline-block bg-accent-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6 shadow-lg">
                        Oferta Especial
                    </div>
                    
                    <div className="opacity-70 text-sm line-through mb-1">De R$ 197,00</div>
                    
                    <div className="flex items-center justify-center gap-1 mb-2">
                       <span className="text-4xl font-display font-bold">R$ 67</span>
                       <span className="text-xl font-medium opacity-80">,00</span>
                    </div>
                    <p className="text-brand-200 text-xs mb-8">Pagamento único. Acesso vitalício.</p>

                    <button className="w-full bg-white text-brand-700 font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-brand-50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        Comprar Agora
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-white/40 text-[10px] mt-4">Compra processada pela Hotmart</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};