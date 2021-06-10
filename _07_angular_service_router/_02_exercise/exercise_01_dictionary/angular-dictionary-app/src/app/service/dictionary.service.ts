import { Injectable } from '@angular/core';
import { IWord } from '../model/i-word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  wordList: Array<IWord> = [
    {key: "Smartphone", meaning: "Điện thoại thông minh"},
    {key: "World", meaning: "Thế giới"},
    {key: "Computer", meaning: "Máy tính"},
    {key: "Software", meaning: "Phần mềm"},
    {key: "University", meaning: "Trường đại học"},
    {key: "Paper", meaning: "Tờ giấy"},
  ]
  constructor() { }

  search(word: string): string {
    if (!word){
      return '';
    } 
    const w = this.wordList.find(item => item.key.toLowerCase() === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return "Not found!";
  }

  getAll(): Array<IWord> {
    return this.wordList;
  }
}
