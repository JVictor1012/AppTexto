import { Injectable } from '@angular/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

@Injectable({
  providedIn: 'root'
})
export class LeitorService {

  constructor() { }

  async letTexto(txt: string, taxa: number = 1.0, tom: number = 1.0, volume: number = 5.0){
    await TextToSpeech.speak({
      text: txt,
      lang: 'pt-BR',
      rate: taxa,
      pitch: tom,
      volume: volume,
      category: 'ambient',
    });
  }

}
