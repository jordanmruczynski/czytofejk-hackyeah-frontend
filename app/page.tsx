"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  ImageIcon,
  FileText,
  ArrowRight,
  Sparkles,
  Globe,
  Lock,
  Zap,
  Languages,
  TrendingUp,
  Users,
  Target,
} from "lucide-react"
import Link from "next/link"

const translations = {
  pl: {
    nav: {
      features: "Funkcje",
      pricing: "Cennik",
      about: "O nas",
      login: "Zaloguj się",
      getStarted: "Rozpocznij",
    },
    hero: {
      badge: "Zaawansowana Weryfikacja AI",
      title: "Najszybsza i najpotężniejsza platforma do wykrywania",
      titleHighlight: "dezinformacji i obrazów AI",
      subtitle:
        "Chroń siebie i swoją organizację przed fałszywymi informacjami i obrazami generowanymi przez AI. Weryfikuj obrazy i tekst w czasie rzeczywistym z wykorzystaniem najnowocześniejszych modeli AI.",
      ctaPrimary: "Rozpocznij weryfikację",
      ctaSecondary: "Zobacz demo",
    },
    stats: {
      accuracy: "Dokładność",
      speed: "Szybkość analizy",
      languages: "Wspierane Kraje",
      verified: "Zweryfikowanych treści",
    },
    trustedBy: "Zaufali nam",
    features: {
      badge: "Możliwości",
      title: "Kompleksowa ochrona przed dezinformacją",
      subtitle: "Wszystkie narzędzia potrzebne do weryfikacji treści w jednym miejscu",
      imageVerification: {
        title: "Wykrywanie Obrazów AI",
        description:
          "Zaawansowana analiza obrazów wykorzystująca Reality Defender do wykrywania treści generowanych przez sztuczną inteligencję z najwyższą precyzją.",
      },
      textAnalysis: {
        title: "Analiza Dezinformacji",
        description:
          "Potężna analiza tekstowa napędzana przez xAI Grok, wykrywająca propagandę, fake news i manipulacje informacyjne w czasie rzeczywistym.",
      },
      urlVerification: {
        title: "Weryfikacja Linków",
        description:
          "Analizuj treści z YouTube i artykułów internetowych. Wystarczy wkleić link, a nasza platforma automatycznie wyodrębni i zweryfikuje zawartość.",
      },
      realtime: {
        title: "Analiza w Czasie Rzeczywistym",
        description:
          "Natychmiastowe wyniki weryfikacji. Nie czekaj godzinami - otrzymuj szczegółowe raporty w ciągu sekund.",
      },
      multilingual: {
        title: "Wsparcie Wielojęzyczne",
        description:
          "Pełne wsparcie dla języka polskiego i angielskiego. Weryfikuj treści w dowolnym języku bez utraty dokładności.",
      },
      api: {
        title: "Integracja API",
        description:
          "Łatwa integracja z Twoimi systemami. RESTful API pozwala na automatyzację procesów weryfikacji w Twojej organizacji.",
      },
    },
    useCases: {
      badge: "Zastosowania",
      title: "Dla kogo jest nasza platforma?",
      media: {
        title: "Media i Dziennikarstwo",
        description: "Weryfikuj źródła i treści przed publikacją. Chroń swoją reputację i wiarygodność.",
      },
      business: {
        title: "Firmy i Korporacje",
        description: "Zabezpiecz swoją organizację przed dezinformacją i atakami reputacyjnymi.",
      },
      education: {
        title: "Edukacja i Badania",
        description: "Naucz studentów krytycznego myślenia i weryfikacji źródeł informacji.",
      },
    },
    cta: {
      title: "Gotowy na ochronę przed dezinformacją?",
      subtitle: "Dołącz do organizacji, które już chronią się przed fałszywymi informacjami",
      button: "Rozpocznij weryfikację teraz",
    },
    footer: {
      product: "Produkt",
      features: "Funkcje",
      pricing: "Cennik",
      api: "Dokumentacja API",
      company: "Firma",
      about: "O nas",
      contact: "Kontakt",
      privacy: "Polityka prywatności",
      terms: "Regulamin",
      rights: "Wszelkie prawa zastrzeżone.",
    },
  },
  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      about: "About",
      login: "Log in",
      getStarted: "Get Started",
    },
    hero: {
      badge: "Advanced AI Verification",
      title: "The fastest and most powerful platform for detecting",
      titleHighlight: "disinformation and AI content",
      subtitle:
        "Protect your organization from fake information and AI-generated content. Verify images and text in real-time using state-of-the-art AI models.",
      ctaPrimary: "Start Verifying",
      ctaSecondary: "Watch Demo",
    },
    stats: {
      accuracy: "Accuracy",
      speed: "Analysis Speed",
      languages: "Languages",
      verified: "Content Verified",
    },
    trustedBy: "Trusted by",
    features: {
      badge: "Features",
      title: "Comprehensive protection against disinformation",
      subtitle: "All the tools you need to verify content in one place",
      imageVerification: {
        title: "AI Image Detection",
        description:
          "Advanced image analysis using Reality Defender to detect AI-generated content with the highest precision.",
      },
      textAnalysis: {
        title: "Disinformation Analysis",
        description:
          "Powerful text analysis powered by xAI Grok, detecting propaganda, fake news, and information manipulation in real-time.",
      },
      urlVerification: {
        title: "Link Verification",
        description:
          "Analyze content from YouTube and web articles. Just paste a link and our platform automatically extracts and verifies the content.",
      },
      realtime: {
        title: "Real-Time Analysis",
        description: "Instant verification results. Don't wait hours - get detailed reports within seconds.",
      },
      multilingual: {
        title: "Multilingual Support",
        description: "Full support for Polish and English. Verify content in any language without losing accuracy.",
      },
      api: {
        title: "API Integration",
        description:
          "Easy integration with your systems. RESTful API allows automation of verification processes in your organization.",
      },
    },
    useCases: {
      badge: "Use Cases",
      title: "Who is our platform for?",
      media: {
        title: "Media & Journalism",
        description: "Verify sources and content before publication. Protect your reputation and credibility.",
      },
      business: {
        title: "Business & Corporations",
        description: "Secure your organization against disinformation and reputation attacks.",
      },
      education: {
        title: "Education & Research",
        description: "Teach students critical thinking and source verification.",
      },
    },
    cta: {
      title: "Ready to protect against disinformation?",
      subtitle: "Join organizations already protecting themselves from fake information",
      button: "Start Verifying Now",
    },
    footer: {
      product: "Product",
      features: "Features",
      pricing: "Pricing",
      api: "API Documentation",
      company: "Company",
      about: "About",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved.",
    },
  },
}

type Language = "pl" | "en"

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("pl")
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 backdrop-blur-md bg-background/80">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ring-2 ring-primary/20">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold">CzyToFejk</span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {t.nav.features}
              </a>
              <a href="#use-cases" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {t.nav.about}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
                className="gap-2"
              >
                <Languages className="h-4 w-4" />
                {language === "pl" ? "EN" : "PL"}
              </Button>
              <Link href="/verify">
                <Button size="sm" className="gap-2">
                  {t.nav.getStarted}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              {t.hero.badge}
            </Badge>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-balance md:text-6xl lg:text-7xl">
              {t.hero.title}
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed md:text-xl">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/verify">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 px-8 h-12 text-base">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 h-12 px-8 text-base bg-transparent"
                onClick={() => window.open("https://youtu.be/J57rrlp08zM", "_blank")}
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">98.2%</div>
              <div className="text-sm text-muted-foreground">{t.stats.accuracy}</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">&lt;7s</div>
              <div className="text-sm text-muted-foreground">{t.stats.speed}</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">1</div>
              <div className="text-sm text-muted-foreground">{t.stats.languages}</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">{t.stats.verified}</div>
            </div>
          </div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </section>

      {/* Social Proof */}
      <section className="border-y border-border/40 bg-card/30 backdrop-blur-sm px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm text-muted-foreground mb-8">{t.trustedBy}</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale">
            <div className="text-2xl font-bold">Media Corp</div>
            <div className="text-2xl font-bold">NewsHub</div>
            <div className="text-2xl font-bold">FactCheck</div>
            <div className="text-2xl font-bold">TruthGuard</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {t.features.badge}
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{t.features.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{t.features.subtitle}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t.features.imageVerification.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.features.imageVerification.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t.features.textAnalysis.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.features.textAnalysis.description}</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t.features.urlVerification.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.features.urlVerification.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t.features.realtime.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.features.realtime.description}</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                  <Languages className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t.features.multilingual.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.features.multilingual.description}</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t.features.api.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.features.api.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="bg-card/30 backdrop-blur-sm px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {t.useCases.badge}
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{t.useCases.title}</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-2 ring-primary/20">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t.useCases.media.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.useCases.media.description}</p>
            </div>

            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-2 ring-primary/20">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t.useCases.business.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.useCases.business.description}</p>
            </div>

            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-2 ring-primary/20">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t.useCases.education.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.useCases.education.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 backdrop-blur-sm">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t.cta.title}</h2>
              <p className="text-lg text-muted-foreground">{t.cta.subtitle}</p>
              <Link href="/verify">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 px-8 h-12 text-base">
                  {t.cta.button}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 ring-2 ring-primary/20">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <span className="font-bold">CzyToFejk</span>
              </div>
              <p className="text-sm text-muted-foreground">{t.hero.subtitle.slice(0, 80)}...</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">{t.footer.product}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="transition-colors hover:text-foreground">
                    {t.footer.features}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    {t.footer.api}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">{t.footer.company}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    {t.footer.about}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    {t.footer.contact}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    {t.footer.privacy}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    {t.footer.terms}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            © 2025 VerifyAI. {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  )
}
