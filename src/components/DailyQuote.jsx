import { useState, useEffect } from 'react';
import '../styles/DailyQuote.css';

// Fallback quotes in case the API fails
const fallbackQuotes = [
  { text: "The unexamined life is not worth living.", author: "Socrates" },
  { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
  { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
];

function DailyQuote() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDailyQuote = async () => {
      // Check if we already fetched a quote today
      const today = new Date().toDateString();
      const storedQuote = localStorage.getItem('dailyQuote');
      const storedDate = localStorage.getItem('quoteDate');
      
      // Use stored quote if it's from today
      if (storedQuote && storedDate === today) {
        setQuote(JSON.parse(storedQuote));
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        
        const response = await fetch(
          'https://api.quotable.io/random?minLength=30&maxLength=160&tags=wisdom|inspirational|philosophy'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        
        const data = await response.json();
        const newQuote = {
          text: data.content,
          author: data.author
        };
        
        // Store with current date
        localStorage.setItem('dailyQuote', JSON.stringify(newQuote));
        localStorage.setItem('quoteDate', today);
        
        setQuote(newQuote);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching quote:', err);
        
        // Use a fallback quote based on day of month
        const fallbackIndex = new Date().getDate() % fallbackQuotes.length;
        const fallbackQuote = fallbackQuotes[fallbackIndex];
        
        setQuote(fallbackQuote);
        setLoading(false);
        
        localStorage.setItem('dailyQuote', JSON.stringify(fallbackQuote));
        localStorage.setItem('quoteDate', today);
      }
    };

    fetchDailyQuote();
  }, []);

  if (loading) {
    return (
      <div className="daily-quote loading">
        <p>Loading inspiration...</p>
      </div>
    );
  }

  return (
    <div className="daily-quote">
      <div className="quote-content">
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">— {quote.author}</p>
      </div>
    </div>
  );
}

export default DailyQuote; 