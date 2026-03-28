import CommandManager from 'zsh.js/command-manager';

export default function (args, stdin, stdout, stderr, next) {
  CommandManager.exec('ls', '-al ' + args.raw, stdin, stdout, stderr, next);
}
