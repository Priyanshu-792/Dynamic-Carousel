import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
  title = 'Dynamic-Carousel';
   // Array to store slides with imageUrl and caption
  slides: { imageUrl: string, caption: string }[] = [
    { imageUrl: "https://cdn.pixabay.com/photo/2017/08/11/14/18/man-2631267_1280.jpg", caption: "Dynamic angular slide" },
    { imageUrl: "https://w0.peakpx.com/wallpaper/208/848/HD-wallpaper-beautiful-scenery-nature-pier-in-dark-background-dark.jpg", caption: "Dynamic angular slide" },
    { imageUrl: "https://i.pinimg.com/736x/00/29/9e/00299e7023dc82e11c13faf1a0fad45a.jpg", caption: "Dynamic angular slide" }
  ];
  
  newSlide: { imageUrl: string, caption: string } = { imageUrl: '', caption: '' };
    // Flag to track if URL error occurred
  urlError: boolean = false;

  addSlide() {
    this.urlError = !this.isValidImageUrl(this.newSlide.imageUrl);
     // If URL is valid and caption is not empty, add the slide
    if (!this.urlError && this.newSlide.caption.trim() !== '') {
      this.slides.push({ ...this.newSlide });
      this.newSlide = { imageUrl: '', caption: '' }; // Reset newSlide after adding
    }
    else{
      alert("Give valid url of image");
    }
  }
 // Method to delete a slide by index
  deleteSlide(index: number) {
    this.slides.splice(index, 1);
  }
  // Simple check for url is valid or not
  isValidImageUrl(url: string): boolean {
   return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }
}