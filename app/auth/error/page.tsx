import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, AlertCircle } from "lucide-react"

export default function AuthErrorPage() {
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
              <div className="rounded-full bg-red-500/10 p-3">
                <AlertCircle className="h-8 w-8 text-red-500" />
              </div>
            </div>
            <CardTitle className="text-center text-2xl">Wystąpił błąd</CardTitle>
            <CardDescription className="text-center">Nie udało się uwierzytelnić</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-sm text-muted-foreground">
              Wystąpił problem podczas uwierzytelniania. Spróbuj ponownie.
            </p>
            <Button asChild className="w-full">
              <Link href="/auth/login">Wróć do logowania</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
