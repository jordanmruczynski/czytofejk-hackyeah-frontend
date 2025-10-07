import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, ImageIcon, FileText, LinkIcon, Calendar, Trash2, LogOut } from "lucide-react"
import Link from "next/link"

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  // Fetch verification history
  const { data: history, error } = await supabase
    .from("verification_history")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

  const imageCount = history?.filter((h) => h.verification_type === "image").length || 0
  const textCount = history?.filter((h) => h.verification_type === "text").length || 0
  const linkCount = history?.filter((h) => h.verification_type === "link").length || 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-900">
      <header className="border-b border-border/40 backdrop-blur-sm bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-2 ring-primary/20">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Panel Użytkownika</h1>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/verify">Weryfikuj Treść</Link>
              </Button>
              <form action="/auth/signout" method="post">
                <Button variant="ghost" size="sm" type="submit">
                  <LogOut className="mr-2 h-4 w-4" />
                  Wyloguj
                </Button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Weryfikacje Obrazów</CardTitle>
                <ImageIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{imageCount}</div>
                <p className="text-xs text-muted-foreground">Łączna liczba weryfikacji</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Weryfikacje Tekstu</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{textCount}</div>
                <p className="text-xs text-muted-foreground">Łączna liczba weryfikacji</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Weryfikacje Linków</CardTitle>
                <LinkIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{linkCount}</div>
                <p className="text-xs text-muted-foreground">Łączna liczba weryfikacji</p>
              </CardContent>
            </Card>
          </div>

          {/* History */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Historia Weryfikacji</CardTitle>
              <CardDescription>Twoje ostatnie weryfikacje treści</CardDescription>
            </CardHeader>
            <CardContent>
              {error && <div className="text-sm text-red-400">Błąd podczas ładowania historii: {error.message}</div>}
              {!history || history.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Shield className="h-12 w-12 text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground">Nie masz jeszcze żadnych weryfikacji</p>
                  <Button asChild className="mt-4">
                    <Link href="/verify">Rozpocznij Weryfikację</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {history.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-4 rounded-lg border border-border/50 bg-card/30 p-4 transition-colors hover:border-primary/30"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        {item.verification_type === "image" && <ImageIcon className="h-5 w-5 text-primary" />}
                        {item.verification_type === "text" && <FileText className="h-5 w-5 text-primary" />}
                        {item.verification_type === "link" && <LinkIcon className="h-5 w-5 text-primary" />}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="capitalize">
                                {item.verification_type}
                              </Badge>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(item.created_at).toLocaleString("pl-PL")}
                              </span>
                            </div>
                            <p className="text-sm font-medium line-clamp-1">{item.input_data}</p>
                          </div>
                          <form action={`/api/delete-history/${item.id}`} method="post">
                            <Button variant="ghost" size="sm" type="submit">
                              <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                            </Button>
                          </form>
                        </div>
                        {item.verification_type === "image" && item.result?.score && (
                          <div className="text-xs text-muted-foreground">
                            Wynik pewności:{" "}
                            <span className="font-mono font-semibold">{item.result.score.toFixed(2)}</span>
                          </div>
                        )}
                        {(item.verification_type === "text" || item.verification_type === "link") &&
                          item.result?.decision && (
                            <div className="text-xs">
                              <Badge
                                variant={item.result.decision === "tak" ? "destructive" : "default"}
                                className="text-xs"
                              >
                                {item.result.decision === "tak" ? "Dezinformacja wykryta" : "Brak dezinformacji"}
                              </Badge>
                            </div>
                          )}
                        <details className="group">
                          <summary className="cursor-pointer text-xs text-muted-foreground hover:text-foreground">
                            Zobacz szczegóły
                          </summary>
                          <pre className="mt-2 overflow-auto rounded-md bg-muted/50 p-3 text-xs">
                            <code>{JSON.stringify(item.result, null, 2)}</code>
                          </pre>
                        </details>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
