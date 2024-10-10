import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {
    document.body.className = 'selector';
  }
  title = 'brainwave';

  onOurStoryClick() {
    this.router.navigateByUrl('/ourstory');
  }
  onContactClick() {
    this.router.navigateByUrl('/contact');
  }
}
