export class AppComponent {
  public appPages = [
    {
      title: 'Take a photo',
      url: '/capture',
      icon: 'camera',
    },
    {
      title: 'View gallery',
      url: '/view',
      icon: 'globe',
    },
  ];
  constructor() {}
}
