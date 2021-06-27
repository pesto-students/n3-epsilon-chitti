const ckEditorStyles = `
/*
 * CKEditor 5 (v28.0.0) content styles.
 * Generated on Mon, 07 Jun 2021 06:33:15 GMT.
 * For more information, check out https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/content-styles.html
 */


/* ckeditor5-highlight/theme/highlight.css */
.marker-yellow {
    background-color: var(--ck-highlight-marker-yellow);
}
/* ckeditor5-highlight/theme/highlight.css */
.marker-green {
    background-color: var(--ck-highlight-marker-green);
}
/* ckeditor5-highlight/theme/highlight.css */
.marker-pink {
    background-color: var(--ck-highlight-marker-pink);
}
/* ckeditor5-highlight/theme/highlight.css */
.marker-blue {
    background-color: var(--ck-highlight-marker-blue);
}
/* ckeditor5-highlight/theme/highlight.css */
.pen-red {
    color: var(--ck-highlight-pen-red);
    background-color: transparent;
}
/* ckeditor5-highlight/theme/highlight.css */
.pen-green {
    color: var(--ck-highlight-pen-green);
    background-color: transparent;
}
/* ckeditor5-font/theme/fontsize.css */
.text-tiny {
    font-size: .7em;
}
/* ckeditor5-font/theme/fontsize.css */
.text-small {
    font-size: .85em;
}
/* ckeditor5-font/theme/fontsize.css */
.text-big {
    font-size: 1.4em;
}
/* ckeditor5-font/theme/fontsize.css */
.text-huge {
    font-size: 1.8em;
}
/* ckeditor5-image/theme/imagestyle.css */
.image-style-side {
    float: right;
    margin-left: var(--ck-image-style-spacing);
    max-width: 50%;
}
/* ckeditor5-image/theme/imagestyle.css */
.image-style-align-left {
    float: left;
    margin-right: var(--ck-image-style-spacing);
}
/* ckeditor5-image/theme/imagestyle.css */
.image-style-align-center {
    margin-left: auto;
    margin-right: auto;
}
/* ckeditor5-image/theme/imagestyle.css */
.image-style-align-right {
    float: right;
    margin-left: var(--ck-image-style-spacing);
}
/* ckeditor5-image/theme/image.css */
.image {
    display: table;
    clear: both;
    text-align: center;
    margin: 1em auto;
}
/* ckeditor5-image/theme/image.css */
.image img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    min-width: 50px;
}
/* ckeditor5-image/theme/imagecaption.css */
.image > figcaption {
    display: table-caption;
    caption-side: bottom;
    word-break: break-word;
    color: hsl(0, 0%, 20%);
    background-color: hsl(0, 0%, 97%);
    padding: .6em;
    font-size: .75em;
    outline-offset: -1px;
}
/* ckeditor5-image/theme/imageresize.css */
.image.image_resized {
    max-width: 100%;
    display: block;
    box-sizing: border-box;
}
/* ckeditor5-image/theme/imageresize.css */
.image.image_resized img {
    width: 100%;
}
/* ckeditor5-image/theme/imageresize.css */
.image.image_resized > figcaption {
    display: block;
}
/* ckeditor5-language/theme/language.css */
span[lang] {
    font-style: italic;
}
/* ckeditor5-code-block/theme/codeblock.css */
pre {
    padding: 1em;
    color: hsl(0, 0%, 20.8%);
    background: hsla(0, 0%, 78%, 0.3);
    border: 1px solid hsl(0, 0%, 77%);
    border-radius: 2px;
    text-align: left;
    direction: ltr;
    tab-size: 4;
    white-space: pre-wrap;
    font-style: normal;
    min-width: 200px;
}
/* ckeditor5-code-block/theme/codeblock.css */
pre code {
    background: unset;
    padding: 0;
    border-radius: 0;
}
/* ckeditor5-horizontal-line/theme/horizontalline.css */
hr {
    margin: 15px 0;
    height: 4px;
    background: hsl(0, 0%, 87%);
    border: 0;
}
/* ckeditor5-html-embed/theme/htmlembed.css */
.raw-html-embed {
    margin: 1em auto;
    min-width: 15em;
    font-style: normal;
}
/* ckeditor5-block-quote/theme/blockquote.css */
blockquote {
    overflow: hidden;
    padding-right: 1.5em;
    padding-left: 1.5em;
    margin-left: 0;
    margin-right: 0;
    font-style: italic;
    border-left: solid 5px hsl(0, 0%, 80%);
}
/* ckeditor5-block-quote/theme/blockquote.css */
dir="rtl"] blockquote {
    border-left: 0;
    border-right: solid 5px hsl(0, 0%, 80%);
}
/* ckeditor5-basic-styles/theme/code.css */
code {
    background-color: hsla(0, 0%, 78%, 0.3);
    padding: .15em;
    border-radius: 2px;
}
/* ckeditor5-table/theme/table.css */
.table {
    margin: 1em auto;
    display: table;
}
/* ckeditor5-table/theme/table.css */
.table table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    height: 100%;
    border: 1px double hsl(0, 0%, 70%);
}
/* ckeditor5-table/theme/table.css */
.table table td,
.table table th {
    min-width: 2em;
    padding: .4em;
    border: 1px solid hsl(0, 0%, 75%);
}
/* ckeditor5-table/theme/table.css */
.table table th {
    font-weight: bold;
    background: hsla(0, 0%, 0%, 5%);
}
/* ckeditor5-table/theme/table.css */
dir="rtl"] .table th {
    text-align: right;
}
/* ckeditor5-table/theme/table.css */
dir="ltr"] .table th {
    text-align: left;
}
/* ckeditor5-table/theme/tablecaption.css */
.table > figcaption {
    display: table-caption;
    caption-side: top;
    word-break: break-word;
    text-align: center;
    color: var(--ck-color-table-caption-text);
    background-color: var(--ck-color-table-caption-background);
    padding: .6em;
    font-size: .75em;
    outline-offset: -1px;
}
/* ckeditor5-page-break/theme/pagebreak.css */
.page-break {
    position: relative;
    clear: both;
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
/* ckeditor5-page-break/theme/pagebreak.css */
.page-break::after {
    content: '';
    position: absolute;
    border-bottom: 2px dashed hsl(0, 0%, 77%);
    width: 100%;
}
/* ckeditor5-page-break/theme/pagebreak.css */
.page-break__label {
    position: relative;
    z-index: 1;
    padding: .3em .6em;
    display: block;
    text-transform: uppercase;
    border: 1px solid hsl(0, 0%, 77%);
    border-radius: 2px;
    font-family: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;
    font-size: 0.75em;
    font-weight: bold;
    color: hsl(0, 0%, 20%);
    background: hsl(0, 0%, 100%);
    box-shadow: 2px 2px 1px hsla(0, 0%, 0%, 0.15);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
/* ckeditor5-media-embed/theme/mediaembed.css */
.media {
    clear: both;
    margin: 1em 0;
    display: block;
    min-width: 15em;
}
/* ckeditor5-list/theme/todolist.css */
.todo-list {
    list-style: none;
}
/* ckeditor5-list/theme/todolist.css */
.todo-list li {
    margin-bottom: 5px;
}
/* ckeditor5-list/theme/todolist.css */
.todo-list li .todo-list {
    margin-top: 5px;
}
/* ckeditor5-list/theme/todolist.css */
.todo-list .todo-list__label > input {
    -webkit-appearance: none;
    display: inline-block;
    position: relative;
    width: var(--ck-todo-list-checkmark-size);
    height: var(--ck-todo-list-checkmark-size);
    vertical-align: middle;
    border: 0;
    left: -25px;
    margin-right: -15px;
    right: 0;
    margin-left: 0;
}
/* ckeditor5-list/theme/todolist.css */
.todo-list .todo-list__label > input::before {
    display: block;
    position: absolute;
    box-sizing: border-box;
    content: '';
    width: 100%;
    height: 100%;
    border: 1px solid hsl(0, 0%, 20%);
    border-radius: 2px;
    transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;
}
/* ckeditor5-list/theme/todolist.css */
.todo-list .todo-list__label > input::after {
    display: block;
    position: absolute;
    box-sizing: content-box;
    pointer-events: none;
    content: '';
    left: calc( var(--ck-todo-list-checkmark-size) / 3 );
    top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
    width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
    height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
    border-style: solid;
    border-color: transparent;
    border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
    transform: rotate(45deg);
}
/* ckeditor5-list/theme/todolist.css */
.todo-list .todo-list__label > input[checked]::before {
    background: hsl(126, 64%, 41%);
    border-color: hsl(126, 64%, 41%);
}
/* ckeditor5-list/theme/todolist.css */
.todo-list .todo-list__label > input[checked]::after {
    border-color: hsl(0, 0%, 100%);
}
/* ckeditor5-list/theme/todolist.css */
.todo-list .todo-list__label .todo-list__label__description {
    vertical-align: middle;
}
/* ckeditor5-mention/theme/mention.css */
.mention {
    background: var(--ck-color-mention-background);
    color: var(--ck-color-mention-text);
}
@media print {
    /* ckeditor5-page-break/theme/pagebreak.css */
    .page-break {
        padding: 0;
    }
    /* ckeditor5-page-break/theme/pagebreak.css */
    .page-break::after {
        display: none;
    }
}
`;
export default ckEditorStyles;
