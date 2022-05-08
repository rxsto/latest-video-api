type YouTubeVideoCacheResult = YouTubeVideo | null

interface YouTubeSearchResult {
  items: Array<YouTubeVideo>
}

interface YouTubeVideo {
  id: YouTubeVideoID,
  snippet: YouTubeVideoSnippet,
  statistics: YouTubeVideoStatistics
}

interface YouTubeVideoID {
  videoId: string
}

interface YouTubeVideoSnippet {
  title: string,
  description: string,
  thumbnails: YouTubeVideoSnippetThumbnails
}

interface YouTubeVideoSnippetThumbnails {
  standard: YouTubeVideoSnippetThumbnail
}

interface YouTubeVideoSnippetThumbnail {
  url: string
}

interface YouTubeVideoStatistics {
  viewCount: number,
  likeCount: number
}
