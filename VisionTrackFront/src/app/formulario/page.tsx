"use client";

import { Template } from "@/components/Template";
import { useImageService } from "@/resources/image/image.service";
import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function FormularioPage() {
    const imageService = useImageService();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    async function salvar(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (loading) return;
        const form = event.currentTarget;
        const data = new FormData(form);
        const name = String(data.get("name") ?? "").trim();
        const tags = String(data.get("tags") ?? "").split(",").map(tag => tag.trim()).filter(Boolean);
        const file = data.get("file");
        setError("");
        setSuccess(false);

        if (!name || tags.length === 0) {
            setError("Informe o nome da imagem e pelo menos uma tag.");
            return;
        }
        if (!(file instanceof File) || file.size === 0 || !["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
            setError("Selecione uma imagem válida nos formatos JPG, PNG ou GIF.");
            return;
        }

        setLoading(true);
        try {
            await imageService.salvar(name, tags, file);
            form.reset();
            setSuccess(true);
        } catch {
            setError("Não foi possível salvar a imagem. Verifique se o servidor está disponível e tente novamente.");
        } finally {
            setLoading(false);
        }
    }

    const inputClass = "w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700";

    return (
        <Template loading={loading}>
            <section className="mx-auto max-w-2xl rounded-xl border border-gray-200 bg-white p-6 text-gray-900 shadow-sm sm:p-8" aria-labelledby="form-title">
                <h1 id="form-title" className="text-2xl font-bold">Cadastrar imagem</h1>
                <p className="mt-2 text-sm text-gray-600">Preencha os dados e escolha uma imagem para adicionar à galeria.</p>
                <form onSubmit={salvar} className="mt-8 space-y-6" aria-busy={loading}>
                    <fieldset disabled={loading} className="space-y-6 disabled:opacity-60">
                        <legend className="sr-only">Dados da imagem</legend>
                        <div>
                            <label htmlFor="name" className="mb-2 block text-sm font-medium">Nome da imagem</label>
                            <input id="name" name="name" type="text" required placeholder="Ex.: Engrenagem do motor" className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="tags" className="mb-2 block text-sm font-medium">Tags</label>
                            <input id="tags" name="tags" type="text" required placeholder="Ex.: motor, engrenagem, manutenção" aria-describedby="tags-help" className={inputClass} />
                            <p id="tags-help" className="mt-2 text-sm text-gray-500">Separe as tags por vírgulas para facilitar a pesquisa.</p>
                        </div>
                        <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-5">
                            <label htmlFor="file" className="mb-2 block text-sm font-medium">Arquivo da imagem</label>
                            <p id="file-help" className="mb-4 text-sm text-gray-500">Escolha uma imagem JPG, PNG ou GIF do computador ou celular.</p>
                            <input id="file" name="file" type="file" accept="image/jpeg,image/png,image/gif" required aria-describedby="file-help" className="block w-full min-w-0 rounded-lg text-sm text-gray-600 file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-blue-100 file:px-4 file:py-2 file:font-medium file:text-blue-900 hover:file:bg-blue-200 focus-visible:outline-2 focus-visible:outline-blue-700" />
                        </div>
                    </fieldset>
                    {error && <p role="alert" className="rounded-lg bg-red-50 p-4 text-sm text-red-700">{error}</p>}
                    {success && <p role="status" className="rounded-lg bg-green-50 p-4 text-sm text-green-800">Imagem cadastrada com sucesso! Você já pode pesquisá-la na galeria.</p>}
                    <div className="flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">
                        <Link href="/galeria" className="rounded-lg border border-gray-300 px-5 py-3 text-center text-sm font-medium hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-700">Voltar à galeria</Link>
                        <button type="submit" disabled={loading} className="rounded-lg bg-blue-900 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-wait disabled:opacity-60">{loading ? "Salvando..." : "Salvar imagem"}</button>
                    </div>
                </form>
            </section>
        </Template>
    );
}
