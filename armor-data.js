// armor-data.js — all content for The Armor of God site
// Sources traced to study/sources.md (SRC-XXXX IDs)
// Publication status: 'draft' until verified; must be 'approved' before release
// GA quotes marked with verified:false are cited in SRC-0004 (Seminary Teacher Manual)
// and must be verified against original talks before Gate 3 (DEC-0008)

window.ArmorData = {

  pieces: {

    'ARMOR-0001': {
      id: 'ARMOR-0001',
      label: 'Belt of Truth',
      tabLabel: 'Belt',
      ariaLabel: 'Belt of Truth — tap to explore',
      publicationStatus: 'draft',
      sourceIds: ['SRC-0002', 'SRC-0003', 'SRC-0004', 'SRC-0005', 'SRC-0006'],
      scripture: {
        reference: 'Ephesians 6:14',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/eph/6?lang=eng&id=p14',
        text: 'Stand therefore, having your loins girt about with truth…',
      },
      dcText: null,
      greekWord: {
        term: 'perizónnymi',
        strongsNumber: 'G4024',
        meaning: 'To gird around — to bind the tunic close so it cannot catch on equipment.',
        sourceId: 'SRC-0005',
      },
      romanContext: {
        equipmentName: 'Cingulum militare',
        description: 'A wide decorated leather belt worn as the foundational piece of Roman equipment. It held the tunic close, anchored the breastplate and sword scabbard, and made a distinctive sound — a mark of being on active duty. Soldiers ungirded themselves to signal going off duty or surrendering.',
        sourceId: 'SRC-0006',
      },
      bodyPart: {
        name: 'Loins',
        spiritualDomain: 'Moral purity, chastity, virtue — the seat of personal integrity.',
        sourceIds: ['SRC-0003', 'SRC-0004'],
      },
      application: [
        'Live honestly — in speech, actions, and private thought.',
        'Honor the law of chastity in conduct and in what you consume.',
        'Seek truth actively: daily scripture study, prayer, following living prophets.',
        'Truth is the belt that holds everything else in place — without it the other pieces lose their anchor.',
      ],
      crossReferences: [
        {
          reference: 'Isaiah 11:5',
          url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/11?lang=eng&id=p5',
          volume: 'OT',
          note: 'Christ the Messiah wears righteousness and faithfulness as the girdle of his loins — the same belt, worn first by him.',
        },
      ],
      restorationNote: null,
      bomLink: null,
      hitArea: { top: '48%', left: '30%', width: '38%', height: '14%' },
    },

    'ARMOR-0002': {
      id: 'ARMOR-0002',
      label: 'Breastplate of Righteousness',
      tabLabel: 'Breastplate',
      ariaLabel: 'Breastplate of Righteousness — tap to explore',
      publicationStatus: 'draft',
      sourceIds: ['SRC-0002', 'SRC-0003', 'SRC-0004', 'SRC-0005', 'SRC-0006', 'SRC-0008', 'SRC-0010'],
      scripture: {
        reference: 'Ephesians 6:14',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/eph/6?lang=eng&id=p14',
        text: '…having on the breastplate of righteousness;',
      },
      dcText: {
        reference: 'D&C 27:16',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/27?lang=eng&id=p16',
        text: '…having on the breastplate of righteousness…',
        note: 'Wording identical to Paul\'s. The D&C 27:16 footnote cross-references JS—H 1:35, connecting this spiritual breastplate to the physical breastplate Moroni delivered to Joseph Smith.',
      },
      greekWord: {
        term: 'thórax',
        strongsNumber: 'G2382',
        meaning: 'Breastplate — the protective chest armor covering the vital organs, especially the heart.',
        sourceId: 'SRC-0005',
      },
      romanContext: {
        equipmentName: 'Lorica',
        description: 'Roman body armor came in three main types in the 1st century AD: lorica segmentata (overlapping iron strips on leather), lorica hamata (interlocking iron rings, flexible and durable enough to last decades), and lorica squamata (small overlapping metal scales). All protected the chest, back, and shoulders.',
        sourceId: 'SRC-0006',
      },
      bodyPart: {
        name: 'Heart',
        spiritualDomain: 'Affections, emotions, loyalty, conduct — what you love and how you live.',
        sourceIds: ['SRC-0003', 'SRC-0004'],
      },
      application: [
        'Repent regularly — the breastplate is kept clean through the Atonement of Jesus Christ.',
        'Keep covenants, especially those made at baptism and in the temple.',
        'Serve others — righteous conduct is daily, not theoretical.',
      ],
      crossReferences: [
        {
          reference: 'Isaiah 59:17',
          url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/59?lang=eng&id=p17',
          volume: 'OT',
          note: 'God himself wears the breastplate of righteousness — the same armor Paul gives believers.',
        },
      ],
      restorationNote: 'The D&C 27:16 footnote cross-references JS—H 1:35 — the account of Moroni delivering a physical breastplate along with the gold plates and the Urim and Thummim. The Restoration includes a literal counterpart to this spiritual piece.',
      bomLink: null,
      hitArea: { top: '18%', left: '28%', width: '40%', height: '28%' },
    },

    'ARMOR-0003': {
      id: 'ARMOR-0003',
      label: 'Shoes of the Gospel of Peace',
      tabLabel: 'Shoes',
      ariaLabel: 'Shoes of the Gospel of Peace — tap to explore',
      publicationStatus: 'draft',
      sourceIds: ['SRC-0002', 'SRC-0003', 'SRC-0004', 'SRC-0005', 'SRC-0006', 'SRC-0008'],
      scripture: {
        reference: 'Ephesians 6:15',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/eph/6?lang=eng&id=p15',
        text: 'And your feet shod with the preparation of the gospel of peace;',
      },
      dcText: {
        reference: 'D&C 27:16',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/27?lang=eng&id=p16',
        text: '…your feet shod with the preparation of the gospel of peace, which I have sent mine angels to commit unto you;',
        note: 'The D&C adds a crucial phrase: the gospel of peace was delivered by angelic messengers — Moroni, John the Baptist, Elias, Elijah, Peter, James and John, all named in D&C 27:5–12. The restored gospel is what these shoes carry.',
      },
      greekWord: {
        term: 'hupodéo',
        strongsNumber: 'G5265',
        meaning: 'To bind under — to strap sandals to the feet.',
        sourceId: 'SRC-0005',
      },
      romanContext: {
        equipmentName: 'Caligae',
        description: 'Roman military sandals with leather uppers and iron hobnails hammered into the sole for grip and durability. A Roman soldier\'s ability to hold ground in formation depended on not slipping.',
        sourceId: 'SRC-0006',
      },
      bodyPart: {
        name: 'Feet',
        spiritualDomain: 'Life course, goals, direction — where you are heading.',
        sourceIds: ['SRC-0003', 'SRC-0004'],
      },
      application: [
        'Align your goals with the gospel — ask regularly whether where your life is heading reflects gospel priorities.',
        'Be ready to share the gospel: the preparation of peace includes being willing to walk toward others.',
        'Walk with consistency — the hobnailed Roman boot gave grip for the long march, not just a sprint.',
      ],
      crossReferences: [],
      restorationNote: null,
      bomLink: null,
      hitArea: { top: '83%', left: '10%', width: '78%', height: '14%' },
    },

    'ARMOR-0004': {
      id: 'ARMOR-0004',
      label: 'Shield of Faith',
      tabLabel: 'Shield',
      ariaLabel: 'Shield of Faith — tap to explore',
      publicationStatus: 'draft',
      sourceIds: ['SRC-0002', 'SRC-0003', 'SRC-0004', 'SRC-0005', 'SRC-0009'],
      scripture: {
        reference: 'Ephesians 6:16',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/eph/6?lang=eng&id=p16',
        text: 'Above all, taking the shield of faith, wherewith ye shall be able to quench all the fiery darts of the wicked.',
      },
      dcText: null,
      greekWord: {
        term: 'thureós',
        strongsNumber: 'G2375',
        meaning: 'From thyra — door. A large oblong, four-cornered shield shaped like a door, large enough to cover the whole body. Paul chose this word deliberately over aspis (the smaller round shield). It appears only once in the entire New Testament — right here.',
        sourceId: 'SRC-0005',
      },
      romanContext: {
        equipmentName: 'Scutum',
        description: 'The large rectangular, semi-cylindrical shield of the Roman legionary. In formation, shields could interlock to form the testudo (tortoise), making a nearly impenetrable wall. It was the soldier\'s most versatile protection.',
        sourceId: 'SRC-0006',
      },
      bodyPart: {
        name: 'Whole body',
        spiritualDomain: 'The whole soul — moveable, comprehensive protection against whatever comes.',
        sourceIds: ['SRC-0003', 'SRC-0004'],
      },
      application: [
        'Hold fast to the word of God daily — grasping the iron rod is an active, ongoing posture, not a one-time choice.',
        'Pray daily — the shield requires sustained contact with the Lord to remain effective.',
        'Do not doubt. The specific mechanism: "if they did not doubt, God would deliver them" (Alma 56:47).',
        'Faith grows by acting on it, not only by knowing about it.',
      ],
      crossReferences: [
        {
          reference: '1 Nephi 15:24',
          url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/15?lang=eng&id=p24',
          volume: 'BOM',
          note: '"Neither could the temptations and the fiery darts of the adversary overpower them unto blindness, to lead them away to destruction." The iron rod — the word of God — quenches the same fiery darts the shield deflects.',
        },
      ],
      restorationNote: null,
      bomLink: '1 Nephi 15:24 — Nephi identifies the iron rod as the word of God, which protects against the fiery darts of the adversary. The specific threat named in the Book of Mormon: spiritual blindness.',
      hitArea: { top: '22%', left: '52%', width: '38%', height: '58%' },
    },

    'ARMOR-0005': {
      id: 'ARMOR-0005',
      label: 'Helmet of Salvation',
      tabLabel: 'Helmet',
      ariaLabel: 'Helmet of Salvation — tap to explore',
      publicationStatus: 'draft',
      sourceIds: ['SRC-0002', 'SRC-0003', 'SRC-0004', 'SRC-0005', 'SRC-0006'],
      scripture: {
        reference: 'Ephesians 6:17',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/eph/6?lang=eng&id=p17',
        text: 'And take the helmet of salvation…',
      },
      dcText: null,
      greekWord: {
        term: 'perikephalaia',
        strongsNumber: 'G4030',
        meaning: 'From peri (around) + kephalé (head) — literally "encirclement of the head." Appears only twice in the New Testament: Ephesians 6:17 and 1 Thessalonians 5:8.',
        sourceId: 'SRC-0005',
      },
      romanContext: {
        equipmentName: 'Galea / Cassis',
        description: 'The Roman helmet featured a bowl protecting the head, a neck guard extending from the back, a ridge above the forehead for impact absorption, and hinged cheek guards. Designed to leave the ears exposed for battlefield awareness while protecting the head completely.',
        sourceId: 'SRC-0006',
      },
      bodyPart: {
        name: 'Head',
        spiritualDomain: 'Thoughts, intellect, mind — what occupies your attention and shapes your perception.',
        sourceIds: ['SRC-0003', 'SRC-0004'],
      },
      application: [
        'Fill your mind with light — choose what you see, hear, and dwell on.',
        'Maintain a settled assurance of your standing before God through the Atonement — the helmet is salvation, not anxiety about salvation.',
        'Guard against spiritual blindness: the fiery darts of the adversary specifically target sight (1 Nephi 15:24). A firm mind is the defense.',
      ],
      crossReferences: [
        {
          reference: 'Isaiah 59:17',
          url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/59?lang=eng&id=p17',
          volume: 'OT',
          note: 'God wears the helmet of salvation — the same helmet Paul gives believers.',
        },
      ],
      restorationNote: null,
      bomLink: null,
      hitArea: { top: '0%', left: '28%', width: '40%', height: '18%' },
    },

    'ARMOR-0006': {
      id: 'ARMOR-0006',
      label: 'Sword of the Spirit',
      tabLabel: 'Sword',
      ariaLabel: 'Sword of the Spirit, the word of God — tap to explore',
      publicationStatus: 'draft',
      sourceIds: ['SRC-0002', 'SRC-0004', 'SRC-0005', 'SRC-0006', 'SRC-0008'],
      scripture: {
        reference: 'Ephesians 6:17',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/eph/6?lang=eng&id=p17',
        text: '…and the sword of the Spirit, which is the word of God:',
      },
      dcText: {
        reference: 'D&C 27:18',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/27?lang=eng&id=p18',
        text: '…the sword of my Spirit, which I will pour out upon you, and my word which I reveal unto you…',
        note: 'The D&C adds two things Paul does not say: (1) the Spirit is "my Spirit" — Christ\'s own, poured out as a covenant promise, not merely available; (2) "my word which I reveal unto you" — ongoing living revelation is named alongside canonized scripture as a second element of the sword.',
      },
      greekWord: {
        term: 'máchaira',
        strongsNumber: 'G3162',
        meaning: 'A short sword or dirk — close-range, for cutting or thrusting. The Roman gladius equivalent. Not a lance, not a broadsword. The only offensive piece in the armor list is an intimate, precise weapon.',
        sourceId: 'SRC-0005',
      },
      romanContext: {
        equipmentName: 'Gladius',
        description: 'The standard Roman legionary short sword — approximately 60 cm, leaf-shaped blade, worn on the right hip. Used for close-in combat, not distance. A weapon for the moment of direct contact.',
        sourceId: 'SRC-0006',
      },
      bodyPart: {
        name: 'Hand / arm',
        spiritualDomain: 'The only offensive piece. Not for distance — for the moment of direct encounter.',
        sourceIds: ['SRC-0004'],
      },
      application: [
        'The Greek word is rhéma (G4487) — a specific spoken utterance in a specific moment, not logos (abstract doctrine held generally). The sword is sharpened for a particular attack.',
        'Memorize scripture so specific passages are available in specific moments of temptation — not for display, but for deployment.',
        'Seek personal revelation through prayer and the Holy Ghost. The sword is sharpened by the Spirit\'s living direction.',
        'Jesus modeled this in the wilderness temptations (Matthew 4:4, 7, 10): each of Satan\'s three attacks was met with one exact scripture, applied precisely to that attack.',
      ],
      crossReferences: [],
      restorationNote: null,
      bomLink: null,
      hitArea: { top: '50%', left: '8%', width: '30%', height: '24%' },
    },

  },

  enemy: {
    id: 'ARMOR-0007',
    publicationStatus: 'draft',
    sourceIds: ['SRC-0002', 'SRC-0005', 'SRC-0011'],
    anchorVerse: {
      reference: 'Ephesians 6:12',
      url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/eph/6?lang=eng&id=p12',
      text: 'For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places.',
    },
    fourTitles: [
      {
        kjvPhrase: 'Principalities',
        greek: 'archai (G746)',
        meaning: 'First-rank rulers — the highest tier of spiritual opposition.',
      },
      {
        kjvPhrase: 'Powers',
        greek: 'exousiai (G1849)',
        meaning: 'Those with delegated authority and jurisdiction over specific domains.',
      },
      {
        kjvPhrase: 'Rulers of the darkness of this world',
        greek: 'kosmokratores (G2888)',
        meaning: 'World-rulers of this darkness — organized, cosmic-scale influence over earthly evil.',
      },
      {
        kjvPhrase: 'Spiritual wickedness in high places',
        greek: 'pneumatika tes ponerias (G4152 + G4189)',
        meaning: 'Malevolent spiritual entities operating in elevated, unseen dimensions.',
      },
    ],
    jshConnection: {
      reference: 'Joseph Smith—History 1:15–16',
      url: 'https://www.churchofjesuschrist.org/study/scriptures/pgp/js-h/1?lang=eng&id=p15',
      summary: 'In the Sacred Grove, just before the First Vision, Joseph Smith encountered exactly these powers: "I was seized upon by some power which entirely overcame me… thick darkness gathered around me… not to an imaginary ruin, but to the power of some actual being from the unseen world." The KJV cross-references this moment directly to Ephesians 6:12.',
    },
  },

  prayer: {
    id: 'ARMOR-0008',
    publicationStatus: 'draft',
    sourceIds: ['SRC-0002', 'SRC-0008'],
    anchorVerse: {
      reference: 'Ephesians 6:18',
      url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/eph/6?lang=eng&id=p18',
      text: 'Praying always with all prayer and supplication in the Spirit, and watching thereunto with all perseverance and supplication for all saints;',
    },
    dcAddition: {
      reference: 'D&C 27:18',
      url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/27?lang=eng&id=p18',
      text: '…and be agreed as touching all things whatsoever ye ask of me, and be faithful until I come, and ye shall be caught up, that where I am ye shall be also.',
      note: 'The D&C adds unity in prayer as a communal dimension — the armor is worn together, not only individually.',
    },
    bodyContent: 'Paul does not list prayer as a seventh piece. It follows the armor list as the animating practice — the act by which each piece stays in place and functions. You do not pray as one more item on the checklist. You pray to put on the armor and to keep it on.',
  },

  chartRows: [
    {
      reference: 'Ephesians 6:14–17',
      volume: 'New Testament',
      url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/eph/6?lang=eng&id=p14',
      pieces: 'Belt of truth, breastplate of righteousness, shoes of the gospel of peace, shield of faith, helmet of salvation, sword of the Spirit',
      note: 'The primary passage. Six pieces named in the order a soldier would don them.',
    },
    {
      reference: 'D&C 27:15–18',
      volume: 'Doctrine & Covenants',
      url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/27?lang=eng&id=p15',
      pieces: 'Same six pieces. Christ speaks in first person: "my whole armor," "my Spirit, which I will pour out upon you," "my word which I reveal unto you."',
      note: 'Given August 1830, four months after the Church was organized. Spoken by Christ directly to Joseph Smith, immediately after naming all the angels of the Restoration.',
    },
    {
      reference: '1 Nephi 15:24',
      volume: 'Book of Mormon',
      url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/15?lang=eng&id=p24',
      pieces: 'Shield of faith / word of God (iron rod)',
      note: 'Nephi identifies the iron rod as the word of God — holding fast to it means the fiery darts of the adversary cannot "overpower them unto blindness."',
    },
    {
      reference: '2 Nephi 1:23',
      volume: 'Book of Mormon',
      url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/1?lang=eng&id=p23',
      pieces: 'Whole armor (compressed)',
      note: 'Lehi\'s dying words: "Awake, my sons; put on the armor of righteousness. Shake off the chains with which ye are bound." The whole armor condensed to one phrase — and its opposite is chains.',
    },
    {
      reference: 'Isaiah 59:17',
      volume: 'Old Testament',
      url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/59?lang=eng&id=p17',
      pieces: 'Breastplate of righteousness, helmet of salvation',
      note: 'God himself puts on the armor when no human intercessor could be found. The same chapter ends with the Redeemer coming to Zion.',
    },
    {
      reference: 'Isaiah 11:5',
      volume: 'Old Testament',
      url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/11?lang=eng&id=p5',
      pieces: 'Belt (righteousness and faithfulness)',
      note: 'The Messiah — the Branch from Jesse — wears righteousness and faithfulness as the girdle of his loins. Cross-referenced in the KJV footnote for Ephesians 6:14.',
    },
  ],

};
