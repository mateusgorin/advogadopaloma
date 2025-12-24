
import React from 'react';
import { Scale, ShieldCheck, Gavel, Briefcase, FileText, Landmark } from 'lucide-react';
import { PracticeArea } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'civil',
    title: 'Direito Civil',
    description: 'Soluções estratégicas em contratos, responsabilidade civil e sucessões com foco no patrimônio do cliente.',
    icon: 'Scale'
  },
  {
    id: 'criminal',
    title: 'Direito Criminal',
    description: 'Defesa robusta e ética em processos complexos, garantindo os direitos fundamentais em todas as instâncias.',
    icon: 'Gavel'
  },
  {
    id: 'empresarial',
    title: 'Direito Empresarial',
    description: 'Consultoria jurídica de alto nível para empresas, focada em compliance, fusões e aquisições.',
    icon: 'Briefcase'
  },
  {
    id: 'tributario',
    title: 'Direito Tributário',
    description: 'Otimização de carga tributária e representação em litígios fiscais administrativos e judiciais.',
    icon: 'Landmark'
  },
  {
    id: 'digital',
    title: 'Direito Digital',
    description: 'Proteção de dados, crimes cibernéticos e consultoria em propriedade intelectual na era tecnológica.',
    icon: 'ShieldCheck'
  },
  {
    id: 'familia',
    title: 'Direito de Família',
    description: 'Atendimento humanizado e discreto em questões de divórcio, guarda e planejamento sucessório.',
    icon: 'FileText'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Scale: <Scale size={32} />,
  Gavel: <Gavel size={32} />,
  Briefcase: <Briefcase size={32} />,
  Landmark: <Landmark size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
  FileText: <FileText size={32} />
};
