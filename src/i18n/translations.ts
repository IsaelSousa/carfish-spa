export type Locale = 'pt' | 'en'

export interface Stat {
  value: string
  label: string
}

export type MockActivityKind = 'fuel' | 'wash' | 'wrench'

export interface MockActivity {
  kind: MockActivityKind
  title: string
  detail: string
  date: string
}

export interface MockHistoryItem {
  kind: MockActivityKind
  title: string
  detail: string
  value: string
}

export interface WhatsNewGroup {
  title: string
  items: string[]
}

export interface WhatsNewRelease {
  version: string
  date: string
  groups: WhatsNewGroup[]
}

export interface PrivacySection {
  title: string
  body: string
}

export const translations = {
  pt: {
    nav: {
      recursos: 'Recursos',
      telas: 'Telas do app',
      novidades: 'Novidades',
      privacidade: 'Privacidade',
      baixar: 'Baixar o app',
      abrirMenu: 'Abrir menu',
    },
    hero: {
      badge: 'Versão beta disponível',
      titleLine1: 'Todo o cuidado com seu carro,',
      titleLine2: 'organizado em um só app.',
      description:
        'CarFish é o app que registra abastecimentos, revisões e lavagens do seu veículo — com histórico completo, múltiplos carros e compartilhamento com colaboradores.',
      ctaPrimary: 'Baixar o app',
      ctaSecondary: 'Ver telas do app',
      stats: [
        { value: '3', label: 'tipos de registro' },
        { value: 'LGPD', label: 'dados protegidos' },
        { value: 'multi-carro', label: 'e colaboradores' },
      ] as Stat[],
      mockLoginTitle: 'CARFISH',
      mockLoginGoogle: 'Entrar com Google',
      mockLoginPrivacy: 'Política de Privacidade',
    },
    features: {
      eyebrow: 'Recursos',
      title: 'Tudo o que seu veículo precisa, em um só lugar',
      subtitle: 'Três registros essenciais para manter o carro sempre em dia.',
      core: {
        fuel: {
          title: 'Abastecimento',
          description:
            'Registre cada abastecimento com litros, valor e quilometragem para acompanhar o consumo do veículo.',
        },
        wrench: {
          title: 'Revisão',
          description:
            'Guarde o histórico de manutenções e revisões, com peças trocadas e valores investidos.',
        },
        wash: {
          title: 'Lavagem',
          description:
            'Anote datas e custos das lavagens para nunca perder o controle da manutenção estética.',
        },
      },
      extra: {
        multiCar: {
          title: 'Múltiplos veículos',
          description: 'Cadastre vários carros e alterne entre eles em segundos.',
        },
        history: {
          title: 'Histórico completo',
          description: 'Filtre e reveja todas as atividades registradas por tipo e data.',
        },
        login: {
          title: 'Login seguro',
          description: 'Autenticação via Google com Firebase, sem senhas para lembrar.',
        },
      },
    },
    screens: {
      eyebrow: 'Telas do app',
      title: 'Uma experiência simples do primeiro ao último clique',
      subtitle: 'Da seleção do veículo ao registro de uma nova atividade.',
      select: {
        usage: '2 de 2 veículos utilizados',
        car1Name: 'ABC-1234',
        car1Desc: 'Fiat Argo 2022',
        car2Name: 'XYZ-5678',
        car2Desc: 'Honda Civic 2020',
        cardTitle: 'Selecionar veículo',
        cardDescription: 'Cadastre quantos veículos precisar e alterne entre eles a qualquer momento.',
      },
      home: {
        beta: '🧪 Versão beta',
        buttonFuel: 'Abastecimento',
        buttonWrench: 'Revisão',
        buttonWash: 'Lavagem',
        sheetTitle: 'Últimas atividades',
        activities: [
          { kind: 'fuel', title: 'Abastecimento', detail: '42L · R$ 268,00', date: '08/07' },
          { kind: 'wash', title: 'Lavagem completa', detail: 'R$ 45,00', date: '03/07' },
          { kind: 'wrench', title: 'Troca de óleo', detail: 'R$ 180,00', date: '28/06' },
        ] as MockActivity[],
        cardTitle: 'Tela inicial',
        cardDescription: 'Acesso rápido aos três tipos de registro e ao resumo das últimas atividades.',
      },
      history: {
        headerTitle: 'Histórico · ABC-1234',
        filters: ['Todos', 'Abastecimento', 'Revisão', 'Lavagem'],
        items: [
          { kind: 'fuel', title: 'Abastecimento', detail: '08/07/2026 · 42L', value: 'R$ 268,00' },
          { kind: 'wash', title: 'Lavagem completa', detail: '03/07/2026', value: 'R$ 45,00' },
          { kind: 'wrench', title: 'Troca de óleo', detail: '28/06/2026', value: 'R$ 180,00' },
          { kind: 'fuel', title: 'Abastecimento', detail: '20/06/2026 · 38L', value: 'R$ 241,00' },
        ] as MockHistoryItem[],
        cardTitle: 'Histórico completo',
        cardDescription: 'Filtre por tipo de atividade e veja todos os registros do veículo em ordem cronológica.',
      },
    },
    whatsNew: {
      eyebrow: 'Novidades',
      title: 'Novidades do CarFish',
      intro: 'Acompanhe aqui o que mudou em cada versão do aplicativo.',
      releases: [
        {
          version: '1.0.7',
          date: '23 de julho de 2026',
          groups: [
            {
              title: 'Novidades',
              items: [
                'Marque parcelas de despesas fixas como pagas direto na Central de Vencimentos e em Meu Veículo, sem precisar abrir o formulário.',
              ],
            },
            {
              title: 'Correções',
              items: [
                'Cards de parcela em Últimas Atividades agora mostram a data de vencimento da parcela, em vez da data em que o lançamento foi criado.',
              ],
            },
          ],
        },
        {
          version: '1.0.6',
          date: '23 de julho de 2026',
          groups: [
            {
              title: 'Correções',
              items: [
                'Corrigido um travamento em que o indicador de carregamento de uma atividade podia ficar girando indefinidamente.',
                'Parcelas de despesas fixas agora mostram "Parcela X de Y", facilitando identificar qual parcela é qual quando há mais de uma.',
                'O detalhe de uma despesa fixa agora mostra também a situação da parcela (paga, pendente ou atrasada) e a data de pagamento.',
                'Corrigido texto de categoria que aparecia sem tradução em Meu Veículo e na Central de Vencimentos.',
                'Redução de chamadas de rede ao carregar despesas fixas, diminuindo a chance de travamentos por lentidão.',
              ],
            },
          ],
        },
        {
          version: '1.0.5',
          date: '23 de julho de 2026',
          groups: [
            {
              title: 'Correções',
              items: [
                'Corrigida uma tela preta que podia acontecer ao abrir o app logo após a instalação.',
                'Adicionado suporte à permissão de notificações exigida a partir do Android 13.',
                'Despesas fixas agora aparecem com ícone, cor e nome próprios em Últimas Atividades, e podem ser editadas e excluídas diretamente pela lista.',
              ],
            },
          ],
        },
        {
          version: '1.0.3',
          date: '22 de julho de 2026',
          groups: [
            {
              title: 'Novidades',
              items: [
                'Central de Vencimentos: calendário com todos os vencimentos do veículo (IPVA, licenciamento/CRLV, seguro obrigatório, seguro do veículo, multas, estacionamento/rodízio, financiamento).',
                'Despesas Fixas / Documentação: novo formulário para cadastrar despesas por categoria, com suporte a pagamento parcelado.',
                'Manutenção Programada: novo formulário para agendar manutenções futuras.',
                'Meu Veículo: resumo do veículo com custo do mês/ano, status da documentação e próximos vencimentos.',
                'Dashboard: custo por km, gráfico de gastos por categoria e totais mensais.',
                'Relatório de Posse: geração e compartilhamento de relatório do veículo.',
                'Carteira Digital: armazenamento de documentos do veículo com upload e visualização.',
                'Notificações locais para lembrar de vencimentos próximos.',
              ],
            },
            {
              title: 'Correções',
              items: ['Diversos ajustes visuais em telas do aplicativo.'],
            },
          ],
        },
      ] as WhatsNewRelease[],
    },
    privacy: {
      eyebrow: 'Privacidade',
      title: 'Política de Privacidade — CarFish',
      updatedAt: 'Última atualização: maio de 2026',
      intro:
        'Esta Política de Privacidade descreve como o aplicativo CarFish coleta, utiliza e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).',
      betaNoticeTitle: '⚠️ Aviso — Versão de Testes',
      betaNoticeBody:
        'Este aplicativo está em fase de testes (beta). Os dados inseridos são armazenados em um servidor de desenvolvimento e não possuem backup automático. Dados podem ser perdidos a qualquer momento sem aviso prévio. Não utilize este aplicativo para armazenar informações críticas até que uma versão estável seja lançada.',
      sections: [
        {
          title: '1. Dados coletados',
          body: `Coletamos os seguintes dados pessoais para o funcionamento do aplicativo:

• E-mail: utilizado para autenticação via Google/Firebase.
• Identificador único de usuário (UID): gerado pelo Firebase para vincular seus registros à sua conta.
• Placa e descrição do veículo: necessários para organizar os registros de manutenção.
• Registros de manutenção, abastecimento e lavagem: datas, tipos, quantidades e valores informados por você.

Se você autorizar, também coletamos:

• Dados de uso anônimos: eventos de navegação dentro do aplicativo, processados pelo Firebase Analytics.`,
        },
        {
          title: '2. Finalidade do tratamento',
          body: `Seus dados são utilizados exclusivamente para:

• Autenticar e identificar sua conta;
• Armazenar e exibir os registros do seu veículo;
• Melhorar o aplicativo com base em uso anônimo (somente com seu consentimento).`,
        },
        {
          title: '3. Base legal',
          body: `O tratamento dos seus dados é realizado com base no seu consentimento livre, informado e inequívoco (Art. 7º, inciso I da LGPD), fornecido ao aceitar esta política no primeiro acesso ao aplicativo.`,
        },
        {
          title: '4. Compartilhamento de dados',
          body: `Seus dados podem ser processados pelos seguintes serviços de terceiros:

• Google Firebase (autenticação e banco de dados) — EUA
• Firebase Analytics (uso anônimo, somente com consentimento) — EUA

Esses serviços seguem as políticas de privacidade da Google LLC. Não vendemos nem compartilhamos seus dados com outros terceiros.`,
        },
        {
          title: '5. Retenção dos dados',
          body: `Seus dados ficam armazenados enquanto sua conta estiver ativa. Ao excluir sua conta, todos os dados pessoais e registros do veículo são removidos permanentemente dos nossos servidores.`,
        },
        {
          title: '6. Seus direitos como titular',
          body: `Nos termos da LGPD, você tem direito a:

• Confirmar a existência de tratamento dos seus dados;
• Acessar os dados que possuímos sobre você;
• Corrigir dados incompletos ou desatualizados;
• Solicitar a exclusão dos seus dados;
• Revogar seu consentimento a qualquer momento;
• Portabilidade dos seus dados.

Para exercer qualquer um desses direitos, utilize a opção "Excluir Conta" no menu do aplicativo ou entre em contato pelo e-mail abaixo.`,
        },
        {
          title: '7. Segurança',
          body: `Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, como transmissão via HTTPS e autenticação segura com tokens Firebase.`,
        },
        {
          title: '8. Contato',
          body: `Dúvidas, solicitações ou reclamações relacionadas ao tratamento dos seus dados pessoais podem ser enviadas para:

E-mail: carfish364@gmail.com

Você também pode registrar uma reclamação junto à Autoridade Nacional de Proteção de Dados (ANPD) em www.gov.br/anpd.`,
        },
      ] as PrivacySection[],
    },
    footer: {
      ctaTitle: 'Pronto para organizar a manutenção do seu carro?',
      ctaDescription: 'CarFish está em versão beta para Android. Experimente gratuitamente.',
      ctaButton: 'Entrar com Google',
      contactLabel: 'Contato: carfish364@gmail.com',
      copy: 'Todos os direitos reservados. Este site é uma apresentação não-oficial do aplicativo.',
    },
  },
  en: {
    nav: {
      recursos: 'Features',
      telas: 'App screens',
      novidades: "What's new",
      privacidade: 'Privacy',
      baixar: 'Download the app',
      abrirMenu: 'Open menu',
    },
    hero: {
      badge: 'Beta version available',
      titleLine1: 'All the care your car needs,',
      titleLine2: 'organized in one app.',
      description:
        'CarFish is the app that tracks your fuel-ups, maintenance and car washes — with full history, multiple cars and sharing with collaborators.',
      ctaPrimary: 'Download the app',
      ctaSecondary: 'See the app screens',
      stats: [
        { value: '3', label: 'record types' },
        { value: 'LGPD', label: 'protected data' },
        { value: 'multi-car', label: 'and collaborators' },
      ] as Stat[],
      mockLoginTitle: 'CARFISH',
      mockLoginGoogle: 'Sign in with Google',
      mockLoginPrivacy: 'Privacy Policy',
    },
    features: {
      eyebrow: 'Features',
      title: 'Everything your vehicle needs, in one place',
      subtitle: 'Three essential records to keep your car always up to date.',
      core: {
        fuel: {
          title: 'Fuel-ups',
          description:
            'Log every fuel-up with liters, price and mileage to track your vehicle’s fuel consumption.',
        },
        wrench: {
          title: 'Maintenance',
          description: 'Keep a history of maintenance and services, with parts replaced and amounts spent.',
        },
        wash: {
          title: 'Car wash',
          description: 'Note down dates and costs of car washes so you never lose track of exterior care.',
        },
      },
      extra: {
        multiCar: {
          title: 'Multiple vehicles',
          description: 'Register as many cars as you need and switch between them in seconds.',
        },
        history: {
          title: 'Full history',
          description: 'Filter and review every logged activity by type and date.',
        },
        login: {
          title: 'Secure login',
          description: 'Sign in with Google via Firebase — no passwords to remember.',
        },
      },
    },
    screens: {
      eyebrow: 'App screens',
      title: 'A simple experience from the first tap to the last',
      subtitle: 'From picking your vehicle to logging a new activity.',
      select: {
        usage: '2 of 2 vehicles in use',
        car1Name: 'ABC-1234',
        car1Desc: '2022 Fiat Argo',
        car2Name: 'XYZ-5678',
        car2Desc: '2020 Honda Civic',
        cardTitle: 'Select a vehicle',
        cardDescription: 'Register as many vehicles as you need and switch between them anytime.',
      },
      home: {
        beta: '🧪 Beta version',
        buttonFuel: 'Fuel-up',
        buttonWrench: 'Maintenance',
        buttonWash: 'Car wash',
        sheetTitle: 'Recent activities',
        activities: [
          { kind: 'fuel', title: 'Fuel-up', detail: '42L · $268.00', date: '07/08' },
          { kind: 'wash', title: 'Full car wash', detail: '$45.00', date: '07/03' },
          { kind: 'wrench', title: 'Oil change', detail: '$180.00', date: '06/28' },
        ] as MockActivity[],
        cardTitle: 'Home screen',
        cardDescription: 'Quick access to the three record types and a summary of recent activities.',
      },
      history: {
        headerTitle: 'History · ABC-1234',
        filters: ['All', 'Fuel-up', 'Maintenance', 'Car wash'],
        items: [
          { kind: 'fuel', title: 'Fuel-up', detail: '07/08/2026 · 42L', value: '$268.00' },
          { kind: 'wash', title: 'Full car wash', detail: '07/03/2026', value: '$45.00' },
          { kind: 'wrench', title: 'Oil change', detail: '06/28/2026', value: '$180.00' },
          { kind: 'fuel', title: 'Fuel-up', detail: '06/20/2026 · 38L', value: '$241.00' },
        ] as MockHistoryItem[],
        cardTitle: 'Full history',
        cardDescription: 'Filter by activity type and see every record for the vehicle in chronological order.',
      },
    },
    whatsNew: {
      eyebrow: "What's new",
      title: "What's new in CarFish",
      intro: 'Follow what changed in each version of the app.',
      releases: [
        {
          version: '1.0.7',
          date: 'July 23, 2026',
          groups: [
            {
              title: 'New',
              items: [
                'Mark fixed expense installments as paid directly from the Due Dates calendar and My Vehicle, without opening the form.',
              ],
            },
            {
              title: 'Fixes',
              items: [
                'Installment cards in Recent Activities now show the installment due date, instead of the date the entry was created.',
              ],
            },
          ],
        },
        {
          version: '1.0.6',
          date: 'July 23, 2026',
          groups: [
            {
              title: 'Fixes',
              items: [
                'Fixed a stuck loading indicator that could spin indefinitely on an activity.',
                'Fixed expense installments now show "Installment X of Y", making it easy to tell which installment is which when there’s more than one.',
                'The fixed expense detail now also shows the installment status (paid, pending or overdue) and the payment date.',
                'Fixed a category label that showed up untranslated in My Vehicle and the Due Dates calendar.',
                'Reduced network calls when loading fixed expenses, lowering the chance of slow-loading stalls.',
              ],
            },
          ],
        },
        {
          version: '1.0.5',
          date: 'July 23, 2026',
          groups: [
            {
              title: 'Fixes',
              items: [
                'Fixed a black screen that could happen when opening the app right after installing it.',
                'Added support for the notification permission required from Android 13 onward.',
                'Fixed expenses now show up with their own icon, color and name in Recent Activities, and can be edited and deleted directly from the list.',
              ],
            },
          ],
        },
        {
          version: '1.0.3',
          date: 'July 22, 2026',
          groups: [
            {
              title: 'New',
              items: [
                'Due Dates calendar: a calendar with every vehicle due date (registration tax, licensing, mandatory insurance, vehicle insurance, fines, parking/restricted zones, financing).',
                'Fixed Expenses / Documents: a new form to register expenses by category, with support for installment payments.',
                'Scheduled Maintenance: a new form to schedule future maintenance.',
                'My Vehicle: a vehicle summary with month/year cost, documentation status and upcoming due dates.',
                'Dashboard: cost per km, spending-by-category chart and monthly totals.',
                'Ownership Report: generate and share a vehicle report.',
                'Digital Wallet: store vehicle documents with upload and viewing.',
                'Local notifications to remind you of upcoming due dates.',
              ],
            },
            {
              title: 'Fixes',
              items: ['Various visual adjustments across app screens.'],
            },
          ],
        },
      ] as WhatsNewRelease[],
    },
    privacy: {
      eyebrow: 'Privacy',
      title: 'Privacy Policy — CarFish',
      updatedAt: 'Last updated: May 2026',
      intro:
        'This Privacy Policy describes how the CarFish app collects, uses and protects your personal data, in compliance with Brazil’s General Data Protection Law (LGPD — Law No. 13,709/2018).',
      betaNoticeTitle: '⚠️ Notice — Testing Version',
      betaNoticeBody:
        'This app is in testing (beta) phase. Data you enter is stored on a development server with no automatic backup. Data may be lost at any time without notice. Do not use this app to store critical information until a stable version is released.',
      sections: [
        {
          title: '1. Data we collect',
          body: `We collect the following personal data for the app to work:

• Email: used for authentication via Google/Firebase.
• Unique user identifier (UID): generated by Firebase to link your records to your account.
• Vehicle plate and description: needed to organize maintenance records.
• Maintenance, fuel-up and car wash records: dates, types, quantities and amounts you provide.

If you authorize it, we also collect:

• Anonymous usage data: in-app navigation events, processed by Firebase Analytics.`,
        },
        {
          title: '2. Purpose of processing',
          body: `Your data is used exclusively to:

• Authenticate and identify your account;
• Store and display your vehicle records;
• Improve the app based on anonymous usage (only with your consent).`,
        },
        {
          title: '3. Legal basis',
          body: `Your data is processed based on your free, informed and unambiguous consent (Art. 7, item I of the LGPD), given when you accept this policy on your first access to the app.`,
        },
        {
          title: '4. Data sharing',
          body: `Your data may be processed by the following third-party services:

• Google Firebase (authentication and database) — USA
• Firebase Analytics (anonymous usage, only with consent) — USA

These services follow Google LLC’s privacy policies. We do not sell or share your data with any other third parties.`,
        },
        {
          title: '5. Data retention',
          body: `Your data is stored for as long as your account is active. When you delete your account, all personal data and vehicle records are permanently removed from our servers.`,
        },
        {
          title: '6. Your rights as a data subject',
          body: `Under the LGPD, you have the right to:

• Confirm whether we process your data;
• Access the data we hold about you;
• Correct incomplete or outdated data;
• Request deletion of your data;
• Withdraw your consent at any time;
• Request data portability.

To exercise any of these rights, use the "Delete Account" option in the app menu or contact us at the email below.`,
        },
        {
          title: '7. Security',
          body: `We adopt technical and organizational measures to protect your data against unauthorized access, such as HTTPS transmission and secure authentication with Firebase tokens.`,
        },
        {
          title: '8. Contact',
          body: `Questions, requests or complaints related to the processing of your personal data can be sent to:

Email: carfish364@gmail.com

You can also file a complaint with Brazil’s National Data Protection Authority (ANPD) at www.gov.br/anpd.`,
        },
      ] as PrivacySection[],
    },
    footer: {
      ctaTitle: 'Ready to organize your car’s maintenance?',
      ctaDescription: 'CarFish is in beta for Android. Try it for free.',
      ctaButton: 'Sign in with Google',
      contactLabel: 'Contact: carfish364@gmail.com',
      copy: 'All rights reserved. This site is an unofficial presentation of the app.',
    },
  },
}

export type TranslationTree = typeof translations.pt
