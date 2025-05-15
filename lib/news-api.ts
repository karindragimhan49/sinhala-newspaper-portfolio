import type { NewsItem } from "./types"

// This function fetches news from a public API
export async function fetchTechNews(category = "technology"): Promise<NewsItem[]> {
  // If no API key is available, immediately return mock data without attempting to fetch
  if (!process.env.NEXT_PUBLIC_NEWS_API_KEY || process.env.NEXT_PUBLIC_NEWS_API_KEY === "demo-key") {
    console.log("No API key available, using mock data")
    return getMockNews(category)
  }

  try {
    // Using the free NewsAPI endpoint
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
        // Add proper headers
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "newspaper-portfolio/1.0",
        },
      },
    )

    if (!response.ok) {
      console.error(`API responded with status: ${response.status}`)
      throw new Error(`Failed to fetch news: ${response.status}`)
    }

    const data = await response.json()

    // Check if we have valid articles
    if (!data.articles || !Array.isArray(data.articles) || data.articles.length === 0) {
      console.warn("API returned no articles or invalid data format")
      return getMockNews(category)
    }

    // Map the API response to our NewsItem type
    return data.articles.slice(0, 5).map((article: any) => ({
      title: article.title || "No title available",
      description: article.description || "No description available",
      url: article.url || "#",
      source: article.source?.name || "Unknown Source",
      publishedAt: article.publishedAt || new Date().toISOString(),
    }))
  } catch (error) {
    console.error("Error fetching news:", error)
    // Return mock data if there's an error
    return getMockNews(category)
  }
}

// Mock data for when the API is unavailable or we're using the demo key
function getMockNews(category: string): NewsItem[] {
  // Convert modern news to 1935 style news
  const mockData: Record<string, NewsItem[]> = {
    technology: [
      {
        title: "REVOLUTIONARY COMPUTING MACHINES TRANSFORM INDUSTRY",
        description:
          "New mechanical calculating devices promise to increase efficiency in factories and offices across the nation.",
        url: "#",
        source: "The Scientific American",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "TELEGRAPH NETWORK EXPANSION REACHES UNPRECEDENTED SCALE",
        description:
          "The nationwide telegraph system continues its remarkable growth, connecting cities at unprecedented speeds.",
        url: "#",
        source: "The Communications Gazette",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "RADIO BROADCASTING INNOVATIONS CAPTIVATE THE PUBLIC",
        description: "New radio technologies bring entertainment and news directly into homes across the country.",
        url: "#",
        source: "The Wireless Review",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "TYPEWRITER ADVANCEMENTS REVOLUTIONIZE OFFICE WORK",
        description:
          "Modern typewriters with improved mechanisms increase typing speed and accuracy for secretarial staff.",
        url: "#",
        source: "Business Machinery Journal",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "TELEPHONE EXCHANGE AUTOMATION REDUCES OPERATOR NEEDS",
        description:
          "New switching technologies promise to make telephone connections faster and more reliable than ever before.",
        url: "#",
        source: "The Bell Telephone News",
        publishedAt: new Date().toISOString(),
      },
    ],
    business: [
      {
        title: "INDUSTRIAL FIRMS INVEST HEAVILY IN MODERN MACHINERY",
        description:
          "Major manufacturing companies expand facilities with state-of-the-art equipment to meet growing demand.",
        url: "#",
        source: "The Wall Street Journal",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "ENGINEERING POSITIONS COMMAND PREMIUM SALARIES",
        description:
          "Technical expertise in mechanical and electrical engineering fields leads to lucrative career opportunities.",
        url: "#",
        source: "The Employment Gazette",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "STARTUPS EMBRACE MODERN MANUFACTURING TECHNIQUES",
        description: "New companies utilize assembly line innovations to compete with established industrial giants.",
        url: "#",
        source: "The Business Chronicle",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "INFRASTRUCTURE INVESTMENTS REACH RECORD LEVELS",
        description:
          "Government and private sector collaborate on unprecedented expansion of roads, bridges and electrical networks.",
        url: "#",
        source: "The Economic Times",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "TECHNICAL EDUCATION EXPANDS AS INDUSTRY DEMANDS SKILLED WORKERS",
        description:
          "Universities and technical schools report record enrollment in engineering and scientific disciplines.",
        url: "#",
        source: "The Education Herald",
        publishedAt: new Date().toISOString(),
      },
    ],
    science: [
      {
        title: "SCIENTISTS DEVELOP REVOLUTIONARY CALCULATING MACHINE",
        description: "New mechanical computing device promises to solve complex mathematical problems in record time.",
        url: "#",
        source: "The Scientific American",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "QUANTUM THEORY CHALLENGES TRADITIONAL PHYSICS",
        description:
          "Emerging scientific theories propose radical new understanding of atomic and subatomic phenomena.",
        url: "#",
        source: "The Physics Review",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "ENGINEERING STUDY REVEALS IMPACT OF STANDARDIZATION",
        description:
          "Comprehensive analysis shows significant improvements in manufacturing quality through standardized processes.",
        url: "#",
        source: "Engineering Quarterly",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "NEW FRAMEWORK IMPROVES ELECTRICAL DISTRIBUTION RELIABILITY",
        description: "Engineers develop methodology for building more resilient power distribution networks.",
        url: "#",
        source: "The Electrical Engineer",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "MECHANICAL PREDICTION MODELS SHOW PROMISE FOR INDUSTRY",
        description:
          "Statistical methods help predict mechanical failures before they occur, preventing costly breakdowns.",
        url: "#",
        source: "The Mechanical Journal",
        publishedAt: new Date().toISOString(),
      },
    ],
  }

  return mockData[category] || mockData.technology
}
