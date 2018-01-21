import socket

host = ' '
port = 63544
SOCKET_LIST - []

def chat_server():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	s.connect(host, port) 
    while 1:
	    SOCKET_LIST.append(s);
        SOCKET_LIST.append(sys.stdin);		
	