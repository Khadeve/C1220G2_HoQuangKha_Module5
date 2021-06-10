import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWord } from '../model/i-word';
import { DictionaryService } from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  myWord: IWord;
  constructor(private dictionaryService: DictionaryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let word = this.activatedRoute.snapshot.params.key;
    let meaning = this.dictionaryService.search(word);
    this.myWord = {
      key: word,
      meaning: meaning
    }
  }


}
