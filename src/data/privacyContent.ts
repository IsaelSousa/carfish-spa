export interface PrivacySection {
  title: string
  body: string
}

export const privacyMeta = {
  title: 'Política de Privacidade — CarFish',
  updatedAt: 'Última atualização: maio de 2026',
  intro:
    'Esta Política de Privacidade descreve como o aplicativo CarFish coleta, utiliza e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).',
  betaNotice: {
    title: '⚠️ Aviso — Versão de Testes',
    body:
      'Este aplicativo está em fase de testes (beta). Os dados inseridos são armazenados em um servidor de desenvolvimento e não possuem backup automático. Dados podem ser perdidos a qualquer momento sem aviso prévio. Não utilize este aplicativo para armazenar informações críticas até que uma versão estável seja lançada.',
  },
}

export const privacySections: PrivacySection[] = [
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
]
