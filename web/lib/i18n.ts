export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Rate change page
    "rateChange.title": "TDU Delivery Rates Just Changed",
    "rateChange.seeHow": "See How It Affects You.",
    "rateChange.subtitle":
      "Stay on top of utility delivery rate updates and competitor pricing changes with PowerRateIndex.",
    "rateChange.previousRate": "Previous Rate",
    "rateChange.currentRate": "Current",
    "rateChange.updatedAsOf": "Updated as of",
    "rateChange.decreased": "Rate decreased",
    "rateChange.increased": "Rate increased",
    "rateChange.whyItMatters": "Why It Matters",
    "rateChange.whyItMattersBody":
      "Fluctuations in TDU rates can directly impact your total electricity costs. PowerRateIndex keeps you informed — automatically.",
    "rateChange.valueProp1": "Track all TDU delivery rate updates",
    "rateChange.valueProp2": "Compare competitor pricing in one dashboard",
    "rateChange.valueProp3": "Get alerts when rates shift or new offers appear",
    "rateChange.experienceFree": "EXPERIENCE IT FOR FREE",
    "rateChange.startMonitoring": "Start monitoring smarter today.",
    "rateChange.cta": "Start 30-day free trial",

    // Home page
    "home.login": "Login",
    "home.heroTitle":
      "Residential Electricity Market and Plan Data for the Retail Energy Industry",
    "home.statStates": "Total States",
    "home.statUtilities": "Total Utilities",
    "home.statSuppliers": "Total Suppliers",
    "home.statPlans": "Total Plans",
    "home.talkToSales": "Talk To Sales",
    "home.getStarted": "Get Started",
    "home.scrapeTitle":
      "PowerRateIndex continually scrapes the internet to gather the most comprehensive, timely and accurate Residential Electricity Plan data available",
    "home.scrapeBullet1": "All markets and plans scraped at least once a day",
    "home.scrapeBullet2":
      "Our AI calculates the effective rate for any plan structure including tiered and TOU plans",
    "home.scrapeBullet3":
      "Continually monitors and updates utilities\u2019 Price-to-Compare",
    "home.featuresTitle":
      "PowerRateIndex is a critical tool for making effective Pricing, Sales and Marketing decisions",
    "home.platformTitle": "Energy Pricing Intelligence Platform",
    "home.platformSubtitle":
      "Our platform updates daily, ensuring users have real-time insights into competitive pricing, helping firms optimize their strategies and stay ahead in the evolving energy market",
    "home.avgRate": "Avg Rate",
    "home.avgRateByTdu": "Today's Avg Rate by TDU based on 1000 kWh",
    "home.avgRateByUtility": "Today's Avg Rate by Utility",
    "home.contactTitle": "Explore the Future of Energy Pricing Analysis",
    "home.contactSubtitle":
      "Ready to make informed decisions with reliable and comprehensive energy pricing data?",
    "home.formFirstName": "First Name",
    "home.formLastName": "Last Name",
    "home.formCompany": "Company",
    "home.formEmail": "Email",
    "home.formMessage": "Message",
    "home.formSubmit": "Submit",
    "home.formSuccess": "Submit Successfully!",
    "home.formSuccessBody": "We will contact you ASAP.",
    "home.utilityLinksTitle": "Explore Utility Rate Changes",

    // Form
    "form.emailPlaceholder": "Enter your email",

    // Footer
    "footer.rights": "2025 © EIQdigital. All Rights Reserved.",
    "footer.tagline1": "AI-First, Data and Technology Leader.",
    "footer.tagline2":
      "Powering the Energy Industry's Digital and Sustainability Transition.",
    "footer.products": "Products",
    "footer.support": "Support & Contact",
    "footer.developers": "Developers",
    "footer.followUs": "Follow us on",
    "footer.contactUs": "Contact Us",
    "footer.documentation": "Documentation",

    // Common
    "common.loading": "Loading…",

    // 404
    "notFound.title": "Page not found",
    "notFound.home": "Back to Home",

    // Auth (login / reset password)
    "auth.signIn": "Sign In",
    "auth.username": "Username",
    "auth.password": "Password",
    "auth.forgotPassword": "Forgot your password?",
    "auth.resetPassword": "Reset Password",
    "auth.resetTitle": "Reset your password",
    "auth.resetSubtitle": "Enter your username and we'll send you a code to reset your password.",
    "auth.sendCode": "Send code",
    "auth.newPassword": "New password",
    "auth.confirmPassword": "Confirm password",
    "auth.submit": "Submit",
    "auth.backToSignIn": "Back to Sign In",
    "auth.code": "Confirmation code",
    "auth.enterCode": "Enter the code we sent you",

    // Metadata
    "meta.title": "PowerRateIndex | Retail Energy Pricing & Competitive Analysis",
    "meta.titleTemplate": "%s | PowerRateIndex",
    "meta.description":
      "Powerful tool for retail energy pricing and competitive analysis. Residential electricity market and plan data for the retail energy industry.",
    "meta.siteName": "PowerRateIndex",
    "meta.ogDescription":
      "Powerful tool for retail energy pricing and competitive analysis.",
    "meta.utilityTitle": "{name} TDU Delivery Rates Just Changed",
    "meta.utilityDescription":
      "{name} TDU delivery rates just changed. Previous {previous}¢/kWh → current {current}¢/kWh. Stay on top of utility rate updates with PowerRateIndex.",
  },
  es: {
    // Rate change page
    "rateChange.title": "Las tarifas de entrega de TDU acaban de cambiar",
    "rateChange.seeHow": "Vea cómo le afecta.",
    "rateChange.subtitle":
      "Manténgase al día con las actualizaciones de tarifas de entrega de servicios públicos y los cambios de precios de la competencia con PowerRateIndex.",
    "rateChange.previousRate": "Tarifa anterior",
    "rateChange.currentRate": "Actual",
    "rateChange.updatedAsOf": "Actualizado a partir de",
    "rateChange.decreased": "Tarifa disminuida",
    "rateChange.increased": "Tarifa aumentada",
    "rateChange.whyItMatters": "Por qué es importante",
    "rateChange.whyItMattersBody":
      "Las fluctuaciones en las tarifas de TDU pueden afectar directamente sus costos totales de electricidad. PowerRateIndex lo mantiene informado, automáticamente.",
    "rateChange.valueProp1": "Rastree todas las actualizaciones de tarifas de entrega de TDU",
    "rateChange.valueProp2": "Compare los precios de la competencia en un solo panel",
    "rateChange.valueProp3": "Reciba alertas cuando las tarifas cambien o aparezcan nuevas ofertas",
    "rateChange.experienceFree": "PRUÉBELO GRATIS",
    "rateChange.startMonitoring": "Comience a monitorear de forma más inteligente hoy.",
    "rateChange.cta": "Comience la prueba gratuita de 30 días",

    // Home page
    "home.login": "Iniciar sesión",
    "home.heroTitle":
      "Datos de planes y mercado de electricidad residencial para la industria de energía minorista",
    "home.statStates": "Estados totales",
    "home.statUtilities": "Servicios públicos totales",
    "home.statSuppliers": "Proveedores totales",
    "home.statPlans": "Planes totales",
    "home.talkToSales": "Hablar con ventas",
    "home.getStarted": "Comenzar",
    "home.scrapeTitle":
      "PowerRateIndex extrae continuamente de internet para recopilar los datos de planes de electricidad residencial más completos, oportunos y precisos disponibles",
    "home.scrapeBullet1": "Todos los mercados y planes se extraen al menos una vez al día",
    "home.scrapeBullet2":
      "Nuestra IA calcula la tarifa efectiva para cualquier estructura de plan, incluidos los planes escalonados y TOU",
    "home.scrapeBullet3":
      "Monitorea y actualiza continuamente el precio de comparación de los servicios públicos",
    "home.featuresTitle":
      "PowerRateIndex es una herramienta fundamental para tomar decisiones efectivas de precios, ventas y marketing",
    "home.platformTitle": "Plataforma de inteligencia de precios de energía",
    "home.platformSubtitle":
      "Nuestra plataforma se actualiza diariamente, garantizando información en tiempo real sobre precios competitivos, ayudando a las empresas a optimizar sus estrategias y mantenerse a la vanguardia en el mercado energético en evolución",
    "home.avgRate": "Tarifa promedio",
    "home.avgRateByTdu": "Tarifa promedio de hoy por TDU basada en 1000 kWh",
    "home.avgRateByUtility": "Tarifa promedio de hoy por servicio público",
    "home.contactTitle": "Explore el futuro del análisis de precios de energía",
    "home.contactSubtitle":
      "¿Listo para tomar decisiones informadas con datos de precios de energía confiables y completos?",
    "home.formFirstName": "Nombre",
    "home.formLastName": "Apellido",
    "home.formCompany": "Empresa",
    "home.formEmail": "Correo electrónico",
    "home.formMessage": "Mensaje",
    "home.formSubmit": "Enviar",
    "home.formSuccess": "¡Enviado correctamente!",
    "home.formSuccessBody": "Nos pondremos en contacto contigo lo antes posible.",
    "home.utilityLinksTitle": "Explore los cambios de tarifas de servicios públicos",

    // Form
    "form.emailPlaceholder": "Ingrese su correo electrónico",

    // Footer
    "footer.rights": "2025 © EIQdigital. Todos los derechos reservados.",
    "footer.tagline1": "Líder en IA, datos y tecnología.",
    "footer.tagline2":
      "Impulsando la transición digital y de sostenibilidad de la industria energética.",
    "footer.products": "Productos",
    "footer.support": "Soporte y contacto",
    "footer.developers": "Desarrolladores",
    "footer.followUs": "Síguenos en",
    "footer.contactUs": "Contáctenos",
    "footer.documentation": "Documentación",

    // Common
    "common.loading": "Cargando…",

    // 404
    "notFound.title": "Página no encontrada",
    "notFound.home": "Volver al inicio",

    // Auth (login / reset password)
    "auth.signIn": "Iniciar sesión",
    "auth.username": "Nombre de usuario",
    "auth.password": "Contraseña",
    "auth.forgotPassword": "¿Olvidó su contraseña?",
    "auth.resetPassword": "Restablecer contraseña",
    "auth.resetTitle": "Restablezca su contraseña",
    "auth.resetSubtitle": "Ingrese su nombre de usuario y le enviaremos un código para restablecer su contraseña.",
    "auth.sendCode": "Enviar código",
    "auth.newPassword": "Nueva contraseña",
    "auth.confirmPassword": "Confirmar contraseña",
    "auth.submit": "Enviar",
    "auth.backToSignIn": "Volver a iniciar sesión",
    "auth.code": "Código de confirmación",
    "auth.enterCode": "Ingrese el código que le enviamos",

    // Metadata
    "meta.title": "PowerRateIndex | Precios de energía minorista y análisis competitivo",
    "meta.titleTemplate": "%s | PowerRateIndex",
    "meta.description":
      "Herramienta poderosa para precios de energía minorista y análisis competitivo. Datos de planes y mercado de electricidad residencial para la industria de energía minorista.",
    "meta.siteName": "PowerRateIndex",
    "meta.ogDescription":
      "Herramienta poderosa para precios de energía minorista y análisis competitivo.",
    "meta.utilityTitle": "{name} Las tarifas de entrega de TDU acaban de cambiar",
    "meta.utilityDescription":
      "Las tarifas de entrega de TDU de {name} acaban de cambiar. Anterior {previous}¢/kWh → actual {current}¢/kWh. Manténgase al día con las actualizaciones de tarifas de servicios públicos con PowerRateIndex.",
  },
};

export function t(
  key: string,
  locale: Locale = "en",
  vars?: Record<string, string | number>
): string {
  let s = translations[locale]?.[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      s = s.replaceAll(`{${k}}`, String(v));
    }
  }
  return s;
}
