class Character {
    constructor(name,level,hp,atkpower){
        this.name = name,
        this.level = level,
        this.hp = hp,
        this.atkpower = atkpower
    }
    attack(){
        console.log(`${this.name}가 공격을 시도합니다!`)
    }
    heal(up){
        console.log(`${this.name}의 체력이 ${up}만큼 회복되었습니다.`)
    }
    levelUp(){
        this.level +=1
        this.hp +=Math.floor(Math.random()*10)+1
        this.atkpower +=Math.floor(Math.random()*10)+1
    }
}

const firstCharacter = new Character("전사",10,300,10)
const secondCharacter = new Character("궁수",10,200,30)
const thirdCharacter = new Character("마법사",8,150,30)

console.log(firstCharacter)
console.log(secondCharacter)
console.log(thirdCharacter)

firstCharacter.attack()
firstCharacter.heal(5)
secondCharacter.attack()
secondCharacter.heal(5)
thirdCharacter.attack()
thirdCharacter.heal(5)
firstCharacter.levelUp()
console.log(firstCharacter)
