import { fetchLatestVideo } from './youtube'

export async function handleRequest(request: Request): Promise<Response> {
  const latestVideo = await fetchLatestVideo()
  return new Response(JSON.stringify(latestVideo, null, 2), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      'access-control-allow-origin': ORIGIN_URL
    }
  })
}
