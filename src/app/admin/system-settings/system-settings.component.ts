import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 

export interface SystemSetting {
  setting_id: number;
  user_id: number; // Assuming this is the admin user
  setting_name: string;
  setting_value: string;
}

@Component({
  selector: 'app-system-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.css'], // Optional: Add styles
})
export class SystemSettingsComponent implements OnInit {
  settings: SystemSetting[] = [];
  userId: number = 1; // Replace with the actual admin user ID

  constructor(private router: Router) {}
  // Default dropdown options for settings
  dropdownOptions: { [key: string]: string[] } = {
    'Password Complexity': ['Must include uppercase, lowercase', 'Must include uppercase and numbers'],
    'Session Timeout': ['15 minutes', '30 minutes'],
    'Allow Password Reset': ['Enabled', 'Disabled'],
  };

  ngOnInit(): void {
    // Initialize default settings
    this.settings = [
      { setting_id: 1, user_id: this.userId, setting_name: 'Password Complexity', setting_value: 'Must include uppercase, lowercase' },
      { setting_id: 2, user_id: this.userId, setting_name: 'Session Timeout', setting_value: '15 minutes' },
      { setting_id: 3, user_id: this.userId, setting_name: 'Allow Password Reset', setting_value: 'Enabled' },
    ];
  }

  updateSetting(setting: SystemSetting) {
    // Logic for updating the setting can be added here
    console.log(`Updated Setting: ${setting.setting_name} = ${setting.setting_value}`);
  }
  cancel() {
    this.router.navigate(['/admin-dashboard']); // Adjust the route as needed for your application
  }
}
