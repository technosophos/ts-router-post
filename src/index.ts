import { HandleRequest, HttpRequest, HttpResponse, Router } from "@fermyon/spin-sdk"

let decoder = new TextDecoder()

export const handleRequest: HandleRequest = async function (request: HttpRequest): Promise<HttpResponse> {
  let router = Router()

  // This gets the base path from the request, which is considered better
  // than hardcoding it. Now, when the `route` is changed in spin.toml,
  // our code does not need to change. basePath will be `/example`
  let basePath = request.headers["spin-component-route"]

  // Note that we pass `request.body` as the second param.
  // That contains an ArrayBuffer with the encoded body.
  router.post(basePath, (req, body) => {

    // Decode the ArrayBuffer into a string
    let decodedBody = decoder.decode(body)
    return {
      status: 200,
      headers: { "content-type": "text/plain" },
      body: decodedBody
    }
  })
  // IMPORTANT: We pass the request body as the second param.
  return await router.handleRequest(request, request.body)
}
