type Collection = {
  category: string
  coverImage: string
  documentLinks: {
    fileName: string
    linkTarget: { top: number; left: number; width: number; height: number }
  }[]
}

const collections = [
  {
    category: '1-treaties and agreement',
    coverImage: '1-treaties and agreement.jpg',
    documentLinks: [
      {
        fileName: '1.pdf',
        linkTarget: { top: 270, left: 30, width: 240, height: 390 },
      },
      {
        fileName: '2 _ 3.pdf',
        linkTarget: { top: 270, left: 300, width: 210, height: 360 },
      },
      {
        fileName: '2 _ 3.pdf',
        linkTarget: { top: 260, left: 530, width: 240, height: 430 },
      },
    ],
  },
  {
    category: '2-political & administrative',
    coverImage: '2-political & administrative.jpg',
    documentLinks: [
      {
        fileName: '1.pdf',
        linkTarget: { top: 270, left: 50, width: 170, height: 440 },
      },
      {
        fileName: '2.pdf',
        linkTarget: { top: 300, left: 270, width: 180, height: 320 },
      },
      {
        fileName: '3.pdf',
        linkTarget: { top: 300, left: 530, width: 180, height: 360 },
      },
    ],
  },
  {
    category: '3-maritime trade',
    coverImage: '3-maritime trade.jpg',
    documentLinks: [
      {
        fileName: '1.pdf',
        linkTarget: { top: 300, left: 20, width: 230, height: 330 },
      },
      {
        fileName: '2.pdf',
        linkTarget: { top: 320, left: 260, width: 290, height: 300 },
      },
      {
        fileName: '3.pdf',
        linkTarget: { top: 340, left: 550, width: 240, height: 310 },
      },
    ],
  },
  {
    category: '4-british influence',
    coverImage: '4-british influence.jpg',
    documentLinks: [
      {
        fileName: '1.pdf',
        linkTarget: { top: 270, left: 50, width: 170, height: 390 },
      },
      {
        fileName: '2.pdf',
        linkTarget: { top: 270, left: 230, width: 230, height: 370 },
      },
      {
        fileName: '3.pdf',
        linkTarget: { top: 300, left: 490, width: 270, height: 270 },
      },
    ],
  },
  {
    category: '5-financial & Military',
    coverImage: '5-financial & Military.jpg',
    documentLinks: [
      {
        fileName: '1.pdf',
        linkTarget: { top: 250, left: 20, width: 230, height: 400 },
      },
      {
        fileName: '2.pdf',
        linkTarget: { top: 260, left: 270, width: 240, height: 420 },
      },
      {
        fileName: '3.pdf',
        linkTarget: { top: 250, left: 510, width: 270, height: 310 },
      },
    ],
  },
  {
    category: '6-scientific',
    coverImage: '6-scientific.jpg',
    documentLinks: [
      {
        fileName: '1.pdf',
        linkTarget: { top: 290, left: 50, width: 210, height: 380 },
      },
      {
        fileName: '2.pdf',
        linkTarget: { top: 310, left: 280, width: 250, height: 280 },
      },
      {
        fileName: '3.pdf',
        linkTarget: { top: 290, left: 540, width: 220, height: 390 },
      },
    ],
  },
  {
    category: '7-cultural and social',
    coverImage: '7-cultural and social.jpg',
    documentLinks: [
      {
        fileName: '1.pdf',
        linkTarget: { top: 280, left: 50, width: 190, height: 380 },
      },
      {
        fileName: '2.pdf',
        linkTarget: { top: 280, left: 260, width: 220, height: 390 },
      },
      {
        fileName: '3.pdf',
        linkTarget: { top: 280, left: 510, width: 220, height: 370 },
      },
    ],
  },
  {
    category: '8-post colonial relations',
    coverImage: '8-post colonial relations.jpg',
    documentLinks: [
      {
        fileName: '1_2.pdf',
        linkTarget: { top: 270, left: 20, width: 280, height: 260 },
      },
      {
        fileName: '2_2.pdf',
        linkTarget: { top: 270, left: 300, width: 210, height: 360 },
      },
      {
        fileName: '3_2.pdf',
        linkTarget: { top: 270, left: 530, width: 220, height: 360 },
      },
    ],
  },
] as const satisfies Collection[]

type Category = (typeof collections)[number]['category']

const resolvePath = (category: Category, fileName: string) => {
  return new URL(`./assets/${category}/${fileName}`, import.meta.url).href
}

export const catalog = collections.reduce(
  (previousValue, currentValue) => ({
    ...previousValue,
    [currentValue.category]: {
      ...currentValue,
      coverImage: resolvePath(currentValue.category, currentValue.coverImage),
      documentLinks: currentValue.documentLinks.map((link) => ({
        ...link,
        fileName: resolvePath(currentValue.category, link.fileName),
      })),
    } satisfies Collection,
  }),
  {} as Record<Category, Collection>,
)
