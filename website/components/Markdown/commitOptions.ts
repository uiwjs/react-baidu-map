




export default () => {
  const visit = require('unist-util-visit');
  // console.log('tree:', visit);

  function transformer(tree: any) {
    visit(tree, 'inlineCode', (node: any, index: any, parent: any) => {
      console.log('node:', node);
      // if (parent.type !== 'link' && /dvc [a-z-.]+/.test(node.value)) {
      //   // parent.children[index] = {
      //   //   type: 'link',
      //   //   url: 'https://dvc.org/doc/commands-reference/' + node.value.split(' ')[1],
      //   //   children: [node],
      //   //   position: node.position
      //   // };
      // }
    });
    // visit(tree, 'inlineCode', function(node, index, parent) {
    //   if (parent.type !== 'link' && /dvc [a-z-.]+/.test(node.value)) {
    //     parent.children[index] = {
    //       type: 'link',
    //       url: 'https://dvc.org/doc/commands-reference/' + node.value.split(' ')[1],
    //       children: [node],
    //       position: node.position
    //     };
    //   }
    // })
    return tree
  }

  return transformer
}