
import React from 'react';
import { Scale, ShieldCheck, Gavel, ShoppingBag, FileText, Landmark } from 'lucide-react';
import { PracticeArea } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'civil',
    title: 'Direito Civil',
    description: 'Soluções estratégicas em contratos, responsabilidade civil e sucessões com foco no patrimônio do cliente.',
    longDescription: 'Nossa atuação em Direito Civil abrange desde a elaboração e análise minuciosa de contratos complexos até a gestão estratégica de conflitos de responsabilidade civil. Atuamos com foco na preservação do patrimônio familiar e empresarial, oferecendo consultoria preventiva e representação litigiosa em questões de posse, propriedade, obrigações e sucessões, garantindo que cada decisão seja fundamentada na segurança jurídica e nos interesses de longo prazo de nossos clientes.',
    icon: 'Scale'
  },
  {
    id: 'criminal',
    title: 'Direito Criminal',
    description: 'Defesa robusta e ética em processos complexos, garantindo os direitos fundamentais em todas as instâncias.',
    longDescription: 'O escritório oferece uma defesa criminal técnica, discreta e altamente especializada. Atuamos em crimes de colarinho branco, crimes contra o sistema financeiro, ordem tributária e crimes comuns. Nossa abordagem foca no acompanhamento desde o inquérito policial até as instâncias superiores em Brasília, utilizando estratégias processuais avançadas para garantir o devido processo legal e a proteção intransigente das liberdades individuais de nossos constituintes.',
    icon: 'Gavel'
  },
  {
    id: 'consumidor',
    title: 'Direito do Consumidor',
    description: 'Defesa intransigente dos direitos do consumidor em face de grandes corporações.',
    longDescription: 'Atuamos na vanguarda da defesa do consumidor, combatendo práticas abusivas de grandes empresas, bancos e seguradoras. Nossa expertise inclui ações de reparação por danos morais e materiais, revisão de contratos de adesão, cancelamentos indevidos e questões de e-commerce. Buscamos não apenas a compensação financeira, mas o reequilíbrio da relação de consumo e o respeito integral ao Código de Defesa do Consumidor em todas as esferas.',
    icon: 'ShoppingBag'
  },
  {
    id: 'tributario',
    title: 'Direito Tributário',
    description: 'Otimização de carga tributária e representação em litígios fiscais administrativos e judiciais.',
    longDescription: 'Proporcionamos inteligência tributária para pessoas físicas e jurídicas. Nossa atuação envolve o planejamento tributário para redução lícita de impostos, recuperação de créditos fiscais e defesa em execuções fiscais. Com uma visão analítica das constantes mudanças na legislação brasileira, protegemos o fluxo de caixa de nossos clientes contra cobranças indevidas e sanções desproporcionais por parte do fisco em todas as esferas governamentais.',
    icon: 'Landmark'
  },
  {
    id: 'digital',
    title: 'Direito Digital',
    description: 'Proteção de dados, crimes cibernéticos e consultoria em propriedade intelectual na era tecnológica.',
    longDescription: 'Atuamos na fronteira do direito com a tecnologia. Oferecemos consultoria completa para adequação à LGPD, proteção de propriedade intelectual no ambiente digital e defesa em casos de crimes cibernéticos ou vazamento de informações. Nossa equipe assessora empresas de tecnologia e criadores de conteúdo na elaboração de termos de uso, políticas de privacidade e na resolução de conflitos envolvendo nomes de domínio e direitos autorais na internet.',
    icon: 'ShieldCheck'
  },
  {
    id: 'familia',
    title: 'Direito de Família',
    description: 'Atendimento humanizado e discreto em questões de divórcio, guarda e planejamento sucessório.',
    longDescription: 'Combinamos sensibilidade humana com rigor técnico para tratar de questões familiares delicadas. Nossa atuação em divórcios, partilhas de bens, fixação de alimentos e regimes de guarda prioriza a resolução consensual e a proteção dos menores. Além disso, estruturamos planejamentos sucessórios e holdings familiares para garantir que a transição geracional do patrimônio ocorra com o mínimo de atrito e a máxima eficiência tributária e jurídica.',
    icon: 'FileText'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Scale: <Scale size={32} />,
  Gavel: <Gavel size={32} />,
  ShoppingBag: <ShoppingBag size={32} />,
  Landmark: <Landmark size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
  FileText: <FileText size={32} />
};
