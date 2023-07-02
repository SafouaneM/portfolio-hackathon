import React, { useState } from 'react';
import './App.css';
import Header from './partials/section/Header';
import Featured from './partials/section/Featured';

function App() {
    const [language, setLanguage] = useState<'en' | 'nl'>('en');

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'nl' : 'en');
    };

    return (
        <div>
            <Header language={language} toggleLanguage={toggleLanguage} />
            <Featured language={language} />
        </div>
    );
}

export default App;
