import { Component, ViewChild} from '@angular/core';
import {NgxJoditProComponent} from 'ngx-jodit-pro';
import "jodit-pro/build/plugins/autocomplete/autocomplete.js";
import {DomSanitizer} from "@angular/platform-browser";
import {defaultValue} from "./default-value";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'jodit-pro-poc';
  value = defaultValue

  @ViewChild('joditComponent') joditComponent!: NgxJoditProComponent;

  viewHtml = '';

  friends = [
    {
      id: '@Rachel',
      userId: '1',
      name: 'Rachel Green',
      link: 'https://www.imdb.com/title/tt0108778/characters/nm0000098'
    },
    {
      id: '@Chandler',
      userId: '2',
      name: 'Chandler Bing',
      link: 'https://www.imdb.com/title/tt0108778/characters/nm0001612'
    },
    {
      id: '@Monica',
      userId: '3',
      name: 'Monica Geller',
      link: 'https://www.imdb.com/title/tt0108778/characters/nm0001073'
    },
    {
      id: '@Ross',
      userId: '4',
      name: 'Dr. Ross Geller',
      link: 'https://www.imdb.com/title/tt0108778/characters/nm0001710'
    },
    {
      id: '@Phoebe',
      userId: '5',
      name: 'Phoebe Buffay',
      link: 'https://www.imdb.com/title/tt0108778/characters/nm0001435'
    },
    {
      id: '@Ursula',
      userId: '6',
      name: 'Ursula Buffay',
      link: 'https://www.imdb.com/title/tt0108778/characters/nm0001435'
    },
    {
      id: '@Joey',
      userId: '7',
      name: 'Joey Tribbiani',
      link: 'https://www.imdb.com/title/tt0108778/characters/nm0001455'
    }
  ];

  mentionFeedData = [
    {
      feedId: '@Student_First_Name',
      id: 1,
      text: 'Student’s first name defined in the Student Personal Information Section',
      tag: '<Student_First_Name>',
      value: '<Student_First_Name>',
      title:
        'Student’s first name defined in the Student Personal Information Section',
    },
    {
      feedId: '@Student_Subject_Pronoun',
      id: 2,
      text: 'He/She/They – Student Pronoun defined in the Student Personal Information Section',
      tag: '<Student_Subject_Pronoun>',
      value: '<Student_Subject_Pronoun>',
      title:
        'He/She/They – Student Pronoun defined in the Student Personal Information Section',
    },
    {
      feedId: '@Student_Object_Pronoun',
      id: 3,
      text: 'Him/Her/Them – Student Pronoun defined in the Student Personal Information Section',
      tag: '<Student_Object_Pronoun>',
      value: '<Student_Object_Pronoun>',
      title:
        'Him/Her/Them – Student Pronoun defined in the Student Personal Information Section',
    },
  ];

  options: any = {
    buttons: "bold,italic,underline,strikethrough,|,brush,|,ul,ol,|,font,fontsize,|,indent,outdent,align,paragraph,|,image,link",
    extraPlugins: ['autoComplete'],
    uploader: {
      insertImageAsBase64URI: true
    },
    enter: "p",
    style: {
      font: '16px montserrat'
    },
    autocomplete: {
      sources: [{
        feed: (query: any) =>
          this.mentionFeedData.filter(
            (value) =>
              value.feedId.indexOf(query) === 0 ||
              value.value.indexOf(query) === 1
          ),
        itemRenderer: (item: any) => {
          const div = document.createElement('div');
          div.className = 'mention-item';
          div.style.display = 'flex';
          div.style.flexDirection = 'column';
          div.style.alignItems = 'flex-start';
          div.style.lineHeight = '20px';
          div.style.gap = '5px';

          const p = document.createElement('p');
          p.innerText = item.tag;
          p.style.margin = '0';
          p.style.fontSize = '16px';
          p.style.color = '#27913F';
          p.style.fontWeight = 'medium';

          const span = document.createElement('span');
          span.innerHTML = `<span>${item.text}</span>`;
          span.style.fontSize = '14px';
          span.style.color = '#444c57';

          div.appendChild(p);
          div.appendChild(span);

          return div;
        },
        insertValueRenderer: (item: any) => {
          const span = document.createElement('span');

          span.innerText = item.tag;
          span.className = 'mention';

          return span;
        },
      }]
    }
  }

  constructor(private domSanitizer: DomSanitizer) {
  }

  onChange(value: string) {
    console.log(value)
    this.viewHtml = value;
  }

  getHtml(){
    return this.domSanitizer.bypassSecurityTrustHtml(this.viewHtml);
  }
}
