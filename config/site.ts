export const siteConfig = {
  title: "Стена позора Luminor",
  logo: "/logo.webp",
  favicon: "/logo.webp",
  languages: {
    available: [
      "ru",
      "en",
    ],
    default: "ru",
  },
  console: {
    name: "Console", // Just for filter badge
    uuid: "[Console]", // Use for filter url and to check if a punishment is made from the Console. In some versions of Litebans, the console uuid is "CONSOLE".
    icon: "/console.webp",
    body: "/console-body.webp",
    bust: "/console-bust.webp",
  },
  defaultPlayerLookup: "lakiviko",
  // When enabled, body and bust images will show a steve skin
  bedrock: {
    enabled: false,
    prefix: "BP_",
  },
  openGraph: {
    dateFormat: "yyyy-MM-dd hh:mm:ss",
    pages: {
      main: {
        // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
Стена позора Luminor

Всего вынесено наказаний: {total}

🚫 Баны: {bans}
🔇 Муты: {mutes}
⚠️ Варны: {warns}
❌ Кики: {kicks}
`
      },
      history: {
        // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
Всего вынесено наказаний: {total}

🚫 Баны: {bans}
🔇 Муты: {mutes}
⚠️ Варны: {warns}
❌ Кики: {kicks}
        `
      },
      player: {
        // Placeholders: {name}, {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
Наказания {name}.

Всего вынесено наказаний: {total}

🚫 Баны: {bans}
🔇 Муты: {mutes}
⚠️ Варны: {warns}
❌ Кики: {kicks}
        `,
        bans: {
          description: `
Баны {name}.

Всего банов: {total}
          `,
        },
        mutes: {
          description: `
Муты {name}.

Всего мутов: {total}
          `,
        },
        warns: {
          description: `
Варны {name}.

Всего варнов: {total}
          `,
        },
        kicks: {
          description: `
Кики {name}.

Всего киков: {total}
          `,
        },
      },
      bans: {
        // Placeholders: {total}
        description: "Всего банов: {total}"
      },
      mutes: {
        // Placeholders: {total}
        description: "Всего мутов: {total}"
      },
      warns: {
        // Placeholders: {total}
        description: "Всего варнов: {total}"
      },
      kicks: {
        // Placeholders: {total}
        description: "Всего киков: {total}"
      },
    },
    punishments: {
      ban: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {duration}, {server}
        description: `
👤 Игрок: {name}
👮 Staff: {staff}

📜 Причина: {reason}
🕒 Дата: {time}
⌛ Длительность: {duration}
        `
      },
      mute: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {duration}, {server}
        description: `
👤 Игрок: {name}
👮 Staff: {staff}

📜 Причина: {reason}
🕒 Дата: {time}
⌛ Длительность: {duration}
        `
      },
      warn: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {server}
        description: `
👤 Игрок: {name}
👮 Staff: {staff}

📜 Причина: {reason}
🕒 Дата: {time}
        `
      },
      kick: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {server}
        description: `
👤 Игрок: {name}
👮 Staff: {staff}

📜 Причина: {reason}
🕒 Дата: {time}
        `
      }
    }
  }
}
export type SiteConfig = typeof siteConfig;