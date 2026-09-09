export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Utility page sections (Hero / RateComparison / WhyItMatter / TrialForm)
    "Hero.Title": "TDU Delivery Rates Just Changed",
    "Hero.SeeHow": "See How It Affects You.",
    "Hero.Subtitle":
      "Stay on top of utility delivery rate updates and competitor pricing changes with PowerRateIndex.",
    "RateComparison.PreviousRate": "Previous Rate",
    "RateComparison.UpdatedAsOf": "Updated as of",
    "RateComparison.Decreased": "Rate decreased",
    "RateComparison.Increased": "Rate increased",
    "WhyItMatter.Title": "Why It Matters",
    "WhyItMatter.Body":
      "Fluctuations in TDU rates can directly impact your total electricity costs. PowerRateIndex keeps you informed — automatically.",
    "WhyItMatter.ValueProp1": "Track all TDU delivery rate updates",
    "WhyItMatter.ValueProp2": "Compare competitor pricing in one dashboard",
    "WhyItMatter.ValueProp3": "Get alerts when rates shift or new offers appear",
    "TrialForm.ExperienceFree": "EXPERIENCE IT FOR FREE",
    "TrialForm.StartMonitoring": "Start monitoring smarter today.",
    "TrialForm.CTA": "Start 30-day free trial",

    // Home page sections (Header / HomeHero / HomeScrape / HomeFeatures / HomePlatform / HomeContact / UtilityLinks)
    "Header.Login": "Login",
    "HomeHero.Title":
      "Residential Electricity Market and Plan Data for the Retail Energy Industry",
    "HomeHero.StatStates": "Total States",
    "HomeHero.StatUtilities": "Total Utilities",
    "HomeHero.StatSuppliers": "Total Suppliers",
    "HomeHero.StatPlans": "Total Plans",
    "HomeHero.TalkToSales": "Talk To Sales",
    "HomeHero.GetStarted": "Get Started",
    "HomeScrape.Title":
      "PowerRateIndex continually scrapes the internet to gather the most comprehensive, timely and accurate Residential Electricity Plan data available",
    "HomeScrape.Bullet1": "All markets and plans scraped at least once a day",
    "HomeScrape.Bullet2":
      "Our AI calculates the effective rate for any plan structure including tiered and TOU plans",
    "HomeScrape.Bullet3":
      "Continually monitors and updates utilities\u2019 Price-to-Compare",
    "HomeFeatures.Title":
      "PowerRateIndex is a critical tool for making effective Pricing, Sales and Marketing decisions",
    "HomeFeatures.Card1":
      "Verify price competitiveness vs. key competitors and the market",
    "HomeFeatures.Card2":
      "Identify pricing \u201cSweet Spots\u201d and attractive competitive comparisons",
    "HomeFeatures.Card3":
      "Use data to create compelling Sales and Marketing messaging",
    "HomeFeatures.Card4":
      "Effectively audits TOS and EFL against posted plan rates",
    "HomePlatform.Title": "Energy Pricing Intelligence Platform",
    "HomePlatform.Subtitle":
      "Our platform updates daily, ensuring users have real-time insights into competitive pricing, helping firms optimize their strategies and stay ahead in the evolving energy market",
    "HomePlatform.AvgRateByTdu": "Today's Avg Rate by TDU based on 1000 kWh",
    "HomePlatform.AvgRateByUtility": "Today's Avg Rate by Utility",
    "HomeContact.Title": "Explore the Future of Energy Pricing Analysis",
    "HomeContact.Subtitle":
      "Ready to make informed decisions with reliable and comprehensive energy pricing data?",
    "HomeContact.FormFirstName": "First Name",
    "HomeContact.FormLastName": "Last Name",
    "HomeContact.FormCompany": "Company",
    "HomeContact.FormEmail": "Email",
    "HomeContact.FormMessage": "Message",
    "HomeContact.FormSubmit": "Submit",
    "HomeContact.FormSuccess": "Submit Successfully!",
    "HomeContact.FormSuccessBody": "We will contact you ASAP.",
    "UtilityLinks.Title": "Explore Utility Rate Changes",

    // Footer
    "Footer.Rights": "2025 © EIQdigital. All Rights Reserved.",
    "Footer.Tagline1": "AI-First, Data and Technology Leader.",
    "Footer.Tagline2":
      "Powering the Energy Industry's Digital and Sustainability Transition.",
    "Footer.Products": "Products",
    "Footer.Support": "Support & Contact",
    "Footer.Developers": "Developers",
    "Footer.FollowUs": "Follow us on",
    "Footer.ContactUs": "Contact Us",
    "Footer.Documentation": "Documentation",

    // NotFound
    "NotFound.Title": "Page not found",
    "NotFound.Home": "Back to Home",

    // Auth (login / reset password)
    "Auth.SignIn": "Sign In",
    "Auth.Username": "Username",
    "Auth.Password": "Password",
    "Auth.ForgotPassword": "Forgot your password?",
    "Auth.ResetPassword": "Reset Password",
    "Auth.ResetTitle": "Reset your password",
    "Auth.ResetSubtitle": "Enter your username and we'll send you a code to reset your password.",
    "Auth.SendCode": "Send code",
    "Auth.NewPassword": "New password",
    "Auth.ConfirmPassword": "Confirm password",
    "Auth.Submit": "Submit",
    "Auth.BackToSignIn": "Back to Sign In",
    "Auth.Code": "Confirmation code",
    "Auth.EnterCode": "Enter the code we sent you",

    // Meta (SEO)
    "Meta.Title": "PowerRateIndex | Retail Energy Pricing & Competitive Analysis",
    "Meta.TitleTemplate": "%s | PowerRateIndex",
    "Meta.Description":
      "Powerful tool for retail energy pricing and competitive analysis. Residential electricity market and plan data for the retail energy industry.",
    "Meta.SiteName": "PowerRateIndex",
    "Meta.OgDescription":
      "Powerful tool for retail energy pricing and competitive analysis.",
    "Meta.UtilityTitle": "{name} TDU Delivery Rates Just Changed",
    "Meta.UtilityDescription":
      "{name} TDU delivery rates just changed. Previous {previous}¢/kWh → current {current}¢/kWh. Stay on top of utility rate updates with PowerRateIndex.",
  },
  es: {
    // Utility page sections (Hero / RateComparison / WhyItMatter / TrialForm)
    "Hero.Title": "Las tarifas de entrega de TDU acaban de cambiar",
    "Hero.SeeHow": "Vea cómo le afecta.",
    "Hero.Subtitle":
      "Manténgase al día con las actualizaciones de tarifas de entrega de servicios públicos y los cambios de precios de la competencia con PowerRateIndex.",
    "RateComparison.PreviousRate": "Tarifa anterior",
    "RateComparison.UpdatedAsOf": "Actualizado a partir de",
    "RateComparison.Decreased": "Tarifa disminuida",
    "RateComparison.Increased": "Tarifa aumentada",
    "WhyItMatter.Title": "Por qué es importante",
    "WhyItMatter.Body":
      "Las fluctuaciones en las tarifas de TDU pueden afectar directamente sus costos totales de electricidad. PowerRateIndex lo mantiene informado, automáticamente.",
    "WhyItMatter.ValueProp1": "Rastree todas las actualizaciones de tarifas de entrega de TDU",
    "WhyItMatter.ValueProp2": "Compare los precios de la competencia en un solo panel",
    "WhyItMatter.ValueProp3": "Reciba alertas cuando las tarifas cambien o aparezcan nuevas ofertas",
    "TrialForm.ExperienceFree": "PRUÉBELO GRATIS",
    "TrialForm.StartMonitoring": "Comience a monitorear de forma más inteligente hoy.",
    "TrialForm.CTA": "Comience la prueba gratuita de 30 días",

    // Home page sections (Header / HomeHero / HomeScrape / HomeFeatures / HomePlatform / HomeContact / UtilityLinks)
    "Header.Login": "Iniciar sesión",
    "HomeHero.Title":
      "Datos de planes y mercado de electricidad residencial para la industria de energía minorista",
    "HomeHero.StatStates": "Estados totales",
    "HomeHero.StatUtilities": "Servicios públicos totales",
    "HomeHero.StatSuppliers": "Proveedores totales",
    "HomeHero.StatPlans": "Planes totales",
    "HomeHero.TalkToSales": "Hablar con ventas",
    "HomeHero.GetStarted": "Comenzar",
    "HomeScrape.Title":
      "PowerRateIndex extrae continuamente de internet para recopilar los datos de planes de electricidad residencial más completos, oportunos y precisos disponibles",
    "HomeScrape.Bullet1": "Todos los mercados y planes se extraen al menos una vez al día",
    "HomeScrape.Bullet2":
      "Nuestra IA calcula la tarifa efectiva para cualquier estructura de plan, incluidos los planes escalonados y TOU",
    "HomeScrape.Bullet3":
      "Monitorea y actualiza continuamente el precio de comparación de los servicios públicos",
    "HomeFeatures.Title":
      "PowerRateIndex es una herramienta fundamental para tomar decisiones efectivas de precios, ventas y marketing",
    "HomeFeatures.Card1":
      "Verifique la competitividad de precios frente a los competidores clave y el mercado",
    "HomeFeatures.Card2":
      "Identifique los \u201cpuntos óptimos\u201d de precios y comparaciones competitivas atractivas",
    "HomeFeatures.Card3":
      "Use los datos para crear mensajes convincentes de ventas y marketing",
    "HomeFeatures.Card4":
      "Audita eficazmente TOS y EFL frente a las tarifas de planes publicadas",
    "HomePlatform.Title": "Plataforma de inteligencia de precios de energía",
    "HomePlatform.Subtitle":
      "Nuestra plataforma se actualiza diariamente, garantizando información en tiempo real sobre precios competitivos, ayudando a las empresas a optimizar sus estrategias y mantenerse a la vanguardia en el mercado energético en evolución",
    "HomePlatform.AvgRateByTdu": "Tarifa promedio de hoy por TDU basada en 1000 kWh",
    "HomePlatform.AvgRateByUtility": "Tarifa promedio de hoy por servicio público",
    "HomeContact.Title": "Explore el futuro del análisis de precios de energía",
    "HomeContact.Subtitle":
      "¿Listo para tomar decisiones informadas con datos de precios de energía confiables y completos?",
    "HomeContact.FormFirstName": "Nombre",
    "HomeContact.FormLastName": "Apellido",
    "HomeContact.FormCompany": "Empresa",
    "HomeContact.FormEmail": "Correo electrónico",
    "HomeContact.FormMessage": "Mensaje",
    "HomeContact.FormSubmit": "Enviar",
    "HomeContact.FormSuccess": "¡Enviado correctamente!",
    "HomeContact.FormSuccessBody": "Nos pondremos en contacto contigo lo antes posible.",
    "UtilityLinks.Title": "Explore los cambios de tarifas de servicios públicos",

    // Footer
    "Footer.Rights": "2025 © EIQdigital. Todos los derechos reservados.",
    "Footer.Tagline1": "Líder en IA, datos y tecnología.",
    "Footer.Tagline2":
      "Impulsando la transición digital y de sostenibilidad de la industria energética.",
    "Footer.Products": "Productos",
    "Footer.Support": "Soporte y contacto",
    "Footer.Developers": "Desarrolladores",
    "Footer.FollowUs": "Síguenos en",
    "Footer.ContactUs": "Contáctenos",
    "Footer.Documentation": "Documentación",

    // NotFound
    "NotFound.Title": "Página no encontrada",
    "NotFound.Home": "Volver al inicio",

    // Auth (login / reset password)
    "Auth.SignIn": "Iniciar sesión",
    "Auth.Username": "Nombre de usuario",
    "Auth.Password": "Contraseña",
    "Auth.ForgotPassword": "¿Olvidó su contraseña?",
    "Auth.ResetPassword": "Restablecer contraseña",
    "Auth.ResetTitle": "Restablezca su contraseña",
    "Auth.ResetSubtitle": "Ingrese su nombre de usuario y le enviaremos un código para restablecer su contraseña.",
    "Auth.SendCode": "Enviar código",
    "Auth.NewPassword": "Nueva contraseña",
    "Auth.ConfirmPassword": "Confirmar contraseña",
    "Auth.Submit": "Enviar",
    "Auth.BackToSignIn": "Volver a iniciar sesión",
    "Auth.Code": "Código de confirmación",
    "Auth.EnterCode": "Ingrese el código que le enviamos",

    // Meta (SEO)
    "Meta.Title": "PowerRateIndex | Precios de energía minorista y análisis competitivo",
    "Meta.TitleTemplate": "%s | PowerRateIndex",
    "Meta.Description":
      "Herramienta poderosa para precios de energía minorista y análisis competitivo. Datos de planes y mercado de electricidad residencial para la industria de energía minorista.",
    "Meta.SiteName": "PowerRateIndex",
    "Meta.OgDescription":
      "Herramienta poderosa para precios de energía minorista y análisis competitivo.",
    "Meta.UtilityTitle": "{name} Las tarifas de entrega de TDU acaban de cambiar",
    "Meta.UtilityDescription":
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
