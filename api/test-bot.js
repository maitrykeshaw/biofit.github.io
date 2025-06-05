export default function handler(req, res) {
    try {
      const userAgent = req.headers['user-agent'] || 'Unknown';
      console.log(`Request from User-Agent: ${userAgent}`);
  
      if (/ChatGPTBot|bot|crawl|spider/i.test(userAgent)) {
        return res.status(200).json({ message: "Hello bot! Request received successfully." });
      }
  
      res.status(200).json({ message: "Hello user! Request received successfully." });
    } catch (error) {
      console.error("Error in /api/test-bot:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  }