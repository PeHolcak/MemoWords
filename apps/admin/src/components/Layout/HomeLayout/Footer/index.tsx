import React from 'react';
import { Layout } from 'antd';
const { Footer: AntdFooter } = Layout;

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <AntdFooter className="bg-white text-gray-800 text-center p-4">
            <div className="flex justify-center space-x-4">
                <a href="/about" className="hover:underline">O nás</a>
                <a href="/contact" className="hover:underline">Kontakt</a>
                <a href="/terms" className="hover:underline">Podmínky používání</a>
            </div>
            <div className="mt-4">
                © {year} <b>CraftMate</b>. Všechna práva vyhrazena.
            </div>
        </AntdFooter>
    );
};

export default Footer;