"use client";

import { cn } from "@/lib/utils";
import { BookOpen, ExternalLink, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

// Links para os botões - preencha com os URLs corretos
const EBOOK_LINK = "https://www.amazon.com.br/dp/B0FXMWT57T";
const PHYSICAL_BOOK_LINK = "https://www.amazon.com.br/dp/650184259X";

const publications = [
  {
    title: "IA Decodificada: Um Guia Humano Para Entender o Amanhã",
    description:
      "Neste livro, desmistifico a Inteligência Artificial de forma acessível e prática, guiando você pelos conceitos fundamentais até as aplicações que estão transformando o mundo. Uma leitura essencial para quem deseja compreender e se preparar para o futuro da tecnologia.",
    cover: "/capa-ia-decodificada-edicao-especial.png",
    ebookLink: EBOOK_LINK,
    physicalLink: PHYSICAL_BOOK_LINK,
  },
];

export function PublicationsSection() {
  return (
    <section
      id="publicacoes"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Publicações
            </h2>
            <div className="absolute -inset-4 bg-accent/10 rounded-lg blur-xl -z-10" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Compartilhando conhecimento através da escrita, transformando
            conceitos complexos em aprendizado acessível.
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <ScrollReveal key={index} direction="up" delay={100}>
              <div
                className={cn(
                  "group relative rounded-2xl overflow-hidden",
                  "bg-card border border-border/50",
                  "hover:border-accent/50 transition-all duration-500",
                  "hover:shadow-2xl hover:shadow-accent/10"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6 lg:p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Book Cover */}
                    <div className="relative flex-shrink-0">
                      <div className="relative w-48 h-72 md:w-56 md:h-80 rounded-lg overflow-hidden shadow-2xl group-hover:shadow-accent/20 transition-shadow duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                        <Image
                          src={publication.cover}
                          alt={`Capa do livro ${publication.title}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 192px, 224px"
                        />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -bottom-2 -right-2 w-full h-full bg-accent/20 rounded-lg -z-10" />
                      <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-lg -z-20" />
                    </div>

                    {/* Book Info */}
                    <div className="flex-1 text-center md:text-left space-y-6">
                      <div className="flex items-center justify-center md:justify-start gap-2 text-accent">
                        <BookOpen className="w-5 h-5" />
                        <span className="text-sm font-medium uppercase tracking-wider">
                          Autor
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                        {publication.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed text-pretty">
                        {publication.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Button
                          asChild
                          className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                        >
                          <a
                            href={publication.ebookLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Ver eBook
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="border-accent/50 hover:bg-accent/10 gap-2"
                        >
                          <a
                            href={publication.physicalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ShoppingBag className="w-4 h-4" />
                            Ver livro físico
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
