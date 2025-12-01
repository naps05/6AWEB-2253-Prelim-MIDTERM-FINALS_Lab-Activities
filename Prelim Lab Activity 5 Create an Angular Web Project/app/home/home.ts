import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true, // Use this if using standalone components
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  // Optional: You can define feature cards or hero text here if you want to make it dynamic
  heroText = "Delighting the world with irresistible chocolate bars since 1930.";

  features = [
    {
      title: "Quality Ingredients",
      description: "We use only premium chocolate, caramel, and roasted peanuts."
    },
    {
      title: "Global Favorite",
      description: "Trusted and loved by millions around the world."
    },
    {
      title: "Energy Boost",
      description: "A delicious snack that keeps you going throughout the day."
    }
  ];
}
