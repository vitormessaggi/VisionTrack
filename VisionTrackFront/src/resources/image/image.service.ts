import {Image} from '@/resources/image/image.resource'

class ImageService {
    baseURL: string = 'http://localhost:8080/v1/images';

    async salvar(name: string, tags: string[], file: File): Promise<void> {
        const data = new FormData();
        data.append("name", name);
        data.append("tags", tags.join(","));
        data.append("file", file);

        const response = await fetch(this.baseURL, { method: "POST", body: data });
        if (!response.ok) {
            throw new Error("Não foi possível salvar a imagem.");
        }
    }

    async buscar(query: string = "", extension: string = "") : Promise<Image[]>{
        const url = `${this.baseURL}?query=${query}&extension=${extension}`; //string template
        const response = await fetch(url);
        return await response.json();
    }
}

export const useImageService = () => new ImageService();
