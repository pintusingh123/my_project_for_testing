// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }

// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//     }

//     insertAtEnd(data){
//         let newNode = new Node(data);
//         if(this.head === null){
//             this.head = newNode;
//         } else {
//             let currenFt = this.head;
//             while(current.next !== null){
//                 current = current.next;
//             }
//     }
// }

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {

    constructor() {
        this.head = null;
    }
    append(data) {
        let newNode = new Node(data);
        if (this.head === null) { //jab list empty ho to ele set kiya
            this.head = newNode;
        } else {
            //list empty na ho other ele set krna ho to 
            let current = this.head;
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode;

        }



    }
    printdata(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current=current.next;
        }
        
    }

}
let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.printdata();