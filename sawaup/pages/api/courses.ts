import type { NextApiRequest, NextApiResponse } from 'next'
import type { Course } from '../../types/course'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Course[] | string>
) {
  // Preflight Check:
  if (req.method == "OPTIONS") {
    res.setHeader("Allow", "GET");
    return res.status(202).json('OK');
  }

  // Allow only GET Methods 
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json(`Method ${req.method} Not Allowed`);
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  res.status(200).json(
    [
      {
        name: 'Excel for beginners',
        url: 'https://www.youtube.com/embed/Vl0H-qTclOg',
        tags: [{ text: 'excel' }, { text: 'office' }, { text: 'computer' }, { text: 'organization' }],
        favorite: false,
        thumbnail: 'https://img.youtube.com/vi/Vl0H-qTclOg/0.jpg',
      },
      { 
        name: 'Intro in Kubernetes',
        url: 'https://www.youtube.com/embed/s_o8dwzRlu4',
        tags: [{ text: 'computer' }, { text: 'cloud' }, { text: 'kubernetes' }, { text: 'cloud containers' }],
        favorite: false,
        thumbnail: 'https://img.youtube.com/vi/s_o8dwzRlu4/0.jpg',
      },
      { 
        name: 'Statistics',
        url: 'https://www.youtube.com/embed/xxpc-HPKN28',
        tags: [{ text: 'math' }, { text: 'statistcs' }, { text: 'calculations' }, { text: 'measure' }],
        favorite: false,
        thumbnail: 'https://img.youtube.com/vi/xxpc-HPKN28/0.jpg',
      },
      { 
        name: 'Prisma ORM',
        url: 'https://www.youtube.com/embed/mU8-nKwfw4Y',
        tags: [{ text: 'computer' }, { text: 'ORM' }, { text: 'sql' }, { text: 'javascript' }],
        favorite: false,
        thumbnail: 'https://img.youtube.com/vi/mU8-nKwfw4Y/0.jpg',
      },
      { 
        name: 'Nextjs Crash course',
        url: 'https://www.youtube.com/embed/6fNy0iD3hsk',
        tags: [{ text: 'javascript' }, { text: 'nextjs' }, { text: 'computer' }, { text: 'coding' }],
        favorite: false,
        thumbnail: 'https://img.youtube.com/vi/6fNy0iD3hsk/0.jpg',
      },
      { 
        name: 'Chackra UI',
        url: 'https://www.youtube.com/embed/s-bIsz-NR3c',
        tags: [{ text: 'UI' }, { text: 'design' }, { text: 'html' }, { text: 'css' }],
        favorite: false,
        thumbnail: 'https://img.youtube.com/vi/s-bIsz-NR3c/0.jpg',
      },
      { 
        name: 'Modern Fullstack',
        url: 'https://www.youtube.com/embed/PKy2lYEnhgs',
        tags: [{ text: 'UI' }, { text: 'typescript' }, { text: 'nextjs' }, { text: 'Prisma' }],
        favorite: false,
        thumbnail: 'https://img.youtube.com/vi/PKy2lYEnhgs/0.jpg',
      },
      { 
        name: 'Conventional commits',
        url: 'https://www.youtube.com/embed/lwGcnDgwmFc',
        tags: [{ text: 'git' }, { text: 'coding' }, { text: 'computer' }, { text: 'scripting' }],
        favorite: false,
        thumbnail: 'https://img.youtube.com/vi/lwGcnDgwmFc/0.jpg',
      },
    ]
  )
}
