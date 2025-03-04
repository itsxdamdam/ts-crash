"use strict";
class Tree {
    // branch: string;
    constructor(leaf) {
        this.leaf = leaf;
        this.leaf = leaf;
    }
    // access modifiers
    // public: gives access outside of class
    // private: it is not available outside the class
    // protected: it is only available when you use another child of the existing class to extend 
    // methods
    moveLeaf() {
        this.leaf = "neu neu leaf";
        console.log(`The ${this.leaf} is moving to the right`);
    }
}
let tree1 = new Tree("Green leaf");
tree1.moveLeaf();
