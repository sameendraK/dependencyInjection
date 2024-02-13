import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent {
  @Input()
  selectedCountry: any;
  selectedCity: any;
  childData: string[] = ['HI', 'hello'];
  singleData:string = '';
  clickHandler() {
    this.childData.push("added");
  }
  singleClickHandler(){
    this.singleData+= "single";
  }
  countries = [
    {
      countryName: 'India',
      phoneExtension: '+91',
      countryCode: 'IN',
      cities: [{ city: 'Delhi' }, { city: 'Mumbai' }, { city: 'Bangalore' }],
    },
    {
      countryName: 'United States',
      phoneExtension: '+1',
      countryCode: 'US',
      cities: [
        { city: 'New York' },
        { city: 'Los Angeles' },
        { city: 'Chicago' },
      ],
    },
    {
      countryName: 'United Kingdom',
      phoneExtension: '+44',
      countryCode: 'UK',
      cities: [
        { city: 'London' },
        { city: 'Manchester' },
        // Add more cities if needed
      ],
    },
    {
      countryName: 'Germany',
      phoneExtension: '+49',
      countryCode: 'DE',
      cities: [
        { city: 'Berlin' },
        { city: 'Munich' },
        // Add more cities if needed
      ],
    },
    {
      countryName: 'Brazil',
      phoneExtension: '+55',
      countryCode: 'BR',
      cities: [
        { city: 'Sao Paulo' },
        { city: 'Rio de Janeiro' },
        // Add more cities if needed
      ],
    },
    {
      countryName: 'Canada',
      phoneExtension: '+1',
      countryCode: 'CA',
      cities: [
        { city: 'Toronto' },
        { city: 'Vancouver' },
        // Add more cities if needed
      ],
    },
    {
      countryName: 'France',
      phoneExtension: '+33',
      countryCode: 'FR',
      cities: [
        { city: 'Paris' },
        { city: 'Marseille' },
        // Add more cities if needed
      ],
    },
    // Add more countries as necessary to make a total of 10
  ];
  populateCities() {

    // This method will be triggered when a country is selected
    // It updates the selectedCity based on the selectedCountry
    // No explicit code required here, Angular's two-way data binding takes care of it
  }


}
