export interface SchoolConfig {
  name: string;
  domain: string;
  contact: {
    phone: string;
    email: string;
  };
  theme: {
    primaryBgColor: string;
    primaryTextColor: string;
    accentColor: string;
    softBgColor: string;
    softBorderColor: string;
    softTextColor: string;
  };
  hero: {
    titleLines: string[];
    highlightedLine: string;
    description: string;
    buttonText: string;
    secondaryButtonText: string;
    image: string;
    badgeText: string;
  };
  integrations: {
    microsoftEntraTenantId: string;
  };
}

export const liteConfigs: Record<'general' | 'kinder', SchoolConfig> = {
  general: {
    name: "Colegio IDS",
    domain: "colegio-ids.edu.mx",
    contact: {
      phone: "+52 (55) 0000-0000",
      email: "admissions@colegio-ids.edu.mx"
    },
    theme: {
      primaryBgColor: "bg-vault-blue",
      primaryTextColor: "text-vault-blue",
      accentColor: "text-vault-blue",
      softBgColor: "bg-emerald-50",
      softBorderColor: "border-emerald-100",
      softTextColor: "text-emerald-700"
    },
    hero: {
      titleLines: ['Forjando el', 'Futuro de'],
      highlightedLine: 'Líderes IDS.',
      description: 'Educación de clase mundial fundamentada en la excelencia académica, la integridad personal y el dominio de herramientas tecnológicas de vanguardia.',
      buttonText: 'Admisiones 2026',
      secondaryButtonText: 'Portal de Familias',
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      badgeText: "VALIDEZ IDS"
    },
    integrations: {
      microsoftEntraTenantId: "DEMO_TENANT_ID"
    }
  },
  kinder: {
    name: "Kinder IDS",
    domain: "kinder-ids.edu.mx",
    contact: {
      phone: "+52 (55) 0000-0000",
      email: "hola@kinder-ids.edu.mx"
    },
    theme: {
      primaryBgColor: "bg-pink-600",
      primaryTextColor: "text-pink-600",
      accentColor: "text-pink-600",
      softBgColor: "bg-pink-50",
      softBorderColor: "border-pink-100",
      softTextColor: "text-pink-700"
    },
    hero: {
      titleLines: ['El Comienzo', 'de una Gran'],
      highlightedLine: 'Historia IDS.',
      description: 'Un entorno bilingüe diseñado para despertar la curiosidad y el potencial de nuestros alumnos más pequeños a través del juego y el afecto.',
      buttonText: 'Admisiones 2026',
      secondaryButtonText: 'Portal de Familias',
      image: "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?auto=format&fit=crop&q=80&w=800",
      badgeText: "¡Juega y Aprende!"
    },
    integrations: {
      microsoftEntraTenantId: "DEMO_TENANT_ID"
    }
  }
};
