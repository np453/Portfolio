import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw, convertFromRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import draftToHtml from "draftjs-to-html";
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import Navbar from './navbar';
import Footer from './footer';
import Button from '@material-ui/core/Button';
import { base } from '../base';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment-js';



const Blogeditor = props =>{
    const [savedcontent,setsavedcontent] = useState("");
    const [editorstate,seteditorstate] = useState(EditorState.createEmpty(),)
    const [convertedcontent, setconvertedcontent] = useState(null);
    const [username,setusername] = useState("");
    const [title,settitle] = useState("");
    const [email,setemail] = useState("");
    
    const convertcontentToHTML = () =>{
        let convertedcontentasHTML = convertToHTML(editorstate.getCurrentContent());
        setconvertedcontent(convertedcontentasHTML);

    }
    const handleEditorChange = state =>{
        seteditorstate(state);
        convertcontentToHTML();
        console.log(draftToHtml(convertToRaw(editorstate.getCurrentContent())));
    }
    const saveEditorContent = async (e) =>{
        e.preventDefault();
        const payload = {
            name:username,
            email:email,
            title:title,
            date:moment().format("DD/MM/YYYY"),
            content: draftToHtml(convertToRaw(editorstate.getCurrentContent()))
        }
        const blogdata = await axios.post(base + '/api/blog/',payload);
        if(blogdata.data=="blog saved"){
            toast.success("Blog Posted!!!!");

        }             
    }
    return(
        <div className="editorpage_wrapper">
            <Navbar /><ToastContainer />
            <h1 className="editorpage_title">Write Your Own Blog</h1>
            <form className="form_container" onSubmit={saveEditorContent}>
                <div className="input_wrapper">
                    <label className="editorpage_lable" for="name">Name</label>
                    <input className="blog_input" type="text" name="name" id="name" placeholder="Name" value={username} onChange={(e)=>setusername(e.target.value)} required />
                </div>
                <div className="input_wrapper">
                    <label className="editorpage_lable" for="email">Email</label>
                    <input className="blog_input" type="text" name="email" id="email" placeholder="Email" value={email} onChange={(e)=> setemail(e.target.value)} required />
                </div>
                <div className="input_wrapper">
                    <label className="editorpage_lable" for="title">Title for your blog</label>
                    <input className="blog_input" type="text" name="title" id="title" placeholder="Title" value={title} onChange={(e)=> settitle(e.target.value)} required />
                </div>
                <div className="editor_wrapper">
                <label className="editorpage_lable" for="editor">Write your Content</label>
                <Editor
                    editorstate={editorstate}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    placeholder="Enter Your Text"
                    editorStyle = {{ height :"90vh" }}
                    mention={{
                    separator: ' ',
                    trigger: '@',
                    suggestions: [
                        { text: 'APPLE', value: 'apple', url: 'apple' },
                        { text: 'BANANA', value: 'banana', url: 'banana' },
                        { text: 'CHERRY', value: 'cherry', url: 'cherry' },
                        { text: 'DURIAN', value: 'durian', url: 'durian' },
                        { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
                        { text: 'FIG', value: 'fig', url: 'fig' },
                        { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
                        { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
                    ],
                    }}
                    hashtag={{}}
                    />
                    {/* <div className="preview" dangerouslySetInnerHTML={{__html: `${draftToHtml(convertToRaw(editorstate.getCurrentContent()))}`}}></div> */}

                    
                </div>
                <Button type="submit" variant="contained" className="blog-editor-content-save-button">Save</Button>
            </form>
        <Footer />
        </div>
    )

}
export default Blogeditor;