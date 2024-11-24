import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../CORE/services/admin/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface SystemSetting {
  setting_id: number;
  setting_name: string;
  setting_value: string;
}

@Component({
  selector: 'app-system-settings',
  standalone: true,
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.css'],
  imports: [CommonModule, FormsModule, NavbarComponent, HttpClientModule],
  providers: [AdminService],
})
export class SystemSettingsComponent implements OnInit {
  settings: SystemSetting[] = [];
  isLoading: boolean = false;
  isUpdating: boolean = false;
  dropdownOptions: { [key: string]: string[] } = {
    'Dark Mode': ['True', 'False'],
  };

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadSettings();
  }

  /**
   * Load system settings from the API
   */
  loadSettings(): void {
    this.isLoading = true;
    // Assume setting ID 1 is for "Dark Mode" for demonstration
    this.adminService.getSystemSettingById(1).subscribe({
      next: (response: any) => {
        this.settings = [
          {
            setting_id: 1,
            setting_name: 'Dark Mode',
            setting_value: response.dark_mode ? 'True' : 'False',
          },
        ];
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Failed to load settings:', err);
        this.isLoading = false;
      },
    });
  }

  /**
   * Update a specific system setting
   * @param setting The setting to be updated
   */
  updateSetting(setting: SystemSetting): void {
    this.isUpdating = true;
    console.log(
      `Updated Setting: ${setting.setting_name} = ${setting.setting_value}`
    );

    // Convert setting value to boolean
    const updatedValue = setting.setting_value === 'True';

    // Call the update API
    this.adminService
      .updateSystemSetting(setting.setting_id, { dark_mode: updatedValue })
      .subscribe({
        next: () => {
          this.isUpdating = false;
          console.log('Setting updated successfully');
          localStorage.setItem('dark_mode', updatedValue.toString());
          // Success alert
          alert('Setting updated successfully!');
          // window.location.reload();
          this.router.navigate(['/admin-dashboard']).then(() => {
            window.location.reload();
          });
        },
        error: (err: any) => {
          this.isUpdating = false;
          console.error('Failed to update setting:', err);
          // Error alert
          alert('Failed to update setting. Please try again.');
        },
      });
  }

  /**
   * Handle cancel button click
   */
  cancel(): void {
    this.router.navigate(['/admin-dashboard']); // Adjust the route as needed
  }
}
