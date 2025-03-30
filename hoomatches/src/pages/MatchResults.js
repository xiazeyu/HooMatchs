export default function MatchResults() {
    // Temporary mock data
    const matchStatus = Math.random() > 0.5;
    const compatibilityScore = Math.floor(Math.random() * 41) + 60;
  
    return (
      <div className="results-container">
        {matchStatus ? (
          <>
            <h1 className="success">🎉 Match Found!</h1>
            <p>Compatibility Score: {compatibilityScore}%</p>
            <button>View Profile</button>
          </>
        ) : (
          <>
            <h1 className="notice">🔍 Keep Searching</h1>
            <p>Highest Potential Match: {compatibilityScore}%</p>
            <button>Adjust Preferences</button>
          </>
        )}
      </div>
    );
  }