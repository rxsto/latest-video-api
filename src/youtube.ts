const CHANNEL_ID = 'UCVUtBvdE_A-e1-CXuk-VbJg'

export async function fetchLatestVideo(): Promise<YouTubeVideo> {
  const latestVideo: YouTubeVideoCacheResult = await VIDEO_CACHE.get('latestVideo', { type: 'json' })

  if (latestVideo !== null) {
    return latestVideo
  }
  
  const latestVideoResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=date&type=video&channelId=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`)
  const latestVideoResult: YouTubeSearchResult = await latestVideoResponse.json()
  
  const id = latestVideoResult.items[0].id.videoId
  
  const fullVideoResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&maxResults=1&id=${id}&key=${YOUTUBE_API_KEY}`)
  const fullVideoResult: YouTubeSearchResult = await fullVideoResponse.json()

  const video = fullVideoResult.items[0]

  VIDEO_CACHE.put('latestVideo', JSON.stringify(video, null, 2), { expirationTtl: (60 * 30) })

  return new Promise((resolve) => resolve(video))
}
