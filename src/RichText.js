// import React, { Component } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';

// class RichText extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.modules = {
// 			toolbar: [
// 		      [{ 'font': [] }],
// 		      [{ 'size': ['small', false, 'large', 'huge'] }],
// 		      ['bold', 'italic', 'underline'],
// 		      [{'list': 'ordered'}, {'list': 'bullet'}],
// 		      [{ 'align': [] }],
// 		      [{ 'color': [] }, { 'background': [] }],
// 		      ['clean']
// 		    ]
// 		};

// 		this.formats = [
// 		    'font',
// 		    'size',
// 		    'bold', 'italic', 'underline',
// 		    'list', 'bullet',
// 		    'align',
// 		    'color', 'background'
// 	  	];

// 	  	this.state = {
// 			comments: ''
// 		}

// 		this.rteChange = this.rteChange.bind(this);
// 	}

// 	rteChange = (content, delta, source, editor) => {
// 		console.log(editor.getHTML()); // rich text
// 		console.log(editor.getText()); // plain text
// 		console.log(editor.getLength()); // number of characters
// 	}

// 	render() {
// 	    return (
// 	      <div>
// 	        <ReactQuill theme="snow"  modules={this.modules}
// 				formats={this.formats} onChange={this.rteChange}
// 			value={this.state.comments || ''}/>
// 	      </div>
// 	    );
// 	}

// }

// export default RichText;




/////////////////////////////////////////////////////

// import React from 'react';
// import { Editor } from '@tinymce/tinymce-react';

// class RichText extends React.Component {
//     handleEditorChange = (e) => {
//         console.log(
//             'Content was updated:',
//             e.target.getContent()
//         );
//     }

//     render() {
//         return (
//             <Editor
//                 initialValue="Type here...."
//                 init={{
//                     height: 500,
//                     menubar: false,
//                     plugins: [
//                         'advlist autolink lists link image',
//                         'charmap print preview anchor help',
//                         'searchreplace visualblocks code',
//                         'insertdatetime media table paste wordcount'
//                     ],
//                     toolbar:
//                         'undo redo | formatselect | bold italic | \
//             alignleft aligncenter alignright | \
//             bullist numlist outdent indent | help'
//                 }}
//                 onChange={this.handleEditorChange}
//             />
//         );
//     }
// }

// export default RichText;






/////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <div>
      <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
    </div>
  );
}