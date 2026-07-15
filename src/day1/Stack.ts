type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Stack<T> {
    public length: number;

    public head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        const node = {value: item} as Node<T>;
        if (!this.head) {
            this.head = node;
            return;
        }

        // Prime did it this way
        // node.next = this.head;
        // this.head = node;

        // Meown solution
        const head = this.head;
        this.head = node;
        this.head.next = head;
    }

    pop(): T | undefined {
        // Prime did it this way
        // this.length = Math.max(0, this.length - 1); // ensures length is never below 0

        // I did this
        if (this.head) {
            this.length--;
        }
        const head = this.head;
        this.head = head?.next;

        return head?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}