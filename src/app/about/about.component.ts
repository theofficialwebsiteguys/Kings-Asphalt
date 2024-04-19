import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  faqs = [
    {
      question: 'My car tire left scuff marks. Are they permanent?',
      answer: 'Your tires leave scuff marks when you turn your steering wheel while the car is stationary. If it\'s a hot day and the asphalt has not completely cured, the surface will get a blemish. It\'s like grinding your heel on a soft surface. However, most of this will become less noticeable over time. If these marks bother you, contact us for a paving contractor in Rockland County, NY.',
      open: true
    },
    {
      question: 'Why do I see roller marks on my surface?',
      answer: 'The most crucial aspect of producing long-lasting pavement is properly compacting of the surface. The ideal is 90% compaction, but sometimes rollers leave streaks or marks on the surface. However, these are temporary and will become less noticeable over time. If you have any further questions or concerns about driveway or parking lot paving in Rockland County, NY, give us a call today and we\'ll try our best to address them. ',
      open: false
    },
    {
      question: 'When should I seal coat my new driveway?',
      answer: 'This is generally determined by the amount of direct sunlight and traffic that the area gets. As a rule of thumb, a surface should not need seal coating more than every three or four years. Once a driveway has been seal coated too many times, it becomes very smooth and slick when it rains. If you think it may be time to renew your seal coat, contact us and we\'ll get a paving contractor in Rockland County, NY out to you as soon as possible.',
      open: false
    },
    {
      question: 'When can I drive on my new driveway?',
      answer: 'Your new asphalt surface can take more than 30 days to cure depending on temperature variations from night to day. In general, however, you should be able to drive on the surface after two to three days if you are careful. If you need a paving contractor in Rockland County, NY, contact us today.',
      open: false
    },
    {
      question: 'What is the difference between resurfacing and seal coating my driveway?',
      answer: 'Seal coating is a form of preventative maintenance that\'s meant to protect your driveway. Resurfacing, on the other hand, is meant to repair damage that\'s already occurred. If the top layer of your driveway is damaged, but the foundation is still strong, we recommend resurfacing it. If you need to reseal or resurface your driveway or parking lot, call Kings Highway Asphalt. We\'re the preferred paving contractor in Rockland County, NY. ',
      open: false
    },
    // ... more FAQs
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
    // If you want only one item open at a time, you can close all other items with:
    // this.faqs.forEach((faq, i) => {
    //   if (i !== index) faq.open = false;
    // });
  }
}
