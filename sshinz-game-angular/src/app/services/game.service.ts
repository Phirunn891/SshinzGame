import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [
    {
      id: 'black-myth-wukong',
      name: 'Black Myth: Wukong',
      description: 'Black Myth: Wukong is an action RPG rooted in Chinese mythology. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.',
      price: '$59.99USD',
      image: '/.img/Wukong.jpg',
      video: '/.video/Wukong.mp4',
      isTopNewRelease: true,
      isFeatured: true,
      platforms: ['PC', 'PS5'],
      category: ['ACTION RPG', 'OPEN-WORLD', 'MYTHOLOGY'],
      developer: 'Game Science',
      publisher: 'Game Science',
      releaseDate: 'Aug 20, 2024',
      subQuote: '"Embark on a journey through Chinese mythology as the Destined One. Unravel the truth beneath the veil of a glorious legend from the past."',
      screenshots: [
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1538356111083-d2118973abc5?q=80&w=2069&auto=format&fit=crop'
      ],
      originalPrice: '$69.99',
      discount: '-15%',
      requirements: {
        minimum: [
            'Requires a 64-bit processor and operating system',
            'OS: Windows 10 64-bit',
            'Processor: Intel Core i5-8400 / AMD Ryzen 5 1600',
            'Memory: 16 GB RAM',
            'Graphics: NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB',
            'DirectX: Version 11',
            'Storage: 130 GB available space',
            'Sound Card: Windows Compatible Audio Device',
            'Additional Notes: HDD Supported, SSD Recommended.'
        ],
        recommended: [
            'Requires: a 64-bit processor and operating system',
            'OS: Windows 10 64-bit',
            'Processor: Intel Core i7-9700 / AMD Ryzen 5 5500',
            'Memory: 16 GB RAM',
            'Graphics: NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT / INTEL Arc A750',
            'DirectX: Version 12',
            'Storage: 130 GB available space',
            'Sound Card: Windows Compatible Audio Device',
            'Additional Notes: SSD Required.'
        ]
      }
    },
    {
       id: 'fc25',
       name: 'EA SPORTS FC™ 25',
       description: 'Base Game EA SPORTS FC™ 25',
       price: '$69.99USD',
       image: '/.img/fc25.jpg',
       isTopNewRelease: true,
    },
    {
       id: 'planet-coaster-2',
       name: 'Planet Coaster 2',
       description: 'Base Game Planet Coaster 2',
       price: '$22.99USD',
       image: '/.img/planet caoster.jpg',
       isTopNewRelease: true,
    },
    {
       id: 'warframe',
       name: 'Warframe',
       description: 'Free To Play',
       price: 'Free To Play',
       image: '/.img/warframe top.jpg',
       isTopNewRelease: true,
    },
    {
        id: 'dragon-age',
        name: 'Dragon Age™: The Veilguard',
        description: 'Dragon Age™: The Veilguard',
        price: '$54.00',
        originalPrice: '$59.99',
        discount: '-10%',
        image: '/.img/dragon age.jpg',
        isFeatured: false,
    },
    {
        id: 'battlefield-2042',
        name: 'Battlefied™ 2042',
        description: 'Battlefied™ 2042',
        price: '$48.01',
        originalPrice: '$59.99',
        discount: '-20%',
        image: '/.img/Battlefield™ 2042.jpg',
    },
    {
        id: 'arma-3',
        name: 'ARMA3',
        description: 'ARMA3',
        price: '$5.40',
        originalPrice: '$5.99',
        discount: '-10%',
        image: '/.img/Arma3.jpg',
    },
    {
        id: 'resident-evil-2',
        name: 'RSE2',
        description: 'Resident Evil 2',
        price: '$35.99',
        originalPrice: '$39.99',
        discount: '-10%',
        image: '/.img/risident2.jpg',
    },
    {
        id: 'cs2',
        name: 'Counter-Strike 2',
        description: 'For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.',
        price: 'Free To Play',
        image: '/.img/Csgo2.jpg',
        isTrending: true,
        platforms: ['PC'],
        category: ['FPS', 'Action'],
    },
    {
        id: 'shadow-of-mordor',
        name: 'Middle-earth™: Shadow of Mordor™',
        description: 'Fight through Mordor and uncover the truth of the spirit that compels you, discover the origins of the Rings of Power, build your legend and ultimately confront the evil of Sauron in this new chronicle of Middle-earth.',
        price: '$19.99 USD',
        image: '/.img/shadow of mordor.jpg',
        isTrending: true,
        platforms: ['PC', 'PS5', 'Xbox'],
        category: ['RPG', 'Adventure'],
    },
    {
        id: 'liars-bar',
        name: "Liar's Bar",
        description: "Liar's Bar",
        price: '$6.99USD',
        image: "/.img/Liar's bar.jpg",
        isUnder10: true,
    },
    {
        id: 'far-cry-4',
        name: 'Far Cry 4',
        description: 'Far Cry 4',
        price: '$9.99USD',
        image: '/.img/far cry4.jpg',
        isUnder10: true,
    },
    {
        id: 'overcooked-2',
        name: 'Overcooked 2',
        description: 'Overcooked 2',
        price: '$6.24USD',
        image: '/.img/overcooked2.jpg',
        isUnder10: true,
    },
    {
        id: 'assassins-creed-shadows',
        name: 'Assassin’s Creed Shadows',
        description: 'Assassin’s Creed Shadows',
        price: 'Coming Soon',
        image: '/.img/assassin creed.jpg',
        isComingSoon: true,
    },
    {
        id: 'stalker-2',
        name: 'STALKER 2',
        description: 'STALKER 2',
        price: 'Coming Soon',
        image: '/.img/stalker2.jpg',
        isComingSoon: true,
    },
    {
        id: 'delta-force',
        name: 'Delta Force',
        description: 'Delta Force',
        price: 'Coming Soon',
        image: '/.img/delta-force.jpg',
        isComingSoon: true,
    },
    {
        id: 'path-of-exile-2',
        name: 'Path of Exile 2',
        description: 'Path of Exile 2',
        price: 'Coming Soon',
        image: '/.img/Path of Exile.jpg',
        isComingSoon: true,
    },
    {
        id: 'monster-hunter-wilds',
        name: 'Monster Hunter Wilds',
        description: 'Monster Hunter Wilds',
        price: 'Coming Soon',
        image: '/.img/monster_hunter.jpg',
        isComingSoon: true,
    },
    {
        id: 'dune-awakening',
        name: 'Dune Awakening',
        description: 'Dune Awakening',
        price: 'Coming Soon',
        image: '/.img/dune awakening.jpg',
        isComingSoon: true,
    },
    {
        id: 'marvel-rivals',
        name: 'Marvel Rivals',
        description: 'Marvel Rivals',
        price: 'Coming Soon',
        image: '/.img/rivals.jpg',
        isComingSoon: true,
    }
  ];

  getGames(): Observable<Game[]> {
    return of(this.games);
  }

  getGameById(id: string): Observable<Game | undefined> {
    const game = this.games.find(g => g.id === id);
    return of(game);
  }

  getFeaturedGame(): Observable<Game | undefined> {
    return of(this.games.find(g => g.isFeatured));
  }

  getTopNewReleases(): Observable<Game[]> {
    return of(this.games.filter(g => g.isTopNewRelease));
  }

  getTrendingGames(): Observable<Game[]> {
    return of(this.games.filter(g => g.isTrending));
  }

  getGamesUnder10USD(): Observable<Game[]> {
    return of(this.games.filter(g => g.isUnder10));
  }

  getComingSoonGames(): Observable<Game[]> {
    return of(this.games.filter(g => g.isComingSoon));
  }
}
