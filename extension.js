// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let cssPxToEm = vscode.commands.registerCommand('extension.px2em', function () {
		cssPxToEmFunc();
	});

	context.subscriptions.push(cssPxToEm);
}

function cssPxToEmFunc() {
	var editor = vscode.window.activeTextEditor;
	if (!editor) {
		return;
	}
	// configuration schema - setting
	const config = vscode.workspace.getConfiguration("px2em");
	const decimalPoint = config.get('decimalPoint');
	const unitCheck = config.get('unitCheck');

	var selection = editor.selection;
	var text = editor.document.getText(selection);

	var pattern = /^(\-?[0-9]+\.?[0-9]*)p?x?\/([0-9]+\.?[0-9]*)p?x?$/ig;
	if(!pattern.test(text)){
		return;
	}

	var _currentSize = Number(text.replace(pattern, '$1'));
	var _defaultSize = Number(text.replace(pattern, '$2'));

	var _calc = _currentSize / _defaultSize;
	var _result = parseFloat(_calc.toFixed(decimalPoint));
	unitCheck ? _result += 'em' : _result += '';

	editor.edit((editBuilder) => {
		editBuilder.replace(selection, _result);
	});
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
