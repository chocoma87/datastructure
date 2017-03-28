// singly linked list with tail

function Node (key){
    this.key = key;
    this.next = null;
}

function SinglyLinkedList (){
    this.head = null;
    this.tail = null;
}

SinglyLinkedList.prototype.pushFront = function (key){
    var newNode = new Node(key);

    newNode.next = this.head;
    this.head = newNode;
    if (this.tail === null){
        this.tail = this.head;
    }
};

SinglyLinkedList.prototype.topFront = function (){
    return this.head;
}

SinglyLinkedList.prototype.popFront = function (){
    if (this.head === null){
        return "empty list";
    }

    var oldHead = this.head;
    this.head = this.head.next;

    if (this.head === null){ // 엘리먼트가 하나밖에 없어서, pop하고 나면 빈 리스트가 되는 경우.
        this.tail = null;
    }

    return oldHead;
}

SinglyLinkedList.prototype.pushBack = function (key){
    var newNode = new Node(key);

    if (this.head === null){ // 빈 리스트에 push해 주는 경우.
        this.head = this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

SinglyLinkedList.prototype.topBack = function (){
    return this.tail;
}

SinglyLinkedList.prototype.popBack = function (){
    if (this.head === null){
        return "empty list";
    }

    var oldTail = this.tail;

    if (this.head === this.tail){
        this.tail = this.head = null;
    } else {
        var target = this.head;
        while (target.next.next !== null){
            target = target.next;
        }
        this.tail = target;
        this.tail.next = null; // target이 .next에 다음 노드를 저장하고 있기 때문에 null 대입해준다.
    }

    return oldTail;
}

SinglyLinkedList.prototype.find = function (key){
    var current = this.head;

    while (current !== null){
        if (current.key === key){
            return true;
        }
        current = current.next;
    }

    return false;
}

SinglyLinkedList.prototype.erase = function (key){
    var current = this.head;
    var prev = this.head;

    if (this.head === null){
        return "list is empty";
    }

    while (current){
        if (current === this.head && current.key === key){
            if (this.head === this.tail){ // 리스트에 엘리먼트가 하나만 있는 경우.
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
            }
            return;
        } else if (current == this.tail && current.key === key) {
            prev.next = null;
            this.tail = prev;
        } else if (current.key === key) {
            prev.next = current.next;
        }
        prev = current;
        current = current.next;
    }
}

SinglyLinkedList.prototype.empty = function (){
    var result = this.head ? false : true;
    return result;
}

SinglyLinkedList.prototype.addBefore = function (node, key){
    var newNode = new Node(key);
    var current = this.head;
    var prev = this.head;

    newNode.next = node;

    while (current){
        if (current === node){
            if (this.head === node){
                this.head = newNode;
                return;
            } else {
                prev.next = newNode;
            }
        }
        prev = current;
        current = current.next;
    }
}

SinglyLinkedList.prototype.addAfter = function (node, key){ // node에 next속성이 있기 때문에 loop돌지 않아도 된다.
    var newNode = new Node(key);

    newNode.next = node.next
    node.next = newNode;

    if (node === this.tail){
        this.tail = newNode;
    }
}
