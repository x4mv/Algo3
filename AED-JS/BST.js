
// definimos las estructura del nodo
function Node(value){
    this.right = null;
    this.left = null;
    this.value = value;
}

// creando los nodos
const root = new Node(6);
const node1 = new Node(4);
const node2 = new Node(1);
const node3 = new Node(5);
const node4 = new Node(8);
const node5 = new Node(9);

// asignando el orden 
root.left =  node1;
root.right = node4;

node1.left = node2;

node2.right = node3;

node4.right = node5;


function inorden(node){
    if (node === null) return null;

    inorden(node.left)
    console.log(node.value)
    inorden(node.right)
 }
console.log("recorrido inorden \n")
inorden(root)

function preorder(node){
    if (node === null ) return ;

    console.log(node.value)
    preorder(node.left);
    preorder(node.right);
}


console.log("recorrido preorder \n")
preorder(root);


function postorden(node){
    if (node === null ) return null;

    postorden(node.left);
    postorden(node.right);
    console.log(node.value);

}

console.log("postorden \n")
postorden(root);
