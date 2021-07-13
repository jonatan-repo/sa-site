import { Component, OnInit } from '@angular/core';
import { Expo, gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private tlCommon = gsap.timeline()
  private tlToggleMenu = gsap.timeline()

  constructor() { }

  ngOnInit(): void {
    this.buildToggleMenuAnimation()
    this.buildMenuLgAnimation()
    this.buildMainLogoAnimation()
    
    var a = MediaQueryList
    debugger
  }

  toggleMenu(): void {
    this.tlToggleMenu.reversed(!this.tlToggleMenu.reversed())
  }

  navigate(path: string): void {
    console.log(`navigate to: ${path}`)
  }

  private buildToggleMenuAnimation(): void {
    this.tlToggleMenu.to('.one', {
      y: 6,
      rotation: 45,
      duration: 0.5,
      ease: Expo.easeInOut
    })

    this.tlToggleMenu.to('.two', {
      y: -6,
      rotation: -45,
      duration: 0.5,
      delay: -0.8,
      ease: Expo.easeInOut
    })

    this.tlToggleMenu.reverse()
  }

  private buildMainLogoAnimation(): void {
    this.tlCommon.add(
      gsap.to(
        '.main-logo',
        {
          duration: 1,
          opacity: 1,
          delay: -2,
          
          ease: Expo.easeInOut
        }
      )
    )
  }

  private buildMenuLgAnimation(): void {
    this.tlCommon.add(
      gsap.fromTo(
        '.menu-lg-screen ul',
        { opacity: 0 },
        {
          duration: 2.5,
          opacity: 1,
          delay: 1,
          ease: Expo.easeInOut
        }
      )
    )
  }
}
