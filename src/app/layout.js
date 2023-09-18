import "./globals.css";
import {poppins, inter} from "./fonts"
export const metadata = {
    title: "EdmondsCS",
    description: "Edmonds College Computer Science Club",
};


export default function RootLayout({ children }) {
    return (
        <html className={`${inter.variable} ${poppins.variable}`} lang="en">
            <body>{children}</body>
        </html>
    );
}
