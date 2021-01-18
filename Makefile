# Run `npm install -g vsce` in case you get "/bin/sh: vsce: command not found".
build:
	@npm run vscode:prepublish && vsce package
