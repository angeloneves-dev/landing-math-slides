import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold font-display">
                M
            </div>
            <span className="font-display font-bold text-xl text-slate-900">Aulas prontas visuais - Matemática</span>
        </div>
        <p className="text-slate-500 text-sm mb-6">
          © {new Date().getFullYear()} Aulas prontas visuais - Matemática. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};