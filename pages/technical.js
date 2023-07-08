import Head from "next/head";

export default function Technical(){
    return(
        <>
        <Head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Css Document</title>
</Head>
<main id="technical">
    <nav id="navbar">
        <header>CSS Documentation</header>
        <ul>
            <li><a className="nav-link" href="#Introduction">Introduction</a></li>
            <li><a className="nav-link" href="#Syntax">Syntax</a></li>
            <li><a className="nav-link" href="#Selectors">Selectors</a></li>
            <li><a className="nav-link" href="#Comments">Comments</a></li>
            <li><a className="nav-link" href="#Borders">Borders</a></li>
            <li><a className="nav-link" href="#Margins">Margins</a></li>
            <li><a className="nav-link" href="#Padding">Padding</a></li>
            <li><a className="nav-link" href="#Links">Links</a></li>
            <li><a className="nav-link" href="#Lists">Lists</a></li>
            <li><a  className="nav-link" href="#Math_Functions">Math Functions</a></li>
            <li><a id="a_last" className="nav-link" href="#Reference">Reference</a></li>
        </ul>
    </nav>
    <main id="main-doc">
        <section id="Introduction" className="main-section">
            <header>Introduction</header>
            <h4>What is CSS?
            </h4>
            <p>CSS is the language we use to style a Web page.</p>
            <ul>
                <li>CSS stands for Cascading Style Sheets
                </li>
                <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media
                </li>
                <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once
                </li>
                <li>External stylesheets are stored in CSS files
                </li>
            </ul>
        </section>

        <section id="Syntax" className="main-section">
            <header>Syntax</header>
            <p>The selector points to the HTML element you want to style.</p>
            <p>The declaration block contains one or more declarations separated by semicolons.</p>
            <p>Each declaration includes a CSS property name and a value, separated by a colon.</p>
            <p>Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</p>
            <figure>
                <img src="https://www.w3schools.com/css/img_selector.gif" alt="Css Syntax" />
                <figcaption>Css Syntax</figcaption>
            </figure>

        </section>

        <section id="Selectors" className="main-section">
            <header>Selectors</header>
            <p>CSS selectors are used to <code> &quot;find&quot; (or select) the  </code>HTML elements you want to style.

                We can divide CSS selectors into five categories:</p>
            <ul>
                <li>Simple selectors (select elements based on name, id, class)</li>
                <li>Combinator selectors (select elements based on a specific relationship between them)</li>
                <li>Pseudo-class selectors (select elements based on a certain state)</li>
                <li>Pseudo-elements selectors (select and style a part of an element)</li>
                <li>Attribute selectors (select elements based on an attribute or attribute value)</li>
            </ul>
        </section>

        <section id="Comments" className="main-section">
            <header>Comments</header>
            <p>Comments are used to explain the code, and may help when you edit the source code at a later date.</p>
            <p>Comments are ignored by browsers.            </p>
            <p>A CSS comment is placed inside the</p>
        </section>

        <section id="Borders" className="main-section">
            <header>Borders</header>
            <p>The CSS border properties allow you to specify the style, width, and color of an element&apos;s border.</p>
            <p>The border-style property specifies what kind of border to display.</p>
            <ul>
                <li><code className="w3-codespan">dotted</code> - Defines a dotted border</li>
                <li><code className="w3-codespan">dashed</code> - Defines a dashed border</li>
                <li><code className="w3-codespan">solid</code> - Defines a solid border</li>
                <li><code className="w3-codespan">double</code> - Defines a double border</li>
                <li><code className="w3-codespan">groove</code> - Defines a 3D grooved border. The effect depends on the <code>border-color</code>  value</li>
                <li><code className="w3-codespan">ridge</code> - Defines a 3D ridged border. The effect depends on the border-color value</li>
                <li><code className="w3-codespan">inset</code> - Defines a 3D inset border. The effect depends on the border-color value</li>
                <li><code className="w3-codespan">outset</code> - Defines a 3D outset border. The effect depends on the border-color value</li>
                <li><code className="w3-codespan">none</code> - Defines no border</li>
                <li><code className="w3-codespan">hidden</code> - Defines a hidden border</li>
                </ul>
        </section>

        <section id="Margins" className="main-section">
            <header>Margins</header>
            <p>The CSS margin properties are used to create space around elements, outside of any defined borders.</p>
            <br />
            <p>With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).</p>
        </section>

        <section id="Padding" className="main-section">
            <header>Padding</header>
            <p>The CSS padding properties are used to generate space around an element&apos;s content, inside of any defined borders.</p><br />
            <p>With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).</p>
        </section>

        <section id="Links" className="main-section">
            <header>Links</header>
            <p>When styling links, it&apos;s important to understand how to make use of pseudo-classes to style their states effectively. It&apos;s also important to know how to style links for use in common interface features whose content varies, such as navigation menus and tabs. We&apos;ll look at both these topics in this article.</p>
        </section>

        <section id="Lists" className="main-section">
            <header>Lists</header>
            <p>In HTML, there are two main types of lists:</p>
            <ul>
                <li>unordered lists <code>(&lt;ul&gt; ) </code> - the list items are marked with bullets
                </li>
                <li>ordered lists <code>(&lt;ol&gt;) </code> - the list items are marked with numbers or letters
                </li>
            </ul>
            <br />
            <p>The CSS list properties allow you to:</p>
            <ul>
                <li>Set different list item markers for ordered lists
                </li>
                <li>Set different list item markers for unordered lists
                </li>
                <li>Set an image as the list item marker
                </li>
                <li>Add background colors to lists and list items
                </li>
            </ul>
        </section>

        <section id="Math_Functions" className="main-section">
            <header>Math Functions</header>
            <p>The CSS math functions allow mathematical expressions to be used as property values. Here, we will explain the <code> calc(), max() and min() functions </code>.</p>
            <p>The calc() function performs a calculation to be used as the property value.</p>
            <p>The max() function uses the largest value, from a comma-separated list of values, as the property value.</p>
            <p>The min() function uses the smallest value, from a comma-separated list of values, as the property value.</p>
        </section>
        <section id="Reference" className="main-section">
            <header>Reference</header>
            <p>All the documentation in this page is taken from <a href="https://www.w3schools.com/">w3schools</a>.</p>
        </section>
    </main>
</main>
</>
    );
}
