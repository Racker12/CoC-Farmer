/**
 * BASEPILOT – alle Einstellungen, die vor Veröffentlichung angepasst werden müssen.
 * Kein API-Schlüssel, Passwort oder anderes Geheimnis gehört in diese Datei!
 */
window.SITE_CONFIG = {
  brand: "BasePilot",
  product: "BasePilot Desktop",
  supportEmail: "",          // z.B. support@deinedomain.de
  businessName: "",          // echter Name / Unternehmensname: Impressum prüfen!
  siteUrl: "",               // z.B. https://deinedomain.de
  downloadUrl: "",           // öffentlicher, geprüfter Download-Link (HTTPS)
  pricesAreExamples: true,   // ERST auf false setzen, wenn Preise verbindlich sind
  plans: [
    { id: "week", title: "Starter", period: "7 Tage", price: "4,99 €", description: "Zum Ausprobieren", checkoutUrl: "", featured: false },
    { id: "month", title: "Standard", period: "30 Tage", price: "12,99 €", description: "Für regelmäßiges Farming", checkoutUrl: "", featured: true },
    { id: "quarter", title: "Plus", period: "90 Tage", price: "29,99 €", description: "Für längere Laufzeiten", checkoutUrl: "", featured: false }
  ]
};
