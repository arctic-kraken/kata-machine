type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>
}

// try this without watching along // DONE
// watch Prime to check out the solution
export default class DoublyLinkedList<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>; // i forgot to use tail, but overrall i completed the exercise, it passes the test

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        this.length++;
        if (!this.head) {
            this.head = this.tail = {value: item, prev: undefined, next: undefined};
            return;
        }

        const head = {value: item, prev: undefined, next: this.head};
        this.head.prev = head;
        this.head = head;
    }
    insertAt(item: T, idx: number): void {
        if (idx == this.length - 1) {
            this.append(item);
            return;
        } else if (idx == 0) {
            this.prepend(item);
        }

        if (idx < 0 || idx > this.length - 1) {
            throw new Error("Out of bounds");
        }

        const curr = this.getAt(idx);
        if (!curr) {
            return;
        }

        curr.prev = {value: item, prev: curr.prev, next: curr};
        this.length++;
    }
    private getAt(idx: number): Node<T> | undefined {
        if (!this.head || idx > this.length - 1 || idx < 0) {
            return undefined;
        }
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next as Node<T>;
        }
        // we're at the target idx
        return curr;
    }
    append(item: T): void {
        const node: Node<T> = {value: item, prev: undefined, next: undefined};
        this.length++;
        if (!this.head || !this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        }
        let curr: Node<T> | undefined = this.head;
        for (let i = 0; i < this.length - 1; i++) {
            if (curr?.value === item) {
                this.length--;
                if (curr.prev) {
                    curr.prev.next = curr.next;
                } else {
                    this.head = curr.next;
                }
                return curr?.value;
            }
            curr = curr?.next;
        }

        return undefined;
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        const curr = this.getAt(idx);
        if (!curr) {
            return;
        }

        // we're at the target idx
        if (curr.prev) {
            curr.prev.next = curr.next;
        } else {
            this.head = curr.next;
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }
        this.length--;
        return curr?.value;
    }
}