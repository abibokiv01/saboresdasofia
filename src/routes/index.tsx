import { createFileRoute } from "@tanstack/react-router";

import classicCake from "@/assets/classic-cake.jpg";
import themedCake from "@/assets/themed-cake.jpg";
import delicateCake from "@/assets/delicate-cake.jpg";
import sprinkledCake from "@/assets/sprinkled-cake.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Doces da Sofia - Confeiteira" },
      {
        name: "description",
        content:
          "Bolos artesanais feitos com amor para adoçar momentos especiais. Encomendas pelo WhatsApp em Texlon.",
      },
      { property: "og:title", content: "Doces da Sofia - Confeiteira" },
      {
        property: "og:description",
        content:
          "Bolos artesanais feitos com amor para adoçar momentos especiais. Encomendas pelo WhatsApp em Texlon.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const WHATSAPP_NUMBER = "844921500";
const WHATSAPP_MESSAGE = "Olá Doces da Sofia! Gostaria de fazer um orçamento.";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2L14.4 9.6H22L16 14.4L18.4 22L12 17.2L5.6 22L8 14.4L2 9.6H9.6L12 2Z" />
    </svg>
  );
}

function CakeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 6C13.1 6 14 5.1 14 4C14 3.5 13.8 3 13.4 2.6L12 1L10.6 2.6C10.2 3 10 3.5 10 4C10 5.1 10.9 6 12 6ZM19 9H18V7C18 6.45 17.55 6 17 6H7C6.45 6 6 6.45 6 7V9H5C3.9 9 3 9.9 3 11V14C3 15.1 3.9 16 5 16H6V20C6 20.55 6.45 21 7 21H17C17.55 21 18 20.55 18 20V16H19C20.1 16 21 15.1 21 14V11C21 9.9 20.1 9 19 9ZM17 14H7V11H17V14Z" />
    </svg>
  );
}

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20 6H17.5C17.81 5.38 18 4.71 18 4C18 1.79 16.21 0 14 0C12.46 0 11.13 0.88 10.47 2.17C9.87 0.88 8.54 0 7 0C4.79 0 3 1.79 3 4C3 4.71 3.19 5.38 3.5 6H3C1.34 6 0 7.34 0 9V13C0 14.66 1.34 16 3 16V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V16C22.66 16 24 14.66 24 13V9C24 7.34 22.66 6 21 6H20ZM14 4C14 3.45 14.45 3 15 3C15.55 3 16 3.45 16 4C16 4.55 15.55 5 15 5H14V4ZM7 4C7 3.45 7.45 3 8 3C8.55 3 9 3.45 9 4V5H8C7.45 5 7 4.55 7 4ZM3 9H11V13H3V9ZM5 21H5V16H11V21H5ZM19 21H13V16H19V21ZM21 13H13V9H21V13Z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      aria-hidden="true"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.6-30.6-38.1-3.2-5.5-.3-8.5 2.4-11.2 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.7z" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      aria-hidden="true"
    >
      <path d="M215.7 499.2C267.8 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 116.2 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background px-4 py-5 sm:px-6 lg:px-8">
      <main className="mx-auto max-w-6xl space-y-6">
        {/* Hero */}
        <section className="rounded-2xl bg-card p-8 text-center shadow-lg sm:p-10">
          <div className="space-y-2">
            <h1 className="font-display text-5xl text-primary sm:text-6xl md:text-7xl">
              Doces da Sofia
            </h1>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
              • Confeiteira •
            </p>
          </div>
          <p className="mt-5 text-base font-medium text-primary sm:text-lg">
            Feito com amor, para adoçar momentos especiais!
          </p>
          <p className="mt-2 text-sm italic text-muted-foreground sm:text-base">
            Bolos que encantam, sabores que ficam na memória!
          </p>
          <div className="mt-6">
            <Link
              to="/orcamento"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Pedir orçamento
            </Link>
          </div>
        </section>

        {/* Cake showcase */}
        <section className="space-y-5">
          <div className="rounded-2xl bg-card p-5 text-center shadow-lg sm:p-6">
            <h2 className="font-display text-3xl text-primary sm:text-4xl">
              O Nosso Bolo Clássico
            </h2>
            <div className="mt-4 overflow-hidden rounded-xl">
              <img
                src={classicCake}
                alt="Bolo clássico de chocolate decorado"
                className="h-56 w-full object-cover sm:h-72"
                loading="eager"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              O sabor que você conhece e ama.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl bg-card p-5 text-center shadow-lg">
              <h3 className="text-lg font-semibold text-primary">TEMÁTICOS</h3>
              <div className="mt-3 overflow-hidden rounded-xl">
                <img
                  src={themedCake}
                  alt="Bolo temático Super Wings para festa infantil"
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Bolos personalizados para festas e eventos.
              </p>
            </article>

            <article className="rounded-2xl bg-card p-5 text-center shadow-lg">
              <h3 className="text-lg font-semibold text-primary">DELICADOS</h3>
              <div className="mt-3 overflow-hidden rounded-xl">
                <img
                  src={delicateCake}
                  alt="Bolo delicado decorado com flores e pérolas"
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Elegância e sabor em cada detalhe.
              </p>
            </article>

            <article className="rounded-2xl bg-card p-5 text-center shadow-lg sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-primary">IRRESISTÍVEIS</h3>
              <div className="mt-3 overflow-hidden rounded-xl">
                <img
                  src={sprinkledCake}
                  alt="Bolo coberto com granulado colorido"
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Uma tentação difícil de resistir.
              </p>
            </article>
          </div>
        </section>

        {/* Features */}
        <section className="grid gap-5 rounded-2xl bg-card p-6 shadow-lg sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              Icon: HeartIcon,
              title: "Feito com Amor",
              text: "Dedicamos carinho em cada etapa da produção.",
            },
            {
              Icon: SparkleIcon,
              title: "Ingredientes de Qualidade",
              text: "Selecionamos as melhores matérias-primas.",
            },
            {
              Icon: CakeIcon,
              title: "Vários Sabores e Modelos",
              text: "Opções para todos os gostos.",
            },
            {
              Icon: GiftIcon,
              title: "Perfeito para todas as ocasiões",
              text: "Festas, aniversários, presentes.",
            },
          ].map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.Icon
                className="mx-auto h-8 w-8 text-secondary"
                aria-hidden="true"
              />
              <h3 className="mt-2 text-base font-semibold text-primary">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{feature.text}</p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="rounded-2xl bg-primary p-8 text-center text-primary-foreground shadow-lg sm:p-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest">
              Encomendas pelo
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-2xl font-semibold transition-opacity hover:opacity-90 sm:text-3xl"
            >
              <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
              84 492 1500
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-base sm:text-lg">
            <LocationIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            <p>
              Localização: <strong>Texlon</strong>
            </p>
          </div>

          <p className="font-display mt-5 text-2xl sm:text-3xl">
            Doces momentos, lembranças para a vida toda!
          </p>
        </footer>
      </main>

      {/* Floating WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fazer encomenda pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
