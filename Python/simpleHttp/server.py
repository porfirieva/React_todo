from http.server import HTTPServer, BaseHTTPRequestHandler

PORT = 8080

class simpleHandler(BaseHTTPRequestHandler):
  def do_GET(self):
    self.send_response(200)
    self.send_header("Content-type", "text/html")
    self.end_headers()
    self.wfile.write('<html><head><meta charset="utf-8">'.encode())
    self.wfile.write('<title>Простой HTTP-сервер.</title></head>'.encode())
    self.wfile.write('<body>Привет Ксюша, я твой компьютер.</body></html>'.encode())

  def do_POST(self):
    content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
    post_data = self.rfile.read(content_length) # <--- Gets the data itself
    print("POST request,\nPath: %s\nHeaders:\n%s\n\nBody:\n%s\n",
    str(self.path), str(self.headers), post_data.decode('utf-8'))


def run(server_class, handler_class):
  my_computer_address = ('localhost', 8080)
  simple_server = server_class(my_computer_address, handler_class)
  print('start')
  try:
    simple_server.serve_forever()
  except KeyboardInterrupt:
    simple_server.server_close()


run(HTTPServer, simpleHandler)