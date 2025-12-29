import React from 'react';
import { Edit3, MonitorPlay, Palette, Gift, DownloadCloud, BookOpen } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Edit3 className="w-6 h-6" />,
      title: "100% Editável (.pptx)",
      description: "Mude cores, textos e equações. Adapte para sua turma em segundos."
    },
    {
      icon: <MonitorPlay className="w-6 h-6" />,
      title: "Animações Passo-a-Passo",
      description: "O conteúdo aparece conforme você explica. Chega de alunos copiando sem prestar atenção."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design de Escola Premium",
      description: "Visual limpo e moderno. Seus slides vão parecer material de sistema de ensino caro."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Bônus: Curso de Edição",
      description: "Inclui minicurso para você dominar o PowerPoint e personalizar ainda mais."
    },
    {
      icon: <DownloadCloud className="w-6 h-6" />,
      title: "Acesso Imediato",
      description: "Comprou, baixou. Arquivos organizados em pastas por ano e assunto."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Fiel à BNCC",
      description: "Cobre as habilidades essenciais do 6º ao 3º ano do Ensino Médio."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-200 hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};