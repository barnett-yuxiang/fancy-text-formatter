import { useState } from 'react';
import { convertToStyledText } from './utils/textConverter';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [convertedTexts, setConvertedTexts] = useState({ serif: '', sans: '' });

  const handleInputChange = (e) => {
    const text = e.target.value;
    if (text.length <= 2000) {
      setInputText(text);
    }
  };

  const handleGenerate = () => {
    if (!inputText.trim()) {
      alert('请输入文本');
      return;
    }
    
    setConvertedTexts({
      serif: convertToStyledText(inputText, 'serif'),
      sans: convertToStyledText(inputText, 'sans')
    });
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('已复制到剪贴板');
    } catch (err) {
      alert('复制失败');
    }
  };

  return (
    <div className="container">
      <h1>花式文本转换器</h1>
      
      <div className="input-section">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="请输入要转换的文本（最多2000字）"
          maxLength={2000}
        />
        <div className="char-count">
          {inputText.length}/2000
        </div>
        <button onClick={handleGenerate}>生成</button>
      </div>

      <div className="results-section">
        {(convertedTexts.serif || convertedTexts.sans) ? (
          <>
            <div className="result-item">
              <div className="result-item-header">
                <span>Serif 粗体</span>
              </div>
              <div className="result-text">
                {convertedTexts.serif}
                <button 
                  className="copy-button"
                  onClick={() => copyToClipboard(convertedTexts.serif)}
                >
                  复制
                </button>
              </div>
            </div>
            
            <div className="result-item">
              <div className="result-item-header">
                <span>Sans 粗体</span>
              </div>
              <div className="result-text">
                {convertedTexts.sans}
                <button 
                  className="copy-button"
                  onClick={() => copyToClipboard(convertedTexts.sans)}
                >
                  复制
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
