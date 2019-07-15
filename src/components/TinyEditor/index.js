import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import './style.css'

class TinyEditor extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content: ''
        }
    }

    handleEditorChange = (e) => {
        this.setState({ content: e.target.getContent() })
    }

    render() {
        const { content } = this.state
        return (
            <div className="editorBox">
                <Editor apiKey='NULL'
                        initialValue={content}
                        init={{
                            plugins: 'paste print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
                            toolbar: 'undo redo | formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat'
                        }}
                        onChange={this.handleEditorChange}
                    />
            </div>
        )
    }
}

export default TinyEditor

