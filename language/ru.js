const language = {
  info: {
    country_code: "RU",
    lang_name: "Русский"
  },
  site: {
    description: "Простой и легкий веб-интерфейс Litebans."
  },
  words: {
    bans: {
      singular: "Ban",
      plural: "Bans"
    },
    mutes: {
      singular: "Mute",
      plural: "Mutes"
    },
    kicks: {
      singular: "Kick",
      plural: "Kicks"
    },
    warns: {
      singular: "Warn",
      plural: "Warns"
    },
    yes: "Да",
    no: "Нет",
    player: "Игрок",
    staff: "Staff",
    reason: "Причина",
    date: "Дата",
    expires: "Истекает",
    originServer: "Сервер",
    notified: "Уведомлен",
  },
  pages: {
    home: {
      title: "Главная",
      // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
      subtitle: "Правосудие настигнет каждого!"
    },
    history: {
      title: "Инстория",
      // Placeholders: {total}
      subtitle: "Всего наказаний: {total}",
      table: {
        heads: {
          type: "Тип",
          player: "Игрок",
          by: "Наказал",
          reason: "Причина",
          date: "Дата",
          expires: "Истекает"
        },
        permanent: "Пожизненное наказание",
        expire_not_applicable: "N/A",
        active: {
          true: "Активно",
          temporal: "Временно",
          false: "Истекло"
        }
      }
    },
    bans: {
      title: "Ban'ы",
      // Placeholders: {total}
      subtitle: "Всего Ban'ов: {total}",
      table: {
        heads: {
          player: "Игрок",
          by: "Забанил",
          reason: "Причина",
          date: "Дата",
          expires: "Истекает"
        },
        permanent: "Пожизненный бан",
        active: {
          true: "Активен",
          temporal: "Временно",
          false: "Истек"
        }
      },
      info: {
        title: "Ban #{id}",
        badges: {
          ipban: "IP Ban",
          active: "Активен",
          expired: "Истек",
          permanent: "Пожизненный",
        }
      }
    },
    mutes: {
      title: "Mute'ы",
      // Placeholders: {total}
      subtitle: "Всего Mute'ов: {total}",
      table: {
        heads: {
          player: "Игрок",
          by: "Заглушил",
          reason: "Причина",
          date: "Дата",
          expires: "Истекает"
        },
        permanent: "Пожизненный мут",
        active: {
          true: "Активен",
          temporal: "Временно",
          false: "Истек"
        }
      },
      info: {
        title: "Mute #{id}",
        badges: {
          ipmute: "IP Mute",
          active: "Активен",
          expired: "Истек",
          permanent: "Пожизненный",
        }
      }
    },
    warns: {
      title: "Warn'ы",
      // Placeholders: {total}
      subtitle: "Всего Warn'ов: {total}",
      table: {
        heads: {
          player: "Игрок",
          by: "Предупредил",
          reason: "Причина",
          date: "Дата",
          notified: "Уведомлен"
        },
      },
      info: {
        title: "Warn #{id}"
      }
    },
    kicks: {
      title: "Kick'и",
      // Placeholders: {total}
      subtitle: "Всего Kick'ов: {total}",
      table: {
        heads: {
          player: "Игрок",
          by: "Выгнал",
          reason: "Причина",
          date: "Дата",
        }
      },
      info: {
        title: "Kick #{id}"
      }
    },
    playerHistory: {
      // Placeholders: {player}
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "Выглядит так, как будто вы заблудились... Вернитесь на главную страницу.",
        button: "Вернуться на главную страницу"
      }
    }
  },
  pagination: {
    previous: "Предыдущая",
    next: "Следующая"
  },
  notifications: {
    playerNotFound: {
      title: "Ошибка",
      description: "Игрок не найден в базе данных.",
    }
  }
}

module.exports = language;
