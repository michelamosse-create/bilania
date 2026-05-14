import Link from "next/link";
import { ClipboardCheck } from "lucide-react";

export default function MentionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <ClipboardCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-800">
              Bilan<span className="text-blue-600">IA</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-3xl font-bold text-slate-900">Mentions légales</h1>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-2">1. Éditeur du site</h2>
          <p className="text-slate-600">BilanIA est édité par Michel Amossé, entrepreneur individuel.</p>
          <p className="text-slate-600">Contact : michel.amosse@gmail.com</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-2">2. Hébergement</h2>
          <p className="text-slate-600">
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-2">3. Protection des données personnelles (RGPD)</h2>
          <p className="text-slate-600">
            Les données collectées (réponses au questionnaire de bilan de compétences) sont utilisées exclusivement pour générer votre rapport personnalisé. Elles ne sont ni vendues, ni partagées avec des tiers.
          </p>
          <p className="text-slate-600 mt-2">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à michel.amosse@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-2">4. Cookies et stockage local</h2>
          <p className="text-slate-600">
            Ce site n'utilise pas de cookies de tracking. Le stockage local (localStorage) de votre navigateur est utilisé pour sauvegarder vos réponses en cours de test, afin d'éviter toute perte de données. Ces données restent sur votre appareil et ne sont jamais transmises.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-2">5. Propriété intellectuelle</h2>
          <p className="text-slate-600">
            Les codes ROME sont la propriété de France Travail. Les codes RS (Répertoire Spécifique) sont la propriété de France Compétences. Les images utilisées sur ce site proviennent de Pexels (licence libre).
          </p>
        </section>

        <section id="confidentialite">
          <h2 className="text-xl font-bold text-slate-800 mb-2">6. Politique de confidentialité</h2>
          <p className="text-slate-600">
            BilanIA s'engage à protéger votre vie privée. Les seules données collectées sont vos réponses au questionnaire, utilisées uniquement pour générer votre rapport personnalisé. Aucune donnée n'est revendue à des tiers. Vos réponses sont stockées de manière sécurisée et vous pouvez en demander la suppression à tout moment.
          </p>
        </section>

        <section id="cgu">
          <h2 className="text-xl font-bold text-slate-800 mb-2">7. Conditions Générales d'Utilisation (CGU)</h2>
          <p className="text-slate-600">
            L'utilisation de BilanIA implique l'acceptation des présentes CGU. Le service est fourni "en l'état". Les rapports générés sont des suggestions basées sur l'intelligence artificielle et ne constituent pas des conseils professionnels certifiés. L'utilisateur est seul responsable des décisions prises sur la base des informations fournies.
          </p>
          <p className="text-slate-600 mt-2">
            Le paiement de 9,90€ donne accès au rapport premium de manière permanente. Aucun abonnement récurrent n'est mis en place. Le service de paiement est assuré par Stripe.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-2">8. Nature du service</h2>
          <p className="text-slate-600">
            BilanIA est un outil d'auto-positionnement professionnel utilisant l'intelligence artificielle. Il ne constitue pas un bilan de compétences au sens légal du terme. Un bilan de compétences certifié doit être réalisé par un prestataire habilité.
          </p>
          <p className="text-slate-600 mt-2">
            <a href="https://www.service-public.fr/particuliers/vosdroits/F3087" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
              En savoir plus sur le bilan de compétences (Service-Public.fr)
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-2">7. Responsabilité</h2>
          <p className="text-slate-600">
            Les rapports générés par BilanIA sont produits par une intelligence artificielle. Bien que nous mettions en œuvre des mécanismes de validation, les résultats doivent être considérés comme des suggestions et non comme des conseils professionnels certifiés. L'utilisateur est invité à vérifier les informations avant toute prise de décision.
          </p>
        </section>

        <div className="pt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Retour à l'accueil
          </Link>
        </div>
      </main>
    </div>
  );
}
