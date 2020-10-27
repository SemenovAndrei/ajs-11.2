/**
 * Класс хранит данные о персонажах команды в поле типа Set
 */
class Team {
  /**
   * Создает поле типа Set
   */
  constructor() {
    this.members = new Set();
  }

  /**
   * Добавляет персонажа в команду
   *
   * @param {object} character - объект персонажа
   *
   * @throws {error} выбрасывает ошибку - 'Персонаж уже добавлен'
   */
  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже добавлен');
    }
    this.members.add(character);
  }

  /**
   * Добавляет всех переданных персонажей в команду
   *
   * @param {object} characters - персонажи
   */
  addAll(characters) {
    this.members = new Set([...this.members, ...characters]);
  }

  /**
   * Создает массив из поля типа Set
   */
  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    const team = this.toArray();
    let current = 0;

    return { // метод должен вернуть объект с методом next()
      next() {
        if (current < team.length) {
          const value = team[current];
          current += 1;
          return {
            done: false,
            value,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}

export default Team;
