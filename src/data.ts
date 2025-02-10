type Collection = {
  category: string
  coverImage: string
  title: string
  description: {
    en: string
    ar: string
  }
  documentLinks: {
    fileName: string
    linkTarget: { top: number; left: number; width: number; height: number }
  }[]
}

const collections = [
  {
    category: '1-treaties and agreement',
    coverImage: '1-treaties and agreement.jpg',
    title: 'Treaties & Agreements - Foundations of Indo-Omani Diplomacy',
    description: {
      en: "Diplomatic treaties have shaped Indo-Omani relations over centuries, defining territorial control, trade privileges, and mutual obligations. These documents emphasize Oman's crucial role in Indo-Arab diplomacy.",
      ar: 'المعاهدات الدبلوماسية شكلت العلاقات الهندية العُمانية على مر القرون، حيث حددت السيطرة الإقليمية وامتيازات التجارة والالتزامات المتبادلة. تسلط هذه الوثائق الضوء على الدور المحوري لعُمان في الدبلوماسية الهندية العربية.',
    },
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
    title: 'Political & Administrative Correspondence – Governance & Authority',
    description: {
      en: "Official diplomatic exchanges between British, Indian, and Omani officials illustrate key governance shifts that influenced Oman's political structure and administrative policies.",
      ar: 'تكشف المراسلات الدبلوماسية الرسمية بين المسؤولين البريطانيين والهنود والعُمانيين عن التحولات الرئيسية في الحكم التي أثرت على الهيكل السياسي والسياسات الإدارية لعُمان.',
    },
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
    title: 'Maritime Trade & Economic Cooperation – Strengthening Commercial Bonds',
    description: {
      en: "Maritime trade formed the backbone of Indo-Omani relations. The exchange of goods, diplomatic gifts, and economic classifications shaped commercial ties, reinforcing Oman's position as a key trade hub.",
      ar: 'كانت التجارة البحرية العمود الفقري للعلاقات الهندية العُمانية. ساهم تبادل السلع والهدايا الدبلوماسية وإعادة تصنيف النشاطات الاقتصادية في تشكيل الروابط التجارية، مما عزز مكانة عُمان كمركز تجاري رئيسي.',
    },
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
    title: 'The British Influence – Political & Economic Affairs (1900s - 1930s)',
    description: {
      en: 'During British rule, Oman’s strategic location in the Persian Gulf made it a focal point of British imperial policies. Political agents oversaw treaties, economic regulations, and military aid, deepening Oman’s reliance on British India.',
      ar: 'خلال الحكم البريطاني، جعل الموقع الاستراتيجي لعُمان في الخليج الفارسي منها محورًا رئيسيًا للسياسات الإمبريالية البريطانية. أشرف الوكلاء السياسيون على المعاهدات والتنظيمات الاقتصادية والمساعدات العسكرية، مما عزز اعتماد عُمان على الهند البريطانية.',
    },
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
    title: 'Financial & Military Cooperation – Strategic Alliances',
    description: {
      en: 'Oman’s financial and military dependence on British India was evident in subsidies, loans, and logistical support. These agreements played a crucial role in modernizing Oman’s defense infrastructure.',
      ar: 'كان اعتماد عُمان المالي والعسكري على الهند البريطانية واضحًا من خلال الإعانات والقروض والدعم اللوجستي. لعبت هذه الاتفاقيات دورًا محوريًا في تحديث البنية التحتية الدفاعية لعُمان.',
    },
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
    title: 'Scientific & Agricultural Cooperation – The Maxwell Darling Expedition',
    description: {
      en: 'Scientific cooperation between India and Oman significantly impacted agricultural policies. The Maxwell Darling expedition was pivotal in combating locust infestations and advancing agricultural research.',
      ar: 'كان التعاون العلمي بين الهند وعُمان له تأثير كبير على السياسات الزراعية. لعبت بعثة ماكسويل دارلينج دورًا رئيسيًا في مكافحة غزو الجراد وتعزيز الأبحاث الزراعية.',
    },
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
    title: 'Cultural & Social Interactions – Cross-Cultural Bonds & Migration',
    description: {
      en: 'Beyond trade, Indo-Omani relations were shaped by migration, religious exchanges, and cultural interactions. Indian settlers played an integral role in Muscat’s economy, architecture, and social traditions.',
      ar: 'تجاوزت العلاقات الهندية العُمانية حدود التجارة، حيث شكلت الهجرة والتبادل الديني والتفاعل الثقافي عوامل رئيسية في تعزيز الروابط. لعب المستوطنون الهنود دورًا أساسيًا في اقتصاد مسقط وعمارتها وتقاليدها الاجتماعية.',
    },
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
    title: 'Post-Colonial Relations – Building a New Future (1950s–1980s)',
    description: {
      en: "Following India's independence, Indo-Omani relations entered a new phase of diplomacy, characterized by trade treaties and strategic collaborations that reinforced economic and political ties.",
      ar: 'بعد استقلال الهند، دخلت العلاقات الهندية العُمانية مرحلة جديدة من الدبلوماسية، تميزت بمعاهدات تجارية وتعاون استراتيجي عزز الروابط الاقتصادية والسياسية.',
    },
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
