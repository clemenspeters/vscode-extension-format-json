import { commands, ExtensionContext, languages, window } from 'vscode';

export function activate(context: ExtensionContext) {
  const command = 'extension.formatJSON';

  const commandHandler = () => {
    const languageId = 'json';
    const activeEditor = window.activeTextEditor;

    if (!activeEditor) {
      return;
    }

    languages.setTextDocumentLanguage(activeEditor.document, languageId);
    commands.executeCommand('editor.action.formatDocument');
  };

  context.subscriptions.push(commands.registerCommand(command, commandHandler));
}
