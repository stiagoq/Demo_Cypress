export class RandomData{
    static randomString(){
        let lettersRandom = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const lengthName = 6
        let lengthRandomName = lettersRandom.length
        let randomString= ""
        for(let i = 0 ; i < lengthName; i++){
            randomString += lettersRandom.charAt(Math.floor(Math.random() * lengthRandomName ))
        }
        return randomString
    }

    static randomNumber(){
        var randomNum = Math.floor(Math.random() * 4) + 0
        return randomNum
    }
}