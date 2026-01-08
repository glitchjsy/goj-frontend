import { PropsWithChildren, useEffect, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import atomOneLight from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light";
import styles from "./styles.module.css";

interface ExampleSchema {
    title: string;
    inverse?: boolean;
    html: string;
    react?: string;
}

interface Props {
    example: ExampleSchema;
}

type Tab = "html" | "react";

export default function Example({ example, children }: PropsWithChildren<Props>) {
    const { title, html, react, inverse } = example;

    const [expanded, setExpanded] = useState(false);
    const [activeTab, setActiveTab] = useState<Tab>("html");

    const iframeRef = useRef<any>(null);

    useEffect(() => {
        if (iframeRef.current && example) {
            const iframeDocument = iframeRef.current.contentDocument;

            iframeDocument.open();
            iframeDocument.write(`
                <html lang="en">
                    <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" />
                        <link rel="stylesheet" href="/GovJE.min.css">

                        <style>
                            * {
                                font-family: Ariel, sans-serif;
                            }
                        </style>
                    </head>
                    <body>
                        ${html.trim()}
                    </body>
                </html>
            `);
            iframeDocument.close();
        }
    }, [html]);

    const currentCode = activeTab === "react" && react ? react.trim() : html.trim();

    const copyCode = () => {
        navigator.clipboard.writeText(currentCode)
            .then(() => console.log("Copied!"))
            .catch(err => console.error("Failed to copy:", err));
    }

    const resizeIframe = (iframe: any) => {
        if (!iframe || !iframe.contentWindow || !iframe.contentWindow.document) return;

        const doc = iframe.contentWindow.document.documentElement;
        iframe.style.height = doc.scrollHeight + "px";
    }

    return (
        <div className={styles.example} >
            <div className={styles.content} data-inverse={inverse ? "true" : "false"}>
                <iframe
                    title="Rendered HTML"
                    className={styles.contentIframe}
                    onLoad={(e) => resizeIframe(e.target)}
                    ref={iframeRef}
                />
            </div>

            <div className={styles.tabs}>
                <button
                    className={styles.tab}
                    onClick={() => {
                        setActiveTab("html");
                        setExpanded(true);
                    }}
                >
                    HTML
                </button>

                {react && (
                    <button
                        className={styles.tab}
                        onClick={() => {
                            setActiveTab("react");
                            setExpanded(true);
                        }}
                    >
                        React
                    </button>
                )}
            </div>

            {expanded && (
                <div style={{ position: "relative" }}>
                    <button className={`${styles.copyCode} goj-button`} onClick={() => copyCode()}>
                        Copy
                    </button>

                    <SyntaxHighlighter
                        language="xml"
                        style={atomOneLight}
                        className={styles.code}
                    >
                        {currentCode.trim()}
                    </SyntaxHighlighter>
                </div>
            )}
        </div>
    );
}
