import { Component } from '@angular/core';
import { letters, numbers, symbols } from "./constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  length: number = 20;
  password: string = String();
  useLetters: boolean = true;
  useNumbers: boolean = true;
  useSymbols: boolean = true;

  generate() {
    if (!this.useLetters && !this.useNumbers && !this.useSymbols) {
      alert('Please, select at least one character type to include in your password.');
    } else {
      this.password = this.generatePassword();
    }
  }

  copy() {
    navigator.clipboard.writeText(this.password).then(() => {
      alert('Password copied to clipboard');
    });
  }

  private getRandomIndex(max: number, exclude: number[]): number {
    const index = Math.floor(Math.random() * max);
    return exclude.includes(index) ? this.getRandomIndex(max, exclude) : index;
  }

  private getRandomCharacter(characters: string[]): string {
    return characters[Math.floor(Math.random() * characters.length)];
  }

  private generatePassword() {
    const password = Array.from({ length: this.length });
    const exclude: number[] = [];
    if (this.useLetters) {
      const index = this.getRandomIndex(this.length, exclude);
      password[index] = this.getRandomCharacter(letters);
      exclude.push(index);
    }
    if (this.useNumbers) {
      const index = this.getRandomIndex(this.length, exclude);
      password[index] = this.getRandomCharacter(numbers);
      exclude.push(index);
    }
    if (this.useSymbols) {
      const index = this.getRandomIndex(this.length, exclude);
      password[index] = this.getRandomCharacter(symbols);
      exclude.push(index);
    }
    const characters = [this.useLetters ? letters : [], this.useNumbers ? numbers : [], this.useSymbols ? symbols : []].flat();
    return password.map((character) => character || characters[Math.floor(Math.random() * characters.length)]).join("")
  }
}
