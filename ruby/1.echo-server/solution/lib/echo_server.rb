# frozen_string_literal: true

require 'console'

class EchoServer
  PROMPT = 'Type something ("exit" to quit)'
  EXIT_TEXT = 'exit'

  def initialize(console)
    @console = console
  end

  def run
    message = ''

    loop do
      console.writeln(PROMPT)
      message = console.read
      console.writeln(message)
      break if message == EXIT_TEXT
    end
  end

  private

  attr_reader :console
end
