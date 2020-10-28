import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const command = 'extension.formatJSON';

  const commandHandler = (name: string = 'world') => {
    const languageId = 'json';
    const activeEditor = vscode.window.activeTextEditor;

    if (!activeEditor) {
      return;
    }

    vscode.languages.setTextDocumentLanguage(activeEditor.document, languageId);
    vscode.commands.executeCommand('editor.action.formatDocument');
  };

  context.subscriptions.push(
    vscode.commands.registerCommand(command, commandHandler)
  );
}
