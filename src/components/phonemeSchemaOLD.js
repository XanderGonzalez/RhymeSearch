export const PHONEME_SCHEMA = [
    {
      id: "phonemes",
      label: "phonemes",
      children: [
        {
          id: "vowels",
          label: "vowels",
          children: [
            {
              id: "unrounded",
              label: "unrounded",
              children: [
                {
                  id: "front",
                  label: "front",
                  children: [
                    { id: "i", label: "i" },
                    { id: "e", label: "e" },
                    { id: "ɛ", label: "ɛ" },
                    { id: "æ", label: "æ" },
                    { id: "a", label: "a" },
                  ],
                },
                {
                  id: "near-front",
                  label: "near-front",
                  children: [{ id: "ɪ", label: "ɪ" }],
                },
                {
                  id: "central",
                  label: "central",
                  children: [
                    { id: "ɨ", label: "ɨ" },
                    { id: "ɘ", label: "ɘ" },
                    { id: "ə", label: "ə" },
                    { id: "ɜ", label: "ɜ" },
                    { id: "ɐ", label: "ɐ" },
                    { id: "ä", label: "ä" },
                  ],
                },
                {
                  id: "back",
                  label: "back",
                  children: [
                    { id: "ɯ", label: "ɯ" },
                    { id: "ɤ", label: "ɤ" },
                    { id: "ʌ", label: "ʌ" },
                    { id: "ɑ", label: "ɑ" },
                  ],
                },
              ],
            },
            {
              id: "rounded",
              label: "rounded",
              children: [
                {
                  id: "front2",
                  label: "front",
                  children: [
                    { id: "y", label: "y" },
                    { id: "ø", label: "ø" },
                    { id: "œ", label: "œ" },
                    { id: "ɶ", label: "ɶ" },
                  ],
                },
                {
                  id: "near-front2",
                  label: "near-front",
                  children: [{ id: "ʏ", label: "ʏ" }],
                },
                {
                  id: "central2",
                  label: "central",
                  children: [
                    { id: "ʉ", label: "ʉ" },
                    { id: "ɵ", label: "ɵ" },
                    { id: "ə2", label: "ə" },
                    { id: "ɞ", label: "ɞ" },
                    { id: "ɐ2", label: "ɐ" },
                  ],
                },
                {
                  id: "near-back2",
                  label: "near-back",
                  children: [{ id: "ʊ", label: "ʊ" }],
                },
                {
                  id: "back2",
                  label: "back",
                  children: [
                    { id: "u", label: "u" },
                    { id: "o", label: "o" },
                    { id: "ɔ", label: "ɔ" },
                    { id: "ɒ", label: "ɒ" },
                  ],
                },
              ],
            },
          ],
        },
        { id: "consonants", label: "consonants" },
        { id: "other", label: "other" },
      ],
    },
  ];