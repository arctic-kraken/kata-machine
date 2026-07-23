function walk(curr: BinaryNode<number>, path: number[]): number[] {
    if (curr.left) {
        walk(curr.left, path);
    }
    
    path.push(curr.value);
    
    if (curr.right) {
        walk(curr.right, path);
    }

    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    var path: number[] = [];
    path = walk(head, path);    

    return path;
}
