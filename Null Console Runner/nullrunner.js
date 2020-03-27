'use strict';
// // Задание 1
//
// let number = +prompt('Введите число от 0 до 999');
// function convertToObject(number) {
//     let convertibleNumber = {};
//     if (number <= 9) {
//         convertibleNumber['Единицы'] = number;
//     } else if (number <= 999) {
//         convertibleNumber['Единицы'] = Math.floor(number % 10);
//         convertibleNumber['Десятки'] = Math.floor(number / 10 % 10);
//         convertibleNumber['Сотни'] = Math.floor(number / 100 % 10);
//     } else {
//         console.log('Вы ввели число за диапазоном 0 - 999');
//     }
//     return convertibleNumber;
// }
// console.log(convertToObject(number));

//Задание 2
let step = 0;
const settings = {
    rowCount: 10,
    colCount: 10,
    startPositionX: 0,
    startPositionY: 0,
};
const player = {
    x: null,
    y: null,
    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },
    move(direction) {
        switch (direction) {
            case 2:
                this.y++;
                break;
            case 4:
                this.x--;
                break;
            case 6:
                this.x++;
                break;
            case 8:
                this.y--;
                break;
        }
    }
};
const game = {
    settings,
    player,
    run: function () {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);
        while (true) {
            this.render();
            const direction = this.getDirection();
            if (direction === -1) {
                return alert('До свидания!');
            }
            this.player.move(direction);
            if (this.player.x === this.settings.colCount){
               alert('Сюда нельзя, попробуйте другое направление');
               this.player.x--;
            }else if(this.player.x === -1){
                alert('Сюда нельзя, попробуйте другое направление');
                this.player.x++;
            }
            if (this.player.y === this.settings.rowCount){
                alert('Сюда нельзя, попробуйте другое направление');
                this.player.y--;
            }else if(this.player.y === -1){
                alert('Сюда нельзя, попробуйте другое направление');
                this.player.y++;
            }
            this.log.push([`На ${step} ходу вы сделали шаг на ${direction}`]);
            step++;
        }
    },
    render() {
        let map = '';

        for (let row = 0; row < this.settings.rowCount; row++) {
            for (let col = 0; col < this.settings.colCount; col++) {
                if (this.player.y === row && this.player.x === col) {
                    map += 'o '
                }else {
                    map += 'x '
                }
            }
            map += '\n';
        }
        console.clear();
        console.log(map);
    },
    getDirection() {
        const availableDirections = [-1, 2, 4, 6, 8];
        while(true) {
            const direction = parseInt(prompt('Введите число, куда хотите переместиться. -1 для выхода.'));
            if (!availableDirections.includes(direction)) {
                alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
                continue;
            }
            return direction;
        }
    },
    log: []
};

game.run();