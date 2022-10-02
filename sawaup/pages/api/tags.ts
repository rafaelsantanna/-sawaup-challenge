import type { NextApiRequest, NextApiResponse } from 'next'
import type { Tag } from '../../types/tag'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tag[] | string>
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
      { text: 'coding', filtered: false },
      { text: 'computer', filtered: false },
      { text: 'css', filtered: false },
      { text: 'design', filtered: false },
      { text: 'excel', filtered: false },
      { text: 'html', filtered: false },
      { text: 'javascript', filtered: false },
      { text: 'kubernetes', filtered: false },
      { text: 'math', filtered: false },
      { text: 'measure', filtered: false },
      { text: 'nextjs', filtered: false },
      { text: 'office', filtered: false },
      { text: 'organization', filtered: false },
      { text: 'ORM', filtered: false },
      { text: 'Prisma', filtered: false },
      { text: 'sql', filtered: false },
      { text: 'statistcs', filtered: false },
      { text: 'typescript', filtered: false },
      { text: 'UI', filtered: false },
      { text: 'scripting', filtered: false },
      { text: 'git', filtered: false }
    ]
  )
}
