class Stack {
    #items = [];
    push(ele) {
        this.#items.push(ele);
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty")
        }
        return this.#items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.#items[this.#items.length - 1];
    }
    print() {
        if (this.isEmpty() || this.#items.length === "") {
            throw new Error("pls push atleast one ele because stack is empty")
        }
        for (let i = this.#items.length - 1; i >= 0; i--) {
            console.log(this.#items[i])
        }
    }
    isEmpty() {
        return this.#items.length === 0;
    }
    size() {
        return this.#items.length;
    }

}




export default Stack;