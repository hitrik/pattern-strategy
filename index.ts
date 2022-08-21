// Паттерн Стратегия
// определяет семейство алгоритмов, инкапсулирует их и обеспечивает их взаимозаменяемость

// интерфейс поведения описывает движение персонажа
interface IMovableBehavior {
  move: (name: string) => void;
  jump?: (name: string) => void;
}

// Классы поведения реализуют основной интерфейс поведения
// каждый класс для своего вида перемещения
class Movable implements IMovableBehavior {
  move(name: string) {
    console.log(name + ' can walk');
  }

  jump() {
    console.log(name + ' can jump');
  }
}

class Flyable implements IMovableBehavior {
  move(name) {
    console.log(name + ' can fly');
  }
}

class Swimmable implements IMovableBehavior {
  move(name) {
    console.log(name + ' can swim');
  }
}

//абстрактный класс от которого наследуются основные сущности
abstract class Person {
  movable: IMovableBehavior;
  name: string;

  setBehavior(m: IMovableBehavior) {
    this.movable = m;
  }
}

class Man extends Person {
  constructor(name: string) {
    super();
    this.name = name;
  }
  movable = new Movable();
}

class Humanoid extends Person {
  constructor(name: string) {
    super();
    this.name = name;
  }
  movable = new Flyable();
}

function init() {
  const alien = new Humanoid('Чужой');
  const man = new Man('Валера');

  man.movable.move(man.name);
  alien.movable.move(alien.name);

  setTimeout(() => {
    // когда начался потоп заставляем наши экземпляры плавать
    console.log('The Great flood 2.0 had began');
    const swimAbility = new Swimmable();
    man.setBehavior(swimAbility);
    alien.setBehavior(swimAbility);

    man.movable.move(man.name);
    alien.movable.move(alien.name);
  }, 3000);
}

init();
