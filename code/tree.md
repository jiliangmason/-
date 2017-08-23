//深度优先遍历
var nodes = [];
function DeepFind(node) {
   if (node != null) {
       nodes.push(node);
       if (node.children) {
            for (var i=0; i<node.children.length; i++) {
                DeepFind(node.children[i])
            }
       }
   }
   return nodes;
}

//广度优先
var result = [];
function dfs(node) {
    var nodes = [];
    if (node != null) {
       nodes.push(node);
       while(nodes.length) {
            var p = nodes.shift();
            result.push(p)
            if (p.children) {
               for (var i=0; i<node.children.length; i++) {
               nodes.push(node.children[i])
            }
          }
       }
       
    }
    
}