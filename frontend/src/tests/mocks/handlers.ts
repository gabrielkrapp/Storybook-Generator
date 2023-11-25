import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
 
export const server = setupServer(
  http.post('/create-story', () => {
    return HttpResponse.json({ story: 'Uma aventura incrível' })
  })
)