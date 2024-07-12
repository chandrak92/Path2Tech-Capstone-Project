import React from "react";
import DocumentMeta from "react-document-meta";

class Meta extends React.Component {
    render() {
      const meta = {
        title: 'Coding Guppies Capstone',
        description: 'I am a webpage dedicated to changing the world, climate change, food waste, clothing waste, action items, natural disasters, heatwave, flooding',
        canonical: 'http://example.com/path/to/page',
        meta: {
          charset: 'utf-8',
          name: {
            viewport: `content="width=device-width, initial-scale=1.0`,
            keywords: `react,meta,document,html,tags`
          }
        }
      };
   
      return (
        <DocumentMeta {...meta}>
          <h1>Hello World!</h1>
        </DocumentMeta>
      );
    }
  }

React.render(<Meta />, document.getElementById('root'));