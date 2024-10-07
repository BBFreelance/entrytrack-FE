import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Import your routes
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { SystemSettingsComponent } from './app/admin/system-settings/system-settings.component'; // Adjust path as necessary

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide the routes to the app
    FormsModule, // Add FormsModule to the providers
    // If you need to use SystemSettingsComponent in a route, you can add it here
  ],
}).catch(err => console.error(err));
