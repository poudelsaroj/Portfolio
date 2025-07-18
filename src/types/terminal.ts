export interface TerminalCommand {
  command: string
  description: string
  execute: (args: string[]) => string
}

export interface TerminalHistory {
  command: string
  output: string
  timestamp: Date
}
