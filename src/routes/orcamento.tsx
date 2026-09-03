import { createFileRoute, Link } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "844921500";

const formSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  size: z.string().min(1, "Escolha o tamanho do bolo"),
  flavor: z.string().min(1, "Escolha o sabor"),
  type: z.string().min(1, "Escolha o tipo de bolo"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const sizeOptions = [
  { value: "Pequeno", label: "Pequeno (até 10 pessoas)" },
  { value: "Médio", label: "Médio (até 25 pessoas)" },
  { value: "Grande", label: "Grande (até 50 pessoas)" },
  { value: "Outro", label: "Outro (especificar nas observações)" },
];

const flavorOptions = [
  { value: "Chocolate", label: "Chocolate" },
  { value: "Baunilha", label: "Baunilha" },
  { value: "Morango", label: "Morango" },
  { value: "Red Velvet", label: "Red Velvet" },
  { value: "Coco", label: "Coco" },
  { value: "Outro", label: "Outro" },
];

const typeOptions = [
  { value: "Clássico", label: "Clássico" },
  { value: "Temático", label: "Temático" },
  { value: "Delicado", label: "Delicado" },
  { value: "Irresistível", label: "Irresistível" },
  { value: "Outro", label: "Outro" },
];

export const Route = createFileRoute("/orcamento")({
  component: OrcamentoPage,
  head: () => ({
    meta: [
      { title: "Pedir Orçamento — Doces da Sofia" },
      {
        name: "description",
        content:
          "Solicite um orçamento de bolo artesanal informando tamanho, sabor e tipo. Envie direto pelo WhatsApp.",
      },
      { property: "og:title", content: "Pedir Orçamento — Doces da Sofia" },
      {
        property: "og:description",
        content:
          "Solicite um orçamento de bolo artesanal informando tamanho, sabor e tipo. Envie direto pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function OrcamentoPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      size: "",
      flavor: "",
      type: "",
      notes: "",
    },
  });

  function onSubmit(values: FormValues) {
    const message = [
      `Olá! Meu nome é ${values.name}.`,
      `Gostaria de fazer um orçamento para um bolo:`,
      `• Tamanho: ${values.size}`,
      `• Sabor: ${values.flavor}`,
      `• Tipo: ${values.type}`,
      values.notes ? `• Observações: ${values.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <main className="mx-auto max-w-xl">
        <div className="mb-6">
          <Link
            to="/"
            className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            ← Voltar para página inicial
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="font-display text-3xl text-primary sm:text-4xl">
              Pedir Orçamento
            </CardTitle>
            <CardDescription>
              Preencha os detalhes do bolo e envie seu pedido pelo WhatsApp.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="size"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tamanho do bolo</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tamanho" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {sizeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="flavor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sabor</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o sabor" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {flavorOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de bolo</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {typeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Observações</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Detalhes extras: data do evento, decoração, alergias..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#25D366] text-white hover:bg-[#20b85a]"
                >
                  Enviar pelo WhatsApp
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
