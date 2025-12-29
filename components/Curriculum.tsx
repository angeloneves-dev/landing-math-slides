import React, { useState } from 'react';
import { CURRICULUM, ICONS_MAP } from '../constants';
import { CurriculumItem } from '../types';
import { ChevronDown, ChevronUp, Check, FileText } from 'lucide-react';

type CurriculumCardProps = { item: CurriculumItem };

const CurriculumCard: React.FC<CurriculumCardProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = ICONS_MAP[item.iconName];

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-brand-200 group flex flex-col overflow-hidden">
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all">
            <Icon className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
            {item.lessons.length} Aulas
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">{item.title}</h3>
        <p className="text-sm text-slate-500 mb-4">{item.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {item.topics.slice(0, 8).map((topic, i) => (
            <span
              key={i}
              className="text-[10px] font-semibold text-slate-600 px-2 py-1 rounded bg-slate-50 border border-slate-100 group-hover:border-brand-100 transition-colors"
            >
              {topic}
            </span>
          ))}
          {item.topics.length > 8 && (
            <span className="text-[10px] font-semibold text-slate-400 px-2 py-1">...</span>
          )}
        </div>
      </div>

      <div className={`bg-slate-50 border-t border-slate-100 transition-all duration-300 ${isOpen ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}>
        <div className="p-4 pt-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 mt-2">Grade de Aulas:</p>
          <ul className="space-y-2">
            {item.lessons.map((lesson, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm">{lesson}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 p-2 bg-brand-50 rounded text-center text-xs text-brand-700 font-medium flex items-center justify-center gap-2">
            <FileText className="w-3 h-3" />
            Atualizações sem custo adicional
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full py-3 bg-white hover:bg-slate-50 text-brand-600 font-bold text-sm border-t border-slate-100 flex items-center justify-center gap-2 transition-colors"
      >
        {isOpen ? 'Recolher Grade' : 'Ver Grade de Aulas'}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
    </div>
  );
};

export const Curriculum = () => {
  return (
    <section className="py-24 bg-brand-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 text-slate-900">
            Conteúdo completo
          </h2>
          <p className="text-slate-600 mt-4 text-lg">
            Organizado por pastas, séries e bimestres. Tudo pronto para usar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {CURRICULUM.map((item) => (
            <CurriculumCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
