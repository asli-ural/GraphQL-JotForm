import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-graphqlschema";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

import QueryResult from "./QueryResult";
import EditorAceQuery from "../containers/EditorAceQueryContainer";
import Navbar from "./Navbar";

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Navbar />
                <EditorAceQuery />
                <QueryResult />
            </>
        );
    }
}

export default Editor;