import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Code from './Code';
import htmlParser from 'react-markdown/plugins/html-parser';
import './styles/default.module.less';
import './styles/index.module.less';

interface MarkdownProps { }
interface MarkdownState {
  mdStr: string;
}

export default class Markdown extends Component<MarkdownProps, MarkdownState> {
  constructor(props:MarkdownProps) {
    super(props);
    this.state = {
      mdStr: '',
    };
  }
  getMdStr?: any;
  dependencies?: any;
  componentDidMount() {
    if(this.getMdStr) {
      this.getMdStr().then((str: any ) => {
        this.setState({
          mdStr: str.default || str,
        });
      });
    }
  }
  render() {
    return (
      <ReactMarkdown
        source={this.state.mdStr}
        className="markdown"
        escapeHtml={false}
        allowNode={(node: ReactMarkdown.MarkdownAbstractSyntaxTree, index: number, parent: ReactMarkdown.NodeType) => {
          if(node.type === 'code') {
            node.value = `{{/****/}}${node.value}`;
            node.position = { ...node.position, wwww: 222 } as any;
            node.data = { xxx:1 }
            node.title = '{ xxx:1 }';
            // node.children = [{ data: { yyy: 1}}] as any;
            // node = node;
            console.log('~~~:1', index, node);
            console.log('~~~:2', parent);
          }
          return true;
        }}
        renderers={{
          code: (props, ddd) => {
            console.log('props:', props, ddd);
            return <Code {...props} dependencies={this.dependencies} />
          },
        }}
      />
    );
  }
}