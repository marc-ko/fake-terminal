import CommandManager from 'zsh.js/command-manager';

export default function (args, stdin, stdout, stderr, next) {
  CommandManager.exec('ls', '-l ' + args.raw, stdin, stdout, stderr, next);
}
