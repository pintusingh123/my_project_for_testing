class Stack{
 #items = []
    constructor(){ }
    push(element){
        this.#items.push(element)
    }
    pop() {
        if(this.isEmpty()){
            throw new Error("no items to pop")
        }
        return this.#items.pop()

    }
    peek(){
        if(this.isEmpty()){
            return null;
        }

        return this.#items[this.#items.length - 1];
    }
    print(){
        for(let i = this.#items.length - 1 ; i>=0; i--){
            console.log(this.#items[i])
        }
    }
    isEmpty(){
        return this.#items.length === 0
    }

    size(){
        return this.#items.length;
    }

}

 export default Stack