# TechStream - AI & Tech News Aggregator with TTS

A sleek, single-file news aggregator for AI, engineering, and technology stories with built-in text-to-speech functionality.

## Features

- **News Aggregation**: Combines feeds from Google News, TechCrunch, The Verge, Ars Technica, and Hacker News
- **Smart Filtering**: Topic-based filtering (AI, Engineering, Security, Gadgets) and search functionality
- **Text-to-Speech**: Built-in TTS that reads news headlines aloud
- **Responsive Design**: Modern, dark/light theme with beautiful gradients
- **PWA Ready**: Includes manifest.json and service worker

## TTS Functionality

### Current Implementation
- Uses Web Speech API for text-to-speech
- Floating TTS button (bottom-right corner)
- Customizable voice, speed, pitch, and volume
- Reads filtered news items sequentially
- Keyboard shortcut: Press 'T' to start/stop TTS

### Future Enhancement: Kokoro TTS
The application is designed to easily integrate with Transformer.js Kokoro TTS for improved voice quality, especially for Japanese content.

#### Planned Kokoro TTS Integration:
1. **Model Loading**: Load Kokoro TTS model via Transformer.js
2. **Voice Quality**: Higher quality Japanese and English speech synthesis
3. **Offline Support**: Local TTS processing without internet dependency
4. **Custom Voices**: Multiple voice options and styles

## Usage

### Basic Navigation
- **Refresh**: Click refresh button or press 'R'
- **Search**: Click search box or press '/'
- **Theme**: Click theme button to toggle dark/light mode
- **Topics**: Click topic chips to filter news

### TTS Controls
- **Start/Stop**: Click the floating TTS button or press 'T'
- **Settings**: Double-click the TTS button to open controls
- **Voice Selection**: Choose from available system voices
- **Speed Control**: Adjust reading speed (0.5x to 2.0x)
- **Pitch & Volume**: Fine-tune speech characteristics

## Technical Details

### Architecture
- Single HTML file with embedded CSS and JavaScript
- No external dependencies (pure vanilla JS)
- Responsive grid layout with CSS Grid
- Progressive Web App features

### Data Sources
- Google News RSS feeds
- TechCrunch RSS
- The Verge RSS
- Ars Technica RSS
- Hacker News API

### Browser Compatibility
- Modern browsers with Web Speech API support
- Chrome, Firefox, Safari, Edge
- Mobile responsive design

## Development

### Adding Kokoro TTS
To integrate Kokoro TTS:

1. Install Transformer.js: `npm install @xenova/transformers`
2. Load Kokoro TTS model
3. Replace `speakText()` function with Kokoro TTS calls
4. Add model caching and offline support

### Customization
- Modify `CONFIG` object to change news sources
- Adjust TTS settings in CSS variables
- Customize voice parameters and reading behavior

## License
Built as a single-file demo. Feel free to modify and extend.

## Contributing
Contributions welcome! Especially for:
- Kokoro TTS integration
- Additional news sources
- Voice customization options
- Performance optimizations 