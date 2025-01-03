import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createPerformanceChart();
    this.createDeviceChart();
    this.createChannelChart();
  }

  createPerformanceChart() {
    const ctx = document.getElementById('performanceChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Users',
            data: [12000, 15000, 13000, 17000, 20000, 19000, 22000, 24000, 21000, 25000, 26000, 27000],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }

  createDeviceChart() {
    const ctx = document.getElementById('deviceChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [
          {
            data: [60, 30, 10],
            backgroundColor: ['#4CAF50', '#FF9800', '#03A9F4'],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }

  createChannelChart() {
    const ctx = document.getElementById('channelChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Direct', 'Referral', 'Social Media'],
        datasets: [
          {
            label: 'Traffic',
            data: [40, 35, 25],
            backgroundColor: ['#03A9F4', '#8BC34A', '#FF9800'],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }
}