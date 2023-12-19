import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class MainComponent implements OnInit {
  defaultSearchValue: string = ''; // Default value for search bar
  selectedFilter: string = 'Breed'; // Default value for filter dropdown
  tableData: any[] = []; // Array to hold all of the data
  filteredData: any[] = []; // Array to hold filtered data

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(
      (response: any) => {
        console.log(response); // Log the received data to check its structure
        if (response && response.data && Array.isArray(response.data)) {
          this.tableData = response.data; // Assign the array to tableData
          this.filteredData = this.tableData; // Initialize filteredData
          console.log(this.tableData); // Verify the structure of the received data
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  filterData() {
    if (this.defaultSearchValue.trim() === '') {
      // If the search value is empty, show all data
      this.filteredData = this.tableData;
    } else {
      // Filter based on the selected filter and search value
      this.filteredData = this.tableData.filter((breed) => {
        return breed[this.selectedFilter.toLowerCase()]
          .toLowerCase()
          .includes(this.defaultSearchValue.toLowerCase());
      });
    }
  }
}
