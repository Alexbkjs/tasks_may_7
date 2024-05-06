
const div = document.createElement('div')
const p = document.createElement('p')
const span = document.createElement('span')
p.appendChild(span)
div.appendChild(p)

function nodeChildCount(parentNode, depth = Infinity) {
    if (parentNode.nodeType !== Node.ELEMENT_NODE) return 0;
    let nodeCount = 0;

    function recursiveIterate(node, currentDepth = 0) {
        if (currentDepth >= depth) return;
        // Iterate over child nodes
        for (let i = 0; i < node.childNodes.length; i++) {
            const childNode = node.childNodes[i];
            if (childNode.nodeType === Node.ELEMENT_NODE) {
                // Recursively call the function for element nodes
                nodeCount++;
                recursiveIterate(childNode, currentDepth + 1);
            }
        }
    }

    recursiveIterate(parentNode);

    return nodeCount;
}

function testNodeChildCount() {
    console.log(`Input: (div), expected: 2, actual: ${nodeChildCount(div)}`)
    console.log(`Input: (div, 1), expected: 1, actual: ${nodeChildCount(div, 1)}`)
    console.log(`Input: (div, 2), expected: 2, actual: ${nodeChildCount(div, 2)}`)
}

testNodeChildCount()

