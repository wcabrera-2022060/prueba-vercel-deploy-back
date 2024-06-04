export const home = (req, res) => {
  res.send('Hello from API')
}

export const getApi = (req, res) => {
  const htmlResponse = `
<html>
<head>
<title>NodeJs y Express en Vercel</title>
</head>
<body>
<h1>Soy un proyecto back end
en vercel</h1>
</body>
</html>`
  res.send(htmlResponse)
}