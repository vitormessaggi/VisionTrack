'use client'

import {Template, ImageCard} from '@/components'
import { useImageService } from '@/resources/image/image.service';
import { Image} from '@/resources/image/image.resource';
import { useState } from 'react';

export default function GaleriaPage(){
    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([]);

    async function searchImages(){
        const result = await useService.buscar();
        setImages(result)
        console.table(result);
    }

    function renderImageCard(image: Image){ //Gera um card
        return(
            <ImageCard key = {image.url}
                        nome ={image.name}
                        src = {image.url}
                        tamanho = {image.size}
                        dataUpload = {image.uploadDate}                         
            />
        )
    }

    function renderImageCards(){ //Gera vários card da function de cima
        return images.map(renderImageCard);
    }

    return(
        <Template>
            <section className='flex flex-col items-center justify-center my-3'>
                <div className='flex space-x-4'>
                    <input type = "text" className='border px-5 py-2 rounded-lg text-gray-900'/>
                    <select className="border px-4 py-2 rounded-lg text-gray-900">
                        <option value="">All Formats</option>
                    </select>
                    <button onClick={searchImages} className="bg-red-500 text-white px-4 py-2 rounded-lg">Seach</button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Add New</button>
                </div>

            </section>
            <section className="grid grid-cols-5 gap-8">
                {
                    renderImageCards()
                }
            </section> 
        </Template>
    );
}

