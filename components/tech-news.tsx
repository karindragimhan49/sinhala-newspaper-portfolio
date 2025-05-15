"use client"

import { useState, useEffect } from "react"
import { fetchTechNews } from "@/lib/news-api"
import type { NewsItem } from "@/lib/types"

export default function TechNews() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [category, setCategory] = useState("technology")

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true)
        setError(null) // Reset error state before fetching

        const newsData = await fetchTechNews(category)

        if (newsData && Array.isArray(newsData)) {
          setNews(newsData)
        } else {
          // Handle unexpected data format
          console.error("Received invalid news data format")
          setError("Received invalid data format. Using fallback news.")
          setNews([]) // Set empty array to trigger fallback UI
        }
      } catch (err) {
        console.error("Error in news component:", err)
        setError("Failed to fetch news. Using vintage headlines instead.")
        setNews([]) // Set empty array to trigger fallback UI
      } finally {
        setLoading(false)
      }
    }

    getNews()
  }, [category])

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory)
  }

  if (loading) {
    return (
      <div className="animate-pulse">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="mb-6">
            <div className="h-4 bg-[#d3c7b8] rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-[#d3c7b8] rounded w-full mb-1"></div>
            <div className="h-3 bg-[#d3c7b8] rounded w-5/6"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="vintage-news-container">
      <div className="flex gap-2 mb-4 text-xs">
        <button
          onClick={() => handleCategoryChange("technology")}
          className={`px-2 py-1 border vintage-button ${category === "technology" ? "bg-[#8B0000] text-white" : "border-[#2a2622]"}`}
        >
          Technology
        </button>
        <button
          onClick={() => handleCategoryChange("business")}
          className={`px-2 py-1 border vintage-button ${category === "business" ? "bg-[#8B0000] text-white" : "border-[#2a2622]"}`}
        >
          Business
        </button>
        <button
          onClick={() => handleCategoryChange("science")}
          className={`px-2 py-1 border vintage-button ${category === "science" ? "bg-[#8B0000] text-white" : "border-[#2a2622]"}`}
        >
          Science
        </button>
      </div>

      {error && <div className="text-[#8B0000] text-sm italic mb-4 vintage-error-message">{error}</div>}

      <div className="space-y-6">
        {news && news.length > 0 ? (
          news.map((item, index) => (
            <div key={index} className="pb-4 border-b border-[#2a2622] border-dashed last:border-0 vintage-news-item">
              <h3 className="text-lg font-bold mb-1 vintage-news-headline">{item.title}</h3>
              <p className="text-sm mb-2 vintage-news-text">{item.description}</p>
              <div className="flex justify-between items-center text-xs">
                <span className="italic">{item.source}</span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#8B0000] vintage-link"
                >
                  Continue Reading
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="vintage-fallback-news">
            <div className="pb-4 border-b border-[#2a2622] border-dashed vintage-news-item">
              <h3 className="text-lg font-bold mb-1 vintage-news-headline">TELEGRAPH LINES DISRUPTED BY STORM</h3>
              <p className="text-sm mb-2 vintage-news-text">
                Our regular news service is temporarily unavailable. Please check back later for updates.
              </p>
            </div>
            <div className="pb-4 border-b border-[#2a2622] border-dashed vintage-news-item">
              <h3 className="text-lg font-bold mb-1 vintage-news-headline">VINTAGE NEWS ARCHIVES AVAILABLE</h3>
              <p className="text-sm mb-2 vintage-news-text">
                While we restore our telegraph service, please enjoy our curated selection of vintage headlines.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
