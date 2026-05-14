"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ClipboardCheck, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleMagicLink = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Veuillez entrer un email valide.");
      return;
    }
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      setSent(true);
      toast.success("Email envoyé ! Vérifiez votre boîte de réception.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <ClipboardCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">
              Bilan<span className="text-blue-600">IA</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="max-w-md w-full border-slate-200">
          <CardContent className="p-8">
            {!sent ? (
              <div className="space-y-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mx-auto">
                  <Sparkles className="w-4 h-4" /> Accès Premium
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 mb-2">
                    Connectez-vous à votre compte
                  </h1>
                  <p className="text-slate-500 text-sm">
                    Entrez votre email pour recevoir un lien de connexion magique.
                  </p>
                </div>

                <div className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vous@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-800 text-center"
                  />
                  <Button
                    onClick={handleMagicLink}
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold py-6"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Recevoir le lien magique
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>

                <p className="text-xs text-slate-400">
                  Pas de mot de passe. Un lien sécurisé vous sera envoyé par email.
                </p>
              </div>
            ) : (
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 mb-2">
                    Email envoyé !
                  </h1>
                  <p className="text-slate-500 text-sm">
                    Vérifiez votre boîte de réception ({email}) et cliquez sur le lien pour vous connecter.
                  </p>
                </div>
                <button
                  onClick={() => setSent(false)}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Utiliser un autre email
                </button>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
