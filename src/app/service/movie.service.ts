import { Injectable } from '@angular/core';

import { Movie } from './../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  data: Movie[] = [
    {
      title: 'The Empire Strikes Back',
      genres: ['adventure', 'action', 'science fiction'],
      poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9SKDSFbaM6LuGqG1aPWN3wYGEyD.jpg',
      release: new Date('2019-01-01'),
      overview:
        'The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.'
    },
    {
      title: 'Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil Mutant Hellbound Flesh Eating Crawling Alien Zombified Subhumanoid Living Dead, Part 5',
      genres: ['adventure', 'action', 'science fiction'],
      poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9SKDSFbaM6LuGqG1aPWN3wYGEyD.jpg',
      release: new Date('2019-01-01'),
      overview:
        'The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.'
    },
    {
      title: 'I Killed My Lesbian Wife, Hung Her on a Meathook, and Now I Have a Three Picture Deal at Disney ',
      genres: ['adventure', 'action', 'science fiction'],
      poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9SKDSFbaM6LuGqG1aPWN3wYGEyD.jpg',
      overview:
        'The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.'
    },
    {
      title: 'Night of the Day of the Dawn of the Son of the Bride of the Return of the Terror ',
      genres: ['adventure', 'action', 'science fiction'],
      poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9SKDSFbaM6LuGqG1aPWN3wYGEyD.jpg',
      release: new Date('2019-01-01'),
      overview:
        'The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.'
    },
    {
      title: 'Borat: O Segundo Melhor Repórter do Glorioso País Cazaquistão Viaja à América ',
      genres: ['adventure', 'action', 'science fiction'],
      poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9SKDSFbaM6LuGqG1aPWN3wYGEyD.jpg',
      overview:
        'The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.'
    },
    {
      title: 'The Empire Strikes Back',
      genres: ['adventure', 'action', 'science fiction'],
      poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9SKDSFbaM6LuGqG1aPWN3wYGEyD.jpg',
      release: new Date('2019-01-01'),
      overview:
        'The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.'
    },
    {
      title: 'The Empire Strikes Back',
      genres: ['adventure', 'action', 'science fiction'],
      poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9SKDSFbaM6LuGqG1aPWN3wYGEyD.jpg',
      overview:
        'The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.'
    },
    {
      title: 'The Empire Strikes Back',
      genres: ['adventure', 'action', 'science fiction'],
      poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9SKDSFbaM6LuGqG1aPWN3wYGEyD.jpg',
      overview:
        'The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.'
    }
  ];

  constructor() { }

  getMovies(): Movie[] {
    return this.data;
  }
}
