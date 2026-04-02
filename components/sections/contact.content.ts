import { t, type Dictionary } from "intlayer";

const contactContent = {
  key: "contact",
  content: {
    sectionLabel: t({ en: "Get in touch", "pt": "Entre em contacto" }),
    headingLine1: t({ en: "Let's build", "pt": "Vamos construir" }),
    headingLine2: t({ en: "something great.", "pt": "algo extraordinário." }),
    description: t({
      en: "Ready to start your next project? Tell us what you're working on and we'll be in touch within 24 hours.",
      "pt":
        "Pronto para iniciar o seu próximo projeto? Diga-nos no que está a trabalhar e respondemos em 24 horas.",
    }),
    emailLabel: t({ en: "geral@oceaninformatix.com", "pt": "geral@oceaninformatix.com" }),
    locationLabel: t({ en: "Porto, Portugal", "pt": "Porto, Portugal" }),
    labelName: t({ en: "Name", "pt": "Nome" }),
    labelEmail: t({ en: "Email", "pt": "Email" }),
    labelCompany: t({ en: "Company", "pt": "Empresa" }),
    labelServiceInterest: t({ en: "I'm interested in", "pt": "Estou interessado em" }),
    labelMessage: t({ en: "Message", "pt": "Mensagem" }),
    placeholderName: t({ en: "João Silva", "pt": "João Silva" }),
    placeholderEmail: t({ en: "joao@company.com", "pt": "joao@empresa.com" }),
    placeholderCompany: t({ en: "Your company (optional)", "pt": "A sua empresa (opcional)" }),
    placeholderSelectService: t({ en: "Select a service", "pt": "Selecionar um serviço" }),
    placeholderMessage: t({
      en: "Tell us about your project, timeline, and goals...",
      "pt": "Conte-nos sobre o seu projeto, cronograma e objetivos...",
    }),
    serviceOptions: [
      t({ en: "Web Application", "pt": "Aplicação Web" }),
      t({ en: "Digital Platform", "pt": "Plataforma Digital" }),
      t({ en: "Custom Software", "pt": "Software Personalizado" }),
      t({ en: "Technical Consulting", "pt": "Consultoria Técnica" }),
      t({ en: "Other", "pt": "Outro" }),
    ],
    submitButton: t({ en: "Send message", "pt": "Enviar mensagem" }),
    submitting: t({ en: "Sending...", "pt": "A enviar..." }),
    successHeading: t({ en: "Message sent.", "pt": "Mensagem enviada." }),
    successDescription: t({
      en: "We'll be in touch within 1–2 business days.",
      "pt": "Entraremos em contacto dentro de 1–2 dias úteis.",
    }),
    sendAnother: t({ en: "Send another message", "pt": "Enviar outra mensagem" }),
    fallbackError: t({
      en: "Something went wrong. Please try again.",
      "pt": "Algo correu mal. Por favor tente novamente.",
    }),
  },
} satisfies Dictionary;

export default contactContent;
