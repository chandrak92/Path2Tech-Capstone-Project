import React from 'react';
import '../Style/resource.css';

function TextBubble({ text }) {
  return (
    <div className="text-bubble">
      {text}
    </div>
  );
}

export default TextBubble;