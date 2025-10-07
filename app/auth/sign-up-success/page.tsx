import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Mail } from "lucide-react"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold">CzyToFejk</span>
          </Link>
        </div>
        <Card className="border-white/10 bg-slate-900/50 backdrop-blur-xl">
          <CardHeader>
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-blue-500/10 p-3">
                <Mail className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <CardTitle className="text-center text-2xl">Dziękujemy za rejestrację!</CardTitle>
            <CardDescription className="text-center">Sprawdź swoją skrzynkę email</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-sm text-muted-foreground">
              Pomyślnie utworzyłeś konto. Sprawdź swoją skrzynkę email, aby potwierdzić konto przed zalogowaniem.
            </p>
            <Button asChild className="w-full">
              <Link href="/auth/login">Przejdź do logowania</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
